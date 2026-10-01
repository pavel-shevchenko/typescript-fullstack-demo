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
import { CmsPromoBlockDto } from 'validation';
import {
  ensureCmsAdminCreate,
  resolveCmsAdminOnlyScope,
  resolveCmsPromoActiveScope,
} from './cms-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CmsPromoBlockDomainController = buildDomainController<
  IDomainController,
  typeof apiCmsModels.cmsPromoBlock,
  ApiCmsPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCms,
  prismaModel: apiCmsModels.cmsPromoBlock,
  dtoClass: CmsPromoBlockDto,
  includePermissions: {
    admin: true as const,
    customer: {},
  },
  prismaAutoCacheInvalidation: { enabled: true },
  comfortSearchSync: true,
  prismaGetMany: {
    checkPermAndGetScope: resolveCmsPromoActiveScope,
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

@Controller(`public/domain/${apiCmsModels.cmsPromoBlock}`)
export class CmsPromoBlockController extends CmsPromoBlockDomainController {
  constructor(prismaClient: ApiCmsPrismaService) {
    super(prismaClient);
  }
}
