import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Req,
  UseGuards,
} from 'domain_unified/nest-for-hono';
import { ApiCrmPrismaService } from 'prisma_crm';
import type { IApiRequest } from 'types_consts_utils';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

type PrivacyInput = { userId?: string; email?: string };

function jsonSafe<T>(value: T): T {
  return JSON.parse(
    JSON.stringify(value, (_key, item) =>
      typeof item === 'bigint' ? item.toString() : item,
    ),
  ) as T;
}

function subject(req: IApiRequest, input: PrivacyInput) {
  const actor = req.user?.data;
  if (!actor) throw new ForbiddenException();
  const userId = input.userId ? BigInt(input.userId) : actor.id;
  if (actor.role !== 'admin' && userId !== actor.id) throw new ForbiddenException();
  const email = actor.role === 'admin' ? input.email : actor.email;
  if (!email) throw new ForbiddenException('Target email is required');
  return { actor, userId, email: email.toLowerCase() };
}

@Controller('internal/privacy')
@UseGuards(JwtAuthGuard)
export class PrivacyController {
  constructor(private readonly prisma: ApiCrmPrismaService) {}

  @Post('export')
  async exportData(@Req() req: IApiRequest, @Body() input: PrivacyInput) {
    const { userId, email } = subject(req, input);
    const memberships = await this.prisma.crmTenantMember.findMany({
      where: { userId },
      select: {
        id: true,
        userId: true,
        role: true,
        createdAt: true,
        Tenant: { select: { id: true, slug: true, displayName: true } },
      },
    });
    const tenantIds = memberships.map((membership) => membership.Tenant.id);
    const contacts = await this.prisma.crmContact.findMany({
      where: { tenantId: { in: tenantIds }, email: { equals: email, mode: 'insensitive' } },
      select: {
        id: true,
        tenantId: true,
        fullName: true,
        phone: true,
        email: true,
        notes: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return jsonSafe({ memberships, contacts });
  }

  @Post('delete')
  async deleteData(@Req() req: IApiRequest, @Body() input: PrivacyInput) {
    const { userId, email } = subject(req, input);
    const result = await this.prisma.$transaction(async (tx) => {
      const memberships = await tx.crmTenantMember.findMany({
        where: { userId },
        select: { tenantId: true },
      });
      const tenantIds = memberships.map((membership) => membership.tenantId);
      const contacts = await tx.crmContact.updateMany({
        where: { tenantId: { in: tenantIds }, email: { equals: email, mode: 'insensitive' } },
        data: {
          fullName: 'Deleted user',
          email: null,
          phone: null,
          notes: '',
        },
      });
      const deletedMemberships = await tx.crmTenantMember.deleteMany({ where: { userId } });
      return {
        anonymizedContacts: contacts.count,
        deletedMemberships: deletedMemberships.count,
      };
    });
    return jsonSafe({ ...result, transactionScope: 'api-crm database only' });
  }
}
