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
import { CrmAppointmentDto } from 'validation';
import {
  ensureCrmAppointmentCreate,
  resolveCrmAppointmentWriteScope,
  resolveCrmTenantChildScope,
  resolveCrmTenantChildWriteScope,
} from './crm-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CrmAppointmentDomainController = buildDomainController<
  IDomainController,
  typeof apiCrmModels.crmAppointment,
  ApiCrmPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCrm,
  prismaModel: apiCrmModels.crmAppointment,
  dtoClass: CrmAppointmentDto,
  includePermissions: {
    admin: true,
    customer: { Tenant: true, Contact: true, Service: true },
  } satisfies IncludePermissionsByRole<
    NonNullable<ApiCrmPrisma.CrmAppointmentFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveCrmTenantChildScope,
    methodDecorators: authDecorators,
  },
  prismaCreateMany: {
    checkPermissions: ensureCrmAppointmentCreate,
    methodDecorators: authDecorators,
    validateRelations: [
      {
        relationModel: apiCrmModels.crmContact,
        relationIdField: 'contactId',
        resolveScope: resolveCrmTenantChildScope,
      },
      {
        relationModel: apiCrmModels.crmService,
        relationIdField: 'serviceId',
        resolveScope: resolveCrmTenantChildScope,
      },
    ],
  },
  prismaUpdateMany: {
    checkPermAndGetScope: resolveCrmAppointmentWriteScope,
    methodDecorators: authDecorators,
    validateRelations: [
      {
        relationModel: apiCrmModels.crmContact,
        relationIdField: 'contactId',
        resolveScope: resolveCrmTenantChildScope,
      },
      {
        relationModel: apiCrmModels.crmService,
        relationIdField: 'serviceId',
        resolveScope: resolveCrmTenantChildScope,
      },
    ],
    immutableFields: ['tenantId', 'contactId', 'serviceId'] as never,
  },
  prismaDeleteMany: {
    checkPermAndGetScope: resolveCrmTenantChildWriteScope,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCrmModels.crmAppointment}`)
export class CrmAppointmentController extends CrmAppointmentDomainController {
  constructor(prismaClient: ApiCrmPrismaService) {
    super(prismaClient);
  }
}
