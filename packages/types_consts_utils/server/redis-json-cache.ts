import { createHash } from 'crypto';
import { getSharedRedis } from './redis-client';

const KEY_PREFIX = 'comfort:callApi:v1:';

/**
 * Ключ кэша для вызова API: метод + стабильное тело + хэш токена (сырой токен в Redis не кладём).
 */
export function buildCallApiCacheKey(
  method: string,
  body: unknown,
  authToken?: string,
): string {
  const h = createHash('sha256');
  h.update(method);
  h.update('\0');
  h.update(JSON.stringify(body ?? null));
  h.update('\0');
  if (authToken) {
    h.update(authToken);
  }
  return `${KEY_PREFIX}${h.digest('hex')}`;
}

export async function redisCacheGetJson(key: string): Promise<unknown | null> {
  const redis = getSharedRedis();
  if (!redis) return null;
  try {
    const raw = await redis.get(key);
    if (raw == null) return null;
    return JSON.parse(raw) as unknown;
  } catch {
    return null;
  }
}

export async function redisCacheSetJson(
  key: string,
  value: unknown,
  ttlSeconds: number,
): Promise<void> {
  const redis = getSharedRedis();
  if (!redis || ttlSeconds <= 0) return;
  try {
    await redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
  } catch {
    /* не ломаем основной поток при сбое Redis */
  }
}
