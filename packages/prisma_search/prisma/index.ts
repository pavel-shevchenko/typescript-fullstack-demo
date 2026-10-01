import { type Prisma, type PrismaClient } from './generated/client';

type ModelNames = Prisma.ModelName;

export type ApiSearchPrismaModels = {
  [M in ModelNames]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]['findUnique']>>,
    null
  >;
};

export * from './prisma-search.service';
export * from './search.repository';
export * from './search-index-upsert';
export * from './comfort-search-projection';
export * from './comfort-search-sync';
export * from './comfort-reindex';
export * from './search-db-setup';

export {
  Prisma as ApiSearchPrisma,
  PrismaClient as ApiSearchPrismaClient,
  SearchDocumentStatus,
  SearchIndexJobStatus,
} from './generated/client';
