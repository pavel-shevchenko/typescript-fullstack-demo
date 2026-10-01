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
import { ApiCmsPrismaService } from 'prisma_cms';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { CmsArticleDto } from 'validation';
import { SeaweedfsStorageService } from '../../storage/seaweedfs-storage.service';
import {
  ensureCmsAdminCreate,
  resolveCmsAdminOnlyScope,
  resolveCmsAdminOrPublishedScope,
} from './cms-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const CmsArticleDomainController = buildDomainController<
  IDomainController,
  typeof apiCmsModels.cmsArticle,
  ApiCmsPrismaService,
  SeaweedfsStorageService
>({
  microService: apiMicroservices.apiCms,
  prismaModel: apiCmsModels.cmsArticle,
  dtoClass: CmsArticleDto,
  includePermissions: {
    admin: true,
    customer: {},
  } satisfies IncludePermissionsByRole<Record<string, never>>,
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
  uploadFilesToFields: {
    fieldNames: ['heroFiles'],
    checkPermAndGetScope: resolveCmsAdminOnlyScope,
    methodDecorators: authDecorators,
    acceptedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    maxFileBytes: 5 * 1024 * 1024,
  },
  listFilesMetadataByFields: {
    fieldNames: ['heroFiles'],
    checkPermAndGetScope: resolveCmsAdminOrPublishedScope,
    methodDecorators: authDecorators,
  },
  downloadFilesByFields: {
    fieldNames: ['heroFiles'],
    checkPermAndGetScope: resolveCmsAdminOrPublishedScope,
    methodDecorators: authDecorators,
  },
  removeFilesByFields: {
    fieldNames: ['heroFiles'],
    checkPermAndGetScope: resolveCmsAdminOnlyScope,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCmsModels.cmsArticle}`)
export class CmsArticleController extends CmsArticleDomainController {
  constructor(prisma: ApiCmsPrismaService, storage: SeaweedfsStorageService) {
    super(prisma, storage);
  }
}
