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
import { CmsPageDto } from 'validation';
import {
  ensureCmsAdminCreate,
  resolveCmsAdminOnlyScope,
  resolveCmsAdminOrPublishedScope,
} from './cms-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CmsPageDomainController = buildDomainController<
  IDomainController,
  typeof apiCmsModels.cmsPage,
  ApiCmsPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCms,
  prismaModel: apiCmsModels.cmsPage,
  dtoClass: CmsPageDto,
  includePermissions: {
    admin: true as const,
    customer: {},
  },
  prismaAutoCacheInvalidation: { enabled: true },
  comfortSearchSync: true,
  prismaGetMany: {
    checkPermAndGetScope: resolveCmsAdminOrPublishedScope,
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

@Controller(`public/domain/${apiCmsModels.cmsPage}`)
export class CmsPageController extends CmsPageDomainController {
  constructor(prismaClient: ApiCmsPrismaService) {
    super(prismaClient);
  }
}
