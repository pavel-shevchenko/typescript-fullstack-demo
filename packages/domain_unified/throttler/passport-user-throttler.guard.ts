import { Injectable } from '../nest-for-hono/decorators';
import { TooManyRequestsException } from '../nest-for-hono/http-errors';
import { isDatabaseRecordId, type IApiRequest } from 'types_consts_utils';
import { domainPrismaThrottleLimit, domainPrismaThrottleTtlMs } from './domain-prisma-throttle.env';
import { DomainPrismaRedisThrottlerStorage } from './redis-throttler.storage';
import { isDomainPrismaThrottleSkipped } from './skip-domain-prisma-throttle.decorator';

const storage = new DomainPrismaRedisThrottlerStorage();

/**
 * Лимит по Passport userId + handler. Только для авторизованных запросов.
 * Гости не троттлятся здесь: на handler — SkipDomainPrismaThrottle / optionalJwtReadWithoutThrottle;
 * OTP и auth refresh — assertIpRateLimit в Next (IP браузера, Redis).
 */
@Injectable()
export class PassportUserThrottlerGuard {
  async canActivate(ctx: {
    req: { method: string; path: string; header: (name: string) => string | undefined };
    get: (key: string) => unknown;
    handlerTarget?: object;
    handlerName?: string | symbol;
  }): Promise<boolean> {
    if (domainPrismaThrottleLimit() <= 0) {
      return true;
    }
    if (
      ctx.handlerTarget &&
      ctx.handlerName &&
      isDomainPrismaThrottleSkipped(ctx.handlerTarget, ctx.handlerName)
    ) {
      return true;
    }
    const user = (ctx.get('user') as IApiRequest['user'])?.data;
    if (!isDatabaseRecordId(user?.id)) {
      return true;
    }
    const tracker = `user:${user.id}:${ctx.req.method.toUpperCase()}:${ctx.req.path}`;
    const record = await storage.increment(
      tracker,
      domainPrismaThrottleTtlMs(),
      domainPrismaThrottleLimit(),
      domainPrismaThrottleTtlMs(),
      'domainPrisma',
    );
    if (record.isBlocked) {
      throw new TooManyRequestsException();
    }
    return true;
  }
}
