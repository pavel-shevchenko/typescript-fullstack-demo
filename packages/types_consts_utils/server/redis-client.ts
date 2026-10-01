import Redis from 'ioredis';

let shared: Redis | null | undefined;

/**
 * URL из REDIS_URL (например redis://ai_anna_redis:6379).
 * Если переменная не задана — кэш отключён (возвращается null).
 */
export function getRedisUrl(): string | undefined {
  const url = process.env.REDIS_URL?.trim();
  return url || undefined;
}

/**
 * Общий клиент ioredis для кэша и прочих обращений к Redis из монорепозитория.
 * При отсутствии REDIS_URL всегда null.
 */
export function getSharedRedis(): Redis | null {
  if (shared !== undefined) {
    return shared;
  }
  const url = getRedisUrl();
  if (!url) {
    shared = null;
    return shared;
  }
  shared = new Redis(url, { maxRetriesPerRequest: 2 });
  return shared;
}

/** Сброс синглтона (тесты / hot-reload). */
export function resetSharedRedisForTests(): void {
  if (shared && shared !== null) {
    shared.disconnect();
  }
  shared = undefined;
}
