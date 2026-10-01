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
import { CrmContactDto } from 'validation';
import {
  ensureCrmTenantChildCreate,
  resolveCrmTenantChildScope,
  resolveCrmTenantChildWriteScope,
} from './crm-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CrmContactDomainController = buildDomainController<
  IDomainController,
  typeof apiCrmModels.crmContact,
  ApiCrmPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCrm,
  prismaModel: apiCrmModels.crmContact,
  dtoClass: CrmContactDto,
  includePermissions: {
    admin: true,
    customer: { Tenant: true },
  } satisfies IncludePermissionsByRole<
    NonNullable<ApiCrmPrisma.CrmContactFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  comfortSearchSync: true,
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

@Controller(`public/domain/${apiCrmModels.crmContact}`)
export class CrmContactController extends CrmContactDomainController {
  constructor(prismaClient: ApiCrmPrismaService) {
    super(prismaClient);
  }
}
