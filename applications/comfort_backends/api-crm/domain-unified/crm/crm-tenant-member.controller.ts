import { Controller, UseGuards } from 'domain_unified/nest-for-hono';
import {
  buildDomainController,
  type IDomainController,
} from 'domain_unified';
import {
  apiCrmModels,
  apiMicroservices,
  type IncludePermissionsByRole,
} from 'types_consts_utils';
import { ApiCrmPrismaService, type ApiCrmPrisma } from 'prisma_crm';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CrmTenantMemberDto } from 'validation';
import {
  ensureCrmTenantOwnerCreate,
  resolveCrmTenantChildScope,
  resolveCrmTenantOwnerScope,
} from './crm-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CrmTenantMemberDomainController = buildDomainController<
  IDomainController,
  typeof apiCrmModels.crmTenantMember,
  ApiCrmPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCrm,
  prismaModel: apiCrmModels.crmTenantMember,
  dtoClass: CrmTenantMemberDto,
  includePermissions: {
    admin: true,
    customer: { Tenant: true },
  } satisfies IncludePermissionsByRole<
    NonNullable<ApiCrmPrisma.CrmTenantMemberFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveCrmTenantChildScope,
    methodDecorators: authDecorators,
  },
  prismaCreateMany: {
    checkPermissions: ensureCrmTenantOwnerCreate,
    methodDecorators: authDecorators,
  },
  prismaUpdateMany: {
    checkPermAndGetScope: resolveCrmTenantOwnerScope,
    methodDecorators: authDecorators,
    immutableFields: ['tenantId', 'userId'] as never,
  },
  prismaDeleteMany: {
    checkPermAndGetScope: resolveCrmTenantOwnerScope,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCrmModels.crmTenantMember}`)
export class CrmTenantMemberController extends CrmTenantMemberDomainController {
  constructor(prismaClient: ApiCrmPrismaService) {
    super(prismaClient);
  }
}
