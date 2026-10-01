import { BadRequestException, ForbiddenException } from 'domain_unified/nest-for-hono';
import { type DomainUnifiedRequest, ensurePassportUser } from 'domain_unified';
import { ApiCrmPrismaService } from 'prisma_crm';
import { type AnyApiPrismaService } from 'types_consts_utils';

type MembershipRole = 'owner' | 'manager' | 'staff';

async function tenantIdsForUser(
  prisma: ApiCrmPrismaService,
  userId: bigint,
  roles?: MembershipRole[],
) {
  const rows = await prisma.crmTenantMember.findMany({
    where: { userId, ...(roles ? { role: { in: roles } } : {}) },
    select: { tenantId: true },
  });
  return rows.map((r) => r.tenantId);
}

function requirePrisma(prisma?: AnyApiPrismaService): ApiCrmPrismaService {
  if (!prisma) throw new BadRequestException('Prisma client required');
  return prisma as unknown as ApiCrmPrismaService;
}

async function resolveChildScopeForRoles(
  req: DomainUnifiedRequest,
  prisma: AnyApiPrismaService | undefined,
  roles?: MembershipRole[],
) {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  const client = requirePrisma(prisma);
  const tenantIds = await tenantIdsForUser(client, user.data.id, roles);
  return { tenantId: { in: tenantIds } };
}

export const resolveCrmTenantScope = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  const client = requirePrisma(prisma);
  const tenantIds = await tenantIdsForUser(client, user.data.id);
  return { id: { in: tenantIds } };
};

export const resolveCrmTenantWriteScope = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  const client = requirePrisma(prisma);
  const tenantIds = await tenantIdsForUser(client, user.data.id, ['owner', 'manager']);
  return { id: { in: tenantIds } };
};

export const resolveCrmTenantChildScope = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => resolveChildScopeForRoles(req, prisma);

export const ensureCrmTenantChildCreate = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => {
  return ensureCreateTenantsInMembership(req, prisma, ['owner', 'manager']);
};

export const resolveCrmTenantChildWriteScope = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => resolveChildScopeForRoles(req, prisma, ['owner', 'manager']);

export const resolveCrmTenantOwnerScope = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => resolveChildScopeForRoles(req, prisma, ['owner']);

export const resolveCrmAppointmentWriteScope = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => resolveChildScopeForRoles(req, prisma, ['owner', 'manager', 'staff']);

export const ensureCrmTenantOwnerCreate = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => ensureCreateTenantsInMembership(req, prisma, ['owner']);

export const ensureCrmAppointmentCreate = async (
  req: DomainUnifiedRequest,
  prisma?: AnyApiPrismaService,
) => {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  const client = requirePrisma(prisma);
  const data = createData(req);
  const tenantIds = data.map((item) => parseTenantId(item.tenantId));
  await assertMemberships(
    client,
    user.data.id,
    tenantIds,
    ['owner', 'manager', 'staff'],
  );

  for (const item of data) {
    const tenantId = parseTenantId(item.tenantId);
    const contactId = parseRelationId(item.contactId, 'contactId');
    const serviceId = parseRelationId(item.serviceId, 'serviceId');
    const [contact, service] = await Promise.all([
      client.crmContact.findFirst({ where: { id: contactId, tenantId }, select: { id: true } }),
      client.crmService.findFirst({ where: { id: serviceId, tenantId }, select: { id: true } }),
    ]);
    if (!contact || !service) {
      throw new BadRequestException(
        'contactId and serviceId must belong to the submitted tenantId',
      );
    }
  }
  return {};
};

export const ensureCrmAdminCreate = async (req: DomainUnifiedRequest) => {
  const user = ensurePassportUser(req);
  if (user.data.role !== 'admin') throw new ForbiddenException();
  return {};
};

async function ensureCreateTenantsInMembership(
  req: DomainUnifiedRequest,
  prisma: AnyApiPrismaService | undefined,
  roles: MembershipRole[],
) {
  const user = ensurePassportUser(req);
  if (user.data.role === 'admin') return {};
  const client = requirePrisma(prisma);
  const tenantIds = createData(req).map((item) => parseTenantId(item.tenantId));
  await assertMemberships(client, user.data.id, tenantIds, roles);
  return {};
}

async function assertMemberships(
  prisma: ApiCrmPrismaService,
  userId: bigint,
  tenantIds: bigint[],
  roles: MembershipRole[],
) {
  const uniqueTenantIds = [...new Set(tenantIds.map(String))].map(BigInt);
  const count = await prisma.crmTenantMember.count({
    where: {
      userId,
      tenantId: { in: uniqueTenantIds },
      role: { in: roles },
    },
  });
  if (count !== uniqueTenantIds.length) {
    throw new ForbiddenException('Tenant write membership required');
  }
}

function createData(req: DomainUnifiedRequest): Array<Record<string, unknown>> {
  const data = (
    req.body as {
      prismaCreateManyParams?: { data?: Array<Record<string, unknown>> };
    }
  )?.prismaCreateManyParams?.data;
  if (!Array.isArray(data) || data.length === 0) {
    throw new BadRequestException('Create data is required');
  }
  return data;
}

function parseTenantId(value: unknown): bigint {
  return parseRelationId(value, 'tenantId');
}

function parseRelationId(value: unknown, field: string): bigint {
  if (
    (typeof value === 'string' && /^[1-9]\d*$/.test(value)) ||
    (typeof value === 'number' && Number.isSafeInteger(value) && value > 0) ||
    (typeof value === 'bigint' && value > 0n)
  ) {
    return BigInt(value);
  }
  throw new BadRequestException(`${field} must be a positive database id`);
}
