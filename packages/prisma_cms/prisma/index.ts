import { type Prisma, type PrismaClient } from './generated/client';

type ModelNames = Prisma.ModelName;

export type ApiCmsPrismaModels = {
  [M in ModelNames]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]['findUnique']>>,
    null
  >;
};

export * from './prisma-cms.service';

export {
  Prisma as ApiCmsPrisma,
  PrismaClient as ApiCmsPrismaClient,
  UserRole,
  ComfortAiRecommendationStatus,
  ComfortAiTargetService,
} from './generated/client';
