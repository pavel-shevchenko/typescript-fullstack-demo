import { Injectable } from 'domain_unified/nest-for-hono';
import { PrismaClient } from './generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import {
  makeFindManyAndCountExtension,
  prismaRedisCacheExtension,
} from 'types_consts_utils/server/prisma';

@Injectable()
export class ApiCrmPrismaService
  extends apiCrmPrismaClient()
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

export function apiCrmPrismaClient() {
  const connectionString =
    process.env.CRM_DATABASE_URL ?? process.env.CRM_DATABASE_DIRECT_URL;
  const poolMax = Math.max(1, Number(process.env.PG_POOL_MAX ?? 2));

  if (!connectionString) {
    throw new Error('CRM_DATABASE_URL or CRM_DATABASE_DIRECT_URL must be set.');
  }

  const pool = new Pool({
    connectionString,
    max: poolMax,
    connectionTimeoutMillis: 5_000,
    idleTimeoutMillis: 30_000,
    keepAlive: true,
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });
  const redisExt = prismaRedisCacheExtension('prisma_crm');
  const prismaForExtensions = redisExt ? prisma.$extends(redisExt) : prisma;

  return class {
    constructor() {
      return prismaForExtensions.$extends(
        makeFindManyAndCountExtension(prismaForExtensions),
      );
    }
  } as new () => typeof prisma;
}
