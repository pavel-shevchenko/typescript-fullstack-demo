import { apiMicroservices } from './index';
import { randomUUID } from 'node:crypto';

/**
 * HTTP helpers for Next.js server actions / Nest/Hono.
 * Do NOT re-export Prisma Redis extensions here — that pulls `@prisma/client`
 * into the Next SSR graph (Comfort must keep Prisma Client off the frontend).
 */
export function getApiBaseUrl(microService: string) {
  if (microService === apiMicroservices.apiCms) {
    return process.env.BASE_URL_OF_API_CMS ?? 'http://api-cms:3000/api-cms/';
  }
  if (microService === apiMicroservices.apiCrm) {
    return process.env.BASE_URL_OF_API_CRM ?? 'http://api-crm:3000/api-crm/';
  }
  if (microService === apiMicroservices.apiSearch) {
    return process.env.BASE_URL_OF_API_SEARCH ?? 'http://api-search:3000/api-search/';
  }
  throw new Error(`Unknown API microservice: ${microService}`);
}

export type IPrismaFindManyAndCountReturn<T> = {
  items: T[];
  totalCount: number;
};

export async function domainUnifiedPost<T>(
  microService: string,
  path: string,
  body: unknown,
  token?: string,
  correlationId?: string,
): Promise<T> {
  const url = `${getApiBaseUrl(microService)}${path}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      'x-correlation-id': correlationId ?? randomUUID(),
    },
    body: JSON.stringify(body),
    cache: 'no-store',
  });
  if (!resp.ok) {
    let detail = '';
    try {
      detail = (await resp.text()).slice(0, 500);
    } catch {
      // ignore
    }
    throw new Error(
      `domain-unified ${url} -> ${resp.status}${detail ? `: ${detail}` : ''}`,
    );
  }
  return resp.json() as Promise<T>;
}

/** Redis helpers (ioredis) — safe for Nest throttler; no Prisma Client. */
export { getSharedRedis, getRedisUrl } from './server/redis-client';
