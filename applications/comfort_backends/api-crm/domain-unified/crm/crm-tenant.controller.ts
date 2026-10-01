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
import { CrmTenantDto } from 'validation';
import {
  ensureCrmAdminCreate,
  resolveCrmTenantScope,
  resolveCrmTenantWriteScope,
} from './crm-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CrmTenantDomainController = buildDomainController<
  IDomainController,
  typeof apiCrmModels.crmTenant,
  ApiCrmPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCrm,
  prismaModel: apiCrmModels.crmTenant,
  dtoClass: CrmTenantDto,
  includePermissions: {
    admin: true,
    customer: {},
  } satisfies IncludePermissionsByRole<
    NonNullable<ApiCrmPrisma.CrmTenantFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveCrmTenantScope,
    methodDecorators: authDecorators,
  },
  prismaCreateMany: {
    checkPermissions: ensureCrmAdminCreate,
    methodDecorators: authDecorators,
  },
  prismaUpdateMany: {
    checkPermAndGetScope: resolveCrmTenantWriteScope,
    methodDecorators: authDecorators,
  },
  prismaDeleteMany: {
    checkPermAndGetScope: resolveCrmTenantWriteScope,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCrmModels.crmTenant}`)
export class CrmTenantController extends CrmTenantDomainController {
  constructor(prismaClient: ApiCrmPrismaService) {
    super(prismaClient);
  }
}
