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
import { CrmServiceDto } from 'validation';
import {
  ensureCrmTenantChildCreate,
  resolveCrmTenantChildScope,
  resolveCrmTenantChildWriteScope,
} from './crm-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CrmServiceDomainController = buildDomainController<
  IDomainController,
  typeof apiCrmModels.crmService,
  ApiCrmPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCrm,
  prismaModel: apiCrmModels.crmService,
  dtoClass: CrmServiceDto,
  includePermissions: {
    admin: true,
    customer: { Tenant: true },
  } satisfies IncludePermissionsByRole<
    NonNullable<ApiCrmPrisma.CrmServiceFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveCrmTenantChildScope,
    methodDecorators: authDecorators,
  },
  prismaCreateMany: {
    checkPermissions: ensureCrmTenantChildCreate,
    methodDecorators: authDecorators,
  },
  prismaUpdateMany: {
    checkPermAndGetScope: resolveCrmTenantChildWriteScope,
    methodDecorators: authDecorators,
    immutableFields: ['tenantId'] as never,
  },
  prismaDeleteMany: {
    checkPermAndGetScope: resolveCrmTenantChildWriteScope,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCrmModels.crmService}`)
export class CrmServiceController extends CrmServiceDomainController {
  constructor(prismaClient: ApiCrmPrismaService) {
    super(prismaClient);
  }
}
