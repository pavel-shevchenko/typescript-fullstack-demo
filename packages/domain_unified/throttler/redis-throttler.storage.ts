import type { ComfortThrottlerStorage, ThrottlerStorageRecord } from './throttler-storage.interface';
import { getSharedRedis } from 'types_consts_utils/server';

const THROTTLE_KEY_PREFIX = 'ai_anna:throttle:';

type MemoryEntry = {
  totalHits: number;
  expiresAt: number;
  blockedUntil: number;
};

/**
 * ThrottlerStorage в Redis для реплик api-main/api-chat/api-work.
 * Без REDIS_URL — in-memory fallback (как vkid PKCE store).
 */
export class DomainPrismaRedisThrottlerStorage implements ComfortThrottlerStorage {
  private readonly memory = new Map<string, MemoryEntry>();

  async increment(
    key: string,
    ttl: number,
    limit: number,
    blockDuration: number,
    throttlerName: string,
  ): Promise<ThrottlerStorageRecord> {
    const storageKey = `${THROTTLE_KEY_PREFIX}${throttlerName}:${key}`;
    const redis = getSharedRedis();
    const now = Date.now();

    if (redis) {
      try {
        return await this.incrementRedis(redis, storageKey, ttl, limit, blockDuration);
      } catch {
        // fallback
      }
    }

    return this.incrementMemory(storageKey, ttl, limit, blockDuration, now);
  }

  private async incrementRedis(
    redis: NonNullable<ReturnType<typeof getSharedRedis>>,
    storageKey: string,
    ttlMs: number,
    limit: number,
    blockDurationMs: number,
  ): Promise<ThrottlerStorageRecord> {
    const blockKey = `${storageKey}:block`;
    const blockTtlMs = await redis.pttl(blockKey);
    if (blockTtlMs > 0) {
      return {
        totalHits: limit + 1,
        timeToExpire: Math.ceil(blockTtlMs / 1000),
        isBlocked: true,
        timeToBlockExpire: Math.ceil(blockTtlMs / 1000),
      };
    }

    const totalHits = await redis.incr(storageKey);
    if (totalHits === 1 && ttlMs > 0) {
      await redis.pexpire(storageKey, ttlMs);
    }

    let timeToExpireMs = await redis.pttl(storageKey);
    if (timeToExpireMs < 0 && ttlMs > 0) {
      await redis.pexpire(storageKey, ttlMs);
      timeToExpireMs = ttlMs;
    }

    const overLimit = totalHits > limit;
    if (overLimit && blockDurationMs > 0) {
      await redis.pexpire(blockKey, blockDurationMs);
    }

    return {
      totalHits,
      timeToExpire: timeToExpireMs > 0 ? Math.ceil(timeToExpireMs / 1000) : 0,
      isBlocked: overLimit,
      timeToBlockExpire:
        overLimit && blockDurationMs > 0 ? Math.ceil(blockDurationMs / 1000) : 0,
    };
  }

  private incrementMemory(
    storageKey: string,
    ttlMs: number,
    limit: number,
    blockDurationMs: number,
    now: number,
  ): ThrottlerStorageRecord {
    let entry = this.memory.get(storageKey);
    if (!entry || now >= entry.expiresAt) {
      entry = { totalHits: 0, expiresAt: now + ttlMs, blockedUntil: 0 };
    }

    if (entry.blockedUntil > now) {
      return {
        totalHits: limit + 1,
        timeToExpire: Math.ceil((entry.blockedUntil - now) / 1000),
        isBlocked: true,
        timeToBlockExpire: Math.ceil((entry.blockedUntil - now) / 1000),
      };
    }

    entry.totalHits += 1;
    const overLimit = entry.totalHits > limit;
    if (overLimit && blockDurationMs > 0) {
      entry.blockedUntil = now + blockDurationMs;
    }
    this.memory.set(storageKey, entry);

    return {
      totalHits: entry.totalHits,
      timeToExpire: Math.max(0, Math.ceil((entry.expiresAt - now) / 1000)),
      isBlocked: overLimit,
      timeToBlockExpire:
        overLimit && blockDurationMs > 0
          ? Math.ceil(blockDurationMs / 1000)
          : 0,
    };
  }
}
