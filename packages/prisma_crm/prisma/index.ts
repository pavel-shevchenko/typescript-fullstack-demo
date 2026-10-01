import { type Prisma, type PrismaClient } from './generated/client';

type ModelNames = Prisma.ModelName;

export type ApiCrmPrismaModels = {
  [M in ModelNames]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]['findUnique']>>,
    null
  >;
};

export * from './prisma-crm.service';

export {
  Prisma as ApiCrmPrisma,
  PrismaClient as ApiCrmPrismaClient,
  CrmMemberRole,
} from './generated/client';
