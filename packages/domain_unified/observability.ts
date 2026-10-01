import { AsyncLocalStorage } from 'node:async_hooks';
import { randomUUID } from 'node:crypto';
import type { LoggerService } from './nest-for-hono/decorators';

type RequestContext = { correlationId: string };
const context = new AsyncLocalStorage<RequestContext>();
const metrics = {
  startedAt: Date.now(),
  requests: 0,
  errors: 0,
  durationMs: 0,
};

function safeCorrelationId(value: unknown): string {
  return typeof value === 'string' && /^[a-zA-Z0-9._:-]{8,128}$/.test(value)
    ? value
    : randomUUID();
}

export function runWithCorrelationId<T>(correlationId: string, fn: () => T): T {
  return context.run({ correlationId }, fn);
}

export function correlationMiddleware(
  req: { headers: Record<string, unknown>; header?: (name: string) => string | undefined },
  res: { setHeader: (name: string, value: string) => void; on: (event: string, cb: () => void) => void; statusCode: number },
  next: () => void,
) {
  const incoming =
    typeof req.header === 'function'
      ? req.header('x-correlation-id')
      : (req.headers['x-correlation-id'] as string | undefined);
  const correlationId = safeCorrelationId(incoming);
  req.headers['x-correlation-id'] = correlationId;
  res.setHeader('x-correlation-id', correlationId);
  metrics.requests++;
  const started = Date.now();
  res.on('finish', () => {
    metrics.durationMs += Date.now() - started;
    if (res.statusCode >= 500) metrics.errors++;
  });
  context.run({ correlationId }, next);
}

export function currentCorrelationId(): string | undefined {
  return context.getStore()?.correlationId;
}

export class StructuredJsonLogger implements LoggerService {
  private write(level: string, message: unknown, extra?: unknown) {
    const record = {
      timestamp: new Date().toISOString(),
      level,
      correlationId: currentCorrelationId(),
      message: typeof message === 'string' ? message : String(message),
      ...(extra === undefined ? {} : { context: String(extra) }),
    };
    const line = JSON.stringify(record);
    if (level === 'error') console.error(line);
    else if (level === 'warn') console.warn(line);
    else console.log(line);
  }
  log(message: unknown, context?: string) {
    this.write('info', message, context);
  }
  error(message: unknown, trace?: string, context?: string) {
    this.write('error', message, context ?? trace);
  }
  warn(message: unknown, context?: string) {
    this.write('warn', message, context);
  }
  debug(message: unknown, context?: string) {
    this.write('debug', message, context);
  }
  verbose(message: unknown, context?: string) {
    this.write('verbose', message, context);
  }
}

export function renderPrometheusMetrics(service: string): string {
  const uptimeSeconds = Math.floor((Date.now() - metrics.startedAt) / 1000);
  return [
    '# TYPE comfort_http_requests_total counter',
    `comfort_http_requests_total{service="${service}"} ${metrics.requests}`,
    '# TYPE comfort_http_errors_total counter',
    `comfort_http_errors_total{service="${service}"} ${metrics.errors}`,
    '# TYPE comfort_http_request_duration_milliseconds_total counter',
    `comfort_http_request_duration_milliseconds_total{service="${service}"} ${metrics.durationMs}`,
    '# TYPE process_uptime_seconds gauge',
    `process_uptime_seconds{service="${service}"} ${uptimeSeconds}`,
    '',
  ].join('\n');
}
