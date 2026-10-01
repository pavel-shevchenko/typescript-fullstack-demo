import type { MethodDecorator } from '../nest-for-hono/decorators';

const SKIP_THROTTLE_KEY = 'comfort:skipDomainPrismaThrottle';

/**
 * Локально отключает throttler `domainPrisma` только на этом handler'е.
 * Использовать для гостевых чтений, которые часто дергает серверный Next (один Docker-IP у api-main).
 * Лимиты по IP браузера — в Next server actions (`assertIpRateLimit`), не глобально в guard.
 */
export const SkipDomainPrismaThrottle = (): MethodDecorator => {
  return (_target: object, propertyKey: string | symbol) => {
    if (propertyKey == null) return;
    Reflect.defineMetadata(SKIP_THROTTLE_KEY, true, _target, propertyKey);
  };
};

export function isDomainPrismaThrottleSkipped(
  target: object,
  propertyKey: string | symbol,
): boolean {
  let current: object | null = target;
  while (current && current !== Object.prototype) {
    if (Reflect.getMetadata(SKIP_THROTTLE_KEY, current, propertyKey) === true) {
      return true;
    }
    current = Object.getPrototypeOf(current);
  }
  return false;
};
