import 'reflect-metadata';

export {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  ForbiddenException,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
  TooManyRequestsException,
  UnauthorizedException,
} from './http-errors';

export type Type<T = any> = new (...args: any[]) => T;
export type MethodDecorator = any;
export type ClassDecorator = any;
export type ParameterDecorator = any;

export enum ParamKind {
  Request = 'request',
  Body = 'body',
  Param = 'param',
  Header = 'header',
}

export type DynamicModule = {
  module: Type;
  imports?: Array<Type | DynamicModule>;
  controllers?: Type[];
  providers?: Provider[];
  exports?: Array<Type | symbol | Provider>;
  global?: boolean;
};

export type Provider =
  | Type
  | { provide: Type | string | symbol; useClass: Type }
  | { provide: Type | string | symbol; useValue: unknown }
  | { provide: Type | string | symbol; useFactory: (...args: unknown[]) => unknown; inject?: Array<Type | string | symbol> };

export type GuardClass = Type<any>;

const MODULE_METADATA = 'comfort:module';
const CONTROLLER_PATH = 'comfort:controllerPath';
const ROUTES = 'comfort:routes';
const GUARDS = 'comfort:guards';
const PARAMS = 'comfort:params';
const PARAM_HEADER_NAMES = 'comfort:paramHeaderNames';
const CTOR_INJECT = 'comfort:ctorInject';
const INJECTABLE = 'comfort:injectable';
const GLOBAL_MODULE = 'comfort:globalModule';

export type RouteDefinition = {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  path: string;
  handler: string | symbol;
};

export type ModuleMetadata = {
  imports?: Array<Type | DynamicModule>;
  controllers?: Type[];
  providers?: Provider[];
  exports?: Array<Type | symbol | Provider>;
};

export const getModuleMetadata = (moduleClass: Type): ModuleMetadata => Reflect.getMetadata(MODULE_METADATA, moduleClass) ?? {};
export const isGlobalModule = (moduleClass: Type): boolean => Reflect.getMetadata(GLOBAL_MODULE, moduleClass) === true;
export const getControllerPath = (controllerClass: Type): string => Reflect.getMetadata(CONTROLLER_PATH, controllerClass) ?? '';

export function getRoutes(controllerClass: Type): RouteDefinition[] {
  const collected: RouteDefinition[] = [];
  let current: Type | null = controllerClass;
  while (current && current !== Function.prototype) {
    const routes = Reflect.getMetadata(ROUTES, current) as RouteDefinition[] | undefined;
    if (routes?.length) collected.unshift(...routes);
    current = Object.getPrototypeOf(current);
  }
  return collected;
}

export function getGuards(target: object, propertyKey: string | symbol): GuardClass[] {
  const ctor = (target as { constructor?: object }).constructor;
  const classGuards = (ctor
    ? (Reflect.getMetadata(GUARDS, ctor) as GuardClass[] | undefined)
    : undefined) ?? [];
  let current: object | null = target;
  while (current && current !== Object.prototype) {
    const methodGuards = Reflect.getMetadata(GUARDS, current, propertyKey) as
      | GuardClass[]
      | undefined;
    if (methodGuards?.length) return [...classGuards, ...methodGuards];
    current = Object.getPrototypeOf(current);
  }
  return [...classGuards];
}

export function getParamHeaderNames(target: object, propertyKey: string | symbol): Array<string | undefined> {
  let current: object | null = target;
  while (current && current !== Object.prototype) {
    const names = Reflect.getMetadata(PARAM_HEADER_NAMES, current, propertyKey) as
      | Array<string | undefined>
      | undefined;
    if (names?.length) return names;
    current = Object.getPrototypeOf(current);
  }
  return [];
}

export function getConstructorInjectTokens(
  ClassRef: Type,
): Array<Type | string | symbol | undefined> {
  return (Reflect.getMetadata(CTOR_INJECT, ClassRef) ?? []) as Array<
    Type | string | symbol | undefined
  >;
}

export function getParamKinds(target: object, propertyKey: string | symbol): Array<ParamKind | undefined> {
  let current: object | null = target;
  while (current && current !== Object.prototype) {
    const params = Reflect.getMetadata(PARAMS, current, propertyKey) as Array<ParamKind | undefined> | undefined;
    if (params?.length) return params;
    current = Object.getPrototypeOf(current);
  }
  return [];
}

export const Global = (): ClassDecorator => (target: any) => { Reflect.defineMetadata(GLOBAL_MODULE, true, target); return target; };
export const Module = (metadata: ModuleMetadata): ClassDecorator => (target: any) => { Reflect.defineMetadata(MODULE_METADATA, metadata, target); return target; };
export const Injectable = (): ClassDecorator => (target: any) => { Reflect.defineMetadata(INJECTABLE, true, target); return target; };
export const Controller = (path = ''): ClassDecorator => (target: any) => { Reflect.defineMetadata(CONTROLLER_PATH, path.replace(/^\/|\/$/g, ''), target); return target; };

const registerRoute = (method: RouteDefinition['method'], path: string): MethodDecorator => (target: any, propertyKey: any) => {
  const routes = Reflect.getMetadata(ROUTES, target.constructor) ?? [];
  routes.push({ method, path: path.replace(/^\//, ''), handler: propertyKey });
  Reflect.defineMetadata(ROUTES, routes, target.constructor);
};

export const Get = (path = '') => registerRoute('get', path);
export const Post = (path = '') => registerRoute('post', path);
export const Put = (path = '') => registerRoute('put', path);
export const Delete = (path = '') => registerRoute('delete', path);
export const Patch = (path = '') => registerRoute('patch', path);

export const UseGuards = (...guards: GuardClass[]): ClassDecorator & MethodDecorator =>
  ((target: any, propertyKey?: any) => {
    if (propertyKey != null) {
      const existing = Reflect.getMetadata(GUARDS, target, propertyKey) ?? [];
      Reflect.defineMetadata(GUARDS, [...existing, ...guards], target, propertyKey);
      return;
    }
    const existing = Reflect.getMetadata(GUARDS, target) ?? [];
    Reflect.defineMetadata(GUARDS, [...existing, ...guards], target);
  }) as ClassDecorator & MethodDecorator;

export const applyDecorators = (...decorators: MethodDecorator[]): MethodDecorator => (target: any, propertyKey: any, descriptor: any) => {
  for (const decorator of decorators) {
    const result = decorator(target, propertyKey, descriptor);
    if (result) descriptor = result;
  }
  return descriptor;
};

const createParamDecorator = (kind: ParamKind): ParameterDecorator => (target: any, propertyKey: any, parameterIndex: number) => {
  if (propertyKey == null) return;
  const existing: Array<ParamKind | undefined> = Reflect.getMetadata(PARAMS, target, propertyKey) ?? [];
  existing[parameterIndex] = kind;
  Reflect.defineMetadata(PARAMS, existing, target, propertyKey);
};

export const Request = () => createParamDecorator(ParamKind.Request);
export const Req = () => createParamDecorator(ParamKind.Request);
export const Body = () => createParamDecorator(ParamKind.Body);
export const Param = (_name?: string) => createParamDecorator(ParamKind.Param);
export const Header = (_name?: string, _value?: string): MethodDecorator => () => undefined;
export const Headers = (name?: string): ParameterDecorator => (target: any, propertyKey: any, parameterIndex: number) => {
  if (propertyKey == null) return;
  const existing: Array<ParamKind | undefined> = Reflect.getMetadata(PARAMS, target, propertyKey) ?? [];
  existing[parameterIndex] = ParamKind.Header;
  Reflect.defineMetadata(PARAMS, existing, target, propertyKey);
  const names: Array<string | undefined> =
    Reflect.getMetadata(PARAM_HEADER_NAMES, target, propertyKey) ?? [];
  names[parameterIndex] = name;
  Reflect.defineMetadata(PARAM_HEADER_NAMES, names, target, propertyKey);
};
export const Inject = (token?: Type | string | symbol): ParameterDecorator =>
  (target: any, propertyKey: any, parameterIndex: number) => {
    if (propertyKey != null) return;
    const existing: Array<Type | string | symbol | undefined> =
      Reflect.getMetadata(CTOR_INJECT, target) ?? [];
    existing[parameterIndex] = token;
    Reflect.defineMetadata(CTOR_INJECT, existing, target);
  };

export class PassportModule {
  static register(_options?: Record<string, unknown>): DynamicModule {
    return { module: PassportModule, providers: [], exports: [] };
  }
}

export type MiddlewareConsumer = { apply: (...middleware: Type[]) => { forRoutes: (...paths: string[]) => void } };
export interface ConfigurableModule { configure: (consumer: MiddlewareConsumer) => void }

export const createMiddlewareConsumer = (register: (middlewareClass: Type, paths: string[]) => void): MiddlewareConsumer => ({
  apply: (...middleware) => ({
    forRoutes: (...paths) => {
      for (const middlewareClass of middleware) register(middlewareClass, paths);
    },
  }),
});

export function registerModuleMiddleware(moduleClass: Type, register: (middlewareClass: Type, paths: string[]) => void): void {
  const instance = new moduleClass();
  if (typeof (instance as ConfigurableModule).configure === 'function') (instance as ConfigurableModule).configure(createMiddlewareConsumer(register));
}

export const mixin = <T extends Type>(target: T): T => target;

export type LoggerService = {
  log: (message: unknown, context?: string) => void;
  error: (message: unknown, trace?: string, context?: string) => void;
  warn: (message: unknown, context?: string) => void;
  debug?: (message: unknown, context?: string) => void;
  verbose?: (message: unknown, context?: string) => void;
};

export class ValidationPipe {
  constructor(_options?: Record<string, unknown>) {}
}
export interface RequestMiddleware { use: (req: any, res: any, next: () => void) => void }
