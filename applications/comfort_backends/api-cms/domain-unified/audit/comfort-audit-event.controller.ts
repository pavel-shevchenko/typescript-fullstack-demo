import { Controller, UseGuards } from 'domain_unified/nest-for-hono';
import {
  buildDomainController,
  type IDomainController,
} from 'domain_unified';
import {
  apiCmsModels,
  apiMicroservices,
  type IncludePermissionsByRole,
} from 'types_consts_utils';
import { ApiCmsPrismaService, type ApiCmsPrisma } from 'prisma_cms';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ComfortAuditEventDto } from 'validation';
import {
  ensureCmsAdminCreate,
  resolveCmsAdminOnlyScope,
} from '../cms/cms-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const ComfortAuditEventDomainController = buildDomainController<
  IDomainController,
  typeof apiCmsModels.comfortAuditEvent,
  ApiCmsPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCms,
  prismaModel: apiCmsModels.comfortAuditEvent,
  dtoClass: ComfortAuditEventDto,
  includePermissions: {
    admin: true as const,
    customer: {},
  },
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveCmsAdminOnlyScope,
    methodDecorators: authDecorators,
  },
  prismaCreateMany: {
    checkPermissions: ensureCmsAdminCreate,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCmsModels.comfortAuditEvent}`)
export class ComfortAuditEventController extends ComfortAuditEventDomainController {
  constructor(prismaClient: ApiCmsPrismaService) {
    super(prismaClient);
  }
}
