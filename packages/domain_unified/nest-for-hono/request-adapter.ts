import { Readable } from 'node:stream';
import type { Context } from 'hono';
import type { IApiRequest } from 'types_consts_utils';

export type ComfortContext = Context & {
  get(key: 'user'): IApiRequest['user'];
  set(key: 'user', value: IApiRequest['user']): void;
};

export async function adaptContextToApiRequest(c: Context): Promise<IApiRequest & {
  pipe: (destination: NodeJS.WritableStream) => NodeJS.WritableStream;
  readable?: boolean;
  header: (name: string) => string | undefined;
}> {
  const contentType = c.req.header('content-type') ?? '';
  let body: unknown = {};
  if (contentType.includes('application/json')) {
    try {
      body = await c.req.json();
    } catch {
      body = {};
    }
  }

  const raw = c.req.raw;
  const nodeReadable =
    raw.body && typeof (raw.body as ReadableStream).getReader === 'function'
      ? Readable.fromWeb(raw.body as any)
      : null;

  const apiReq = {
    method: c.req.method,
    path: c.req.path,
    originalUrl: c.req.path,
    baseUrl: '',
    route: { path: c.req.path },
    headers: Object.fromEntries(c.req.raw.headers.entries()),
    body,
    user: c.get('user'),
    header(name: string) {
      return c.req.header(name) ?? undefined;
    },
    pipe(destination: NodeJS.WritableStream) {
      if (!nodeReadable) {
        throw new Error('Request stream not available or not readable');
      }
      return nodeReadable.pipe(destination);
    },
    readable: Boolean(nodeReadable),
  } as IApiRequest & {
    pipe: (destination: NodeJS.WritableStream) => NodeJS.WritableStream;
    readable?: boolean;
    header: (name: string) => string | undefined;
  };

  return apiReq;
}

export function toComfortContext(c: Context): ComfortContext {
  return c as ComfortContext;
}
