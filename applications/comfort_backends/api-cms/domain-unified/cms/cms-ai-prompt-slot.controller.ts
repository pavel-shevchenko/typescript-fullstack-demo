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
import { CmsAiPromptSlotDto } from 'validation';
import {
  ensureCmsAdminCreate,
  resolveCmsAdminOnlyScope,
} from './cms-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CmsAiPromptSlotDomainController = buildDomainController<
  IDomainController,
  typeof apiCmsModels.cmsAiPromptSlot,
  ApiCmsPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCms,
  prismaModel: apiCmsModels.cmsAiPromptSlot,
  dtoClass: CmsAiPromptSlotDto,
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
  prismaUpdateMany: {
    checkPermAndGetScope: resolveCmsAdminOnlyScope,
    methodDecorators: authDecorators,
  },
  prismaDeleteMany: {
    checkPermAndGetScope: resolveCmsAdminOnlyScope,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCmsModels.cmsAiPromptSlot}`)
export class CmsAiPromptSlotController extends CmsAiPromptSlotDomainController {
  constructor(prismaClient: ApiCmsPrismaService) {
    super(prismaClient);
  }
}
