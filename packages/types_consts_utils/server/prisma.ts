/**
 * Backend-only Prisma runtime helpers (api-cms / api-crm / api-search).
 * Import from `types_consts_utils/server/prisma` — never from Next.js pages.
 */
export {
  prismaRedisCacheExtension,
  redisOptionsFromRedisUrlEnv,
} from './prisma-redis-cache';
export {
  makeFindManyAndCountExtension,
  type IPrismaFindManyAndCountReturn,
} from './prisma-find-many-and-count';
