import 'reflect-metadata';
import {
  getModuleMetadata,
  isGlobalModule,
  getControllerPath,
  getRoutes,
  getGuards,
  getParamKinds,
  getParamHeaderNames,
  getConstructorInjectTokens,
  ParamKind,
  registerModuleMiddleware,
  type DynamicModule,
  type Provider,
  type Type,
  type GuardClass,
} from './decorators';
import { HttpException } from './http-errors';
import { adaptContextToApiRequest } from './request-adapter';
import { validateBody } from './validation';
import { correlationHonoMiddleware } from './middleware';

export type ComfortContainer = {
  get<T>(token: Type<T> | string | symbol): T;
  controllers: Type[];
};

function isDynamicModule(value: unknown): value is DynamicModule {
  return Boolean(value && typeof value === 'object' && 'module' in (value as object));
}

function flattenImports(imports: Array<Type | DynamicModule> = []): DynamicModule[] {
  const modules: DynamicModule[] = [];
  for (const item of imports) {
    if (isDynamicModule(item)) modules.push(item);
  }
  return modules;
}

function providerToken(provider: Provider): Type | string | symbol {
  if (typeof provider === 'function') return provider;
  return provider.provide;
}

function collectProviders(modules: DynamicModule[]): Provider[] {
  const providers: Provider[] = [];
  for (const mod of modules) {
    if (mod.providers?.length) providers.push(...mod.providers);
  }
  return providers;
}

function collectControllers(modules: DynamicModule[]): Type[] {
  const controllers: Type[] = [];
  for (const mod of modules) {
    if (mod.controllers?.length) controllers.push(...mod.controllers);
  }
  return controllers;
}

function resolveProviderClass(provider: Provider): Type | null {
  if (typeof provider === 'function') return provider;
  if ('useClass' in provider) return provider.useClass;
  return null;
}

export function createComfortContainer(rootModule: Type): ComfortContainer {
  const rootMeta = getModuleMetadata(rootModule);
  const queue: Array<Type | DynamicModule> = [
    rootModule,
    ...(rootMeta.imports ?? []),
  ];
  const visited = new Set<Type>();
  const dynamicModules: DynamicModule[] = [];
  const instances = new Map<Type | string | symbol, unknown>();

  while (queue.length) {
    const item = queue.shift();
    if (!item) continue;
    if (isDynamicModule(item)) {
      dynamicModules.push(item);
      if (item.imports?.length) queue.push(...item.imports);
      continue;
    }
    if (visited.has(item)) continue;
    visited.add(item);
    const meta = getModuleMetadata(item);
    if (meta.imports?.length) queue.push(...meta.imports);
    dynamicModules.push({
      module: item,
      ...meta,
      global: isGlobalModule(item) || meta.imports != null && isGlobalModule(item),
    });
  }

  const providers = [
    ...collectProviders(dynamicModules),
    ...(rootMeta.providers ?? []),
  ];
  const controllers = [
    ...collectControllers(dynamicModules),
    ...(rootMeta.controllers ?? []),
  ];

  const resolve = (token: Type | string | symbol): unknown => {
    if (instances.has(token)) return instances.get(token);

    const provider = providers.find((p) => providerToken(p) === token);
    if (provider) {
      if (typeof provider === 'function') {
        const instance = instantiate(provider, resolve);
        instances.set(token, instance);
        return instance;
      }
      if ('useValue' in provider) {
        instances.set(provider.provide, provider.useValue);
        return provider.useValue;
      }
      if ('useFactory' in provider) {
        const deps = (provider.inject ?? []).map((dep) => resolve(dep));
        const value = provider.useFactory(...deps);
        instances.set(provider.provide, value);
        return value;
      }
      if ('useClass' in provider) {
        const instance = instantiate(provider.useClass, resolve);
        instances.set(provider.provide, instance);
        return instance;
      }
    }

    if (typeof token === 'function') {
      const instance = instantiate(token, resolve);
      instances.set(token, instance);
      return instance;
    }

    throw new Error(`Provider not found: ${String(token)}`);
  };

  for (const provider of providers) {
    const token = providerToken(provider);
    try {
      resolve(token);
    } catch {
      // optional lazy providers
    }
  }

  return {
    get<T>(token: Type<T> | string | symbol): T {
      return resolve(token) as T;
    },
    controllers,
  };
}

function getConstructorParamTypes(ClassRef: Type): Array<Type | undefined> {
  let current: Type | null = ClassRef;
  while (current && current !== Function.prototype) {
    const types = Reflect.getMetadata('design:paramtypes', current) as
      | Array<Type | undefined>
      | undefined;
    if (types?.length) return types;
    current = Object.getPrototypeOf(current);
  }
  return [];
}

function instantiate(
  ClassRef: Type,
  resolve: (token: Type | string | symbol) => unknown,
): unknown {
  // Prefer the concrete subclass constructor (Anna pattern: constructor(prisma) { super(prisma) }).
  // Walk prototypes only as fallback — DomainControllerBase generics erase to Object.
  const paramTypes = getConstructorParamTypes(ClassRef);
  const injectTokens = getConstructorInjectTokens(ClassRef);
  const arity = Math.max(ClassRef.length, paramTypes.length, injectTokens.length);
  const args = Array.from({ length: arity }, (_, index) => {
    const token = injectTokens[index] ?? paramTypes[index];
    if (!token || token === Object) return undefined;
    try {
      return resolve(token);
    } catch {
      return undefined;
    }
  });
  return new ClassRef(...args);
}

function joinRoute(...parts: string[]): string {
  return (
    '/' +
    parts
      .filter(Boolean)
      .join('/')
      .replace(/\/+/g, '/')
      .replace(/^\/|\/$/g, '')
  );
}

async function runGuards(
  c: Parameters<typeof adaptContextToApiRequest>[0],
  guards: GuardClass[],
  container: ComfortContainer,
  handlerTarget: object,
  handlerName: string | symbol,
): Promise<void> {
  // Hono Context is not a plain object — spreading `{ ...c }` drops `req`/`set`/`get`
  // (prototype accessors). Guards need the live context methods.
  const guardCtx = {
    req: c.req,
    set: (key: string, value: unknown) => {
      c.set(key as never, value as never);
    },
    get: (key: string) => c.get(key as never),
    handlerTarget,
    handlerName,
  };
  for (const GuardClass of guards) {
    let guard: { canActivate?: (ctx: unknown) => boolean | Promise<boolean> };
    try {
      guard = container.get(GuardClass);
    } catch {
      guard = new GuardClass();
    }
    const allowed = await guard.canActivate?.(guardCtx);
    if (allowed === false) {
      throw new HttpException('Forbidden', 403);
    }
  }
}

function getDesignParamTypes(
  target: object,
  propertyKey: string | symbol,
): Array<Type | undefined> {
  let current: object | null = target;
  while (current && current !== Object.prototype) {
    const types = Reflect.getMetadata('design:paramtypes', current, propertyKey) as
      | Array<Type | undefined>
      | undefined;
    if (types?.length) return types;
    current = Object.getPrototypeOf(current);
  }
  return [];
}

export function mountComfortModule(
  app: import('hono').Hono,
  rootModule: Type,
  globalPrefix: string,
): ComfortContainer {
  const container = createComfortContainer(rootModule);
  app.use('*', correlationHonoMiddleware);

  registerModuleMiddleware(rootModule, (middlewareClass, paths) => {
    const middleware = container.get(middlewareClass) as {
      use?: (req: unknown, res: unknown, next: () => void) => void;
    };
    if (typeof middleware.use !== 'function') return;
    for (const path of paths) {
      app.use(joinRoute(globalPrefix, path === '*' ? '' : path), async (c, next) => {
        const apiReq = await adaptContextToApiRequest(c);
        let status = 200;
        const res = {
          setHeader: (_name: string, _value: string) => undefined,
          statusCode: 200,
          on: (_event: string, _cb: () => void) => undefined,
          get status() {
            return status;
          },
          set status(value: number) {
            status = value;
          },
        };
        await new Promise<void>((resolve) => {
          middleware.use!(apiReq, res, () => resolve());
          setTimeout(() => resolve(), 0);
        });
        await next();
      });
    }
  });

  for (const ControllerClass of container.controllers) {
    const controller = container.get(ControllerClass);
    const prefix = getControllerPath(ControllerClass);
    const routes = getRoutes(ControllerClass);

    for (const route of routes) {
      const fullPath = joinRoute(globalPrefix, prefix, route.path);
      const handlerName = String(route.handler);
      const handler = async (c: Parameters<typeof adaptContextToApiRequest>[0]) => {
        const guards = getGuards(ControllerClass.prototype, route.handler);
        await runGuards(c, guards, container, ControllerClass.prototype, route.handler);
        const apiReq = await adaptContextToApiRequest(c);
        const paramKinds = getParamKinds(ControllerClass.prototype, route.handler);
        const paramHeaderNames = getParamHeaderNames(
          ControllerClass.prototype,
          route.handler,
        );
        const paramTypes = getDesignParamTypes(ControllerClass.prototype, route.handler);
        const args = await Promise.all(
          paramKinds.map(async (kind, index) => {
            if (kind === ParamKind.Request) return apiReq;
            if (kind === ParamKind.Body) {
              return validateBody(apiReq.body, paramTypes[index]);
            }
            if (kind === ParamKind.Param) {
              const values = Object.values((c.req as any).param() ?? {});
              return values[index] ?? values[0];
            }
            if (kind === ParamKind.Header) {
              const headerName = paramHeaderNames[index];
              return headerName ? apiReq.header(headerName) : undefined;
            }
            return undefined;
          }),
        );
        const result = await (controller as Record<string, (...args: unknown[]) => unknown>)[
          handlerName
        ](...args);
        if (result === undefined) return c.body(null, 204);
        return c.json(result);
      };

      if (route.method === 'get') app.get(fullPath, handler);
      else if (route.method === 'post') app.post(fullPath, handler);
      else if (route.method === 'put') app.put(fullPath, handler);
      else if (route.method === 'delete') app.delete(fullPath, handler);
      else if (route.method === 'patch') app.patch(fullPath, handler);
    }
  }

  return container;
}

export type BootstrapOptions = {
  module: Type;
  globalPrefix: string;
  port?: number;
  host?: string;
};

export async function bootstrapComfortApp(options: BootstrapOptions) {
  const { Hono } = await import('hono');
  const app = new Hono();

  app.onError((err, c) => {
    if (err instanceof HttpException) {
      const response = err.getResponse();
      return c.json(
        typeof response === 'string' ? { message: response, statusCode: err.getStatus() } : response,
        err.getStatus() as 400,
      );
    }
    console.error(err);
    return c.json({ message: 'Internal Server Error', statusCode: 500 }, 500);
  });

  mountComfortModule(app, options.module, options.globalPrefix.replace(/\/$/, ''));

  const port = options.port ?? Number(process.env.PORT ?? 3000);
  const host = options.host ?? '0.0.0.0';

  Bun.serve({
    fetch: app.fetch,
    port,
    hostname: host,
  });

  console.log(
    JSON.stringify({
      level: 'info',
      message: `Comfort Hono listening on ${host}:${port}`,
      globalPrefix: options.globalPrefix,
    }),
  );
}
