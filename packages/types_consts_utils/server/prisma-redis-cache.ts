import { URL } from 'node:url';
import type { RedisOptions } from 'iovalkey';
import {
  PrismaExtensionRedis,
  type CacheConfig,
} from 'prisma-extension-redis';

/** Парсит `REDIS_URL` (как у ioredis) в опции iovalkey для prisma-extension-redis. */
export function redisOptionsFromRedisUrlEnv(): RedisOptions | null {
  const urlString = process.env.REDIS_URL?.trim();
  if (!urlString) return null;
  try {
    const u = new URL(urlString);
    const opts: RedisOptions = {
      host: u.hostname,
      port: u.port ? Number(u.port) : 6379,
    };
    if (u.password) opts.password = decodeURIComponent(u.password);
    if (u.username && u.username !== 'default') opts.username = u.username;
    const db = u.pathname?.replace(/^\//, '');
    if (db) {
      const n = Number(db);
      if (!Number.isNaN(n)) opts.db = n;
    }
    return opts;
  } catch {
    return null;
  }
}

/**
 * Расширение Prisma → Redis: при отсутствии `REDIS_URL` возвращает null (кэш отключён).
 * `STRING` — обычный Redis без модуля JSON.
 */
export function prismaRedisCacheExtension(cacheKeyPrefix: string) {
  const client = redisOptionsFromRedisUrlEnv();
  if (!client) return null;

  const ttl = Math.max(
    1,
    Number(process.env.PRISMA_REDIS_CACHE_TTL_SECONDS ?? 30),
  );
  const stale = Math.max(
    0,
    Number(process.env.PRISMA_REDIS_CACHE_STALE_SECONDS ?? 10),
  );

  const config: CacheConfig = {
    type: 'STRING',
    ttl,
    stale,
    auto: { ttl, stale },
    cacheKey: { prefix: cacheKeyPrefix },
  };

  return PrismaExtensionRedis({ client, config });
}

