import { randomUUID } from 'node:crypto';
import type { MiddlewareHandler } from 'hono';
import { currentCorrelationId, runWithCorrelationId } from '../observability';

function safeCorrelationId(value: unknown): string {
  return typeof value === 'string' && /^[a-zA-Z0-9._:-]{8,128}$/.test(value)
    ? value
    : randomUUID();
}

export const correlationHonoMiddleware: MiddlewareHandler = async (c, next) => {
  const correlationId = safeCorrelationId(c.req.header('x-correlation-id'));
  c.header('x-correlation-id', correlationId);
  await runWithCorrelationId(correlationId, () => next());
};

export { currentCorrelationId };
