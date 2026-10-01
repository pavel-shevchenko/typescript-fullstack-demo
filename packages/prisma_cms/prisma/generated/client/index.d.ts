
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CmsPage
 * 
 */
export type CmsPage = $Result.DefaultSelection<Prisma.$CmsPagePayload>
/**
 * Model CmsArticle
 * 
 */
export type CmsArticle = $Result.DefaultSelection<Prisma.$CmsArticlePayload>
/**
 * Model CmsPromoBlock
 * 
 */
export type CmsPromoBlock = $Result.DefaultSelection<Prisma.$CmsPromoBlockPayload>
/**
 * Model CmsAiPromptSlot
 * 
 */
export type CmsAiPromptSlot = $Result.DefaultSelection<Prisma.$CmsAiPromptSlotPayload>
/**
 * Model ComfortAuditEvent
 * 
 */
export type ComfortAuditEvent = $Result.DefaultSelection<Prisma.$ComfortAuditEventPayload>
/**
 * Model ComfortAiCallLog
 * 
 */
export type ComfortAiCallLog = $Result.DefaultSelection<Prisma.$ComfortAiCallLogPayload>
/**
 * Model ComfortAiRecommendation
 * 
 */
export type ComfortAiRecommendation = $Result.DefaultSelection<Prisma.$ComfortAiRecommendationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  customer: 'customer'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ComfortAiRecommendationStatus: {
  pending: 'pending',
  applying: 'applying',
  confirmed: 'confirmed',
  failed: 'failed',
  rejected: 'rejected'
};

export type ComfortAiRecommendationStatus = (typeof ComfortAiRecommendationStatus)[keyof typeof ComfortAiRecommendationStatus]


export const ComfortAiTargetService: {
  cms: 'cms',
  crm: 'crm'
};

export type ComfortAiTargetService = (typeof ComfortAiTargetService)[keyof typeof ComfortAiTargetService]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ComfortAiRecommendationStatus = $Enums.ComfortAiRecommendationStatus

export const ComfortAiRecommendationStatus: typeof $Enums.ComfortAiRecommendationStatus

export type ComfortAiTargetService = $Enums.ComfortAiTargetService

export const ComfortAiTargetService: typeof $Enums.ComfortAiTargetService

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsPage`: Exposes CRUD operations for the **CmsPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsPages
    * const cmsPages = await prisma.cmsPage.findMany()
    * ```
    */
  get cmsPage(): Prisma.CmsPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsArticle`: Exposes CRUD operations for the **CmsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsArticles
    * const cmsArticles = await prisma.cmsArticle.findMany()
    * ```
    */
  get cmsArticle(): Prisma.CmsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsPromoBlock`: Exposes CRUD operations for the **CmsPromoBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsPromoBlocks
    * const cmsPromoBlocks = await prisma.cmsPromoBlock.findMany()
    * ```
    */
  get cmsPromoBlock(): Prisma.CmsPromoBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsAiPromptSlot`: Exposes CRUD operations for the **CmsAiPromptSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsAiPromptSlots
    * const cmsAiPromptSlots = await prisma.cmsAiPromptSlot.findMany()
    * ```
    */
  get cmsAiPromptSlot(): Prisma.CmsAiPromptSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comfortAuditEvent`: Exposes CRUD operations for the **ComfortAuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComfortAuditEvents
    * const comfortAuditEvents = await prisma.comfortAuditEvent.findMany()
    * ```
    */
  get comfortAuditEvent(): Prisma.ComfortAuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comfortAiCallLog`: Exposes CRUD operations for the **ComfortAiCallLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComfortAiCallLogs
    * const comfortAiCallLogs = await prisma.comfortAiCallLog.findMany()
    * ```
    */
  get comfortAiCallLog(): Prisma.ComfortAiCallLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comfortAiRecommendation`: Exposes CRUD operations for the **ComfortAiRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComfortAiRecommendations
    * const comfortAiRecommendations = await prisma.comfortAiRecommendation.findMany()
    * ```
    */
  get comfortAiRecommendation(): Prisma.ComfortAiRecommendationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CmsPage: 'CmsPage',
    CmsArticle: 'CmsArticle',
    CmsPromoBlock: 'CmsPromoBlock',
    CmsAiPromptSlot: 'CmsAiPromptSlot',
    ComfortAuditEvent: 'ComfortAuditEvent',
    ComfortAiCallLog: 'ComfortAiCallLog',
    ComfortAiRecommendation: 'ComfortAiRecommendation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cmsPage" | "cmsArticle" | "cmsPromoBlock" | "cmsAiPromptSlot" | "comfortAuditEvent" | "comfortAiCallLog" | "comfortAiRecommendation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CmsPage: {
        payload: Prisma.$CmsPagePayload<ExtArgs>
        fields: Prisma.CmsPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          findFirst: {
            args: Prisma.CmsPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          findMany: {
            args: Prisma.CmsPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          create: {
            args: Prisma.CmsPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          createMany: {
            args: Prisma.CmsPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          delete: {
            args: Prisma.CmsPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          update: {
            args: Prisma.CmsPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          deleteMany: {
            args: Prisma.CmsPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>[]
          }
          upsert: {
            args: Prisma.CmsPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPagePayload>
          }
          aggregate: {
            args: Prisma.CmsPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsPage>
          }
          groupBy: {
            args: Prisma.CmsPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsPageCountArgs<ExtArgs>
            result: $Utils.Optional<CmsPageCountAggregateOutputType> | number
          }
        }
      }
      CmsArticle: {
        payload: Prisma.$CmsArticlePayload<ExtArgs>
        fields: Prisma.CmsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>
          }
          findFirst: {
            args: Prisma.CmsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>
          }
          findMany: {
            args: Prisma.CmsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>[]
          }
          create: {
            args: Prisma.CmsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>
          }
          createMany: {
            args: Prisma.CmsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>[]
          }
          delete: {
            args: Prisma.CmsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>
          }
          update: {
            args: Prisma.CmsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>
          }
          deleteMany: {
            args: Prisma.CmsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>[]
          }
          upsert: {
            args: Prisma.CmsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsArticlePayload>
          }
          aggregate: {
            args: Prisma.CmsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsArticle>
          }
          groupBy: {
            args: Prisma.CmsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<CmsArticleCountAggregateOutputType> | number
          }
        }
      }
      CmsPromoBlock: {
        payload: Prisma.$CmsPromoBlockPayload<ExtArgs>
        fields: Prisma.CmsPromoBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsPromoBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsPromoBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>
          }
          findFirst: {
            args: Prisma.CmsPromoBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsPromoBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>
          }
          findMany: {
            args: Prisma.CmsPromoBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>[]
          }
          create: {
            args: Prisma.CmsPromoBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>
          }
          createMany: {
            args: Prisma.CmsPromoBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsPromoBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>[]
          }
          delete: {
            args: Prisma.CmsPromoBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>
          }
          update: {
            args: Prisma.CmsPromoBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>
          }
          deleteMany: {
            args: Prisma.CmsPromoBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsPromoBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsPromoBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>[]
          }
          upsert: {
            args: Prisma.CmsPromoBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPromoBlockPayload>
          }
          aggregate: {
            args: Prisma.CmsPromoBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsPromoBlock>
          }
          groupBy: {
            args: Prisma.CmsPromoBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsPromoBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsPromoBlockCountArgs<ExtArgs>
            result: $Utils.Optional<CmsPromoBlockCountAggregateOutputType> | number
          }
        }
      }
      CmsAiPromptSlot: {
        payload: Prisma.$CmsAiPromptSlotPayload<ExtArgs>
        fields: Prisma.CmsAiPromptSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsAiPromptSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsAiPromptSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>
          }
          findFirst: {
            args: Prisma.CmsAiPromptSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsAiPromptSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>
          }
          findMany: {
            args: Prisma.CmsAiPromptSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>[]
          }
          create: {
            args: Prisma.CmsAiPromptSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>
          }
          createMany: {
            args: Prisma.CmsAiPromptSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsAiPromptSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>[]
          }
          delete: {
            args: Prisma.CmsAiPromptSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>
          }
          update: {
            args: Prisma.CmsAiPromptSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>
          }
          deleteMany: {
            args: Prisma.CmsAiPromptSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsAiPromptSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsAiPromptSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>[]
          }
          upsert: {
            args: Prisma.CmsAiPromptSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAiPromptSlotPayload>
          }
          aggregate: {
            args: Prisma.CmsAiPromptSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsAiPromptSlot>
          }
          groupBy: {
            args: Prisma.CmsAiPromptSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsAiPromptSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsAiPromptSlotCountArgs<ExtArgs>
            result: $Utils.Optional<CmsAiPromptSlotCountAggregateOutputType> | number
          }
        }
      }
      ComfortAuditEvent: {
        payload: Prisma.$ComfortAuditEventPayload<ExtArgs>
        fields: Prisma.ComfortAuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComfortAuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComfortAuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>
          }
          findFirst: {
            args: Prisma.ComfortAuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComfortAuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>
          }
          findMany: {
            args: Prisma.ComfortAuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>[]
          }
          create: {
            args: Prisma.ComfortAuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>
          }
          createMany: {
            args: Prisma.ComfortAuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComfortAuditEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>[]
          }
          delete: {
            args: Prisma.ComfortAuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>
          }
          update: {
            args: Prisma.ComfortAuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>
          }
          deleteMany: {
            args: Prisma.ComfortAuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComfortAuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComfortAuditEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>[]
          }
          upsert: {
            args: Prisma.ComfortAuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAuditEventPayload>
          }
          aggregate: {
            args: Prisma.ComfortAuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComfortAuditEvent>
          }
          groupBy: {
            args: Prisma.ComfortAuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComfortAuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComfortAuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<ComfortAuditEventCountAggregateOutputType> | number
          }
        }
      }
      ComfortAiCallLog: {
        payload: Prisma.$ComfortAiCallLogPayload<ExtArgs>
        fields: Prisma.ComfortAiCallLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComfortAiCallLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComfortAiCallLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>
          }
          findFirst: {
            args: Prisma.ComfortAiCallLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComfortAiCallLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>
          }
          findMany: {
            args: Prisma.ComfortAiCallLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>[]
          }
          create: {
            args: Prisma.ComfortAiCallLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>
          }
          createMany: {
            args: Prisma.ComfortAiCallLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComfortAiCallLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>[]
          }
          delete: {
            args: Prisma.ComfortAiCallLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>
          }
          update: {
            args: Prisma.ComfortAiCallLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>
          }
          deleteMany: {
            args: Prisma.ComfortAiCallLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComfortAiCallLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComfortAiCallLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>[]
          }
          upsert: {
            args: Prisma.ComfortAiCallLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiCallLogPayload>
          }
          aggregate: {
            args: Prisma.ComfortAiCallLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComfortAiCallLog>
          }
          groupBy: {
            args: Prisma.ComfortAiCallLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComfortAiCallLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComfortAiCallLogCountArgs<ExtArgs>
            result: $Utils.Optional<ComfortAiCallLogCountAggregateOutputType> | number
          }
        }
      }
      ComfortAiRecommendation: {
        payload: Prisma.$ComfortAiRecommendationPayload<ExtArgs>
        fields: Prisma.ComfortAiRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComfortAiRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComfortAiRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>
          }
          findFirst: {
            args: Prisma.ComfortAiRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComfortAiRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>
          }
          findMany: {
            args: Prisma.ComfortAiRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>[]
          }
          create: {
            args: Prisma.ComfortAiRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>
          }
          createMany: {
            args: Prisma.ComfortAiRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComfortAiRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>[]
          }
          delete: {
            args: Prisma.ComfortAiRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>
          }
          update: {
            args: Prisma.ComfortAiRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.ComfortAiRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComfortAiRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComfortAiRecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>[]
          }
          upsert: {
            args: Prisma.ComfortAiRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComfortAiRecommendationPayload>
          }
          aggregate: {
            args: Prisma.ComfortAiRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComfortAiRecommendation>
          }
          groupBy: {
            args: Prisma.ComfortAiRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComfortAiRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComfortAiRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<ComfortAiRecommendationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cmsPage?: CmsPageOmit
    cmsArticle?: CmsArticleOmit
    cmsPromoBlock?: CmsPromoBlockOmit
    cmsAiPromptSlot?: CmsAiPromptSlotOmit
    comfortAuditEvent?: ComfortAuditEventOmit
    comfortAiCallLog?: ComfortAiCallLogOmit
    comfortAiRecommendation?: ComfortAiRecommendationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    AuthoredRecommendations: number
    ConfirmedRecommendations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthoredRecommendations?: boolean | UserCountOutputTypeCountAuthoredRecommendationsArgs
    ConfirmedRecommendations?: boolean | UserCountOutputTypeCountConfirmedRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthoredRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComfortAiRecommendationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConfirmedRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComfortAiRecommendationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    AuthoredRecommendations?: boolean | User$AuthoredRecommendationsArgs<ExtArgs>
    ConfirmedRecommendations?: boolean | User$ConfirmedRecommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthoredRecommendations?: boolean | User$AuthoredRecommendationsArgs<ExtArgs>
    ConfirmedRecommendations?: boolean | User$ConfirmedRecommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      AuthoredRecommendations: Prisma.$ComfortAiRecommendationPayload<ExtArgs>[]
      ConfirmedRecommendations: Prisma.$ComfortAiRecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AuthoredRecommendations<T extends User$AuthoredRecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$AuthoredRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ConfirmedRecommendations<T extends User$ConfirmedRecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$ConfirmedRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.AuthoredRecommendations
   */
  export type User$AuthoredRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    where?: ComfortAiRecommendationWhereInput
    orderBy?: ComfortAiRecommendationOrderByWithRelationInput | ComfortAiRecommendationOrderByWithRelationInput[]
    cursor?: ComfortAiRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComfortAiRecommendationScalarFieldEnum | ComfortAiRecommendationScalarFieldEnum[]
  }

  /**
   * User.ConfirmedRecommendations
   */
  export type User$ConfirmedRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    where?: ComfortAiRecommendationWhereInput
    orderBy?: ComfortAiRecommendationOrderByWithRelationInput | ComfortAiRecommendationOrderByWithRelationInput[]
    cursor?: ComfortAiRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComfortAiRecommendationScalarFieldEnum | ComfortAiRecommendationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CmsPage
   */

  export type AggregateCmsPage = {
    _count: CmsPageCountAggregateOutputType | null
    _avg: CmsPageAvgAggregateOutputType | null
    _sum: CmsPageSumAggregateOutputType | null
    _min: CmsPageMinAggregateOutputType | null
    _max: CmsPageMaxAggregateOutputType | null
  }

  export type CmsPageAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
  }

  export type CmsPageSumAggregateOutputType = {
    id: bigint | null
    sortOrder: number | null
  }

  export type CmsPageMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    title: string | null
    summary: string | null
    bodyMarkdown: string | null
    published: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPageMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    title: string | null
    summary: string | null
    bodyMarkdown: string | null
    published: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPageCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    summary: number
    bodyMarkdown: number
    published: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsPageAvgAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CmsPageSumAggregateInputType = {
    id?: true
    sortOrder?: true
  }

  export type CmsPageMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    summary?: true
    bodyMarkdown?: true
    published?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPageMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    summary?: true
    bodyMarkdown?: true
    published?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPageCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    summary?: true
    bodyMarkdown?: true
    published?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPage to aggregate.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsPages
    **/
    _count?: true | CmsPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsPageMaxAggregateInputType
  }

  export type GetCmsPageAggregateType<T extends CmsPageAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsPage[P]>
      : GetScalarType<T[P], AggregateCmsPage[P]>
  }




  export type CmsPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPageWhereInput
    orderBy?: CmsPageOrderByWithAggregationInput | CmsPageOrderByWithAggregationInput[]
    by: CmsPageScalarFieldEnum[] | CmsPageScalarFieldEnum
    having?: CmsPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsPageCountAggregateInputType | true
    _avg?: CmsPageAvgAggregateInputType
    _sum?: CmsPageSumAggregateInputType
    _min?: CmsPageMinAggregateInputType
    _max?: CmsPageMaxAggregateInputType
  }

  export type CmsPageGroupByOutputType = {
    id: bigint
    slug: string
    title: string
    summary: string
    bodyMarkdown: string
    published: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: CmsPageCountAggregateOutputType | null
    _avg: CmsPageAvgAggregateOutputType | null
    _sum: CmsPageSumAggregateOutputType | null
    _min: CmsPageMinAggregateOutputType | null
    _max: CmsPageMaxAggregateOutputType | null
  }

  type GetCmsPageGroupByPayload<T extends CmsPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsPageGroupByOutputType[P]>
            : GetScalarType<T[P], CmsPageGroupByOutputType[P]>
        }
      >
    >


  export type CmsPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPage"]>

  export type CmsPageSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    summary?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "summary" | "bodyMarkdown" | "published" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsPage"]>

  export type $CmsPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsPage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      title: string
      summary: string
      bodyMarkdown: string
      published: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsPage"]>
    composites: {}
  }

  type CmsPageGetPayload<S extends boolean | null | undefined | CmsPageDefaultArgs> = $Result.GetResult<Prisma.$CmsPagePayload, S>

  type CmsPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsPageCountAggregateInputType | true
    }

  export interface CmsPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsPage'], meta: { name: 'CmsPage' } }
    /**
     * Find zero or one CmsPage that matches the filter.
     * @param {CmsPageFindUniqueArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsPageFindUniqueArgs>(args: SelectSubset<T, CmsPageFindUniqueArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsPageFindUniqueOrThrowArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsPageFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindFirstArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsPageFindFirstArgs>(args?: SelectSubset<T, CmsPageFindFirstArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindFirstOrThrowArgs} args - Arguments to find a CmsPage
     * @example
     * // Get one CmsPage
     * const cmsPage = await prisma.cmsPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsPageFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsPages
     * const cmsPages = await prisma.cmsPage.findMany()
     * 
     * // Get first 10 CmsPages
     * const cmsPages = await prisma.cmsPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsPageFindManyArgs>(args?: SelectSubset<T, CmsPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsPage.
     * @param {CmsPageCreateArgs} args - Arguments to create a CmsPage.
     * @example
     * // Create one CmsPage
     * const CmsPage = await prisma.cmsPage.create({
     *   data: {
     *     // ... data to create a CmsPage
     *   }
     * })
     * 
     */
    create<T extends CmsPageCreateArgs>(args: SelectSubset<T, CmsPageCreateArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsPages.
     * @param {CmsPageCreateManyArgs} args - Arguments to create many CmsPages.
     * @example
     * // Create many CmsPages
     * const cmsPage = await prisma.cmsPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsPageCreateManyArgs>(args?: SelectSubset<T, CmsPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsPages and returns the data saved in the database.
     * @param {CmsPageCreateManyAndReturnArgs} args - Arguments to create many CmsPages.
     * @example
     * // Create many CmsPages
     * const cmsPage = await prisma.cmsPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsPages and only return the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsPageCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsPage.
     * @param {CmsPageDeleteArgs} args - Arguments to delete one CmsPage.
     * @example
     * // Delete one CmsPage
     * const CmsPage = await prisma.cmsPage.delete({
     *   where: {
     *     // ... filter to delete one CmsPage
     *   }
     * })
     * 
     */
    delete<T extends CmsPageDeleteArgs>(args: SelectSubset<T, CmsPageDeleteArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsPage.
     * @param {CmsPageUpdateArgs} args - Arguments to update one CmsPage.
     * @example
     * // Update one CmsPage
     * const cmsPage = await prisma.cmsPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsPageUpdateArgs>(args: SelectSubset<T, CmsPageUpdateArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsPages.
     * @param {CmsPageDeleteManyArgs} args - Arguments to filter CmsPages to delete.
     * @example
     * // Delete a few CmsPages
     * const { count } = await prisma.cmsPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsPageDeleteManyArgs>(args?: SelectSubset<T, CmsPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsPages
     * const cmsPage = await prisma.cmsPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsPageUpdateManyArgs>(args: SelectSubset<T, CmsPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPages and returns the data updated in the database.
     * @param {CmsPageUpdateManyAndReturnArgs} args - Arguments to update many CmsPages.
     * @example
     * // Update many CmsPages
     * const cmsPage = await prisma.cmsPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsPages and only return the `id`
     * const cmsPageWithIdOnly = await prisma.cmsPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsPageUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsPage.
     * @param {CmsPageUpsertArgs} args - Arguments to update or create a CmsPage.
     * @example
     * // Update or create a CmsPage
     * const cmsPage = await prisma.cmsPage.upsert({
     *   create: {
     *     // ... data to create a CmsPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsPage we want to update
     *   }
     * })
     */
    upsert<T extends CmsPageUpsertArgs>(args: SelectSubset<T, CmsPageUpsertArgs<ExtArgs>>): Prisma__CmsPageClient<$Result.GetResult<Prisma.$CmsPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageCountArgs} args - Arguments to filter CmsPages to count.
     * @example
     * // Count the number of CmsPages
     * const count = await prisma.cmsPage.count({
     *   where: {
     *     // ... the filter for the CmsPages we want to count
     *   }
     * })
    **/
    count<T extends CmsPageCountArgs>(
      args?: Subset<T, CmsPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsPageAggregateArgs>(args: Subset<T, CmsPageAggregateArgs>): Prisma.PrismaPromise<GetCmsPageAggregateType<T>>

    /**
     * Group by CmsPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsPageGroupByArgs['orderBy'] }
        : { orderBy?: CmsPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsPage model
   */
  readonly fields: CmsPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsPage model
   */
  interface CmsPageFieldRefs {
    readonly id: FieldRef<"CmsPage", 'BigInt'>
    readonly slug: FieldRef<"CmsPage", 'String'>
    readonly title: FieldRef<"CmsPage", 'String'>
    readonly summary: FieldRef<"CmsPage", 'String'>
    readonly bodyMarkdown: FieldRef<"CmsPage", 'String'>
    readonly published: FieldRef<"CmsPage", 'Boolean'>
    readonly sortOrder: FieldRef<"CmsPage", 'Int'>
    readonly createdAt: FieldRef<"CmsPage", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsPage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsPage findUnique
   */
  export type CmsPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage findUniqueOrThrow
   */
  export type CmsPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage findFirst
   */
  export type CmsPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage findFirstOrThrow
   */
  export type CmsPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Filter, which CmsPage to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage findMany
   */
  export type CmsPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Filter, which CmsPages to fetch.
     */
    where?: CmsPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPages to fetch.
     */
    orderBy?: CmsPageOrderByWithRelationInput | CmsPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsPages.
     */
    cursor?: CmsPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPages.
     */
    distinct?: CmsPageScalarFieldEnum | CmsPageScalarFieldEnum[]
  }

  /**
   * CmsPage create
   */
  export type CmsPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsPage.
     */
    data: XOR<CmsPageCreateInput, CmsPageUncheckedCreateInput>
  }

  /**
   * CmsPage createMany
   */
  export type CmsPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsPages.
     */
    data: CmsPageCreateManyInput | CmsPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPage createManyAndReturn
   */
  export type CmsPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data used to create many CmsPages.
     */
    data: CmsPageCreateManyInput | CmsPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPage update
   */
  export type CmsPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsPage.
     */
    data: XOR<CmsPageUpdateInput, CmsPageUncheckedUpdateInput>
    /**
     * Choose, which CmsPage to update.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage updateMany
   */
  export type CmsPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsPages.
     */
    data: XOR<CmsPageUpdateManyMutationInput, CmsPageUncheckedUpdateManyInput>
    /**
     * Filter which CmsPages to update
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to update.
     */
    limit?: number
  }

  /**
   * CmsPage updateManyAndReturn
   */
  export type CmsPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The data used to update CmsPages.
     */
    data: XOR<CmsPageUpdateManyMutationInput, CmsPageUncheckedUpdateManyInput>
    /**
     * Filter which CmsPages to update
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to update.
     */
    limit?: number
  }

  /**
   * CmsPage upsert
   */
  export type CmsPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsPage to update in case it exists.
     */
    where: CmsPageWhereUniqueInput
    /**
     * In case the CmsPage found by the `where` argument doesn't exist, create a new CmsPage with this data.
     */
    create: XOR<CmsPageCreateInput, CmsPageUncheckedCreateInput>
    /**
     * In case the CmsPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsPageUpdateInput, CmsPageUncheckedUpdateInput>
  }

  /**
   * CmsPage delete
   */
  export type CmsPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
    /**
     * Filter which CmsPage to delete.
     */
    where: CmsPageWhereUniqueInput
  }

  /**
   * CmsPage deleteMany
   */
  export type CmsPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPages to delete
     */
    where?: CmsPageWhereInput
    /**
     * Limit how many CmsPages to delete.
     */
    limit?: number
  }

  /**
   * CmsPage without action
   */
  export type CmsPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPage
     */
    select?: CmsPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPage
     */
    omit?: CmsPageOmit<ExtArgs> | null
  }


  /**
   * Model CmsArticle
   */

  export type AggregateCmsArticle = {
    _count: CmsArticleCountAggregateOutputType | null
    _avg: CmsArticleAvgAggregateOutputType | null
    _sum: CmsArticleSumAggregateOutputType | null
    _min: CmsArticleMinAggregateOutputType | null
    _max: CmsArticleMaxAggregateOutputType | null
  }

  export type CmsArticleAvgAggregateOutputType = {
    id: number | null
  }

  export type CmsArticleSumAggregateOutputType = {
    id: bigint | null
  }

  export type CmsArticleMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    title: string | null
    excerpt: string | null
    bodyMarkdown: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsArticleMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    title: string | null
    excerpt: string | null
    bodyMarkdown: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsArticleCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    excerpt: number
    bodyMarkdown: number
    published: number
    heroFiles: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsArticleAvgAggregateInputType = {
    id?: true
  }

  export type CmsArticleSumAggregateInputType = {
    id?: true
  }

  export type CmsArticleMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    bodyMarkdown?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsArticleMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    bodyMarkdown?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsArticleCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    bodyMarkdown?: true
    published?: true
    heroFiles?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsArticle to aggregate.
     */
    where?: CmsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsArticles to fetch.
     */
    orderBy?: CmsArticleOrderByWithRelationInput | CmsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsArticles
    **/
    _count?: true | CmsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsArticleMaxAggregateInputType
  }

  export type GetCmsArticleAggregateType<T extends CmsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsArticle[P]>
      : GetScalarType<T[P], AggregateCmsArticle[P]>
  }




  export type CmsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsArticleWhereInput
    orderBy?: CmsArticleOrderByWithAggregationInput | CmsArticleOrderByWithAggregationInput[]
    by: CmsArticleScalarFieldEnum[] | CmsArticleScalarFieldEnum
    having?: CmsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsArticleCountAggregateInputType | true
    _avg?: CmsArticleAvgAggregateInputType
    _sum?: CmsArticleSumAggregateInputType
    _min?: CmsArticleMinAggregateInputType
    _max?: CmsArticleMaxAggregateInputType
  }

  export type CmsArticleGroupByOutputType = {
    id: bigint
    slug: string
    title: string
    excerpt: string
    bodyMarkdown: string
    published: boolean
    heroFiles: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CmsArticleCountAggregateOutputType | null
    _avg: CmsArticleAvgAggregateOutputType | null
    _sum: CmsArticleSumAggregateOutputType | null
    _min: CmsArticleMinAggregateOutputType | null
    _max: CmsArticleMaxAggregateOutputType | null
  }

  type GetCmsArticleGroupByPayload<T extends CmsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], CmsArticleGroupByOutputType[P]>
        }
      >
    >


  export type CmsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    heroFiles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsArticle"]>

  export type CmsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    heroFiles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsArticle"]>

  export type CmsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    heroFiles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsArticle"]>

  export type CmsArticleSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    bodyMarkdown?: boolean
    published?: boolean
    heroFiles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "excerpt" | "bodyMarkdown" | "published" | "heroFiles" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsArticle"]>

  export type $CmsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsArticle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      title: string
      excerpt: string
      bodyMarkdown: string
      published: boolean
      heroFiles: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsArticle"]>
    composites: {}
  }

  type CmsArticleGetPayload<S extends boolean | null | undefined | CmsArticleDefaultArgs> = $Result.GetResult<Prisma.$CmsArticlePayload, S>

  type CmsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsArticleCountAggregateInputType | true
    }

  export interface CmsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsArticle'], meta: { name: 'CmsArticle' } }
    /**
     * Find zero or one CmsArticle that matches the filter.
     * @param {CmsArticleFindUniqueArgs} args - Arguments to find a CmsArticle
     * @example
     * // Get one CmsArticle
     * const cmsArticle = await prisma.cmsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsArticleFindUniqueArgs>(args: SelectSubset<T, CmsArticleFindUniqueArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsArticleFindUniqueOrThrowArgs} args - Arguments to find a CmsArticle
     * @example
     * // Get one CmsArticle
     * const cmsArticle = await prisma.cmsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsArticleFindFirstArgs} args - Arguments to find a CmsArticle
     * @example
     * // Get one CmsArticle
     * const cmsArticle = await prisma.cmsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsArticleFindFirstArgs>(args?: SelectSubset<T, CmsArticleFindFirstArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsArticleFindFirstOrThrowArgs} args - Arguments to find a CmsArticle
     * @example
     * // Get one CmsArticle
     * const cmsArticle = await prisma.cmsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsArticles
     * const cmsArticles = await prisma.cmsArticle.findMany()
     * 
     * // Get first 10 CmsArticles
     * const cmsArticles = await prisma.cmsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsArticleWithIdOnly = await prisma.cmsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsArticleFindManyArgs>(args?: SelectSubset<T, CmsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsArticle.
     * @param {CmsArticleCreateArgs} args - Arguments to create a CmsArticle.
     * @example
     * // Create one CmsArticle
     * const CmsArticle = await prisma.cmsArticle.create({
     *   data: {
     *     // ... data to create a CmsArticle
     *   }
     * })
     * 
     */
    create<T extends CmsArticleCreateArgs>(args: SelectSubset<T, CmsArticleCreateArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsArticles.
     * @param {CmsArticleCreateManyArgs} args - Arguments to create many CmsArticles.
     * @example
     * // Create many CmsArticles
     * const cmsArticle = await prisma.cmsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsArticleCreateManyArgs>(args?: SelectSubset<T, CmsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsArticles and returns the data saved in the database.
     * @param {CmsArticleCreateManyAndReturnArgs} args - Arguments to create many CmsArticles.
     * @example
     * // Create many CmsArticles
     * const cmsArticle = await prisma.cmsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsArticles and only return the `id`
     * const cmsArticleWithIdOnly = await prisma.cmsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsArticle.
     * @param {CmsArticleDeleteArgs} args - Arguments to delete one CmsArticle.
     * @example
     * // Delete one CmsArticle
     * const CmsArticle = await prisma.cmsArticle.delete({
     *   where: {
     *     // ... filter to delete one CmsArticle
     *   }
     * })
     * 
     */
    delete<T extends CmsArticleDeleteArgs>(args: SelectSubset<T, CmsArticleDeleteArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsArticle.
     * @param {CmsArticleUpdateArgs} args - Arguments to update one CmsArticle.
     * @example
     * // Update one CmsArticle
     * const cmsArticle = await prisma.cmsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsArticleUpdateArgs>(args: SelectSubset<T, CmsArticleUpdateArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsArticles.
     * @param {CmsArticleDeleteManyArgs} args - Arguments to filter CmsArticles to delete.
     * @example
     * // Delete a few CmsArticles
     * const { count } = await prisma.cmsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsArticleDeleteManyArgs>(args?: SelectSubset<T, CmsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsArticles
     * const cmsArticle = await prisma.cmsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsArticleUpdateManyArgs>(args: SelectSubset<T, CmsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsArticles and returns the data updated in the database.
     * @param {CmsArticleUpdateManyAndReturnArgs} args - Arguments to update many CmsArticles.
     * @example
     * // Update many CmsArticles
     * const cmsArticle = await prisma.cmsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsArticles and only return the `id`
     * const cmsArticleWithIdOnly = await prisma.cmsArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsArticle.
     * @param {CmsArticleUpsertArgs} args - Arguments to update or create a CmsArticle.
     * @example
     * // Update or create a CmsArticle
     * const cmsArticle = await prisma.cmsArticle.upsert({
     *   create: {
     *     // ... data to create a CmsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsArticle we want to update
     *   }
     * })
     */
    upsert<T extends CmsArticleUpsertArgs>(args: SelectSubset<T, CmsArticleUpsertArgs<ExtArgs>>): Prisma__CmsArticleClient<$Result.GetResult<Prisma.$CmsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsArticleCountArgs} args - Arguments to filter CmsArticles to count.
     * @example
     * // Count the number of CmsArticles
     * const count = await prisma.cmsArticle.count({
     *   where: {
     *     // ... the filter for the CmsArticles we want to count
     *   }
     * })
    **/
    count<T extends CmsArticleCountArgs>(
      args?: Subset<T, CmsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsArticleAggregateArgs>(args: Subset<T, CmsArticleAggregateArgs>): Prisma.PrismaPromise<GetCmsArticleAggregateType<T>>

    /**
     * Group by CmsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsArticleGroupByArgs['orderBy'] }
        : { orderBy?: CmsArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsArticle model
   */
  readonly fields: CmsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsArticle model
   */
  interface CmsArticleFieldRefs {
    readonly id: FieldRef<"CmsArticle", 'BigInt'>
    readonly slug: FieldRef<"CmsArticle", 'String'>
    readonly title: FieldRef<"CmsArticle", 'String'>
    readonly excerpt: FieldRef<"CmsArticle", 'String'>
    readonly bodyMarkdown: FieldRef<"CmsArticle", 'String'>
    readonly published: FieldRef<"CmsArticle", 'Boolean'>
    readonly heroFiles: FieldRef<"CmsArticle", 'Json'>
    readonly createdAt: FieldRef<"CmsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsArticle findUnique
   */
  export type CmsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * Filter, which CmsArticle to fetch.
     */
    where: CmsArticleWhereUniqueInput
  }

  /**
   * CmsArticle findUniqueOrThrow
   */
  export type CmsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * Filter, which CmsArticle to fetch.
     */
    where: CmsArticleWhereUniqueInput
  }

  /**
   * CmsArticle findFirst
   */
  export type CmsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * Filter, which CmsArticle to fetch.
     */
    where?: CmsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsArticles to fetch.
     */
    orderBy?: CmsArticleOrderByWithRelationInput | CmsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsArticles.
     */
    cursor?: CmsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsArticles.
     */
    distinct?: CmsArticleScalarFieldEnum | CmsArticleScalarFieldEnum[]
  }

  /**
   * CmsArticle findFirstOrThrow
   */
  export type CmsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * Filter, which CmsArticle to fetch.
     */
    where?: CmsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsArticles to fetch.
     */
    orderBy?: CmsArticleOrderByWithRelationInput | CmsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsArticles.
     */
    cursor?: CmsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsArticles.
     */
    distinct?: CmsArticleScalarFieldEnum | CmsArticleScalarFieldEnum[]
  }

  /**
   * CmsArticle findMany
   */
  export type CmsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * Filter, which CmsArticles to fetch.
     */
    where?: CmsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsArticles to fetch.
     */
    orderBy?: CmsArticleOrderByWithRelationInput | CmsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsArticles.
     */
    cursor?: CmsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsArticles.
     */
    distinct?: CmsArticleScalarFieldEnum | CmsArticleScalarFieldEnum[]
  }

  /**
   * CmsArticle create
   */
  export type CmsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsArticle.
     */
    data: XOR<CmsArticleCreateInput, CmsArticleUncheckedCreateInput>
  }

  /**
   * CmsArticle createMany
   */
  export type CmsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsArticles.
     */
    data: CmsArticleCreateManyInput | CmsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsArticle createManyAndReturn
   */
  export type CmsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many CmsArticles.
     */
    data: CmsArticleCreateManyInput | CmsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsArticle update
   */
  export type CmsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsArticle.
     */
    data: XOR<CmsArticleUpdateInput, CmsArticleUncheckedUpdateInput>
    /**
     * Choose, which CmsArticle to update.
     */
    where: CmsArticleWhereUniqueInput
  }

  /**
   * CmsArticle updateMany
   */
  export type CmsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsArticles.
     */
    data: XOR<CmsArticleUpdateManyMutationInput, CmsArticleUncheckedUpdateManyInput>
    /**
     * Filter which CmsArticles to update
     */
    where?: CmsArticleWhereInput
    /**
     * Limit how many CmsArticles to update.
     */
    limit?: number
  }

  /**
   * CmsArticle updateManyAndReturn
   */
  export type CmsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * The data used to update CmsArticles.
     */
    data: XOR<CmsArticleUpdateManyMutationInput, CmsArticleUncheckedUpdateManyInput>
    /**
     * Filter which CmsArticles to update
     */
    where?: CmsArticleWhereInput
    /**
     * Limit how many CmsArticles to update.
     */
    limit?: number
  }

  /**
   * CmsArticle upsert
   */
  export type CmsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsArticle to update in case it exists.
     */
    where: CmsArticleWhereUniqueInput
    /**
     * In case the CmsArticle found by the `where` argument doesn't exist, create a new CmsArticle with this data.
     */
    create: XOR<CmsArticleCreateInput, CmsArticleUncheckedCreateInput>
    /**
     * In case the CmsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsArticleUpdateInput, CmsArticleUncheckedUpdateInput>
  }

  /**
   * CmsArticle delete
   */
  export type CmsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
    /**
     * Filter which CmsArticle to delete.
     */
    where: CmsArticleWhereUniqueInput
  }

  /**
   * CmsArticle deleteMany
   */
  export type CmsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsArticles to delete
     */
    where?: CmsArticleWhereInput
    /**
     * Limit how many CmsArticles to delete.
     */
    limit?: number
  }

  /**
   * CmsArticle without action
   */
  export type CmsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsArticle
     */
    select?: CmsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsArticle
     */
    omit?: CmsArticleOmit<ExtArgs> | null
  }


  /**
   * Model CmsPromoBlock
   */

  export type AggregateCmsPromoBlock = {
    _count: CmsPromoBlockCountAggregateOutputType | null
    _avg: CmsPromoBlockAvgAggregateOutputType | null
    _sum: CmsPromoBlockSumAggregateOutputType | null
    _min: CmsPromoBlockMinAggregateOutputType | null
    _max: CmsPromoBlockMaxAggregateOutputType | null
  }

  export type CmsPromoBlockAvgAggregateOutputType = {
    id: number | null
  }

  export type CmsPromoBlockSumAggregateOutputType = {
    id: bigint | null
  }

  export type CmsPromoBlockMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    headline: string | null
    subline: string | null
    ctaLabel: string | null
    ctaHref: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPromoBlockMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    headline: string | null
    subline: string | null
    ctaLabel: string | null
    ctaHref: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPromoBlockCountAggregateOutputType = {
    id: number
    code: number
    headline: number
    subline: number
    ctaLabel: number
    ctaHref: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsPromoBlockAvgAggregateInputType = {
    id?: true
  }

  export type CmsPromoBlockSumAggregateInputType = {
    id?: true
  }

  export type CmsPromoBlockMinAggregateInputType = {
    id?: true
    code?: true
    headline?: true
    subline?: true
    ctaLabel?: true
    ctaHref?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPromoBlockMaxAggregateInputType = {
    id?: true
    code?: true
    headline?: true
    subline?: true
    ctaLabel?: true
    ctaHref?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPromoBlockCountAggregateInputType = {
    id?: true
    code?: true
    headline?: true
    subline?: true
    ctaLabel?: true
    ctaHref?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsPromoBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPromoBlock to aggregate.
     */
    where?: CmsPromoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPromoBlocks to fetch.
     */
    orderBy?: CmsPromoBlockOrderByWithRelationInput | CmsPromoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsPromoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPromoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPromoBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsPromoBlocks
    **/
    _count?: true | CmsPromoBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsPromoBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsPromoBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsPromoBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsPromoBlockMaxAggregateInputType
  }

  export type GetCmsPromoBlockAggregateType<T extends CmsPromoBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsPromoBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsPromoBlock[P]>
      : GetScalarType<T[P], AggregateCmsPromoBlock[P]>
  }




  export type CmsPromoBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPromoBlockWhereInput
    orderBy?: CmsPromoBlockOrderByWithAggregationInput | CmsPromoBlockOrderByWithAggregationInput[]
    by: CmsPromoBlockScalarFieldEnum[] | CmsPromoBlockScalarFieldEnum
    having?: CmsPromoBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsPromoBlockCountAggregateInputType | true
    _avg?: CmsPromoBlockAvgAggregateInputType
    _sum?: CmsPromoBlockSumAggregateInputType
    _min?: CmsPromoBlockMinAggregateInputType
    _max?: CmsPromoBlockMaxAggregateInputType
  }

  export type CmsPromoBlockGroupByOutputType = {
    id: bigint
    code: string
    headline: string
    subline: string
    ctaLabel: string
    ctaHref: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CmsPromoBlockCountAggregateOutputType | null
    _avg: CmsPromoBlockAvgAggregateOutputType | null
    _sum: CmsPromoBlockSumAggregateOutputType | null
    _min: CmsPromoBlockMinAggregateOutputType | null
    _max: CmsPromoBlockMaxAggregateOutputType | null
  }

  type GetCmsPromoBlockGroupByPayload<T extends CmsPromoBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsPromoBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsPromoBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsPromoBlockGroupByOutputType[P]>
            : GetScalarType<T[P], CmsPromoBlockGroupByOutputType[P]>
        }
      >
    >


  export type CmsPromoBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    headline?: boolean
    subline?: boolean
    ctaLabel?: boolean
    ctaHref?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPromoBlock"]>

  export type CmsPromoBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    headline?: boolean
    subline?: boolean
    ctaLabel?: boolean
    ctaHref?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPromoBlock"]>

  export type CmsPromoBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    headline?: boolean
    subline?: boolean
    ctaLabel?: boolean
    ctaHref?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsPromoBlock"]>

  export type CmsPromoBlockSelectScalar = {
    id?: boolean
    code?: boolean
    headline?: boolean
    subline?: boolean
    ctaLabel?: boolean
    ctaHref?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsPromoBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "headline" | "subline" | "ctaLabel" | "ctaHref" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsPromoBlock"]>

  export type $CmsPromoBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsPromoBlock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      code: string
      headline: string
      subline: string
      ctaLabel: string
      ctaHref: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsPromoBlock"]>
    composites: {}
  }

  type CmsPromoBlockGetPayload<S extends boolean | null | undefined | CmsPromoBlockDefaultArgs> = $Result.GetResult<Prisma.$CmsPromoBlockPayload, S>

  type CmsPromoBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsPromoBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsPromoBlockCountAggregateInputType | true
    }

  export interface CmsPromoBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsPromoBlock'], meta: { name: 'CmsPromoBlock' } }
    /**
     * Find zero or one CmsPromoBlock that matches the filter.
     * @param {CmsPromoBlockFindUniqueArgs} args - Arguments to find a CmsPromoBlock
     * @example
     * // Get one CmsPromoBlock
     * const cmsPromoBlock = await prisma.cmsPromoBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsPromoBlockFindUniqueArgs>(args: SelectSubset<T, CmsPromoBlockFindUniqueArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsPromoBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsPromoBlockFindUniqueOrThrowArgs} args - Arguments to find a CmsPromoBlock
     * @example
     * // Get one CmsPromoBlock
     * const cmsPromoBlock = await prisma.cmsPromoBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsPromoBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsPromoBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPromoBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPromoBlockFindFirstArgs} args - Arguments to find a CmsPromoBlock
     * @example
     * // Get one CmsPromoBlock
     * const cmsPromoBlock = await prisma.cmsPromoBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsPromoBlockFindFirstArgs>(args?: SelectSubset<T, CmsPromoBlockFindFirstArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPromoBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPromoBlockFindFirstOrThrowArgs} args - Arguments to find a CmsPromoBlock
     * @example
     * // Get one CmsPromoBlock
     * const cmsPromoBlock = await prisma.cmsPromoBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsPromoBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsPromoBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsPromoBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPromoBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsPromoBlocks
     * const cmsPromoBlocks = await prisma.cmsPromoBlock.findMany()
     * 
     * // Get first 10 CmsPromoBlocks
     * const cmsPromoBlocks = await prisma.cmsPromoBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsPromoBlockWithIdOnly = await prisma.cmsPromoBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsPromoBlockFindManyArgs>(args?: SelectSubset<T, CmsPromoBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsPromoBlock.
     * @param {CmsPromoBlockCreateArgs} args - Arguments to create a CmsPromoBlock.
     * @example
     * // Create one CmsPromoBlock
     * const CmsPromoBlock = await prisma.cmsPromoBlock.create({
     *   data: {
     *     // ... data to create a CmsPromoBlock
     *   }
     * })
     * 
     */
    create<T extends CmsPromoBlockCreateArgs>(args: SelectSubset<T, CmsPromoBlockCreateArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsPromoBlocks.
     * @param {CmsPromoBlockCreateManyArgs} args - Arguments to create many CmsPromoBlocks.
     * @example
     * // Create many CmsPromoBlocks
     * const cmsPromoBlock = await prisma.cmsPromoBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsPromoBlockCreateManyArgs>(args?: SelectSubset<T, CmsPromoBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsPromoBlocks and returns the data saved in the database.
     * @param {CmsPromoBlockCreateManyAndReturnArgs} args - Arguments to create many CmsPromoBlocks.
     * @example
     * // Create many CmsPromoBlocks
     * const cmsPromoBlock = await prisma.cmsPromoBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsPromoBlocks and only return the `id`
     * const cmsPromoBlockWithIdOnly = await prisma.cmsPromoBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsPromoBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsPromoBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsPromoBlock.
     * @param {CmsPromoBlockDeleteArgs} args - Arguments to delete one CmsPromoBlock.
     * @example
     * // Delete one CmsPromoBlock
     * const CmsPromoBlock = await prisma.cmsPromoBlock.delete({
     *   where: {
     *     // ... filter to delete one CmsPromoBlock
     *   }
     * })
     * 
     */
    delete<T extends CmsPromoBlockDeleteArgs>(args: SelectSubset<T, CmsPromoBlockDeleteArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsPromoBlock.
     * @param {CmsPromoBlockUpdateArgs} args - Arguments to update one CmsPromoBlock.
     * @example
     * // Update one CmsPromoBlock
     * const cmsPromoBlock = await prisma.cmsPromoBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsPromoBlockUpdateArgs>(args: SelectSubset<T, CmsPromoBlockUpdateArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsPromoBlocks.
     * @param {CmsPromoBlockDeleteManyArgs} args - Arguments to filter CmsPromoBlocks to delete.
     * @example
     * // Delete a few CmsPromoBlocks
     * const { count } = await prisma.cmsPromoBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsPromoBlockDeleteManyArgs>(args?: SelectSubset<T, CmsPromoBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPromoBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPromoBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsPromoBlocks
     * const cmsPromoBlock = await prisma.cmsPromoBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsPromoBlockUpdateManyArgs>(args: SelectSubset<T, CmsPromoBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPromoBlocks and returns the data updated in the database.
     * @param {CmsPromoBlockUpdateManyAndReturnArgs} args - Arguments to update many CmsPromoBlocks.
     * @example
     * // Update many CmsPromoBlocks
     * const cmsPromoBlock = await prisma.cmsPromoBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsPromoBlocks and only return the `id`
     * const cmsPromoBlockWithIdOnly = await prisma.cmsPromoBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsPromoBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsPromoBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsPromoBlock.
     * @param {CmsPromoBlockUpsertArgs} args - Arguments to update or create a CmsPromoBlock.
     * @example
     * // Update or create a CmsPromoBlock
     * const cmsPromoBlock = await prisma.cmsPromoBlock.upsert({
     *   create: {
     *     // ... data to create a CmsPromoBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsPromoBlock we want to update
     *   }
     * })
     */
    upsert<T extends CmsPromoBlockUpsertArgs>(args: SelectSubset<T, CmsPromoBlockUpsertArgs<ExtArgs>>): Prisma__CmsPromoBlockClient<$Result.GetResult<Prisma.$CmsPromoBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsPromoBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPromoBlockCountArgs} args - Arguments to filter CmsPromoBlocks to count.
     * @example
     * // Count the number of CmsPromoBlocks
     * const count = await prisma.cmsPromoBlock.count({
     *   where: {
     *     // ... the filter for the CmsPromoBlocks we want to count
     *   }
     * })
    **/
    count<T extends CmsPromoBlockCountArgs>(
      args?: Subset<T, CmsPromoBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsPromoBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsPromoBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPromoBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsPromoBlockAggregateArgs>(args: Subset<T, CmsPromoBlockAggregateArgs>): Prisma.PrismaPromise<GetCmsPromoBlockAggregateType<T>>

    /**
     * Group by CmsPromoBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPromoBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsPromoBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsPromoBlockGroupByArgs['orderBy'] }
        : { orderBy?: CmsPromoBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsPromoBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsPromoBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsPromoBlock model
   */
  readonly fields: CmsPromoBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsPromoBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsPromoBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsPromoBlock model
   */
  interface CmsPromoBlockFieldRefs {
    readonly id: FieldRef<"CmsPromoBlock", 'BigInt'>
    readonly code: FieldRef<"CmsPromoBlock", 'String'>
    readonly headline: FieldRef<"CmsPromoBlock", 'String'>
    readonly subline: FieldRef<"CmsPromoBlock", 'String'>
    readonly ctaLabel: FieldRef<"CmsPromoBlock", 'String'>
    readonly ctaHref: FieldRef<"CmsPromoBlock", 'String'>
    readonly active: FieldRef<"CmsPromoBlock", 'Boolean'>
    readonly createdAt: FieldRef<"CmsPromoBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsPromoBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsPromoBlock findUnique
   */
  export type CmsPromoBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * Filter, which CmsPromoBlock to fetch.
     */
    where: CmsPromoBlockWhereUniqueInput
  }

  /**
   * CmsPromoBlock findUniqueOrThrow
   */
  export type CmsPromoBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * Filter, which CmsPromoBlock to fetch.
     */
    where: CmsPromoBlockWhereUniqueInput
  }

  /**
   * CmsPromoBlock findFirst
   */
  export type CmsPromoBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * Filter, which CmsPromoBlock to fetch.
     */
    where?: CmsPromoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPromoBlocks to fetch.
     */
    orderBy?: CmsPromoBlockOrderByWithRelationInput | CmsPromoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPromoBlocks.
     */
    cursor?: CmsPromoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPromoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPromoBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPromoBlocks.
     */
    distinct?: CmsPromoBlockScalarFieldEnum | CmsPromoBlockScalarFieldEnum[]
  }

  /**
   * CmsPromoBlock findFirstOrThrow
   */
  export type CmsPromoBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * Filter, which CmsPromoBlock to fetch.
     */
    where?: CmsPromoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPromoBlocks to fetch.
     */
    orderBy?: CmsPromoBlockOrderByWithRelationInput | CmsPromoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPromoBlocks.
     */
    cursor?: CmsPromoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPromoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPromoBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPromoBlocks.
     */
    distinct?: CmsPromoBlockScalarFieldEnum | CmsPromoBlockScalarFieldEnum[]
  }

  /**
   * CmsPromoBlock findMany
   */
  export type CmsPromoBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * Filter, which CmsPromoBlocks to fetch.
     */
    where?: CmsPromoBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPromoBlocks to fetch.
     */
    orderBy?: CmsPromoBlockOrderByWithRelationInput | CmsPromoBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsPromoBlocks.
     */
    cursor?: CmsPromoBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPromoBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPromoBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPromoBlocks.
     */
    distinct?: CmsPromoBlockScalarFieldEnum | CmsPromoBlockScalarFieldEnum[]
  }

  /**
   * CmsPromoBlock create
   */
  export type CmsPromoBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsPromoBlock.
     */
    data: XOR<CmsPromoBlockCreateInput, CmsPromoBlockUncheckedCreateInput>
  }

  /**
   * CmsPromoBlock createMany
   */
  export type CmsPromoBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsPromoBlocks.
     */
    data: CmsPromoBlockCreateManyInput | CmsPromoBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPromoBlock createManyAndReturn
   */
  export type CmsPromoBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * The data used to create many CmsPromoBlocks.
     */
    data: CmsPromoBlockCreateManyInput | CmsPromoBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPromoBlock update
   */
  export type CmsPromoBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsPromoBlock.
     */
    data: XOR<CmsPromoBlockUpdateInput, CmsPromoBlockUncheckedUpdateInput>
    /**
     * Choose, which CmsPromoBlock to update.
     */
    where: CmsPromoBlockWhereUniqueInput
  }

  /**
   * CmsPromoBlock updateMany
   */
  export type CmsPromoBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsPromoBlocks.
     */
    data: XOR<CmsPromoBlockUpdateManyMutationInput, CmsPromoBlockUncheckedUpdateManyInput>
    /**
     * Filter which CmsPromoBlocks to update
     */
    where?: CmsPromoBlockWhereInput
    /**
     * Limit how many CmsPromoBlocks to update.
     */
    limit?: number
  }

  /**
   * CmsPromoBlock updateManyAndReturn
   */
  export type CmsPromoBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * The data used to update CmsPromoBlocks.
     */
    data: XOR<CmsPromoBlockUpdateManyMutationInput, CmsPromoBlockUncheckedUpdateManyInput>
    /**
     * Filter which CmsPromoBlocks to update
     */
    where?: CmsPromoBlockWhereInput
    /**
     * Limit how many CmsPromoBlocks to update.
     */
    limit?: number
  }

  /**
   * CmsPromoBlock upsert
   */
  export type CmsPromoBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsPromoBlock to update in case it exists.
     */
    where: CmsPromoBlockWhereUniqueInput
    /**
     * In case the CmsPromoBlock found by the `where` argument doesn't exist, create a new CmsPromoBlock with this data.
     */
    create: XOR<CmsPromoBlockCreateInput, CmsPromoBlockUncheckedCreateInput>
    /**
     * In case the CmsPromoBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsPromoBlockUpdateInput, CmsPromoBlockUncheckedUpdateInput>
  }

  /**
   * CmsPromoBlock delete
   */
  export type CmsPromoBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
    /**
     * Filter which CmsPromoBlock to delete.
     */
    where: CmsPromoBlockWhereUniqueInput
  }

  /**
   * CmsPromoBlock deleteMany
   */
  export type CmsPromoBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPromoBlocks to delete
     */
    where?: CmsPromoBlockWhereInput
    /**
     * Limit how many CmsPromoBlocks to delete.
     */
    limit?: number
  }

  /**
   * CmsPromoBlock without action
   */
  export type CmsPromoBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPromoBlock
     */
    select?: CmsPromoBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPromoBlock
     */
    omit?: CmsPromoBlockOmit<ExtArgs> | null
  }


  /**
   * Model CmsAiPromptSlot
   */

  export type AggregateCmsAiPromptSlot = {
    _count: CmsAiPromptSlotCountAggregateOutputType | null
    _avg: CmsAiPromptSlotAvgAggregateOutputType | null
    _sum: CmsAiPromptSlotSumAggregateOutputType | null
    _min: CmsAiPromptSlotMinAggregateOutputType | null
    _max: CmsAiPromptSlotMaxAggregateOutputType | null
  }

  export type CmsAiPromptSlotAvgAggregateOutputType = {
    id: number | null
  }

  export type CmsAiPromptSlotSumAggregateOutputType = {
    id: bigint | null
  }

  export type CmsAiPromptSlotMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    title: string | null
    systemPrompt: string | null
    userPromptTemplate: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAiPromptSlotMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    title: string | null
    systemPrompt: string | null
    userPromptTemplate: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAiPromptSlotCountAggregateOutputType = {
    id: number
    code: number
    title: number
    systemPrompt: number
    userPromptTemplate: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsAiPromptSlotAvgAggregateInputType = {
    id?: true
  }

  export type CmsAiPromptSlotSumAggregateInputType = {
    id?: true
  }

  export type CmsAiPromptSlotMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    systemPrompt?: true
    userPromptTemplate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAiPromptSlotMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    systemPrompt?: true
    userPromptTemplate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAiPromptSlotCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    systemPrompt?: true
    userPromptTemplate?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsAiPromptSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAiPromptSlot to aggregate.
     */
    where?: CmsAiPromptSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAiPromptSlots to fetch.
     */
    orderBy?: CmsAiPromptSlotOrderByWithRelationInput | CmsAiPromptSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsAiPromptSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAiPromptSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAiPromptSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsAiPromptSlots
    **/
    _count?: true | CmsAiPromptSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsAiPromptSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsAiPromptSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsAiPromptSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsAiPromptSlotMaxAggregateInputType
  }

  export type GetCmsAiPromptSlotAggregateType<T extends CmsAiPromptSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsAiPromptSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsAiPromptSlot[P]>
      : GetScalarType<T[P], AggregateCmsAiPromptSlot[P]>
  }




  export type CmsAiPromptSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAiPromptSlotWhereInput
    orderBy?: CmsAiPromptSlotOrderByWithAggregationInput | CmsAiPromptSlotOrderByWithAggregationInput[]
    by: CmsAiPromptSlotScalarFieldEnum[] | CmsAiPromptSlotScalarFieldEnum
    having?: CmsAiPromptSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsAiPromptSlotCountAggregateInputType | true
    _avg?: CmsAiPromptSlotAvgAggregateInputType
    _sum?: CmsAiPromptSlotSumAggregateInputType
    _min?: CmsAiPromptSlotMinAggregateInputType
    _max?: CmsAiPromptSlotMaxAggregateInputType
  }

  export type CmsAiPromptSlotGroupByOutputType = {
    id: bigint
    code: string
    title: string
    systemPrompt: string
    userPromptTemplate: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CmsAiPromptSlotCountAggregateOutputType | null
    _avg: CmsAiPromptSlotAvgAggregateOutputType | null
    _sum: CmsAiPromptSlotSumAggregateOutputType | null
    _min: CmsAiPromptSlotMinAggregateOutputType | null
    _max: CmsAiPromptSlotMaxAggregateOutputType | null
  }

  type GetCmsAiPromptSlotGroupByPayload<T extends CmsAiPromptSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsAiPromptSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsAiPromptSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsAiPromptSlotGroupByOutputType[P]>
            : GetScalarType<T[P], CmsAiPromptSlotGroupByOutputType[P]>
        }
      >
    >


  export type CmsAiPromptSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    systemPrompt?: boolean
    userPromptTemplate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAiPromptSlot"]>

  export type CmsAiPromptSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    systemPrompt?: boolean
    userPromptTemplate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAiPromptSlot"]>

  export type CmsAiPromptSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    systemPrompt?: boolean
    userPromptTemplate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cmsAiPromptSlot"]>

  export type CmsAiPromptSlotSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    systemPrompt?: boolean
    userPromptTemplate?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsAiPromptSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "systemPrompt" | "userPromptTemplate" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsAiPromptSlot"]>

  export type $CmsAiPromptSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsAiPromptSlot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      code: string
      title: string
      systemPrompt: string
      userPromptTemplate: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsAiPromptSlot"]>
    composites: {}
  }

  type CmsAiPromptSlotGetPayload<S extends boolean | null | undefined | CmsAiPromptSlotDefaultArgs> = $Result.GetResult<Prisma.$CmsAiPromptSlotPayload, S>

  type CmsAiPromptSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsAiPromptSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsAiPromptSlotCountAggregateInputType | true
    }

  export interface CmsAiPromptSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsAiPromptSlot'], meta: { name: 'CmsAiPromptSlot' } }
    /**
     * Find zero or one CmsAiPromptSlot that matches the filter.
     * @param {CmsAiPromptSlotFindUniqueArgs} args - Arguments to find a CmsAiPromptSlot
     * @example
     * // Get one CmsAiPromptSlot
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsAiPromptSlotFindUniqueArgs>(args: SelectSubset<T, CmsAiPromptSlotFindUniqueArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsAiPromptSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsAiPromptSlotFindUniqueOrThrowArgs} args - Arguments to find a CmsAiPromptSlot
     * @example
     * // Get one CmsAiPromptSlot
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsAiPromptSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsAiPromptSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAiPromptSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAiPromptSlotFindFirstArgs} args - Arguments to find a CmsAiPromptSlot
     * @example
     * // Get one CmsAiPromptSlot
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsAiPromptSlotFindFirstArgs>(args?: SelectSubset<T, CmsAiPromptSlotFindFirstArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAiPromptSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAiPromptSlotFindFirstOrThrowArgs} args - Arguments to find a CmsAiPromptSlot
     * @example
     * // Get one CmsAiPromptSlot
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsAiPromptSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsAiPromptSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsAiPromptSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAiPromptSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsAiPromptSlots
     * const cmsAiPromptSlots = await prisma.cmsAiPromptSlot.findMany()
     * 
     * // Get first 10 CmsAiPromptSlots
     * const cmsAiPromptSlots = await prisma.cmsAiPromptSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsAiPromptSlotWithIdOnly = await prisma.cmsAiPromptSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsAiPromptSlotFindManyArgs>(args?: SelectSubset<T, CmsAiPromptSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsAiPromptSlot.
     * @param {CmsAiPromptSlotCreateArgs} args - Arguments to create a CmsAiPromptSlot.
     * @example
     * // Create one CmsAiPromptSlot
     * const CmsAiPromptSlot = await prisma.cmsAiPromptSlot.create({
     *   data: {
     *     // ... data to create a CmsAiPromptSlot
     *   }
     * })
     * 
     */
    create<T extends CmsAiPromptSlotCreateArgs>(args: SelectSubset<T, CmsAiPromptSlotCreateArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsAiPromptSlots.
     * @param {CmsAiPromptSlotCreateManyArgs} args - Arguments to create many CmsAiPromptSlots.
     * @example
     * // Create many CmsAiPromptSlots
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsAiPromptSlotCreateManyArgs>(args?: SelectSubset<T, CmsAiPromptSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsAiPromptSlots and returns the data saved in the database.
     * @param {CmsAiPromptSlotCreateManyAndReturnArgs} args - Arguments to create many CmsAiPromptSlots.
     * @example
     * // Create many CmsAiPromptSlots
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsAiPromptSlots and only return the `id`
     * const cmsAiPromptSlotWithIdOnly = await prisma.cmsAiPromptSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsAiPromptSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsAiPromptSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsAiPromptSlot.
     * @param {CmsAiPromptSlotDeleteArgs} args - Arguments to delete one CmsAiPromptSlot.
     * @example
     * // Delete one CmsAiPromptSlot
     * const CmsAiPromptSlot = await prisma.cmsAiPromptSlot.delete({
     *   where: {
     *     // ... filter to delete one CmsAiPromptSlot
     *   }
     * })
     * 
     */
    delete<T extends CmsAiPromptSlotDeleteArgs>(args: SelectSubset<T, CmsAiPromptSlotDeleteArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsAiPromptSlot.
     * @param {CmsAiPromptSlotUpdateArgs} args - Arguments to update one CmsAiPromptSlot.
     * @example
     * // Update one CmsAiPromptSlot
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsAiPromptSlotUpdateArgs>(args: SelectSubset<T, CmsAiPromptSlotUpdateArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsAiPromptSlots.
     * @param {CmsAiPromptSlotDeleteManyArgs} args - Arguments to filter CmsAiPromptSlots to delete.
     * @example
     * // Delete a few CmsAiPromptSlots
     * const { count } = await prisma.cmsAiPromptSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsAiPromptSlotDeleteManyArgs>(args?: SelectSubset<T, CmsAiPromptSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAiPromptSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAiPromptSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsAiPromptSlots
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsAiPromptSlotUpdateManyArgs>(args: SelectSubset<T, CmsAiPromptSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAiPromptSlots and returns the data updated in the database.
     * @param {CmsAiPromptSlotUpdateManyAndReturnArgs} args - Arguments to update many CmsAiPromptSlots.
     * @example
     * // Update many CmsAiPromptSlots
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsAiPromptSlots and only return the `id`
     * const cmsAiPromptSlotWithIdOnly = await prisma.cmsAiPromptSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsAiPromptSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsAiPromptSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsAiPromptSlot.
     * @param {CmsAiPromptSlotUpsertArgs} args - Arguments to update or create a CmsAiPromptSlot.
     * @example
     * // Update or create a CmsAiPromptSlot
     * const cmsAiPromptSlot = await prisma.cmsAiPromptSlot.upsert({
     *   create: {
     *     // ... data to create a CmsAiPromptSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsAiPromptSlot we want to update
     *   }
     * })
     */
    upsert<T extends CmsAiPromptSlotUpsertArgs>(args: SelectSubset<T, CmsAiPromptSlotUpsertArgs<ExtArgs>>): Prisma__CmsAiPromptSlotClient<$Result.GetResult<Prisma.$CmsAiPromptSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsAiPromptSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAiPromptSlotCountArgs} args - Arguments to filter CmsAiPromptSlots to count.
     * @example
     * // Count the number of CmsAiPromptSlots
     * const count = await prisma.cmsAiPromptSlot.count({
     *   where: {
     *     // ... the filter for the CmsAiPromptSlots we want to count
     *   }
     * })
    **/
    count<T extends CmsAiPromptSlotCountArgs>(
      args?: Subset<T, CmsAiPromptSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsAiPromptSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsAiPromptSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAiPromptSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsAiPromptSlotAggregateArgs>(args: Subset<T, CmsAiPromptSlotAggregateArgs>): Prisma.PrismaPromise<GetCmsAiPromptSlotAggregateType<T>>

    /**
     * Group by CmsAiPromptSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAiPromptSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsAiPromptSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsAiPromptSlotGroupByArgs['orderBy'] }
        : { orderBy?: CmsAiPromptSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsAiPromptSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsAiPromptSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsAiPromptSlot model
   */
  readonly fields: CmsAiPromptSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsAiPromptSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsAiPromptSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsAiPromptSlot model
   */
  interface CmsAiPromptSlotFieldRefs {
    readonly id: FieldRef<"CmsAiPromptSlot", 'BigInt'>
    readonly code: FieldRef<"CmsAiPromptSlot", 'String'>
    readonly title: FieldRef<"CmsAiPromptSlot", 'String'>
    readonly systemPrompt: FieldRef<"CmsAiPromptSlot", 'String'>
    readonly userPromptTemplate: FieldRef<"CmsAiPromptSlot", 'String'>
    readonly active: FieldRef<"CmsAiPromptSlot", 'Boolean'>
    readonly createdAt: FieldRef<"CmsAiPromptSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsAiPromptSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsAiPromptSlot findUnique
   */
  export type CmsAiPromptSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * Filter, which CmsAiPromptSlot to fetch.
     */
    where: CmsAiPromptSlotWhereUniqueInput
  }

  /**
   * CmsAiPromptSlot findUniqueOrThrow
   */
  export type CmsAiPromptSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * Filter, which CmsAiPromptSlot to fetch.
     */
    where: CmsAiPromptSlotWhereUniqueInput
  }

  /**
   * CmsAiPromptSlot findFirst
   */
  export type CmsAiPromptSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * Filter, which CmsAiPromptSlot to fetch.
     */
    where?: CmsAiPromptSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAiPromptSlots to fetch.
     */
    orderBy?: CmsAiPromptSlotOrderByWithRelationInput | CmsAiPromptSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAiPromptSlots.
     */
    cursor?: CmsAiPromptSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAiPromptSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAiPromptSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAiPromptSlots.
     */
    distinct?: CmsAiPromptSlotScalarFieldEnum | CmsAiPromptSlotScalarFieldEnum[]
  }

  /**
   * CmsAiPromptSlot findFirstOrThrow
   */
  export type CmsAiPromptSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * Filter, which CmsAiPromptSlot to fetch.
     */
    where?: CmsAiPromptSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAiPromptSlots to fetch.
     */
    orderBy?: CmsAiPromptSlotOrderByWithRelationInput | CmsAiPromptSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAiPromptSlots.
     */
    cursor?: CmsAiPromptSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAiPromptSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAiPromptSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAiPromptSlots.
     */
    distinct?: CmsAiPromptSlotScalarFieldEnum | CmsAiPromptSlotScalarFieldEnum[]
  }

  /**
   * CmsAiPromptSlot findMany
   */
  export type CmsAiPromptSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * Filter, which CmsAiPromptSlots to fetch.
     */
    where?: CmsAiPromptSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAiPromptSlots to fetch.
     */
    orderBy?: CmsAiPromptSlotOrderByWithRelationInput | CmsAiPromptSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsAiPromptSlots.
     */
    cursor?: CmsAiPromptSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAiPromptSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAiPromptSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAiPromptSlots.
     */
    distinct?: CmsAiPromptSlotScalarFieldEnum | CmsAiPromptSlotScalarFieldEnum[]
  }

  /**
   * CmsAiPromptSlot create
   */
  export type CmsAiPromptSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * The data needed to create a CmsAiPromptSlot.
     */
    data: XOR<CmsAiPromptSlotCreateInput, CmsAiPromptSlotUncheckedCreateInput>
  }

  /**
   * CmsAiPromptSlot createMany
   */
  export type CmsAiPromptSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsAiPromptSlots.
     */
    data: CmsAiPromptSlotCreateManyInput | CmsAiPromptSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAiPromptSlot createManyAndReturn
   */
  export type CmsAiPromptSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * The data used to create many CmsAiPromptSlots.
     */
    data: CmsAiPromptSlotCreateManyInput | CmsAiPromptSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAiPromptSlot update
   */
  export type CmsAiPromptSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * The data needed to update a CmsAiPromptSlot.
     */
    data: XOR<CmsAiPromptSlotUpdateInput, CmsAiPromptSlotUncheckedUpdateInput>
    /**
     * Choose, which CmsAiPromptSlot to update.
     */
    where: CmsAiPromptSlotWhereUniqueInput
  }

  /**
   * CmsAiPromptSlot updateMany
   */
  export type CmsAiPromptSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsAiPromptSlots.
     */
    data: XOR<CmsAiPromptSlotUpdateManyMutationInput, CmsAiPromptSlotUncheckedUpdateManyInput>
    /**
     * Filter which CmsAiPromptSlots to update
     */
    where?: CmsAiPromptSlotWhereInput
    /**
     * Limit how many CmsAiPromptSlots to update.
     */
    limit?: number
  }

  /**
   * CmsAiPromptSlot updateManyAndReturn
   */
  export type CmsAiPromptSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * The data used to update CmsAiPromptSlots.
     */
    data: XOR<CmsAiPromptSlotUpdateManyMutationInput, CmsAiPromptSlotUncheckedUpdateManyInput>
    /**
     * Filter which CmsAiPromptSlots to update
     */
    where?: CmsAiPromptSlotWhereInput
    /**
     * Limit how many CmsAiPromptSlots to update.
     */
    limit?: number
  }

  /**
   * CmsAiPromptSlot upsert
   */
  export type CmsAiPromptSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * The filter to search for the CmsAiPromptSlot to update in case it exists.
     */
    where: CmsAiPromptSlotWhereUniqueInput
    /**
     * In case the CmsAiPromptSlot found by the `where` argument doesn't exist, create a new CmsAiPromptSlot with this data.
     */
    create: XOR<CmsAiPromptSlotCreateInput, CmsAiPromptSlotUncheckedCreateInput>
    /**
     * In case the CmsAiPromptSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsAiPromptSlotUpdateInput, CmsAiPromptSlotUncheckedUpdateInput>
  }

  /**
   * CmsAiPromptSlot delete
   */
  export type CmsAiPromptSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
    /**
     * Filter which CmsAiPromptSlot to delete.
     */
    where: CmsAiPromptSlotWhereUniqueInput
  }

  /**
   * CmsAiPromptSlot deleteMany
   */
  export type CmsAiPromptSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAiPromptSlots to delete
     */
    where?: CmsAiPromptSlotWhereInput
    /**
     * Limit how many CmsAiPromptSlots to delete.
     */
    limit?: number
  }

  /**
   * CmsAiPromptSlot without action
   */
  export type CmsAiPromptSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAiPromptSlot
     */
    select?: CmsAiPromptSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAiPromptSlot
     */
    omit?: CmsAiPromptSlotOmit<ExtArgs> | null
  }


  /**
   * Model ComfortAuditEvent
   */

  export type AggregateComfortAuditEvent = {
    _count: ComfortAuditEventCountAggregateOutputType | null
    _avg: ComfortAuditEventAvgAggregateOutputType | null
    _sum: ComfortAuditEventSumAggregateOutputType | null
    _min: ComfortAuditEventMinAggregateOutputType | null
    _max: ComfortAuditEventMaxAggregateOutputType | null
  }

  export type ComfortAuditEventAvgAggregateOutputType = {
    id: number | null
    actorUserId: number | null
  }

  export type ComfortAuditEventSumAggregateOutputType = {
    id: bigint | null
    actorUserId: bigint | null
  }

  export type ComfortAuditEventMinAggregateOutputType = {
    id: bigint | null
    actorUserId: bigint | null
    action: string | null
    entityModel: string | null
    entityId: string | null
    correlationId: string | null
    createdAt: Date | null
  }

  export type ComfortAuditEventMaxAggregateOutputType = {
    id: bigint | null
    actorUserId: bigint | null
    action: string | null
    entityModel: string | null
    entityId: string | null
    correlationId: string | null
    createdAt: Date | null
  }

  export type ComfortAuditEventCountAggregateOutputType = {
    id: number
    actorUserId: number
    action: number
    entityModel: number
    entityId: number
    payloadJson: number
    correlationId: number
    createdAt: number
    _all: number
  }


  export type ComfortAuditEventAvgAggregateInputType = {
    id?: true
    actorUserId?: true
  }

  export type ComfortAuditEventSumAggregateInputType = {
    id?: true
    actorUserId?: true
  }

  export type ComfortAuditEventMinAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityModel?: true
    entityId?: true
    correlationId?: true
    createdAt?: true
  }

  export type ComfortAuditEventMaxAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityModel?: true
    entityId?: true
    correlationId?: true
    createdAt?: true
  }

  export type ComfortAuditEventCountAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityModel?: true
    entityId?: true
    payloadJson?: true
    correlationId?: true
    createdAt?: true
    _all?: true
  }

  export type ComfortAuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComfortAuditEvent to aggregate.
     */
    where?: ComfortAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAuditEvents to fetch.
     */
    orderBy?: ComfortAuditEventOrderByWithRelationInput | ComfortAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComfortAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComfortAuditEvents
    **/
    _count?: true | ComfortAuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComfortAuditEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComfortAuditEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComfortAuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComfortAuditEventMaxAggregateInputType
  }

  export type GetComfortAuditEventAggregateType<T extends ComfortAuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateComfortAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComfortAuditEvent[P]>
      : GetScalarType<T[P], AggregateComfortAuditEvent[P]>
  }




  export type ComfortAuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComfortAuditEventWhereInput
    orderBy?: ComfortAuditEventOrderByWithAggregationInput | ComfortAuditEventOrderByWithAggregationInput[]
    by: ComfortAuditEventScalarFieldEnum[] | ComfortAuditEventScalarFieldEnum
    having?: ComfortAuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComfortAuditEventCountAggregateInputType | true
    _avg?: ComfortAuditEventAvgAggregateInputType
    _sum?: ComfortAuditEventSumAggregateInputType
    _min?: ComfortAuditEventMinAggregateInputType
    _max?: ComfortAuditEventMaxAggregateInputType
  }

  export type ComfortAuditEventGroupByOutputType = {
    id: bigint
    actorUserId: bigint | null
    action: string
    entityModel: string
    entityId: string | null
    payloadJson: JsonValue | null
    correlationId: string | null
    createdAt: Date
    _count: ComfortAuditEventCountAggregateOutputType | null
    _avg: ComfortAuditEventAvgAggregateOutputType | null
    _sum: ComfortAuditEventSumAggregateOutputType | null
    _min: ComfortAuditEventMinAggregateOutputType | null
    _max: ComfortAuditEventMaxAggregateOutputType | null
  }

  type GetComfortAuditEventGroupByPayload<T extends ComfortAuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComfortAuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComfortAuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComfortAuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], ComfortAuditEventGroupByOutputType[P]>
        }
      >
    >


  export type ComfortAuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityModel?: boolean
    entityId?: boolean
    payloadJson?: boolean
    correlationId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comfortAuditEvent"]>

  export type ComfortAuditEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityModel?: boolean
    entityId?: boolean
    payloadJson?: boolean
    correlationId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comfortAuditEvent"]>

  export type ComfortAuditEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityModel?: boolean
    entityId?: boolean
    payloadJson?: boolean
    correlationId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comfortAuditEvent"]>

  export type ComfortAuditEventSelectScalar = {
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityModel?: boolean
    entityId?: boolean
    payloadJson?: boolean
    correlationId?: boolean
    createdAt?: boolean
  }

  export type ComfortAuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorUserId" | "action" | "entityModel" | "entityId" | "payloadJson" | "correlationId" | "createdAt", ExtArgs["result"]["comfortAuditEvent"]>

  export type $ComfortAuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComfortAuditEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      actorUserId: bigint | null
      action: string
      entityModel: string
      entityId: string | null
      payloadJson: Prisma.JsonValue | null
      correlationId: string | null
      createdAt: Date
    }, ExtArgs["result"]["comfortAuditEvent"]>
    composites: {}
  }

  type ComfortAuditEventGetPayload<S extends boolean | null | undefined | ComfortAuditEventDefaultArgs> = $Result.GetResult<Prisma.$ComfortAuditEventPayload, S>

  type ComfortAuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComfortAuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComfortAuditEventCountAggregateInputType | true
    }

  export interface ComfortAuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComfortAuditEvent'], meta: { name: 'ComfortAuditEvent' } }
    /**
     * Find zero or one ComfortAuditEvent that matches the filter.
     * @param {ComfortAuditEventFindUniqueArgs} args - Arguments to find a ComfortAuditEvent
     * @example
     * // Get one ComfortAuditEvent
     * const comfortAuditEvent = await prisma.comfortAuditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComfortAuditEventFindUniqueArgs>(args: SelectSubset<T, ComfortAuditEventFindUniqueArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComfortAuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComfortAuditEventFindUniqueOrThrowArgs} args - Arguments to find a ComfortAuditEvent
     * @example
     * // Get one ComfortAuditEvent
     * const comfortAuditEvent = await prisma.comfortAuditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComfortAuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ComfortAuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComfortAuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAuditEventFindFirstArgs} args - Arguments to find a ComfortAuditEvent
     * @example
     * // Get one ComfortAuditEvent
     * const comfortAuditEvent = await prisma.comfortAuditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComfortAuditEventFindFirstArgs>(args?: SelectSubset<T, ComfortAuditEventFindFirstArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComfortAuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAuditEventFindFirstOrThrowArgs} args - Arguments to find a ComfortAuditEvent
     * @example
     * // Get one ComfortAuditEvent
     * const comfortAuditEvent = await prisma.comfortAuditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComfortAuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ComfortAuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComfortAuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComfortAuditEvents
     * const comfortAuditEvents = await prisma.comfortAuditEvent.findMany()
     * 
     * // Get first 10 ComfortAuditEvents
     * const comfortAuditEvents = await prisma.comfortAuditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comfortAuditEventWithIdOnly = await prisma.comfortAuditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComfortAuditEventFindManyArgs>(args?: SelectSubset<T, ComfortAuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComfortAuditEvent.
     * @param {ComfortAuditEventCreateArgs} args - Arguments to create a ComfortAuditEvent.
     * @example
     * // Create one ComfortAuditEvent
     * const ComfortAuditEvent = await prisma.comfortAuditEvent.create({
     *   data: {
     *     // ... data to create a ComfortAuditEvent
     *   }
     * })
     * 
     */
    create<T extends ComfortAuditEventCreateArgs>(args: SelectSubset<T, ComfortAuditEventCreateArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComfortAuditEvents.
     * @param {ComfortAuditEventCreateManyArgs} args - Arguments to create many ComfortAuditEvents.
     * @example
     * // Create many ComfortAuditEvents
     * const comfortAuditEvent = await prisma.comfortAuditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComfortAuditEventCreateManyArgs>(args?: SelectSubset<T, ComfortAuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComfortAuditEvents and returns the data saved in the database.
     * @param {ComfortAuditEventCreateManyAndReturnArgs} args - Arguments to create many ComfortAuditEvents.
     * @example
     * // Create many ComfortAuditEvents
     * const comfortAuditEvent = await prisma.comfortAuditEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComfortAuditEvents and only return the `id`
     * const comfortAuditEventWithIdOnly = await prisma.comfortAuditEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComfortAuditEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ComfortAuditEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComfortAuditEvent.
     * @param {ComfortAuditEventDeleteArgs} args - Arguments to delete one ComfortAuditEvent.
     * @example
     * // Delete one ComfortAuditEvent
     * const ComfortAuditEvent = await prisma.comfortAuditEvent.delete({
     *   where: {
     *     // ... filter to delete one ComfortAuditEvent
     *   }
     * })
     * 
     */
    delete<T extends ComfortAuditEventDeleteArgs>(args: SelectSubset<T, ComfortAuditEventDeleteArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComfortAuditEvent.
     * @param {ComfortAuditEventUpdateArgs} args - Arguments to update one ComfortAuditEvent.
     * @example
     * // Update one ComfortAuditEvent
     * const comfortAuditEvent = await prisma.comfortAuditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComfortAuditEventUpdateArgs>(args: SelectSubset<T, ComfortAuditEventUpdateArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComfortAuditEvents.
     * @param {ComfortAuditEventDeleteManyArgs} args - Arguments to filter ComfortAuditEvents to delete.
     * @example
     * // Delete a few ComfortAuditEvents
     * const { count } = await prisma.comfortAuditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComfortAuditEventDeleteManyArgs>(args?: SelectSubset<T, ComfortAuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComfortAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComfortAuditEvents
     * const comfortAuditEvent = await prisma.comfortAuditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComfortAuditEventUpdateManyArgs>(args: SelectSubset<T, ComfortAuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComfortAuditEvents and returns the data updated in the database.
     * @param {ComfortAuditEventUpdateManyAndReturnArgs} args - Arguments to update many ComfortAuditEvents.
     * @example
     * // Update many ComfortAuditEvents
     * const comfortAuditEvent = await prisma.comfortAuditEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComfortAuditEvents and only return the `id`
     * const comfortAuditEventWithIdOnly = await prisma.comfortAuditEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComfortAuditEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ComfortAuditEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComfortAuditEvent.
     * @param {ComfortAuditEventUpsertArgs} args - Arguments to update or create a ComfortAuditEvent.
     * @example
     * // Update or create a ComfortAuditEvent
     * const comfortAuditEvent = await prisma.comfortAuditEvent.upsert({
     *   create: {
     *     // ... data to create a ComfortAuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComfortAuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends ComfortAuditEventUpsertArgs>(args: SelectSubset<T, ComfortAuditEventUpsertArgs<ExtArgs>>): Prisma__ComfortAuditEventClient<$Result.GetResult<Prisma.$ComfortAuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComfortAuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAuditEventCountArgs} args - Arguments to filter ComfortAuditEvents to count.
     * @example
     * // Count the number of ComfortAuditEvents
     * const count = await prisma.comfortAuditEvent.count({
     *   where: {
     *     // ... the filter for the ComfortAuditEvents we want to count
     *   }
     * })
    **/
    count<T extends ComfortAuditEventCountArgs>(
      args?: Subset<T, ComfortAuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComfortAuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComfortAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComfortAuditEventAggregateArgs>(args: Subset<T, ComfortAuditEventAggregateArgs>): Prisma.PrismaPromise<GetComfortAuditEventAggregateType<T>>

    /**
     * Group by ComfortAuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAuditEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComfortAuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComfortAuditEventGroupByArgs['orderBy'] }
        : { orderBy?: ComfortAuditEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComfortAuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComfortAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComfortAuditEvent model
   */
  readonly fields: ComfortAuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComfortAuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComfortAuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComfortAuditEvent model
   */
  interface ComfortAuditEventFieldRefs {
    readonly id: FieldRef<"ComfortAuditEvent", 'BigInt'>
    readonly actorUserId: FieldRef<"ComfortAuditEvent", 'BigInt'>
    readonly action: FieldRef<"ComfortAuditEvent", 'String'>
    readonly entityModel: FieldRef<"ComfortAuditEvent", 'String'>
    readonly entityId: FieldRef<"ComfortAuditEvent", 'String'>
    readonly payloadJson: FieldRef<"ComfortAuditEvent", 'Json'>
    readonly correlationId: FieldRef<"ComfortAuditEvent", 'String'>
    readonly createdAt: FieldRef<"ComfortAuditEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComfortAuditEvent findUnique
   */
  export type ComfortAuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAuditEvent to fetch.
     */
    where: ComfortAuditEventWhereUniqueInput
  }

  /**
   * ComfortAuditEvent findUniqueOrThrow
   */
  export type ComfortAuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAuditEvent to fetch.
     */
    where: ComfortAuditEventWhereUniqueInput
  }

  /**
   * ComfortAuditEvent findFirst
   */
  export type ComfortAuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAuditEvent to fetch.
     */
    where?: ComfortAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAuditEvents to fetch.
     */
    orderBy?: ComfortAuditEventOrderByWithRelationInput | ComfortAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComfortAuditEvents.
     */
    cursor?: ComfortAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAuditEvents.
     */
    distinct?: ComfortAuditEventScalarFieldEnum | ComfortAuditEventScalarFieldEnum[]
  }

  /**
   * ComfortAuditEvent findFirstOrThrow
   */
  export type ComfortAuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAuditEvent to fetch.
     */
    where?: ComfortAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAuditEvents to fetch.
     */
    orderBy?: ComfortAuditEventOrderByWithRelationInput | ComfortAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComfortAuditEvents.
     */
    cursor?: ComfortAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAuditEvents.
     */
    distinct?: ComfortAuditEventScalarFieldEnum | ComfortAuditEventScalarFieldEnum[]
  }

  /**
   * ComfortAuditEvent findMany
   */
  export type ComfortAuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAuditEvents to fetch.
     */
    where?: ComfortAuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAuditEvents to fetch.
     */
    orderBy?: ComfortAuditEventOrderByWithRelationInput | ComfortAuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComfortAuditEvents.
     */
    cursor?: ComfortAuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAuditEvents.
     */
    distinct?: ComfortAuditEventScalarFieldEnum | ComfortAuditEventScalarFieldEnum[]
  }

  /**
   * ComfortAuditEvent create
   */
  export type ComfortAuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * The data needed to create a ComfortAuditEvent.
     */
    data: XOR<ComfortAuditEventCreateInput, ComfortAuditEventUncheckedCreateInput>
  }

  /**
   * ComfortAuditEvent createMany
   */
  export type ComfortAuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComfortAuditEvents.
     */
    data: ComfortAuditEventCreateManyInput | ComfortAuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComfortAuditEvent createManyAndReturn
   */
  export type ComfortAuditEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * The data used to create many ComfortAuditEvents.
     */
    data: ComfortAuditEventCreateManyInput | ComfortAuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComfortAuditEvent update
   */
  export type ComfortAuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * The data needed to update a ComfortAuditEvent.
     */
    data: XOR<ComfortAuditEventUpdateInput, ComfortAuditEventUncheckedUpdateInput>
    /**
     * Choose, which ComfortAuditEvent to update.
     */
    where: ComfortAuditEventWhereUniqueInput
  }

  /**
   * ComfortAuditEvent updateMany
   */
  export type ComfortAuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComfortAuditEvents.
     */
    data: XOR<ComfortAuditEventUpdateManyMutationInput, ComfortAuditEventUncheckedUpdateManyInput>
    /**
     * Filter which ComfortAuditEvents to update
     */
    where?: ComfortAuditEventWhereInput
    /**
     * Limit how many ComfortAuditEvents to update.
     */
    limit?: number
  }

  /**
   * ComfortAuditEvent updateManyAndReturn
   */
  export type ComfortAuditEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * The data used to update ComfortAuditEvents.
     */
    data: XOR<ComfortAuditEventUpdateManyMutationInput, ComfortAuditEventUncheckedUpdateManyInput>
    /**
     * Filter which ComfortAuditEvents to update
     */
    where?: ComfortAuditEventWhereInput
    /**
     * Limit how many ComfortAuditEvents to update.
     */
    limit?: number
  }

  /**
   * ComfortAuditEvent upsert
   */
  export type ComfortAuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * The filter to search for the ComfortAuditEvent to update in case it exists.
     */
    where: ComfortAuditEventWhereUniqueInput
    /**
     * In case the ComfortAuditEvent found by the `where` argument doesn't exist, create a new ComfortAuditEvent with this data.
     */
    create: XOR<ComfortAuditEventCreateInput, ComfortAuditEventUncheckedCreateInput>
    /**
     * In case the ComfortAuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComfortAuditEventUpdateInput, ComfortAuditEventUncheckedUpdateInput>
  }

  /**
   * ComfortAuditEvent delete
   */
  export type ComfortAuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
    /**
     * Filter which ComfortAuditEvent to delete.
     */
    where: ComfortAuditEventWhereUniqueInput
  }

  /**
   * ComfortAuditEvent deleteMany
   */
  export type ComfortAuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComfortAuditEvents to delete
     */
    where?: ComfortAuditEventWhereInput
    /**
     * Limit how many ComfortAuditEvents to delete.
     */
    limit?: number
  }

  /**
   * ComfortAuditEvent without action
   */
  export type ComfortAuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAuditEvent
     */
    select?: ComfortAuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAuditEvent
     */
    omit?: ComfortAuditEventOmit<ExtArgs> | null
  }


  /**
   * Model ComfortAiCallLog
   */

  export type AggregateComfortAiCallLog = {
    _count: ComfortAiCallLogCountAggregateOutputType | null
    _avg: ComfortAiCallLogAvgAggregateOutputType | null
    _sum: ComfortAiCallLogSumAggregateOutputType | null
    _min: ComfortAiCallLogMinAggregateOutputType | null
    _max: ComfortAiCallLogMaxAggregateOutputType | null
  }

  export type ComfortAiCallLogAvgAggregateOutputType = {
    id: number | null
    latencyMs: number | null
    promptChars: number | null
    responseChars: number | null
  }

  export type ComfortAiCallLogSumAggregateOutputType = {
    id: bigint | null
    latencyMs: number | null
    promptChars: number | null
    responseChars: number | null
  }

  export type ComfortAiCallLogMinAggregateOutputType = {
    id: bigint | null
    correlationId: string | null
    provider: string | null
    model: string | null
    latencyMs: number | null
    promptChars: number | null
    responseChars: number | null
    success: boolean | null
    createdAt: Date | null
  }

  export type ComfortAiCallLogMaxAggregateOutputType = {
    id: bigint | null
    correlationId: string | null
    provider: string | null
    model: string | null
    latencyMs: number | null
    promptChars: number | null
    responseChars: number | null
    success: boolean | null
    createdAt: Date | null
  }

  export type ComfortAiCallLogCountAggregateOutputType = {
    id: number
    correlationId: number
    provider: number
    model: number
    latencyMs: number
    promptChars: number
    responseChars: number
    success: number
    createdAt: number
    _all: number
  }


  export type ComfortAiCallLogAvgAggregateInputType = {
    id?: true
    latencyMs?: true
    promptChars?: true
    responseChars?: true
  }

  export type ComfortAiCallLogSumAggregateInputType = {
    id?: true
    latencyMs?: true
    promptChars?: true
    responseChars?: true
  }

  export type ComfortAiCallLogMinAggregateInputType = {
    id?: true
    correlationId?: true
    provider?: true
    model?: true
    latencyMs?: true
    promptChars?: true
    responseChars?: true
    success?: true
    createdAt?: true
  }

  export type ComfortAiCallLogMaxAggregateInputType = {
    id?: true
    correlationId?: true
    provider?: true
    model?: true
    latencyMs?: true
    promptChars?: true
    responseChars?: true
    success?: true
    createdAt?: true
  }

  export type ComfortAiCallLogCountAggregateInputType = {
    id?: true
    correlationId?: true
    provider?: true
    model?: true
    latencyMs?: true
    promptChars?: true
    responseChars?: true
    success?: true
    createdAt?: true
    _all?: true
  }

  export type ComfortAiCallLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComfortAiCallLog to aggregate.
     */
    where?: ComfortAiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiCallLogs to fetch.
     */
    orderBy?: ComfortAiCallLogOrderByWithRelationInput | ComfortAiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComfortAiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiCallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComfortAiCallLogs
    **/
    _count?: true | ComfortAiCallLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComfortAiCallLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComfortAiCallLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComfortAiCallLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComfortAiCallLogMaxAggregateInputType
  }

  export type GetComfortAiCallLogAggregateType<T extends ComfortAiCallLogAggregateArgs> = {
        [P in keyof T & keyof AggregateComfortAiCallLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComfortAiCallLog[P]>
      : GetScalarType<T[P], AggregateComfortAiCallLog[P]>
  }




  export type ComfortAiCallLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComfortAiCallLogWhereInput
    orderBy?: ComfortAiCallLogOrderByWithAggregationInput | ComfortAiCallLogOrderByWithAggregationInput[]
    by: ComfortAiCallLogScalarFieldEnum[] | ComfortAiCallLogScalarFieldEnum
    having?: ComfortAiCallLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComfortAiCallLogCountAggregateInputType | true
    _avg?: ComfortAiCallLogAvgAggregateInputType
    _sum?: ComfortAiCallLogSumAggregateInputType
    _min?: ComfortAiCallLogMinAggregateInputType
    _max?: ComfortAiCallLogMaxAggregateInputType
  }

  export type ComfortAiCallLogGroupByOutputType = {
    id: bigint
    correlationId: string | null
    provider: string
    model: string
    latencyMs: number
    promptChars: number
    responseChars: number
    success: boolean
    createdAt: Date
    _count: ComfortAiCallLogCountAggregateOutputType | null
    _avg: ComfortAiCallLogAvgAggregateOutputType | null
    _sum: ComfortAiCallLogSumAggregateOutputType | null
    _min: ComfortAiCallLogMinAggregateOutputType | null
    _max: ComfortAiCallLogMaxAggregateOutputType | null
  }

  type GetComfortAiCallLogGroupByPayload<T extends ComfortAiCallLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComfortAiCallLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComfortAiCallLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComfortAiCallLogGroupByOutputType[P]>
            : GetScalarType<T[P], ComfortAiCallLogGroupByOutputType[P]>
        }
      >
    >


  export type ComfortAiCallLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correlationId?: boolean
    provider?: boolean
    model?: boolean
    latencyMs?: boolean
    promptChars?: boolean
    responseChars?: boolean
    success?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comfortAiCallLog"]>

  export type ComfortAiCallLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correlationId?: boolean
    provider?: boolean
    model?: boolean
    latencyMs?: boolean
    promptChars?: boolean
    responseChars?: boolean
    success?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comfortAiCallLog"]>

  export type ComfortAiCallLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correlationId?: boolean
    provider?: boolean
    model?: boolean
    latencyMs?: boolean
    promptChars?: boolean
    responseChars?: boolean
    success?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["comfortAiCallLog"]>

  export type ComfortAiCallLogSelectScalar = {
    id?: boolean
    correlationId?: boolean
    provider?: boolean
    model?: boolean
    latencyMs?: boolean
    promptChars?: boolean
    responseChars?: boolean
    success?: boolean
    createdAt?: boolean
  }

  export type ComfortAiCallLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "correlationId" | "provider" | "model" | "latencyMs" | "promptChars" | "responseChars" | "success" | "createdAt", ExtArgs["result"]["comfortAiCallLog"]>

  export type $ComfortAiCallLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComfortAiCallLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      correlationId: string | null
      provider: string
      model: string
      latencyMs: number
      promptChars: number
      responseChars: number
      success: boolean
      createdAt: Date
    }, ExtArgs["result"]["comfortAiCallLog"]>
    composites: {}
  }

  type ComfortAiCallLogGetPayload<S extends boolean | null | undefined | ComfortAiCallLogDefaultArgs> = $Result.GetResult<Prisma.$ComfortAiCallLogPayload, S>

  type ComfortAiCallLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComfortAiCallLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComfortAiCallLogCountAggregateInputType | true
    }

  export interface ComfortAiCallLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComfortAiCallLog'], meta: { name: 'ComfortAiCallLog' } }
    /**
     * Find zero or one ComfortAiCallLog that matches the filter.
     * @param {ComfortAiCallLogFindUniqueArgs} args - Arguments to find a ComfortAiCallLog
     * @example
     * // Get one ComfortAiCallLog
     * const comfortAiCallLog = await prisma.comfortAiCallLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComfortAiCallLogFindUniqueArgs>(args: SelectSubset<T, ComfortAiCallLogFindUniqueArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComfortAiCallLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComfortAiCallLogFindUniqueOrThrowArgs} args - Arguments to find a ComfortAiCallLog
     * @example
     * // Get one ComfortAiCallLog
     * const comfortAiCallLog = await prisma.comfortAiCallLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComfortAiCallLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ComfortAiCallLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComfortAiCallLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiCallLogFindFirstArgs} args - Arguments to find a ComfortAiCallLog
     * @example
     * // Get one ComfortAiCallLog
     * const comfortAiCallLog = await prisma.comfortAiCallLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComfortAiCallLogFindFirstArgs>(args?: SelectSubset<T, ComfortAiCallLogFindFirstArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComfortAiCallLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiCallLogFindFirstOrThrowArgs} args - Arguments to find a ComfortAiCallLog
     * @example
     * // Get one ComfortAiCallLog
     * const comfortAiCallLog = await prisma.comfortAiCallLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComfortAiCallLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ComfortAiCallLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComfortAiCallLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiCallLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComfortAiCallLogs
     * const comfortAiCallLogs = await prisma.comfortAiCallLog.findMany()
     * 
     * // Get first 10 ComfortAiCallLogs
     * const comfortAiCallLogs = await prisma.comfortAiCallLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comfortAiCallLogWithIdOnly = await prisma.comfortAiCallLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComfortAiCallLogFindManyArgs>(args?: SelectSubset<T, ComfortAiCallLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComfortAiCallLog.
     * @param {ComfortAiCallLogCreateArgs} args - Arguments to create a ComfortAiCallLog.
     * @example
     * // Create one ComfortAiCallLog
     * const ComfortAiCallLog = await prisma.comfortAiCallLog.create({
     *   data: {
     *     // ... data to create a ComfortAiCallLog
     *   }
     * })
     * 
     */
    create<T extends ComfortAiCallLogCreateArgs>(args: SelectSubset<T, ComfortAiCallLogCreateArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComfortAiCallLogs.
     * @param {ComfortAiCallLogCreateManyArgs} args - Arguments to create many ComfortAiCallLogs.
     * @example
     * // Create many ComfortAiCallLogs
     * const comfortAiCallLog = await prisma.comfortAiCallLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComfortAiCallLogCreateManyArgs>(args?: SelectSubset<T, ComfortAiCallLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComfortAiCallLogs and returns the data saved in the database.
     * @param {ComfortAiCallLogCreateManyAndReturnArgs} args - Arguments to create many ComfortAiCallLogs.
     * @example
     * // Create many ComfortAiCallLogs
     * const comfortAiCallLog = await prisma.comfortAiCallLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComfortAiCallLogs and only return the `id`
     * const comfortAiCallLogWithIdOnly = await prisma.comfortAiCallLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComfortAiCallLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ComfortAiCallLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComfortAiCallLog.
     * @param {ComfortAiCallLogDeleteArgs} args - Arguments to delete one ComfortAiCallLog.
     * @example
     * // Delete one ComfortAiCallLog
     * const ComfortAiCallLog = await prisma.comfortAiCallLog.delete({
     *   where: {
     *     // ... filter to delete one ComfortAiCallLog
     *   }
     * })
     * 
     */
    delete<T extends ComfortAiCallLogDeleteArgs>(args: SelectSubset<T, ComfortAiCallLogDeleteArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComfortAiCallLog.
     * @param {ComfortAiCallLogUpdateArgs} args - Arguments to update one ComfortAiCallLog.
     * @example
     * // Update one ComfortAiCallLog
     * const comfortAiCallLog = await prisma.comfortAiCallLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComfortAiCallLogUpdateArgs>(args: SelectSubset<T, ComfortAiCallLogUpdateArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComfortAiCallLogs.
     * @param {ComfortAiCallLogDeleteManyArgs} args - Arguments to filter ComfortAiCallLogs to delete.
     * @example
     * // Delete a few ComfortAiCallLogs
     * const { count } = await prisma.comfortAiCallLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComfortAiCallLogDeleteManyArgs>(args?: SelectSubset<T, ComfortAiCallLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComfortAiCallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiCallLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComfortAiCallLogs
     * const comfortAiCallLog = await prisma.comfortAiCallLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComfortAiCallLogUpdateManyArgs>(args: SelectSubset<T, ComfortAiCallLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComfortAiCallLogs and returns the data updated in the database.
     * @param {ComfortAiCallLogUpdateManyAndReturnArgs} args - Arguments to update many ComfortAiCallLogs.
     * @example
     * // Update many ComfortAiCallLogs
     * const comfortAiCallLog = await prisma.comfortAiCallLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComfortAiCallLogs and only return the `id`
     * const comfortAiCallLogWithIdOnly = await prisma.comfortAiCallLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComfortAiCallLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ComfortAiCallLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComfortAiCallLog.
     * @param {ComfortAiCallLogUpsertArgs} args - Arguments to update or create a ComfortAiCallLog.
     * @example
     * // Update or create a ComfortAiCallLog
     * const comfortAiCallLog = await prisma.comfortAiCallLog.upsert({
     *   create: {
     *     // ... data to create a ComfortAiCallLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComfortAiCallLog we want to update
     *   }
     * })
     */
    upsert<T extends ComfortAiCallLogUpsertArgs>(args: SelectSubset<T, ComfortAiCallLogUpsertArgs<ExtArgs>>): Prisma__ComfortAiCallLogClient<$Result.GetResult<Prisma.$ComfortAiCallLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComfortAiCallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiCallLogCountArgs} args - Arguments to filter ComfortAiCallLogs to count.
     * @example
     * // Count the number of ComfortAiCallLogs
     * const count = await prisma.comfortAiCallLog.count({
     *   where: {
     *     // ... the filter for the ComfortAiCallLogs we want to count
     *   }
     * })
    **/
    count<T extends ComfortAiCallLogCountArgs>(
      args?: Subset<T, ComfortAiCallLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComfortAiCallLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComfortAiCallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiCallLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComfortAiCallLogAggregateArgs>(args: Subset<T, ComfortAiCallLogAggregateArgs>): Prisma.PrismaPromise<GetComfortAiCallLogAggregateType<T>>

    /**
     * Group by ComfortAiCallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiCallLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComfortAiCallLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComfortAiCallLogGroupByArgs['orderBy'] }
        : { orderBy?: ComfortAiCallLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComfortAiCallLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComfortAiCallLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComfortAiCallLog model
   */
  readonly fields: ComfortAiCallLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComfortAiCallLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComfortAiCallLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComfortAiCallLog model
   */
  interface ComfortAiCallLogFieldRefs {
    readonly id: FieldRef<"ComfortAiCallLog", 'BigInt'>
    readonly correlationId: FieldRef<"ComfortAiCallLog", 'String'>
    readonly provider: FieldRef<"ComfortAiCallLog", 'String'>
    readonly model: FieldRef<"ComfortAiCallLog", 'String'>
    readonly latencyMs: FieldRef<"ComfortAiCallLog", 'Int'>
    readonly promptChars: FieldRef<"ComfortAiCallLog", 'Int'>
    readonly responseChars: FieldRef<"ComfortAiCallLog", 'Int'>
    readonly success: FieldRef<"ComfortAiCallLog", 'Boolean'>
    readonly createdAt: FieldRef<"ComfortAiCallLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComfortAiCallLog findUnique
   */
  export type ComfortAiCallLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAiCallLog to fetch.
     */
    where: ComfortAiCallLogWhereUniqueInput
  }

  /**
   * ComfortAiCallLog findUniqueOrThrow
   */
  export type ComfortAiCallLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAiCallLog to fetch.
     */
    where: ComfortAiCallLogWhereUniqueInput
  }

  /**
   * ComfortAiCallLog findFirst
   */
  export type ComfortAiCallLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAiCallLog to fetch.
     */
    where?: ComfortAiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiCallLogs to fetch.
     */
    orderBy?: ComfortAiCallLogOrderByWithRelationInput | ComfortAiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComfortAiCallLogs.
     */
    cursor?: ComfortAiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiCallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAiCallLogs.
     */
    distinct?: ComfortAiCallLogScalarFieldEnum | ComfortAiCallLogScalarFieldEnum[]
  }

  /**
   * ComfortAiCallLog findFirstOrThrow
   */
  export type ComfortAiCallLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAiCallLog to fetch.
     */
    where?: ComfortAiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiCallLogs to fetch.
     */
    orderBy?: ComfortAiCallLogOrderByWithRelationInput | ComfortAiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComfortAiCallLogs.
     */
    cursor?: ComfortAiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiCallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAiCallLogs.
     */
    distinct?: ComfortAiCallLogScalarFieldEnum | ComfortAiCallLogScalarFieldEnum[]
  }

  /**
   * ComfortAiCallLog findMany
   */
  export type ComfortAiCallLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * Filter, which ComfortAiCallLogs to fetch.
     */
    where?: ComfortAiCallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiCallLogs to fetch.
     */
    orderBy?: ComfortAiCallLogOrderByWithRelationInput | ComfortAiCallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComfortAiCallLogs.
     */
    cursor?: ComfortAiCallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiCallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiCallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAiCallLogs.
     */
    distinct?: ComfortAiCallLogScalarFieldEnum | ComfortAiCallLogScalarFieldEnum[]
  }

  /**
   * ComfortAiCallLog create
   */
  export type ComfortAiCallLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ComfortAiCallLog.
     */
    data: XOR<ComfortAiCallLogCreateInput, ComfortAiCallLogUncheckedCreateInput>
  }

  /**
   * ComfortAiCallLog createMany
   */
  export type ComfortAiCallLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComfortAiCallLogs.
     */
    data: ComfortAiCallLogCreateManyInput | ComfortAiCallLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComfortAiCallLog createManyAndReturn
   */
  export type ComfortAiCallLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * The data used to create many ComfortAiCallLogs.
     */
    data: ComfortAiCallLogCreateManyInput | ComfortAiCallLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComfortAiCallLog update
   */
  export type ComfortAiCallLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ComfortAiCallLog.
     */
    data: XOR<ComfortAiCallLogUpdateInput, ComfortAiCallLogUncheckedUpdateInput>
    /**
     * Choose, which ComfortAiCallLog to update.
     */
    where: ComfortAiCallLogWhereUniqueInput
  }

  /**
   * ComfortAiCallLog updateMany
   */
  export type ComfortAiCallLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComfortAiCallLogs.
     */
    data: XOR<ComfortAiCallLogUpdateManyMutationInput, ComfortAiCallLogUncheckedUpdateManyInput>
    /**
     * Filter which ComfortAiCallLogs to update
     */
    where?: ComfortAiCallLogWhereInput
    /**
     * Limit how many ComfortAiCallLogs to update.
     */
    limit?: number
  }

  /**
   * ComfortAiCallLog updateManyAndReturn
   */
  export type ComfortAiCallLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * The data used to update ComfortAiCallLogs.
     */
    data: XOR<ComfortAiCallLogUpdateManyMutationInput, ComfortAiCallLogUncheckedUpdateManyInput>
    /**
     * Filter which ComfortAiCallLogs to update
     */
    where?: ComfortAiCallLogWhereInput
    /**
     * Limit how many ComfortAiCallLogs to update.
     */
    limit?: number
  }

  /**
   * ComfortAiCallLog upsert
   */
  export type ComfortAiCallLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ComfortAiCallLog to update in case it exists.
     */
    where: ComfortAiCallLogWhereUniqueInput
    /**
     * In case the ComfortAiCallLog found by the `where` argument doesn't exist, create a new ComfortAiCallLog with this data.
     */
    create: XOR<ComfortAiCallLogCreateInput, ComfortAiCallLogUncheckedCreateInput>
    /**
     * In case the ComfortAiCallLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComfortAiCallLogUpdateInput, ComfortAiCallLogUncheckedUpdateInput>
  }

  /**
   * ComfortAiCallLog delete
   */
  export type ComfortAiCallLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
    /**
     * Filter which ComfortAiCallLog to delete.
     */
    where: ComfortAiCallLogWhereUniqueInput
  }

  /**
   * ComfortAiCallLog deleteMany
   */
  export type ComfortAiCallLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComfortAiCallLogs to delete
     */
    where?: ComfortAiCallLogWhereInput
    /**
     * Limit how many ComfortAiCallLogs to delete.
     */
    limit?: number
  }

  /**
   * ComfortAiCallLog without action
   */
  export type ComfortAiCallLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiCallLog
     */
    select?: ComfortAiCallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiCallLog
     */
    omit?: ComfortAiCallLogOmit<ExtArgs> | null
  }


  /**
   * Model ComfortAiRecommendation
   */

  export type AggregateComfortAiRecommendation = {
    _count: ComfortAiRecommendationCountAggregateOutputType | null
    _avg: ComfortAiRecommendationAvgAggregateOutputType | null
    _sum: ComfortAiRecommendationSumAggregateOutputType | null
    _min: ComfortAiRecommendationMinAggregateOutputType | null
    _max: ComfortAiRecommendationMaxAggregateOutputType | null
  }

  export type ComfortAiRecommendationAvgAggregateOutputType = {
    id: number | null
    authorUserId: number | null
    confirmerUserId: number | null
    applyAttempt: number | null
  }

  export type ComfortAiRecommendationSumAggregateOutputType = {
    id: bigint | null
    authorUserId: bigint | null
    confirmerUserId: bigint | null
    applyAttempt: number | null
  }

  export type ComfortAiRecommendationMinAggregateOutputType = {
    id: bigint | null
    authorUserId: bigint | null
    confirmerUserId: bigint | null
    targetService: $Enums.ComfortAiTargetService | null
    title: string | null
    explanation: string | null
    status: $Enums.ComfortAiRecommendationStatus | null
    requiresAdminConfirm: boolean | null
    applyKey: string | null
    applyAttempt: number | null
    applyError: string | null
    applyStartedAt: Date | null
    applyFinishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComfortAiRecommendationMaxAggregateOutputType = {
    id: bigint | null
    authorUserId: bigint | null
    confirmerUserId: bigint | null
    targetService: $Enums.ComfortAiTargetService | null
    title: string | null
    explanation: string | null
    status: $Enums.ComfortAiRecommendationStatus | null
    requiresAdminConfirm: boolean | null
    applyKey: string | null
    applyAttempt: number | null
    applyError: string | null
    applyStartedAt: Date | null
    applyFinishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComfortAiRecommendationCountAggregateOutputType = {
    id: number
    authorUserId: number
    confirmerUserId: number
    targetService: number
    title: number
    explanation: number
    payloadJson: number
    status: number
    requiresAdminConfirm: number
    applyKey: number
    applyAttempt: number
    applyError: number
    applyStartedAt: number
    applyFinishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComfortAiRecommendationAvgAggregateInputType = {
    id?: true
    authorUserId?: true
    confirmerUserId?: true
    applyAttempt?: true
  }

  export type ComfortAiRecommendationSumAggregateInputType = {
    id?: true
    authorUserId?: true
    confirmerUserId?: true
    applyAttempt?: true
  }

  export type ComfortAiRecommendationMinAggregateInputType = {
    id?: true
    authorUserId?: true
    confirmerUserId?: true
    targetService?: true
    title?: true
    explanation?: true
    status?: true
    requiresAdminConfirm?: true
    applyKey?: true
    applyAttempt?: true
    applyError?: true
    applyStartedAt?: true
    applyFinishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComfortAiRecommendationMaxAggregateInputType = {
    id?: true
    authorUserId?: true
    confirmerUserId?: true
    targetService?: true
    title?: true
    explanation?: true
    status?: true
    requiresAdminConfirm?: true
    applyKey?: true
    applyAttempt?: true
    applyError?: true
    applyStartedAt?: true
    applyFinishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComfortAiRecommendationCountAggregateInputType = {
    id?: true
    authorUserId?: true
    confirmerUserId?: true
    targetService?: true
    title?: true
    explanation?: true
    payloadJson?: true
    status?: true
    requiresAdminConfirm?: true
    applyKey?: true
    applyAttempt?: true
    applyError?: true
    applyStartedAt?: true
    applyFinishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComfortAiRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComfortAiRecommendation to aggregate.
     */
    where?: ComfortAiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiRecommendations to fetch.
     */
    orderBy?: ComfortAiRecommendationOrderByWithRelationInput | ComfortAiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComfortAiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComfortAiRecommendations
    **/
    _count?: true | ComfortAiRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComfortAiRecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComfortAiRecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComfortAiRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComfortAiRecommendationMaxAggregateInputType
  }

  export type GetComfortAiRecommendationAggregateType<T extends ComfortAiRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateComfortAiRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComfortAiRecommendation[P]>
      : GetScalarType<T[P], AggregateComfortAiRecommendation[P]>
  }




  export type ComfortAiRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComfortAiRecommendationWhereInput
    orderBy?: ComfortAiRecommendationOrderByWithAggregationInput | ComfortAiRecommendationOrderByWithAggregationInput[]
    by: ComfortAiRecommendationScalarFieldEnum[] | ComfortAiRecommendationScalarFieldEnum
    having?: ComfortAiRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComfortAiRecommendationCountAggregateInputType | true
    _avg?: ComfortAiRecommendationAvgAggregateInputType
    _sum?: ComfortAiRecommendationSumAggregateInputType
    _min?: ComfortAiRecommendationMinAggregateInputType
    _max?: ComfortAiRecommendationMaxAggregateInputType
  }

  export type ComfortAiRecommendationGroupByOutputType = {
    id: bigint
    authorUserId: bigint
    confirmerUserId: bigint | null
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation: string
    payloadJson: JsonValue
    status: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm: boolean
    applyKey: string | null
    applyAttempt: number
    applyError: string | null
    applyStartedAt: Date | null
    applyFinishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ComfortAiRecommendationCountAggregateOutputType | null
    _avg: ComfortAiRecommendationAvgAggregateOutputType | null
    _sum: ComfortAiRecommendationSumAggregateOutputType | null
    _min: ComfortAiRecommendationMinAggregateOutputType | null
    _max: ComfortAiRecommendationMaxAggregateOutputType | null
  }

  type GetComfortAiRecommendationGroupByPayload<T extends ComfortAiRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComfortAiRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComfortAiRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComfortAiRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], ComfortAiRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type ComfortAiRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorUserId?: boolean
    confirmerUserId?: boolean
    targetService?: boolean
    title?: boolean
    explanation?: boolean
    payloadJson?: boolean
    status?: boolean
    requiresAdminConfirm?: boolean
    applyKey?: boolean
    applyAttempt?: boolean
    applyError?: boolean
    applyStartedAt?: boolean
    applyFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Author?: boolean | UserDefaultArgs<ExtArgs>
    Confirmer?: boolean | ComfortAiRecommendation$ConfirmerArgs<ExtArgs>
  }, ExtArgs["result"]["comfortAiRecommendation"]>

  export type ComfortAiRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorUserId?: boolean
    confirmerUserId?: boolean
    targetService?: boolean
    title?: boolean
    explanation?: boolean
    payloadJson?: boolean
    status?: boolean
    requiresAdminConfirm?: boolean
    applyKey?: boolean
    applyAttempt?: boolean
    applyError?: boolean
    applyStartedAt?: boolean
    applyFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Author?: boolean | UserDefaultArgs<ExtArgs>
    Confirmer?: boolean | ComfortAiRecommendation$ConfirmerArgs<ExtArgs>
  }, ExtArgs["result"]["comfortAiRecommendation"]>

  export type ComfortAiRecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorUserId?: boolean
    confirmerUserId?: boolean
    targetService?: boolean
    title?: boolean
    explanation?: boolean
    payloadJson?: boolean
    status?: boolean
    requiresAdminConfirm?: boolean
    applyKey?: boolean
    applyAttempt?: boolean
    applyError?: boolean
    applyStartedAt?: boolean
    applyFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Author?: boolean | UserDefaultArgs<ExtArgs>
    Confirmer?: boolean | ComfortAiRecommendation$ConfirmerArgs<ExtArgs>
  }, ExtArgs["result"]["comfortAiRecommendation"]>

  export type ComfortAiRecommendationSelectScalar = {
    id?: boolean
    authorUserId?: boolean
    confirmerUserId?: boolean
    targetService?: boolean
    title?: boolean
    explanation?: boolean
    payloadJson?: boolean
    status?: boolean
    requiresAdminConfirm?: boolean
    applyKey?: boolean
    applyAttempt?: boolean
    applyError?: boolean
    applyStartedAt?: boolean
    applyFinishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComfortAiRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorUserId" | "confirmerUserId" | "targetService" | "title" | "explanation" | "payloadJson" | "status" | "requiresAdminConfirm" | "applyKey" | "applyAttempt" | "applyError" | "applyStartedAt" | "applyFinishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["comfortAiRecommendation"]>
  export type ComfortAiRecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | UserDefaultArgs<ExtArgs>
    Confirmer?: boolean | ComfortAiRecommendation$ConfirmerArgs<ExtArgs>
  }
  export type ComfortAiRecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | UserDefaultArgs<ExtArgs>
    Confirmer?: boolean | ComfortAiRecommendation$ConfirmerArgs<ExtArgs>
  }
  export type ComfortAiRecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | UserDefaultArgs<ExtArgs>
    Confirmer?: boolean | ComfortAiRecommendation$ConfirmerArgs<ExtArgs>
  }

  export type $ComfortAiRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComfortAiRecommendation"
    objects: {
      Author: Prisma.$UserPayload<ExtArgs>
      Confirmer: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      authorUserId: bigint
      confirmerUserId: bigint | null
      targetService: $Enums.ComfortAiTargetService
      title: string
      explanation: string
      payloadJson: Prisma.JsonValue
      status: $Enums.ComfortAiRecommendationStatus
      requiresAdminConfirm: boolean
      applyKey: string | null
      applyAttempt: number
      applyError: string | null
      applyStartedAt: Date | null
      applyFinishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comfortAiRecommendation"]>
    composites: {}
  }

  type ComfortAiRecommendationGetPayload<S extends boolean | null | undefined | ComfortAiRecommendationDefaultArgs> = $Result.GetResult<Prisma.$ComfortAiRecommendationPayload, S>

  type ComfortAiRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComfortAiRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComfortAiRecommendationCountAggregateInputType | true
    }

  export interface ComfortAiRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComfortAiRecommendation'], meta: { name: 'ComfortAiRecommendation' } }
    /**
     * Find zero or one ComfortAiRecommendation that matches the filter.
     * @param {ComfortAiRecommendationFindUniqueArgs} args - Arguments to find a ComfortAiRecommendation
     * @example
     * // Get one ComfortAiRecommendation
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComfortAiRecommendationFindUniqueArgs>(args: SelectSubset<T, ComfortAiRecommendationFindUniqueArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComfortAiRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComfortAiRecommendationFindUniqueOrThrowArgs} args - Arguments to find a ComfortAiRecommendation
     * @example
     * // Get one ComfortAiRecommendation
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComfortAiRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, ComfortAiRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComfortAiRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiRecommendationFindFirstArgs} args - Arguments to find a ComfortAiRecommendation
     * @example
     * // Get one ComfortAiRecommendation
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComfortAiRecommendationFindFirstArgs>(args?: SelectSubset<T, ComfortAiRecommendationFindFirstArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComfortAiRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiRecommendationFindFirstOrThrowArgs} args - Arguments to find a ComfortAiRecommendation
     * @example
     * // Get one ComfortAiRecommendation
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComfortAiRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, ComfortAiRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComfortAiRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComfortAiRecommendations
     * const comfortAiRecommendations = await prisma.comfortAiRecommendation.findMany()
     * 
     * // Get first 10 ComfortAiRecommendations
     * const comfortAiRecommendations = await prisma.comfortAiRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comfortAiRecommendationWithIdOnly = await prisma.comfortAiRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComfortAiRecommendationFindManyArgs>(args?: SelectSubset<T, ComfortAiRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComfortAiRecommendation.
     * @param {ComfortAiRecommendationCreateArgs} args - Arguments to create a ComfortAiRecommendation.
     * @example
     * // Create one ComfortAiRecommendation
     * const ComfortAiRecommendation = await prisma.comfortAiRecommendation.create({
     *   data: {
     *     // ... data to create a ComfortAiRecommendation
     *   }
     * })
     * 
     */
    create<T extends ComfortAiRecommendationCreateArgs>(args: SelectSubset<T, ComfortAiRecommendationCreateArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComfortAiRecommendations.
     * @param {ComfortAiRecommendationCreateManyArgs} args - Arguments to create many ComfortAiRecommendations.
     * @example
     * // Create many ComfortAiRecommendations
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComfortAiRecommendationCreateManyArgs>(args?: SelectSubset<T, ComfortAiRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComfortAiRecommendations and returns the data saved in the database.
     * @param {ComfortAiRecommendationCreateManyAndReturnArgs} args - Arguments to create many ComfortAiRecommendations.
     * @example
     * // Create many ComfortAiRecommendations
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComfortAiRecommendations and only return the `id`
     * const comfortAiRecommendationWithIdOnly = await prisma.comfortAiRecommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComfortAiRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, ComfortAiRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComfortAiRecommendation.
     * @param {ComfortAiRecommendationDeleteArgs} args - Arguments to delete one ComfortAiRecommendation.
     * @example
     * // Delete one ComfortAiRecommendation
     * const ComfortAiRecommendation = await prisma.comfortAiRecommendation.delete({
     *   where: {
     *     // ... filter to delete one ComfortAiRecommendation
     *   }
     * })
     * 
     */
    delete<T extends ComfortAiRecommendationDeleteArgs>(args: SelectSubset<T, ComfortAiRecommendationDeleteArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComfortAiRecommendation.
     * @param {ComfortAiRecommendationUpdateArgs} args - Arguments to update one ComfortAiRecommendation.
     * @example
     * // Update one ComfortAiRecommendation
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComfortAiRecommendationUpdateArgs>(args: SelectSubset<T, ComfortAiRecommendationUpdateArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComfortAiRecommendations.
     * @param {ComfortAiRecommendationDeleteManyArgs} args - Arguments to filter ComfortAiRecommendations to delete.
     * @example
     * // Delete a few ComfortAiRecommendations
     * const { count } = await prisma.comfortAiRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComfortAiRecommendationDeleteManyArgs>(args?: SelectSubset<T, ComfortAiRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComfortAiRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComfortAiRecommendations
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComfortAiRecommendationUpdateManyArgs>(args: SelectSubset<T, ComfortAiRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComfortAiRecommendations and returns the data updated in the database.
     * @param {ComfortAiRecommendationUpdateManyAndReturnArgs} args - Arguments to update many ComfortAiRecommendations.
     * @example
     * // Update many ComfortAiRecommendations
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComfortAiRecommendations and only return the `id`
     * const comfortAiRecommendationWithIdOnly = await prisma.comfortAiRecommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComfortAiRecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, ComfortAiRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComfortAiRecommendation.
     * @param {ComfortAiRecommendationUpsertArgs} args - Arguments to update or create a ComfortAiRecommendation.
     * @example
     * // Update or create a ComfortAiRecommendation
     * const comfortAiRecommendation = await prisma.comfortAiRecommendation.upsert({
     *   create: {
     *     // ... data to create a ComfortAiRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComfortAiRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends ComfortAiRecommendationUpsertArgs>(args: SelectSubset<T, ComfortAiRecommendationUpsertArgs<ExtArgs>>): Prisma__ComfortAiRecommendationClient<$Result.GetResult<Prisma.$ComfortAiRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComfortAiRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiRecommendationCountArgs} args - Arguments to filter ComfortAiRecommendations to count.
     * @example
     * // Count the number of ComfortAiRecommendations
     * const count = await prisma.comfortAiRecommendation.count({
     *   where: {
     *     // ... the filter for the ComfortAiRecommendations we want to count
     *   }
     * })
    **/
    count<T extends ComfortAiRecommendationCountArgs>(
      args?: Subset<T, ComfortAiRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComfortAiRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComfortAiRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComfortAiRecommendationAggregateArgs>(args: Subset<T, ComfortAiRecommendationAggregateArgs>): Prisma.PrismaPromise<GetComfortAiRecommendationAggregateType<T>>

    /**
     * Group by ComfortAiRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComfortAiRecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComfortAiRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComfortAiRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: ComfortAiRecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComfortAiRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComfortAiRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComfortAiRecommendation model
   */
  readonly fields: ComfortAiRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComfortAiRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComfortAiRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Confirmer<T extends ComfortAiRecommendation$ConfirmerArgs<ExtArgs> = {}>(args?: Subset<T, ComfortAiRecommendation$ConfirmerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComfortAiRecommendation model
   */
  interface ComfortAiRecommendationFieldRefs {
    readonly id: FieldRef<"ComfortAiRecommendation", 'BigInt'>
    readonly authorUserId: FieldRef<"ComfortAiRecommendation", 'BigInt'>
    readonly confirmerUserId: FieldRef<"ComfortAiRecommendation", 'BigInt'>
    readonly targetService: FieldRef<"ComfortAiRecommendation", 'ComfortAiTargetService'>
    readonly title: FieldRef<"ComfortAiRecommendation", 'String'>
    readonly explanation: FieldRef<"ComfortAiRecommendation", 'String'>
    readonly payloadJson: FieldRef<"ComfortAiRecommendation", 'Json'>
    readonly status: FieldRef<"ComfortAiRecommendation", 'ComfortAiRecommendationStatus'>
    readonly requiresAdminConfirm: FieldRef<"ComfortAiRecommendation", 'Boolean'>
    readonly applyKey: FieldRef<"ComfortAiRecommendation", 'String'>
    readonly applyAttempt: FieldRef<"ComfortAiRecommendation", 'Int'>
    readonly applyError: FieldRef<"ComfortAiRecommendation", 'String'>
    readonly applyStartedAt: FieldRef<"ComfortAiRecommendation", 'DateTime'>
    readonly applyFinishedAt: FieldRef<"ComfortAiRecommendation", 'DateTime'>
    readonly createdAt: FieldRef<"ComfortAiRecommendation", 'DateTime'>
    readonly updatedAt: FieldRef<"ComfortAiRecommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComfortAiRecommendation findUnique
   */
  export type ComfortAiRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which ComfortAiRecommendation to fetch.
     */
    where: ComfortAiRecommendationWhereUniqueInput
  }

  /**
   * ComfortAiRecommendation findUniqueOrThrow
   */
  export type ComfortAiRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which ComfortAiRecommendation to fetch.
     */
    where: ComfortAiRecommendationWhereUniqueInput
  }

  /**
   * ComfortAiRecommendation findFirst
   */
  export type ComfortAiRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which ComfortAiRecommendation to fetch.
     */
    where?: ComfortAiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiRecommendations to fetch.
     */
    orderBy?: ComfortAiRecommendationOrderByWithRelationInput | ComfortAiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComfortAiRecommendations.
     */
    cursor?: ComfortAiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAiRecommendations.
     */
    distinct?: ComfortAiRecommendationScalarFieldEnum | ComfortAiRecommendationScalarFieldEnum[]
  }

  /**
   * ComfortAiRecommendation findFirstOrThrow
   */
  export type ComfortAiRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which ComfortAiRecommendation to fetch.
     */
    where?: ComfortAiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiRecommendations to fetch.
     */
    orderBy?: ComfortAiRecommendationOrderByWithRelationInput | ComfortAiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComfortAiRecommendations.
     */
    cursor?: ComfortAiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAiRecommendations.
     */
    distinct?: ComfortAiRecommendationScalarFieldEnum | ComfortAiRecommendationScalarFieldEnum[]
  }

  /**
   * ComfortAiRecommendation findMany
   */
  export type ComfortAiRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which ComfortAiRecommendations to fetch.
     */
    where?: ComfortAiRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComfortAiRecommendations to fetch.
     */
    orderBy?: ComfortAiRecommendationOrderByWithRelationInput | ComfortAiRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComfortAiRecommendations.
     */
    cursor?: ComfortAiRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComfortAiRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComfortAiRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComfortAiRecommendations.
     */
    distinct?: ComfortAiRecommendationScalarFieldEnum | ComfortAiRecommendationScalarFieldEnum[]
  }

  /**
   * ComfortAiRecommendation create
   */
  export type ComfortAiRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a ComfortAiRecommendation.
     */
    data: XOR<ComfortAiRecommendationCreateInput, ComfortAiRecommendationUncheckedCreateInput>
  }

  /**
   * ComfortAiRecommendation createMany
   */
  export type ComfortAiRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComfortAiRecommendations.
     */
    data: ComfortAiRecommendationCreateManyInput | ComfortAiRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComfortAiRecommendation createManyAndReturn
   */
  export type ComfortAiRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many ComfortAiRecommendations.
     */
    data: ComfortAiRecommendationCreateManyInput | ComfortAiRecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComfortAiRecommendation update
   */
  export type ComfortAiRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a ComfortAiRecommendation.
     */
    data: XOR<ComfortAiRecommendationUpdateInput, ComfortAiRecommendationUncheckedUpdateInput>
    /**
     * Choose, which ComfortAiRecommendation to update.
     */
    where: ComfortAiRecommendationWhereUniqueInput
  }

  /**
   * ComfortAiRecommendation updateMany
   */
  export type ComfortAiRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComfortAiRecommendations.
     */
    data: XOR<ComfortAiRecommendationUpdateManyMutationInput, ComfortAiRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which ComfortAiRecommendations to update
     */
    where?: ComfortAiRecommendationWhereInput
    /**
     * Limit how many ComfortAiRecommendations to update.
     */
    limit?: number
  }

  /**
   * ComfortAiRecommendation updateManyAndReturn
   */
  export type ComfortAiRecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * The data used to update ComfortAiRecommendations.
     */
    data: XOR<ComfortAiRecommendationUpdateManyMutationInput, ComfortAiRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which ComfortAiRecommendations to update
     */
    where?: ComfortAiRecommendationWhereInput
    /**
     * Limit how many ComfortAiRecommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComfortAiRecommendation upsert
   */
  export type ComfortAiRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the ComfortAiRecommendation to update in case it exists.
     */
    where: ComfortAiRecommendationWhereUniqueInput
    /**
     * In case the ComfortAiRecommendation found by the `where` argument doesn't exist, create a new ComfortAiRecommendation with this data.
     */
    create: XOR<ComfortAiRecommendationCreateInput, ComfortAiRecommendationUncheckedCreateInput>
    /**
     * In case the ComfortAiRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComfortAiRecommendationUpdateInput, ComfortAiRecommendationUncheckedUpdateInput>
  }

  /**
   * ComfortAiRecommendation delete
   */
  export type ComfortAiRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
    /**
     * Filter which ComfortAiRecommendation to delete.
     */
    where: ComfortAiRecommendationWhereUniqueInput
  }

  /**
   * ComfortAiRecommendation deleteMany
   */
  export type ComfortAiRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComfortAiRecommendations to delete
     */
    where?: ComfortAiRecommendationWhereInput
    /**
     * Limit how many ComfortAiRecommendations to delete.
     */
    limit?: number
  }

  /**
   * ComfortAiRecommendation.Confirmer
   */
  export type ComfortAiRecommendation$ConfirmerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ComfortAiRecommendation without action
   */
  export type ComfortAiRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComfortAiRecommendation
     */
    select?: ComfortAiRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComfortAiRecommendation
     */
    omit?: ComfortAiRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComfortAiRecommendationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CmsPageScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    summary: 'summary',
    bodyMarkdown: 'bodyMarkdown',
    published: 'published',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsPageScalarFieldEnum = (typeof CmsPageScalarFieldEnum)[keyof typeof CmsPageScalarFieldEnum]


  export const CmsArticleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    excerpt: 'excerpt',
    bodyMarkdown: 'bodyMarkdown',
    published: 'published',
    heroFiles: 'heroFiles',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsArticleScalarFieldEnum = (typeof CmsArticleScalarFieldEnum)[keyof typeof CmsArticleScalarFieldEnum]


  export const CmsPromoBlockScalarFieldEnum: {
    id: 'id',
    code: 'code',
    headline: 'headline',
    subline: 'subline',
    ctaLabel: 'ctaLabel',
    ctaHref: 'ctaHref',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsPromoBlockScalarFieldEnum = (typeof CmsPromoBlockScalarFieldEnum)[keyof typeof CmsPromoBlockScalarFieldEnum]


  export const CmsAiPromptSlotScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    systemPrompt: 'systemPrompt',
    userPromptTemplate: 'userPromptTemplate',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsAiPromptSlotScalarFieldEnum = (typeof CmsAiPromptSlotScalarFieldEnum)[keyof typeof CmsAiPromptSlotScalarFieldEnum]


  export const ComfortAuditEventScalarFieldEnum: {
    id: 'id',
    actorUserId: 'actorUserId',
    action: 'action',
    entityModel: 'entityModel',
    entityId: 'entityId',
    payloadJson: 'payloadJson',
    correlationId: 'correlationId',
    createdAt: 'createdAt'
  };

  export type ComfortAuditEventScalarFieldEnum = (typeof ComfortAuditEventScalarFieldEnum)[keyof typeof ComfortAuditEventScalarFieldEnum]


  export const ComfortAiCallLogScalarFieldEnum: {
    id: 'id',
    correlationId: 'correlationId',
    provider: 'provider',
    model: 'model',
    latencyMs: 'latencyMs',
    promptChars: 'promptChars',
    responseChars: 'responseChars',
    success: 'success',
    createdAt: 'createdAt'
  };

  export type ComfortAiCallLogScalarFieldEnum = (typeof ComfortAiCallLogScalarFieldEnum)[keyof typeof ComfortAiCallLogScalarFieldEnum]


  export const ComfortAiRecommendationScalarFieldEnum: {
    id: 'id',
    authorUserId: 'authorUserId',
    confirmerUserId: 'confirmerUserId',
    targetService: 'targetService',
    title: 'title',
    explanation: 'explanation',
    payloadJson: 'payloadJson',
    status: 'status',
    requiresAdminConfirm: 'requiresAdminConfirm',
    applyKey: 'applyKey',
    applyAttempt: 'applyAttempt',
    applyError: 'applyError',
    applyStartedAt: 'applyStartedAt',
    applyFinishedAt: 'applyFinishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComfortAiRecommendationScalarFieldEnum = (typeof ComfortAiRecommendationScalarFieldEnum)[keyof typeof ComfortAiRecommendationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ComfortAiTargetService'
   */
  export type EnumComfortAiTargetServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComfortAiTargetService'>
    


  /**
   * Reference to a field of type 'ComfortAiTargetService[]'
   */
  export type ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComfortAiTargetService[]'>
    


  /**
   * Reference to a field of type 'ComfortAiRecommendationStatus'
   */
  export type EnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComfortAiRecommendationStatus'>
    


  /**
   * Reference to a field of type 'ComfortAiRecommendationStatus[]'
   */
  export type ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComfortAiRecommendationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    AuthoredRecommendations?: ComfortAiRecommendationListRelationFilter
    ConfirmedRecommendations?: ComfortAiRecommendationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    AuthoredRecommendations?: ComfortAiRecommendationOrderByRelationAggregateInput
    ConfirmedRecommendations?: ComfortAiRecommendationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    AuthoredRecommendations?: ComfortAiRecommendationListRelationFilter
    ConfirmedRecommendations?: ComfortAiRecommendationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CmsPageWhereInput = {
    AND?: CmsPageWhereInput | CmsPageWhereInput[]
    OR?: CmsPageWhereInput[]
    NOT?: CmsPageWhereInput | CmsPageWhereInput[]
    id?: BigIntFilter<"CmsPage"> | bigint | number
    slug?: StringFilter<"CmsPage"> | string
    title?: StringFilter<"CmsPage"> | string
    summary?: StringFilter<"CmsPage"> | string
    bodyMarkdown?: StringFilter<"CmsPage"> | string
    published?: BoolFilter<"CmsPage"> | boolean
    sortOrder?: IntFilter<"CmsPage"> | number
    createdAt?: DateTimeFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPage"> | Date | string
  }

  export type CmsPageOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: CmsPageWhereInput | CmsPageWhereInput[]
    OR?: CmsPageWhereInput[]
    NOT?: CmsPageWhereInput | CmsPageWhereInput[]
    title?: StringFilter<"CmsPage"> | string
    summary?: StringFilter<"CmsPage"> | string
    bodyMarkdown?: StringFilter<"CmsPage"> | string
    published?: BoolFilter<"CmsPage"> | boolean
    sortOrder?: IntFilter<"CmsPage"> | number
    createdAt?: DateTimeFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPage"> | Date | string
  }, "id" | "slug">

  export type CmsPageOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsPageCountOrderByAggregateInput
    _avg?: CmsPageAvgOrderByAggregateInput
    _max?: CmsPageMaxOrderByAggregateInput
    _min?: CmsPageMinOrderByAggregateInput
    _sum?: CmsPageSumOrderByAggregateInput
  }

  export type CmsPageScalarWhereWithAggregatesInput = {
    AND?: CmsPageScalarWhereWithAggregatesInput | CmsPageScalarWhereWithAggregatesInput[]
    OR?: CmsPageScalarWhereWithAggregatesInput[]
    NOT?: CmsPageScalarWhereWithAggregatesInput | CmsPageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CmsPage"> | bigint | number
    slug?: StringWithAggregatesFilter<"CmsPage"> | string
    title?: StringWithAggregatesFilter<"CmsPage"> | string
    summary?: StringWithAggregatesFilter<"CmsPage"> | string
    bodyMarkdown?: StringWithAggregatesFilter<"CmsPage"> | string
    published?: BoolWithAggregatesFilter<"CmsPage"> | boolean
    sortOrder?: IntWithAggregatesFilter<"CmsPage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsPage"> | Date | string
  }

  export type CmsArticleWhereInput = {
    AND?: CmsArticleWhereInput | CmsArticleWhereInput[]
    OR?: CmsArticleWhereInput[]
    NOT?: CmsArticleWhereInput | CmsArticleWhereInput[]
    id?: BigIntFilter<"CmsArticle"> | bigint | number
    slug?: StringFilter<"CmsArticle"> | string
    title?: StringFilter<"CmsArticle"> | string
    excerpt?: StringFilter<"CmsArticle"> | string
    bodyMarkdown?: StringFilter<"CmsArticle"> | string
    published?: BoolFilter<"CmsArticle"> | boolean
    heroFiles?: JsonFilter<"CmsArticle">
    createdAt?: DateTimeFilter<"CmsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"CmsArticle"> | Date | string
  }

  export type CmsArticleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    heroFiles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: CmsArticleWhereInput | CmsArticleWhereInput[]
    OR?: CmsArticleWhereInput[]
    NOT?: CmsArticleWhereInput | CmsArticleWhereInput[]
    title?: StringFilter<"CmsArticle"> | string
    excerpt?: StringFilter<"CmsArticle"> | string
    bodyMarkdown?: StringFilter<"CmsArticle"> | string
    published?: BoolFilter<"CmsArticle"> | boolean
    heroFiles?: JsonFilter<"CmsArticle">
    createdAt?: DateTimeFilter<"CmsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"CmsArticle"> | Date | string
  }, "id" | "slug">

  export type CmsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    heroFiles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsArticleCountOrderByAggregateInput
    _avg?: CmsArticleAvgOrderByAggregateInput
    _max?: CmsArticleMaxOrderByAggregateInput
    _min?: CmsArticleMinOrderByAggregateInput
    _sum?: CmsArticleSumOrderByAggregateInput
  }

  export type CmsArticleScalarWhereWithAggregatesInput = {
    AND?: CmsArticleScalarWhereWithAggregatesInput | CmsArticleScalarWhereWithAggregatesInput[]
    OR?: CmsArticleScalarWhereWithAggregatesInput[]
    NOT?: CmsArticleScalarWhereWithAggregatesInput | CmsArticleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CmsArticle"> | bigint | number
    slug?: StringWithAggregatesFilter<"CmsArticle"> | string
    title?: StringWithAggregatesFilter<"CmsArticle"> | string
    excerpt?: StringWithAggregatesFilter<"CmsArticle"> | string
    bodyMarkdown?: StringWithAggregatesFilter<"CmsArticle"> | string
    published?: BoolWithAggregatesFilter<"CmsArticle"> | boolean
    heroFiles?: JsonWithAggregatesFilter<"CmsArticle">
    createdAt?: DateTimeWithAggregatesFilter<"CmsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsArticle"> | Date | string
  }

  export type CmsPromoBlockWhereInput = {
    AND?: CmsPromoBlockWhereInput | CmsPromoBlockWhereInput[]
    OR?: CmsPromoBlockWhereInput[]
    NOT?: CmsPromoBlockWhereInput | CmsPromoBlockWhereInput[]
    id?: BigIntFilter<"CmsPromoBlock"> | bigint | number
    code?: StringFilter<"CmsPromoBlock"> | string
    headline?: StringFilter<"CmsPromoBlock"> | string
    subline?: StringFilter<"CmsPromoBlock"> | string
    ctaLabel?: StringFilter<"CmsPromoBlock"> | string
    ctaHref?: StringFilter<"CmsPromoBlock"> | string
    active?: BoolFilter<"CmsPromoBlock"> | boolean
    createdAt?: DateTimeFilter<"CmsPromoBlock"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPromoBlock"> | Date | string
  }

  export type CmsPromoBlockOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    headline?: SortOrder
    subline?: SortOrder
    ctaLabel?: SortOrder
    ctaHref?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPromoBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    code?: string
    AND?: CmsPromoBlockWhereInput | CmsPromoBlockWhereInput[]
    OR?: CmsPromoBlockWhereInput[]
    NOT?: CmsPromoBlockWhereInput | CmsPromoBlockWhereInput[]
    headline?: StringFilter<"CmsPromoBlock"> | string
    subline?: StringFilter<"CmsPromoBlock"> | string
    ctaLabel?: StringFilter<"CmsPromoBlock"> | string
    ctaHref?: StringFilter<"CmsPromoBlock"> | string
    active?: BoolFilter<"CmsPromoBlock"> | boolean
    createdAt?: DateTimeFilter<"CmsPromoBlock"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPromoBlock"> | Date | string
  }, "id" | "code">

  export type CmsPromoBlockOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    headline?: SortOrder
    subline?: SortOrder
    ctaLabel?: SortOrder
    ctaHref?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsPromoBlockCountOrderByAggregateInput
    _avg?: CmsPromoBlockAvgOrderByAggregateInput
    _max?: CmsPromoBlockMaxOrderByAggregateInput
    _min?: CmsPromoBlockMinOrderByAggregateInput
    _sum?: CmsPromoBlockSumOrderByAggregateInput
  }

  export type CmsPromoBlockScalarWhereWithAggregatesInput = {
    AND?: CmsPromoBlockScalarWhereWithAggregatesInput | CmsPromoBlockScalarWhereWithAggregatesInput[]
    OR?: CmsPromoBlockScalarWhereWithAggregatesInput[]
    NOT?: CmsPromoBlockScalarWhereWithAggregatesInput | CmsPromoBlockScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CmsPromoBlock"> | bigint | number
    code?: StringWithAggregatesFilter<"CmsPromoBlock"> | string
    headline?: StringWithAggregatesFilter<"CmsPromoBlock"> | string
    subline?: StringWithAggregatesFilter<"CmsPromoBlock"> | string
    ctaLabel?: StringWithAggregatesFilter<"CmsPromoBlock"> | string
    ctaHref?: StringWithAggregatesFilter<"CmsPromoBlock"> | string
    active?: BoolWithAggregatesFilter<"CmsPromoBlock"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CmsPromoBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsPromoBlock"> | Date | string
  }

  export type CmsAiPromptSlotWhereInput = {
    AND?: CmsAiPromptSlotWhereInput | CmsAiPromptSlotWhereInput[]
    OR?: CmsAiPromptSlotWhereInput[]
    NOT?: CmsAiPromptSlotWhereInput | CmsAiPromptSlotWhereInput[]
    id?: BigIntFilter<"CmsAiPromptSlot"> | bigint | number
    code?: StringFilter<"CmsAiPromptSlot"> | string
    title?: StringFilter<"CmsAiPromptSlot"> | string
    systemPrompt?: StringFilter<"CmsAiPromptSlot"> | string
    userPromptTemplate?: StringFilter<"CmsAiPromptSlot"> | string
    active?: BoolFilter<"CmsAiPromptSlot"> | boolean
    createdAt?: DateTimeFilter<"CmsAiPromptSlot"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAiPromptSlot"> | Date | string
  }

  export type CmsAiPromptSlotOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    userPromptTemplate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAiPromptSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    code?: string
    AND?: CmsAiPromptSlotWhereInput | CmsAiPromptSlotWhereInput[]
    OR?: CmsAiPromptSlotWhereInput[]
    NOT?: CmsAiPromptSlotWhereInput | CmsAiPromptSlotWhereInput[]
    title?: StringFilter<"CmsAiPromptSlot"> | string
    systemPrompt?: StringFilter<"CmsAiPromptSlot"> | string
    userPromptTemplate?: StringFilter<"CmsAiPromptSlot"> | string
    active?: BoolFilter<"CmsAiPromptSlot"> | boolean
    createdAt?: DateTimeFilter<"CmsAiPromptSlot"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAiPromptSlot"> | Date | string
  }, "id" | "code">

  export type CmsAiPromptSlotOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    userPromptTemplate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsAiPromptSlotCountOrderByAggregateInput
    _avg?: CmsAiPromptSlotAvgOrderByAggregateInput
    _max?: CmsAiPromptSlotMaxOrderByAggregateInput
    _min?: CmsAiPromptSlotMinOrderByAggregateInput
    _sum?: CmsAiPromptSlotSumOrderByAggregateInput
  }

  export type CmsAiPromptSlotScalarWhereWithAggregatesInput = {
    AND?: CmsAiPromptSlotScalarWhereWithAggregatesInput | CmsAiPromptSlotScalarWhereWithAggregatesInput[]
    OR?: CmsAiPromptSlotScalarWhereWithAggregatesInput[]
    NOT?: CmsAiPromptSlotScalarWhereWithAggregatesInput | CmsAiPromptSlotScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CmsAiPromptSlot"> | bigint | number
    code?: StringWithAggregatesFilter<"CmsAiPromptSlot"> | string
    title?: StringWithAggregatesFilter<"CmsAiPromptSlot"> | string
    systemPrompt?: StringWithAggregatesFilter<"CmsAiPromptSlot"> | string
    userPromptTemplate?: StringWithAggregatesFilter<"CmsAiPromptSlot"> | string
    active?: BoolWithAggregatesFilter<"CmsAiPromptSlot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CmsAiPromptSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsAiPromptSlot"> | Date | string
  }

  export type ComfortAuditEventWhereInput = {
    AND?: ComfortAuditEventWhereInput | ComfortAuditEventWhereInput[]
    OR?: ComfortAuditEventWhereInput[]
    NOT?: ComfortAuditEventWhereInput | ComfortAuditEventWhereInput[]
    id?: BigIntFilter<"ComfortAuditEvent"> | bigint | number
    actorUserId?: BigIntNullableFilter<"ComfortAuditEvent"> | bigint | number | null
    action?: StringFilter<"ComfortAuditEvent"> | string
    entityModel?: StringFilter<"ComfortAuditEvent"> | string
    entityId?: StringNullableFilter<"ComfortAuditEvent"> | string | null
    payloadJson?: JsonNullableFilter<"ComfortAuditEvent">
    correlationId?: StringNullableFilter<"ComfortAuditEvent"> | string | null
    createdAt?: DateTimeFilter<"ComfortAuditEvent"> | Date | string
  }

  export type ComfortAuditEventOrderByWithRelationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityModel?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payloadJson?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ComfortAuditEventWhereInput | ComfortAuditEventWhereInput[]
    OR?: ComfortAuditEventWhereInput[]
    NOT?: ComfortAuditEventWhereInput | ComfortAuditEventWhereInput[]
    actorUserId?: BigIntNullableFilter<"ComfortAuditEvent"> | bigint | number | null
    action?: StringFilter<"ComfortAuditEvent"> | string
    entityModel?: StringFilter<"ComfortAuditEvent"> | string
    entityId?: StringNullableFilter<"ComfortAuditEvent"> | string | null
    payloadJson?: JsonNullableFilter<"ComfortAuditEvent">
    correlationId?: StringNullableFilter<"ComfortAuditEvent"> | string | null
    createdAt?: DateTimeFilter<"ComfortAuditEvent"> | Date | string
  }, "id">

  export type ComfortAuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityModel?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payloadJson?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ComfortAuditEventCountOrderByAggregateInput
    _avg?: ComfortAuditEventAvgOrderByAggregateInput
    _max?: ComfortAuditEventMaxOrderByAggregateInput
    _min?: ComfortAuditEventMinOrderByAggregateInput
    _sum?: ComfortAuditEventSumOrderByAggregateInput
  }

  export type ComfortAuditEventScalarWhereWithAggregatesInput = {
    AND?: ComfortAuditEventScalarWhereWithAggregatesInput | ComfortAuditEventScalarWhereWithAggregatesInput[]
    OR?: ComfortAuditEventScalarWhereWithAggregatesInput[]
    NOT?: ComfortAuditEventScalarWhereWithAggregatesInput | ComfortAuditEventScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ComfortAuditEvent"> | bigint | number
    actorUserId?: BigIntNullableWithAggregatesFilter<"ComfortAuditEvent"> | bigint | number | null
    action?: StringWithAggregatesFilter<"ComfortAuditEvent"> | string
    entityModel?: StringWithAggregatesFilter<"ComfortAuditEvent"> | string
    entityId?: StringNullableWithAggregatesFilter<"ComfortAuditEvent"> | string | null
    payloadJson?: JsonNullableWithAggregatesFilter<"ComfortAuditEvent">
    correlationId?: StringNullableWithAggregatesFilter<"ComfortAuditEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ComfortAuditEvent"> | Date | string
  }

  export type ComfortAiCallLogWhereInput = {
    AND?: ComfortAiCallLogWhereInput | ComfortAiCallLogWhereInput[]
    OR?: ComfortAiCallLogWhereInput[]
    NOT?: ComfortAiCallLogWhereInput | ComfortAiCallLogWhereInput[]
    id?: BigIntFilter<"ComfortAiCallLog"> | bigint | number
    correlationId?: StringNullableFilter<"ComfortAiCallLog"> | string | null
    provider?: StringFilter<"ComfortAiCallLog"> | string
    model?: StringFilter<"ComfortAiCallLog"> | string
    latencyMs?: IntFilter<"ComfortAiCallLog"> | number
    promptChars?: IntFilter<"ComfortAiCallLog"> | number
    responseChars?: IntFilter<"ComfortAiCallLog"> | number
    success?: BoolFilter<"ComfortAiCallLog"> | boolean
    createdAt?: DateTimeFilter<"ComfortAiCallLog"> | Date | string
  }

  export type ComfortAiCallLogOrderByWithRelationInput = {
    id?: SortOrder
    correlationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    model?: SortOrder
    latencyMs?: SortOrder
    promptChars?: SortOrder
    responseChars?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAiCallLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ComfortAiCallLogWhereInput | ComfortAiCallLogWhereInput[]
    OR?: ComfortAiCallLogWhereInput[]
    NOT?: ComfortAiCallLogWhereInput | ComfortAiCallLogWhereInput[]
    correlationId?: StringNullableFilter<"ComfortAiCallLog"> | string | null
    provider?: StringFilter<"ComfortAiCallLog"> | string
    model?: StringFilter<"ComfortAiCallLog"> | string
    latencyMs?: IntFilter<"ComfortAiCallLog"> | number
    promptChars?: IntFilter<"ComfortAiCallLog"> | number
    responseChars?: IntFilter<"ComfortAiCallLog"> | number
    success?: BoolFilter<"ComfortAiCallLog"> | boolean
    createdAt?: DateTimeFilter<"ComfortAiCallLog"> | Date | string
  }, "id">

  export type ComfortAiCallLogOrderByWithAggregationInput = {
    id?: SortOrder
    correlationId?: SortOrderInput | SortOrder
    provider?: SortOrder
    model?: SortOrder
    latencyMs?: SortOrder
    promptChars?: SortOrder
    responseChars?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
    _count?: ComfortAiCallLogCountOrderByAggregateInput
    _avg?: ComfortAiCallLogAvgOrderByAggregateInput
    _max?: ComfortAiCallLogMaxOrderByAggregateInput
    _min?: ComfortAiCallLogMinOrderByAggregateInput
    _sum?: ComfortAiCallLogSumOrderByAggregateInput
  }

  export type ComfortAiCallLogScalarWhereWithAggregatesInput = {
    AND?: ComfortAiCallLogScalarWhereWithAggregatesInput | ComfortAiCallLogScalarWhereWithAggregatesInput[]
    OR?: ComfortAiCallLogScalarWhereWithAggregatesInput[]
    NOT?: ComfortAiCallLogScalarWhereWithAggregatesInput | ComfortAiCallLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ComfortAiCallLog"> | bigint | number
    correlationId?: StringNullableWithAggregatesFilter<"ComfortAiCallLog"> | string | null
    provider?: StringWithAggregatesFilter<"ComfortAiCallLog"> | string
    model?: StringWithAggregatesFilter<"ComfortAiCallLog"> | string
    latencyMs?: IntWithAggregatesFilter<"ComfortAiCallLog"> | number
    promptChars?: IntWithAggregatesFilter<"ComfortAiCallLog"> | number
    responseChars?: IntWithAggregatesFilter<"ComfortAiCallLog"> | number
    success?: BoolWithAggregatesFilter<"ComfortAiCallLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ComfortAiCallLog"> | Date | string
  }

  export type ComfortAiRecommendationWhereInput = {
    AND?: ComfortAiRecommendationWhereInput | ComfortAiRecommendationWhereInput[]
    OR?: ComfortAiRecommendationWhereInput[]
    NOT?: ComfortAiRecommendationWhereInput | ComfortAiRecommendationWhereInput[]
    id?: BigIntFilter<"ComfortAiRecommendation"> | bigint | number
    authorUserId?: BigIntFilter<"ComfortAiRecommendation"> | bigint | number
    confirmerUserId?: BigIntNullableFilter<"ComfortAiRecommendation"> | bigint | number | null
    targetService?: EnumComfortAiTargetServiceFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiTargetService
    title?: StringFilter<"ComfortAiRecommendation"> | string
    explanation?: StringFilter<"ComfortAiRecommendation"> | string
    payloadJson?: JsonFilter<"ComfortAiRecommendation">
    status?: EnumComfortAiRecommendationStatusFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFilter<"ComfortAiRecommendation"> | boolean
    applyKey?: StringNullableFilter<"ComfortAiRecommendation"> | string | null
    applyAttempt?: IntFilter<"ComfortAiRecommendation"> | number
    applyError?: StringNullableFilter<"ComfortAiRecommendation"> | string | null
    applyStartedAt?: DateTimeNullableFilter<"ComfortAiRecommendation"> | Date | string | null
    applyFinishedAt?: DateTimeNullableFilter<"ComfortAiRecommendation"> | Date | string | null
    createdAt?: DateTimeFilter<"ComfortAiRecommendation"> | Date | string
    updatedAt?: DateTimeFilter<"ComfortAiRecommendation"> | Date | string
    Author?: XOR<UserScalarRelationFilter, UserWhereInput>
    Confirmer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ComfortAiRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    authorUserId?: SortOrder
    confirmerUserId?: SortOrderInput | SortOrder
    targetService?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    payloadJson?: SortOrder
    status?: SortOrder
    requiresAdminConfirm?: SortOrder
    applyKey?: SortOrderInput | SortOrder
    applyAttempt?: SortOrder
    applyError?: SortOrderInput | SortOrder
    applyStartedAt?: SortOrderInput | SortOrder
    applyFinishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Author?: UserOrderByWithRelationInput
    Confirmer?: UserOrderByWithRelationInput
  }

  export type ComfortAiRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    applyKey?: string
    AND?: ComfortAiRecommendationWhereInput | ComfortAiRecommendationWhereInput[]
    OR?: ComfortAiRecommendationWhereInput[]
    NOT?: ComfortAiRecommendationWhereInput | ComfortAiRecommendationWhereInput[]
    authorUserId?: BigIntFilter<"ComfortAiRecommendation"> | bigint | number
    confirmerUserId?: BigIntNullableFilter<"ComfortAiRecommendation"> | bigint | number | null
    targetService?: EnumComfortAiTargetServiceFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiTargetService
    title?: StringFilter<"ComfortAiRecommendation"> | string
    explanation?: StringFilter<"ComfortAiRecommendation"> | string
    payloadJson?: JsonFilter<"ComfortAiRecommendation">
    status?: EnumComfortAiRecommendationStatusFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFilter<"ComfortAiRecommendation"> | boolean
    applyAttempt?: IntFilter<"ComfortAiRecommendation"> | number
    applyError?: StringNullableFilter<"ComfortAiRecommendation"> | string | null
    applyStartedAt?: DateTimeNullableFilter<"ComfortAiRecommendation"> | Date | string | null
    applyFinishedAt?: DateTimeNullableFilter<"ComfortAiRecommendation"> | Date | string | null
    createdAt?: DateTimeFilter<"ComfortAiRecommendation"> | Date | string
    updatedAt?: DateTimeFilter<"ComfortAiRecommendation"> | Date | string
    Author?: XOR<UserScalarRelationFilter, UserWhereInput>
    Confirmer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "applyKey">

  export type ComfortAiRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    authorUserId?: SortOrder
    confirmerUserId?: SortOrderInput | SortOrder
    targetService?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    payloadJson?: SortOrder
    status?: SortOrder
    requiresAdminConfirm?: SortOrder
    applyKey?: SortOrderInput | SortOrder
    applyAttempt?: SortOrder
    applyError?: SortOrderInput | SortOrder
    applyStartedAt?: SortOrderInput | SortOrder
    applyFinishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComfortAiRecommendationCountOrderByAggregateInput
    _avg?: ComfortAiRecommendationAvgOrderByAggregateInput
    _max?: ComfortAiRecommendationMaxOrderByAggregateInput
    _min?: ComfortAiRecommendationMinOrderByAggregateInput
    _sum?: ComfortAiRecommendationSumOrderByAggregateInput
  }

  export type ComfortAiRecommendationScalarWhereWithAggregatesInput = {
    AND?: ComfortAiRecommendationScalarWhereWithAggregatesInput | ComfortAiRecommendationScalarWhereWithAggregatesInput[]
    OR?: ComfortAiRecommendationScalarWhereWithAggregatesInput[]
    NOT?: ComfortAiRecommendationScalarWhereWithAggregatesInput | ComfortAiRecommendationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ComfortAiRecommendation"> | bigint | number
    authorUserId?: BigIntWithAggregatesFilter<"ComfortAiRecommendation"> | bigint | number
    confirmerUserId?: BigIntNullableWithAggregatesFilter<"ComfortAiRecommendation"> | bigint | number | null
    targetService?: EnumComfortAiTargetServiceWithAggregatesFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiTargetService
    title?: StringWithAggregatesFilter<"ComfortAiRecommendation"> | string
    explanation?: StringWithAggregatesFilter<"ComfortAiRecommendation"> | string
    payloadJson?: JsonWithAggregatesFilter<"ComfortAiRecommendation">
    status?: EnumComfortAiRecommendationStatusWithAggregatesFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolWithAggregatesFilter<"ComfortAiRecommendation"> | boolean
    applyKey?: StringNullableWithAggregatesFilter<"ComfortAiRecommendation"> | string | null
    applyAttempt?: IntWithAggregatesFilter<"ComfortAiRecommendation"> | number
    applyError?: StringNullableWithAggregatesFilter<"ComfortAiRecommendation"> | string | null
    applyStartedAt?: DateTimeNullableWithAggregatesFilter<"ComfortAiRecommendation"> | Date | string | null
    applyFinishedAt?: DateTimeNullableWithAggregatesFilter<"ComfortAiRecommendation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ComfortAiRecommendation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ComfortAiRecommendation"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    AuthoredRecommendations?: ComfortAiRecommendationCreateNestedManyWithoutAuthorInput
    ConfirmedRecommendations?: ComfortAiRecommendationCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    AuthoredRecommendations?: ComfortAiRecommendationUncheckedCreateNestedManyWithoutAuthorInput
    ConfirmedRecommendations?: ComfortAiRecommendationUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AuthoredRecommendations?: ComfortAiRecommendationUpdateManyWithoutAuthorNestedInput
    ConfirmedRecommendations?: ComfortAiRecommendationUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AuthoredRecommendations?: ComfortAiRecommendationUncheckedUpdateManyWithoutAuthorNestedInput
    ConfirmedRecommendations?: ComfortAiRecommendationUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageCreateInput = {
    id?: bigint | number
    slug: string
    title: string
    summary?: string
    bodyMarkdown?: string
    published?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageUncheckedCreateInput = {
    id?: bigint | number
    slug: string
    title: string
    summary?: string
    bodyMarkdown?: string
    published?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageCreateManyInput = {
    id?: bigint | number
    slug: string
    title: string
    summary?: string
    bodyMarkdown?: string
    published?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsArticleCreateInput = {
    id?: bigint | number
    slug: string
    title: string
    excerpt?: string
    bodyMarkdown?: string
    published?: boolean
    heroFiles?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsArticleUncheckedCreateInput = {
    id?: bigint | number
    slug: string
    title: string
    excerpt?: string
    bodyMarkdown?: string
    published?: boolean
    heroFiles?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsArticleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    heroFiles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsArticleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    heroFiles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsArticleCreateManyInput = {
    id?: bigint | number
    slug: string
    title: string
    excerpt?: string
    bodyMarkdown?: string
    published?: boolean
    heroFiles?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsArticleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    heroFiles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsArticleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    bodyMarkdown?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    heroFiles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPromoBlockCreateInput = {
    id?: bigint | number
    code: string
    headline: string
    subline?: string
    ctaLabel?: string
    ctaHref?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPromoBlockUncheckedCreateInput = {
    id?: bigint | number
    code: string
    headline: string
    subline?: string
    ctaLabel?: string
    ctaHref?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPromoBlockUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subline?: StringFieldUpdateOperationsInput | string
    ctaLabel?: StringFieldUpdateOperationsInput | string
    ctaHref?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPromoBlockUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subline?: StringFieldUpdateOperationsInput | string
    ctaLabel?: StringFieldUpdateOperationsInput | string
    ctaHref?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPromoBlockCreateManyInput = {
    id?: bigint | number
    code: string
    headline: string
    subline?: string
    ctaLabel?: string
    ctaHref?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPromoBlockUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subline?: StringFieldUpdateOperationsInput | string
    ctaLabel?: StringFieldUpdateOperationsInput | string
    ctaHref?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPromoBlockUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    subline?: StringFieldUpdateOperationsInput | string
    ctaLabel?: StringFieldUpdateOperationsInput | string
    ctaHref?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAiPromptSlotCreateInput = {
    id?: bigint | number
    code: string
    title: string
    systemPrompt?: string
    userPromptTemplate?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAiPromptSlotUncheckedCreateInput = {
    id?: bigint | number
    code: string
    title: string
    systemPrompt?: string
    userPromptTemplate?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAiPromptSlotUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPromptTemplate?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAiPromptSlotUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPromptTemplate?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAiPromptSlotCreateManyInput = {
    id?: bigint | number
    code: string
    title: string
    systemPrompt?: string
    userPromptTemplate?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAiPromptSlotUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPromptTemplate?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAiPromptSlotUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPromptTemplate?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAuditEventCreateInput = {
    id?: bigint | number
    actorUserId?: bigint | number | null
    action: string
    entityModel: string
    entityId?: string | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type ComfortAuditEventUncheckedCreateInput = {
    id?: bigint | number
    actorUserId?: bigint | number | null
    action: string
    entityModel: string
    entityId?: string | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type ComfortAuditEventUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityModel?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAuditEventUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityModel?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAuditEventCreateManyInput = {
    id?: bigint | number
    actorUserId?: bigint | number | null
    action: string
    entityModel: string
    entityId?: string | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type ComfortAuditEventUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityModel?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAuditEventUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    actorUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityModel?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payloadJson?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiCallLogCreateInput = {
    id?: bigint | number
    correlationId?: string | null
    provider: string
    model?: string
    latencyMs?: number
    promptChars?: number
    responseChars?: number
    success?: boolean
    createdAt?: Date | string
  }

  export type ComfortAiCallLogUncheckedCreateInput = {
    id?: bigint | number
    correlationId?: string | null
    provider: string
    model?: string
    latencyMs?: number
    promptChars?: number
    responseChars?: number
    success?: boolean
    createdAt?: Date | string
  }

  export type ComfortAiCallLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    latencyMs?: IntFieldUpdateOperationsInput | number
    promptChars?: IntFieldUpdateOperationsInput | number
    responseChars?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiCallLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    latencyMs?: IntFieldUpdateOperationsInput | number
    promptChars?: IntFieldUpdateOperationsInput | number
    responseChars?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiCallLogCreateManyInput = {
    id?: bigint | number
    correlationId?: string | null
    provider: string
    model?: string
    latencyMs?: number
    promptChars?: number
    responseChars?: number
    success?: boolean
    createdAt?: Date | string
  }

  export type ComfortAiCallLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    latencyMs?: IntFieldUpdateOperationsInput | number
    promptChars?: IntFieldUpdateOperationsInput | number
    responseChars?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiCallLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    latencyMs?: IntFieldUpdateOperationsInput | number
    promptChars?: IntFieldUpdateOperationsInput | number
    responseChars?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiRecommendationCreateInput = {
    id?: bigint | number
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Author: UserCreateNestedOneWithoutAuthoredRecommendationsInput
    Confirmer?: UserCreateNestedOneWithoutConfirmedRecommendationsInput
  }

  export type ComfortAiRecommendationUncheckedCreateInput = {
    id?: bigint | number
    authorUserId: bigint | number
    confirmerUserId?: bigint | number | null
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComfortAiRecommendationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Author?: UserUpdateOneRequiredWithoutAuthoredRecommendationsNestedInput
    Confirmer?: UserUpdateOneWithoutConfirmedRecommendationsNestedInput
  }

  export type ComfortAiRecommendationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    authorUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmerUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiRecommendationCreateManyInput = {
    id?: bigint | number
    authorUserId: bigint | number
    confirmerUserId?: bigint | number | null
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComfortAiRecommendationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiRecommendationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    authorUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmerUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ComfortAiRecommendationListRelationFilter = {
    every?: ComfortAiRecommendationWhereInput
    some?: ComfortAiRecommendationWhereInput
    none?: ComfortAiRecommendationWhereInput
  }

  export type ComfortAiRecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CmsPageCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type CmsPageMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPageSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CmsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    heroFiles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsArticleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    bodyMarkdown?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsArticleSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CmsPromoBlockCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    headline?: SortOrder
    subline?: SortOrder
    ctaLabel?: SortOrder
    ctaHref?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPromoBlockAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmsPromoBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    headline?: SortOrder
    subline?: SortOrder
    ctaLabel?: SortOrder
    ctaHref?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPromoBlockMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    headline?: SortOrder
    subline?: SortOrder
    ctaLabel?: SortOrder
    ctaHref?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPromoBlockSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmsAiPromptSlotCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    userPromptTemplate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAiPromptSlotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmsAiPromptSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    userPromptTemplate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAiPromptSlotMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    systemPrompt?: SortOrder
    userPromptTemplate?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAiPromptSlotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ComfortAuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityModel?: SortOrder
    entityId?: SortOrder
    payloadJson?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAuditEventAvgOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
  }

  export type ComfortAuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityModel?: SortOrder
    entityId?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityModel?: SortOrder
    entityId?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAuditEventSumOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ComfortAiCallLogCountOrderByAggregateInput = {
    id?: SortOrder
    correlationId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    latencyMs?: SortOrder
    promptChars?: SortOrder
    responseChars?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAiCallLogAvgOrderByAggregateInput = {
    id?: SortOrder
    latencyMs?: SortOrder
    promptChars?: SortOrder
    responseChars?: SortOrder
  }

  export type ComfortAiCallLogMaxOrderByAggregateInput = {
    id?: SortOrder
    correlationId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    latencyMs?: SortOrder
    promptChars?: SortOrder
    responseChars?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAiCallLogMinOrderByAggregateInput = {
    id?: SortOrder
    correlationId?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    latencyMs?: SortOrder
    promptChars?: SortOrder
    responseChars?: SortOrder
    success?: SortOrder
    createdAt?: SortOrder
  }

  export type ComfortAiCallLogSumOrderByAggregateInput = {
    id?: SortOrder
    latencyMs?: SortOrder
    promptChars?: SortOrder
    responseChars?: SortOrder
  }

  export type EnumComfortAiTargetServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiTargetService | EnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiTargetServiceFilter<$PrismaModel> | $Enums.ComfortAiTargetService
  }

  export type EnumComfortAiRecommendationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiRecommendationStatus | EnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiRecommendationStatusFilter<$PrismaModel> | $Enums.ComfortAiRecommendationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ComfortAiRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    authorUserId?: SortOrder
    confirmerUserId?: SortOrder
    targetService?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    payloadJson?: SortOrder
    status?: SortOrder
    requiresAdminConfirm?: SortOrder
    applyKey?: SortOrder
    applyAttempt?: SortOrder
    applyError?: SortOrder
    applyStartedAt?: SortOrder
    applyFinishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComfortAiRecommendationAvgOrderByAggregateInput = {
    id?: SortOrder
    authorUserId?: SortOrder
    confirmerUserId?: SortOrder
    applyAttempt?: SortOrder
  }

  export type ComfortAiRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    authorUserId?: SortOrder
    confirmerUserId?: SortOrder
    targetService?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    status?: SortOrder
    requiresAdminConfirm?: SortOrder
    applyKey?: SortOrder
    applyAttempt?: SortOrder
    applyError?: SortOrder
    applyStartedAt?: SortOrder
    applyFinishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComfortAiRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    authorUserId?: SortOrder
    confirmerUserId?: SortOrder
    targetService?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    status?: SortOrder
    requiresAdminConfirm?: SortOrder
    applyKey?: SortOrder
    applyAttempt?: SortOrder
    applyError?: SortOrder
    applyStartedAt?: SortOrder
    applyFinishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComfortAiRecommendationSumOrderByAggregateInput = {
    id?: SortOrder
    authorUserId?: SortOrder
    confirmerUserId?: SortOrder
    applyAttempt?: SortOrder
  }

  export type EnumComfortAiTargetServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiTargetService | EnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiTargetServiceWithAggregatesFilter<$PrismaModel> | $Enums.ComfortAiTargetService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComfortAiTargetServiceFilter<$PrismaModel>
    _max?: NestedEnumComfortAiTargetServiceFilter<$PrismaModel>
  }

  export type EnumComfortAiRecommendationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiRecommendationStatus | EnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiRecommendationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComfortAiRecommendationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComfortAiRecommendationStatusFilter<$PrismaModel>
    _max?: NestedEnumComfortAiRecommendationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ComfortAiRecommendationCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutAuthorInput, ComfortAiRecommendationUncheckedCreateWithoutAuthorInput> | ComfortAiRecommendationCreateWithoutAuthorInput[] | ComfortAiRecommendationUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutAuthorInput | ComfortAiRecommendationCreateOrConnectWithoutAuthorInput[]
    createMany?: ComfortAiRecommendationCreateManyAuthorInputEnvelope
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
  }

  export type ComfortAiRecommendationCreateNestedManyWithoutConfirmerInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutConfirmerInput, ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput> | ComfortAiRecommendationCreateWithoutConfirmerInput[] | ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput | ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput[]
    createMany?: ComfortAiRecommendationCreateManyConfirmerInputEnvelope
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
  }

  export type ComfortAiRecommendationUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutAuthorInput, ComfortAiRecommendationUncheckedCreateWithoutAuthorInput> | ComfortAiRecommendationCreateWithoutAuthorInput[] | ComfortAiRecommendationUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutAuthorInput | ComfortAiRecommendationCreateOrConnectWithoutAuthorInput[]
    createMany?: ComfortAiRecommendationCreateManyAuthorInputEnvelope
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
  }

  export type ComfortAiRecommendationUncheckedCreateNestedManyWithoutConfirmerInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutConfirmerInput, ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput> | ComfortAiRecommendationCreateWithoutConfirmerInput[] | ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput | ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput[]
    createMany?: ComfortAiRecommendationCreateManyConfirmerInputEnvelope
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ComfortAiRecommendationUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutAuthorInput, ComfortAiRecommendationUncheckedCreateWithoutAuthorInput> | ComfortAiRecommendationCreateWithoutAuthorInput[] | ComfortAiRecommendationUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutAuthorInput | ComfortAiRecommendationCreateOrConnectWithoutAuthorInput[]
    upsert?: ComfortAiRecommendationUpsertWithWhereUniqueWithoutAuthorInput | ComfortAiRecommendationUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ComfortAiRecommendationCreateManyAuthorInputEnvelope
    set?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    disconnect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    delete?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    update?: ComfortAiRecommendationUpdateWithWhereUniqueWithoutAuthorInput | ComfortAiRecommendationUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ComfortAiRecommendationUpdateManyWithWhereWithoutAuthorInput | ComfortAiRecommendationUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ComfortAiRecommendationScalarWhereInput | ComfortAiRecommendationScalarWhereInput[]
  }

  export type ComfortAiRecommendationUpdateManyWithoutConfirmerNestedInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutConfirmerInput, ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput> | ComfortAiRecommendationCreateWithoutConfirmerInput[] | ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput | ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput[]
    upsert?: ComfortAiRecommendationUpsertWithWhereUniqueWithoutConfirmerInput | ComfortAiRecommendationUpsertWithWhereUniqueWithoutConfirmerInput[]
    createMany?: ComfortAiRecommendationCreateManyConfirmerInputEnvelope
    set?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    disconnect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    delete?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    update?: ComfortAiRecommendationUpdateWithWhereUniqueWithoutConfirmerInput | ComfortAiRecommendationUpdateWithWhereUniqueWithoutConfirmerInput[]
    updateMany?: ComfortAiRecommendationUpdateManyWithWhereWithoutConfirmerInput | ComfortAiRecommendationUpdateManyWithWhereWithoutConfirmerInput[]
    deleteMany?: ComfortAiRecommendationScalarWhereInput | ComfortAiRecommendationScalarWhereInput[]
  }

  export type ComfortAiRecommendationUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutAuthorInput, ComfortAiRecommendationUncheckedCreateWithoutAuthorInput> | ComfortAiRecommendationCreateWithoutAuthorInput[] | ComfortAiRecommendationUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutAuthorInput | ComfortAiRecommendationCreateOrConnectWithoutAuthorInput[]
    upsert?: ComfortAiRecommendationUpsertWithWhereUniqueWithoutAuthorInput | ComfortAiRecommendationUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ComfortAiRecommendationCreateManyAuthorInputEnvelope
    set?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    disconnect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    delete?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    update?: ComfortAiRecommendationUpdateWithWhereUniqueWithoutAuthorInput | ComfortAiRecommendationUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ComfortAiRecommendationUpdateManyWithWhereWithoutAuthorInput | ComfortAiRecommendationUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ComfortAiRecommendationScalarWhereInput | ComfortAiRecommendationScalarWhereInput[]
  }

  export type ComfortAiRecommendationUncheckedUpdateManyWithoutConfirmerNestedInput = {
    create?: XOR<ComfortAiRecommendationCreateWithoutConfirmerInput, ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput> | ComfortAiRecommendationCreateWithoutConfirmerInput[] | ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput[]
    connectOrCreate?: ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput | ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput[]
    upsert?: ComfortAiRecommendationUpsertWithWhereUniqueWithoutConfirmerInput | ComfortAiRecommendationUpsertWithWhereUniqueWithoutConfirmerInput[]
    createMany?: ComfortAiRecommendationCreateManyConfirmerInputEnvelope
    set?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    disconnect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    delete?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    connect?: ComfortAiRecommendationWhereUniqueInput | ComfortAiRecommendationWhereUniqueInput[]
    update?: ComfortAiRecommendationUpdateWithWhereUniqueWithoutConfirmerInput | ComfortAiRecommendationUpdateWithWhereUniqueWithoutConfirmerInput[]
    updateMany?: ComfortAiRecommendationUpdateManyWithWhereWithoutConfirmerInput | ComfortAiRecommendationUpdateManyWithWhereWithoutConfirmerInput[]
    deleteMany?: ComfortAiRecommendationScalarWhereInput | ComfortAiRecommendationScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutAuthoredRecommendationsInput = {
    create?: XOR<UserCreateWithoutAuthoredRecommendationsInput, UserUncheckedCreateWithoutAuthoredRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConfirmedRecommendationsInput = {
    create?: XOR<UserCreateWithoutConfirmedRecommendationsInput, UserUncheckedCreateWithoutConfirmedRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmedRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumComfortAiTargetServiceFieldUpdateOperationsInput = {
    set?: $Enums.ComfortAiTargetService
  }

  export type EnumComfortAiRecommendationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ComfortAiRecommendationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAuthoredRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutAuthoredRecommendationsInput, UserUncheckedCreateWithoutAuthoredRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredRecommendationsInput
    upsert?: UserUpsertWithoutAuthoredRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthoredRecommendationsInput, UserUpdateWithoutAuthoredRecommendationsInput>, UserUncheckedUpdateWithoutAuthoredRecommendationsInput>
  }

  export type UserUpdateOneWithoutConfirmedRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutConfirmedRecommendationsInput, UserUncheckedCreateWithoutConfirmedRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmedRecommendationsInput
    upsert?: UserUpsertWithoutConfirmedRecommendationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConfirmedRecommendationsInput, UserUpdateWithoutConfirmedRecommendationsInput>, UserUncheckedUpdateWithoutConfirmedRecommendationsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumComfortAiTargetServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiTargetService | EnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiTargetServiceFilter<$PrismaModel> | $Enums.ComfortAiTargetService
  }

  export type NestedEnumComfortAiRecommendationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiRecommendationStatus | EnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiRecommendationStatusFilter<$PrismaModel> | $Enums.ComfortAiRecommendationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumComfortAiTargetServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiTargetService | EnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiTargetService[] | ListEnumComfortAiTargetServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiTargetServiceWithAggregatesFilter<$PrismaModel> | $Enums.ComfortAiTargetService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComfortAiTargetServiceFilter<$PrismaModel>
    _max?: NestedEnumComfortAiTargetServiceFilter<$PrismaModel>
  }

  export type NestedEnumComfortAiRecommendationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComfortAiRecommendationStatus | EnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComfortAiRecommendationStatus[] | ListEnumComfortAiRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComfortAiRecommendationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComfortAiRecommendationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComfortAiRecommendationStatusFilter<$PrismaModel>
    _max?: NestedEnumComfortAiRecommendationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ComfortAiRecommendationCreateWithoutAuthorInput = {
    id?: bigint | number
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Confirmer?: UserCreateNestedOneWithoutConfirmedRecommendationsInput
  }

  export type ComfortAiRecommendationUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    confirmerUserId?: bigint | number | null
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComfortAiRecommendationCreateOrConnectWithoutAuthorInput = {
    where: ComfortAiRecommendationWhereUniqueInput
    create: XOR<ComfortAiRecommendationCreateWithoutAuthorInput, ComfortAiRecommendationUncheckedCreateWithoutAuthorInput>
  }

  export type ComfortAiRecommendationCreateManyAuthorInputEnvelope = {
    data: ComfortAiRecommendationCreateManyAuthorInput | ComfortAiRecommendationCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ComfortAiRecommendationCreateWithoutConfirmerInput = {
    id?: bigint | number
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Author: UserCreateNestedOneWithoutAuthoredRecommendationsInput
  }

  export type ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput = {
    id?: bigint | number
    authorUserId: bigint | number
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComfortAiRecommendationCreateOrConnectWithoutConfirmerInput = {
    where: ComfortAiRecommendationWhereUniqueInput
    create: XOR<ComfortAiRecommendationCreateWithoutConfirmerInput, ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput>
  }

  export type ComfortAiRecommendationCreateManyConfirmerInputEnvelope = {
    data: ComfortAiRecommendationCreateManyConfirmerInput | ComfortAiRecommendationCreateManyConfirmerInput[]
    skipDuplicates?: boolean
  }

  export type ComfortAiRecommendationUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ComfortAiRecommendationWhereUniqueInput
    update: XOR<ComfortAiRecommendationUpdateWithoutAuthorInput, ComfortAiRecommendationUncheckedUpdateWithoutAuthorInput>
    create: XOR<ComfortAiRecommendationCreateWithoutAuthorInput, ComfortAiRecommendationUncheckedCreateWithoutAuthorInput>
  }

  export type ComfortAiRecommendationUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ComfortAiRecommendationWhereUniqueInput
    data: XOR<ComfortAiRecommendationUpdateWithoutAuthorInput, ComfortAiRecommendationUncheckedUpdateWithoutAuthorInput>
  }

  export type ComfortAiRecommendationUpdateManyWithWhereWithoutAuthorInput = {
    where: ComfortAiRecommendationScalarWhereInput
    data: XOR<ComfortAiRecommendationUpdateManyMutationInput, ComfortAiRecommendationUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ComfortAiRecommendationScalarWhereInput = {
    AND?: ComfortAiRecommendationScalarWhereInput | ComfortAiRecommendationScalarWhereInput[]
    OR?: ComfortAiRecommendationScalarWhereInput[]
    NOT?: ComfortAiRecommendationScalarWhereInput | ComfortAiRecommendationScalarWhereInput[]
    id?: BigIntFilter<"ComfortAiRecommendation"> | bigint | number
    authorUserId?: BigIntFilter<"ComfortAiRecommendation"> | bigint | number
    confirmerUserId?: BigIntNullableFilter<"ComfortAiRecommendation"> | bigint | number | null
    targetService?: EnumComfortAiTargetServiceFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiTargetService
    title?: StringFilter<"ComfortAiRecommendation"> | string
    explanation?: StringFilter<"ComfortAiRecommendation"> | string
    payloadJson?: JsonFilter<"ComfortAiRecommendation">
    status?: EnumComfortAiRecommendationStatusFilter<"ComfortAiRecommendation"> | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFilter<"ComfortAiRecommendation"> | boolean
    applyKey?: StringNullableFilter<"ComfortAiRecommendation"> | string | null
    applyAttempt?: IntFilter<"ComfortAiRecommendation"> | number
    applyError?: StringNullableFilter<"ComfortAiRecommendation"> | string | null
    applyStartedAt?: DateTimeNullableFilter<"ComfortAiRecommendation"> | Date | string | null
    applyFinishedAt?: DateTimeNullableFilter<"ComfortAiRecommendation"> | Date | string | null
    createdAt?: DateTimeFilter<"ComfortAiRecommendation"> | Date | string
    updatedAt?: DateTimeFilter<"ComfortAiRecommendation"> | Date | string
  }

  export type ComfortAiRecommendationUpsertWithWhereUniqueWithoutConfirmerInput = {
    where: ComfortAiRecommendationWhereUniqueInput
    update: XOR<ComfortAiRecommendationUpdateWithoutConfirmerInput, ComfortAiRecommendationUncheckedUpdateWithoutConfirmerInput>
    create: XOR<ComfortAiRecommendationCreateWithoutConfirmerInput, ComfortAiRecommendationUncheckedCreateWithoutConfirmerInput>
  }

  export type ComfortAiRecommendationUpdateWithWhereUniqueWithoutConfirmerInput = {
    where: ComfortAiRecommendationWhereUniqueInput
    data: XOR<ComfortAiRecommendationUpdateWithoutConfirmerInput, ComfortAiRecommendationUncheckedUpdateWithoutConfirmerInput>
  }

  export type ComfortAiRecommendationUpdateManyWithWhereWithoutConfirmerInput = {
    where: ComfortAiRecommendationScalarWhereInput
    data: XOR<ComfortAiRecommendationUpdateManyMutationInput, ComfortAiRecommendationUncheckedUpdateManyWithoutConfirmerInput>
  }

  export type UserCreateWithoutAuthoredRecommendationsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ConfirmedRecommendations?: ComfortAiRecommendationCreateNestedManyWithoutConfirmerInput
  }

  export type UserUncheckedCreateWithoutAuthoredRecommendationsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    ConfirmedRecommendations?: ComfortAiRecommendationUncheckedCreateNestedManyWithoutConfirmerInput
  }

  export type UserCreateOrConnectWithoutAuthoredRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthoredRecommendationsInput, UserUncheckedCreateWithoutAuthoredRecommendationsInput>
  }

  export type UserCreateWithoutConfirmedRecommendationsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    AuthoredRecommendations?: ComfortAiRecommendationCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutConfirmedRecommendationsInput = {
    id?: bigint | number
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    AuthoredRecommendations?: ComfortAiRecommendationUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutConfirmedRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConfirmedRecommendationsInput, UserUncheckedCreateWithoutConfirmedRecommendationsInput>
  }

  export type UserUpsertWithoutAuthoredRecommendationsInput = {
    update: XOR<UserUpdateWithoutAuthoredRecommendationsInput, UserUncheckedUpdateWithoutAuthoredRecommendationsInput>
    create: XOR<UserCreateWithoutAuthoredRecommendationsInput, UserUncheckedCreateWithoutAuthoredRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthoredRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthoredRecommendationsInput, UserUncheckedUpdateWithoutAuthoredRecommendationsInput>
  }

  export type UserUpdateWithoutAuthoredRecommendationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ConfirmedRecommendations?: ComfortAiRecommendationUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthoredRecommendationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ConfirmedRecommendations?: ComfortAiRecommendationUncheckedUpdateManyWithoutConfirmerNestedInput
  }

  export type UserUpsertWithoutConfirmedRecommendationsInput = {
    update: XOR<UserUpdateWithoutConfirmedRecommendationsInput, UserUncheckedUpdateWithoutConfirmedRecommendationsInput>
    create: XOR<UserCreateWithoutConfirmedRecommendationsInput, UserUncheckedCreateWithoutConfirmedRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConfirmedRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConfirmedRecommendationsInput, UserUncheckedUpdateWithoutConfirmedRecommendationsInput>
  }

  export type UserUpdateWithoutConfirmedRecommendationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AuthoredRecommendations?: ComfortAiRecommendationUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutConfirmedRecommendationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AuthoredRecommendations?: ComfortAiRecommendationUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ComfortAiRecommendationCreateManyAuthorInput = {
    id?: bigint | number
    confirmerUserId?: bigint | number | null
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComfortAiRecommendationCreateManyConfirmerInput = {
    id?: bigint | number
    authorUserId: bigint | number
    targetService: $Enums.ComfortAiTargetService
    title: string
    explanation?: string
    payloadJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: boolean
    applyKey?: string | null
    applyAttempt?: number
    applyError?: string | null
    applyStartedAt?: Date | string | null
    applyFinishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComfortAiRecommendationUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Confirmer?: UserUpdateOneWithoutConfirmedRecommendationsNestedInput
  }

  export type ComfortAiRecommendationUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmerUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiRecommendationUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    confirmerUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiRecommendationUpdateWithoutConfirmerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Author?: UserUpdateOneRequiredWithoutAuthoredRecommendationsNestedInput
  }

  export type ComfortAiRecommendationUncheckedUpdateWithoutConfirmerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    authorUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComfortAiRecommendationUncheckedUpdateManyWithoutConfirmerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    authorUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    targetService?: EnumComfortAiTargetServiceFieldUpdateOperationsInput | $Enums.ComfortAiTargetService
    title?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    payloadJson?: JsonNullValueInput | InputJsonValue
    status?: EnumComfortAiRecommendationStatusFieldUpdateOperationsInput | $Enums.ComfortAiRecommendationStatus
    requiresAdminConfirm?: BoolFieldUpdateOperationsInput | boolean
    applyKey?: NullableStringFieldUpdateOperationsInput | string | null
    applyAttempt?: IntFieldUpdateOperationsInput | number
    applyError?: NullableStringFieldUpdateOperationsInput | string | null
    applyStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applyFinishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}