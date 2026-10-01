import { Controller, UseGuards } from 'domain_unified/nest-for-hono';
import {
  buildDomainController,
  type IDomainController,
} from 'domain_unified';
import {
  ApiSearchPrismaService,
  type ApiSearchPrisma,
} from 'prisma_search';
import {
  apiMicroservices,
  apiSearchModels,
  type IncludePermissionsByRole,
} from 'types_consts_utils';
import {
  SearchChunkDto,
  SearchDocumentDto,
  SearchIndexJobDto,
} from 'validation';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import {
  ensureSearchAdmin,
  resolveSearchAdminScope,
  resolveSearchChunkScope,
  resolveSearchDocumentScope,
} from './search-access';

const auth = [UseGuards(JwtAuthGuard)] as MethodDecorator[];
const noCustomerJoins = {
  admin: true,
  customer: {},
} satisfies IncludePermissionsByRole<Record<string, unknown>>;

const documentBase = buildDomainController<
  IDomainController,
  typeof apiSearchModels.searchDocument,
  ApiSearchPrismaService
>({
  microService: apiMicroservices.apiSearch,
  prismaModel: apiSearchModels.searchDocument,
  dtoClass: SearchDocumentDto,
  includePermissions: noCustomerJoins as IncludePermissionsByRole<
    NonNullable<ApiSearchPrisma.SearchDocumentFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveSearchDocumentScope,
    methodDecorators: auth,
  },
  prismaCreateMany: {
    checkPermissions: ensureSearchAdmin,
    methodDecorators: auth,
  },
  prismaUpdateMany: {
    checkPermAndGetScope: resolveSearchAdminScope,
    methodDecorators: auth,
  },
  prismaDeleteMany: {
    checkPermAndGetScope: resolveSearchAdminScope,
    methodDecorators: auth,
  },
});

@Controller(`public/domain/${apiSearchModels.searchDocument}`)
export class SearchDocumentController extends documentBase {
  constructor(prismaClient: ApiSearchPrismaService) {
    super(prismaClient);
  }
}

const chunkBase = buildDomainController<
  IDomainController,
  typeof apiSearchModels.searchChunk,
  ApiSearchPrismaService
>({
  microService: apiMicroservices.apiSearch,
  prismaModel: apiSearchModels.searchChunk,
  dtoClass: SearchChunkDto,
  includePermissions: noCustomerJoins as IncludePermissionsByRole<
    NonNullable<ApiSearchPrisma.SearchChunkFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveSearchChunkScope,
    methodDecorators: auth,
  },
  prismaCreateMany: {
    checkPermissions: ensureSearchAdmin,
    methodDecorators: auth,
  },
  prismaUpdateMany: {
    checkPermAndGetScope: resolveSearchAdminScope,
    methodDecorators: auth,
  },
  prismaDeleteMany: {
    checkPermAndGetScope: resolveSearchAdminScope,
    methodDecorators: auth,
  },
});

@Controller(`public/domain/${apiSearchModels.searchChunk}`)
export class SearchChunkController extends chunkBase {
  constructor(prismaClient: ApiSearchPrismaService) {
    super(prismaClient);
  }
}

const embeddingBase = buildDomainController<
  IDomainController,
  typeof apiSearchModels.searchEmbedding,
  ApiSearchPrismaService
>({
  microService: apiMicroservices.apiSearch,
  prismaModel: apiSearchModels.searchEmbedding,
  includePermissions: noCustomerJoins as IncludePermissionsByRole<
    NonNullable<ApiSearchPrisma.SearchEmbeddingFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveSearchAdminScope,
    methodDecorators: auth,
  },
});

@Controller(`public/domain/${apiSearchModels.searchEmbedding}`)
export class SearchEmbeddingController extends embeddingBase {
  constructor(prismaClient: ApiSearchPrismaService) {
    super(prismaClient);
  }
}

const jobBase = buildDomainController<
  IDomainController,
  typeof apiSearchModels.searchIndexJob,
  ApiSearchPrismaService
>({
  microService: apiMicroservices.apiSearch,
  prismaModel: apiSearchModels.searchIndexJob,
  dtoClass: SearchIndexJobDto,
  includePermissions: noCustomerJoins as IncludePermissionsByRole<
    NonNullable<ApiSearchPrisma.SearchIndexJobFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveSearchAdminScope,
    methodDecorators: auth,
  },
});

@Controller(`public/domain/${apiSearchModels.searchIndexJob}`)
export class SearchIndexJobController extends jobBase {
  constructor(prismaClient: ApiSearchPrismaService) {
    super(prismaClient);
  }
}
