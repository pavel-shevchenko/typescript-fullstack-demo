
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
 * Model SearchDocument
 * 
 */
export type SearchDocument = $Result.DefaultSelection<Prisma.$SearchDocumentPayload>
/**
 * Model SearchChunk
 * 
 */
export type SearchChunk = $Result.DefaultSelection<Prisma.$SearchChunkPayload>
/**
 * Model SearchEmbedding
 * 
 */
export type SearchEmbedding = $Result.DefaultSelection<Prisma.$SearchEmbeddingPayload>
/**
 * Model SearchIndexJob
 * 
 */
export type SearchIndexJob = $Result.DefaultSelection<Prisma.$SearchIndexJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SearchDocumentStatus: {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

export type SearchDocumentStatus = (typeof SearchDocumentStatus)[keyof typeof SearchDocumentStatus]


export const SearchIndexJobStatus: {
  pending: 'pending',
  running: 'running',
  completed: 'completed',
  failed: 'failed'
};

export type SearchIndexJobStatus = (typeof SearchIndexJobStatus)[keyof typeof SearchIndexJobStatus]

}

export type SearchDocumentStatus = $Enums.SearchDocumentStatus

export const SearchDocumentStatus: typeof $Enums.SearchDocumentStatus

export type SearchIndexJobStatus = $Enums.SearchIndexJobStatus

export const SearchIndexJobStatus: typeof $Enums.SearchIndexJobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more SearchDocuments
 * const searchDocuments = await prisma.searchDocument.findMany()
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
   * // Fetch zero or more SearchDocuments
   * const searchDocuments = await prisma.searchDocument.findMany()
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
   * `prisma.searchDocument`: Exposes CRUD operations for the **SearchDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchDocuments
    * const searchDocuments = await prisma.searchDocument.findMany()
    * ```
    */
  get searchDocument(): Prisma.SearchDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchChunk`: Exposes CRUD operations for the **SearchChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchChunks
    * const searchChunks = await prisma.searchChunk.findMany()
    * ```
    */
  get searchChunk(): Prisma.SearchChunkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchEmbedding`: Exposes CRUD operations for the **SearchEmbedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchEmbeddings
    * const searchEmbeddings = await prisma.searchEmbedding.findMany()
    * ```
    */
  get searchEmbedding(): Prisma.SearchEmbeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchIndexJob`: Exposes CRUD operations for the **SearchIndexJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchIndexJobs
    * const searchIndexJobs = await prisma.searchIndexJob.findMany()
    * ```
    */
  get searchIndexJob(): Prisma.SearchIndexJobDelegate<ExtArgs, ClientOptions>;
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
    SearchDocument: 'SearchDocument',
    SearchChunk: 'SearchChunk',
    SearchEmbedding: 'SearchEmbedding',
    SearchIndexJob: 'SearchIndexJob'
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
      modelProps: "searchDocument" | "searchChunk" | "searchEmbedding" | "searchIndexJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SearchDocument: {
        payload: Prisma.$SearchDocumentPayload<ExtArgs>
        fields: Prisma.SearchDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>
          }
          findFirst: {
            args: Prisma.SearchDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>
          }
          findMany: {
            args: Prisma.SearchDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>[]
          }
          create: {
            args: Prisma.SearchDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>
          }
          createMany: {
            args: Prisma.SearchDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>[]
          }
          delete: {
            args: Prisma.SearchDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>
          }
          update: {
            args: Prisma.SearchDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>
          }
          deleteMany: {
            args: Prisma.SearchDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>[]
          }
          upsert: {
            args: Prisma.SearchDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchDocumentPayload>
          }
          aggregate: {
            args: Prisma.SearchDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchDocument>
          }
          groupBy: {
            args: Prisma.SearchDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<SearchDocumentCountAggregateOutputType> | number
          }
        }
      }
      SearchChunk: {
        payload: Prisma.$SearchChunkPayload<ExtArgs>
        fields: Prisma.SearchChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>
          }
          findFirst: {
            args: Prisma.SearchChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>
          }
          findMany: {
            args: Prisma.SearchChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>[]
          }
          create: {
            args: Prisma.SearchChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>
          }
          createMany: {
            args: Prisma.SearchChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>[]
          }
          delete: {
            args: Prisma.SearchChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>
          }
          update: {
            args: Prisma.SearchChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>
          }
          deleteMany: {
            args: Prisma.SearchChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>[]
          }
          upsert: {
            args: Prisma.SearchChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchChunkPayload>
          }
          aggregate: {
            args: Prisma.SearchChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchChunk>
          }
          groupBy: {
            args: Prisma.SearchChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchChunkCountArgs<ExtArgs>
            result: $Utils.Optional<SearchChunkCountAggregateOutputType> | number
          }
        }
      }
      SearchEmbedding: {
        payload: Prisma.$SearchEmbeddingPayload<ExtArgs>
        fields: Prisma.SearchEmbeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchEmbeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchEmbeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>
          }
          findFirst: {
            args: Prisma.SearchEmbeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchEmbeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>
          }
          findMany: {
            args: Prisma.SearchEmbeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>[]
          }
          create: {
            args: Prisma.SearchEmbeddingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>
          }
          createMany: {
            args: Prisma.SearchEmbeddingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchEmbeddingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>[]
          }
          delete: {
            args: Prisma.SearchEmbeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>
          }
          update: {
            args: Prisma.SearchEmbeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>
          }
          deleteMany: {
            args: Prisma.SearchEmbeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchEmbeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchEmbeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>[]
          }
          upsert: {
            args: Prisma.SearchEmbeddingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchEmbeddingPayload>
          }
          aggregate: {
            args: Prisma.SearchEmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchEmbedding>
          }
          groupBy: {
            args: Prisma.SearchEmbeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchEmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchEmbeddingCountArgs<ExtArgs>
            result: $Utils.Optional<SearchEmbeddingCountAggregateOutputType> | number
          }
        }
      }
      SearchIndexJob: {
        payload: Prisma.$SearchIndexJobPayload<ExtArgs>
        fields: Prisma.SearchIndexJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchIndexJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchIndexJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>
          }
          findFirst: {
            args: Prisma.SearchIndexJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchIndexJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>
          }
          findMany: {
            args: Prisma.SearchIndexJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>[]
          }
          create: {
            args: Prisma.SearchIndexJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>
          }
          createMany: {
            args: Prisma.SearchIndexJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchIndexJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>[]
          }
          delete: {
            args: Prisma.SearchIndexJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>
          }
          update: {
            args: Prisma.SearchIndexJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>
          }
          deleteMany: {
            args: Prisma.SearchIndexJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchIndexJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchIndexJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>[]
          }
          upsert: {
            args: Prisma.SearchIndexJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchIndexJobPayload>
          }
          aggregate: {
            args: Prisma.SearchIndexJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchIndexJob>
          }
          groupBy: {
            args: Prisma.SearchIndexJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchIndexJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchIndexJobCountArgs<ExtArgs>
            result: $Utils.Optional<SearchIndexJobCountAggregateOutputType> | number
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
    searchDocument?: SearchDocumentOmit
    searchChunk?: SearchChunkOmit
    searchEmbedding?: SearchEmbeddingOmit
    searchIndexJob?: SearchIndexJobOmit
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
   * Count Type SearchDocumentCountOutputType
   */

  export type SearchDocumentCountOutputType = {
    Chunks: number
    Jobs: number
  }

  export type SearchDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chunks?: boolean | SearchDocumentCountOutputTypeCountChunksArgs
    Jobs?: boolean | SearchDocumentCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * SearchDocumentCountOutputType without action
   */
  export type SearchDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocumentCountOutputType
     */
    select?: SearchDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SearchDocumentCountOutputType without action
   */
  export type SearchDocumentCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchChunkWhereInput
  }

  /**
   * SearchDocumentCountOutputType without action
   */
  export type SearchDocumentCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchIndexJobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SearchDocument
   */

  export type AggregateSearchDocument = {
    _count: SearchDocumentCountAggregateOutputType | null
    _avg: SearchDocumentAvgAggregateOutputType | null
    _sum: SearchDocumentSumAggregateOutputType | null
    _min: SearchDocumentMinAggregateOutputType | null
    _max: SearchDocumentMaxAggregateOutputType | null
  }

  export type SearchDocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type SearchDocumentSumAggregateOutputType = {
    id: bigint | null
  }

  export type SearchDocumentMinAggregateOutputType = {
    id: bigint | null
    externalKey: string | null
    sourceType: string | null
    title: string | null
    body: string | null
    url: string | null
    status: $Enums.SearchDocumentStatus | null
    tenantKey: string | null
    contentHash: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchDocumentMaxAggregateOutputType = {
    id: bigint | null
    externalKey: string | null
    sourceType: string | null
    title: string | null
    body: string | null
    url: string | null
    status: $Enums.SearchDocumentStatus | null
    tenantKey: string | null
    contentHash: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchDocumentCountAggregateOutputType = {
    id: number
    externalKey: number
    sourceType: number
    title: number
    body: number
    url: number
    status: number
    tenantKey: number
    metadata: number
    contentHash: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchDocumentAvgAggregateInputType = {
    id?: true
  }

  export type SearchDocumentSumAggregateInputType = {
    id?: true
  }

  export type SearchDocumentMinAggregateInputType = {
    id?: true
    externalKey?: true
    sourceType?: true
    title?: true
    body?: true
    url?: true
    status?: true
    tenantKey?: true
    contentHash?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchDocumentMaxAggregateInputType = {
    id?: true
    externalKey?: true
    sourceType?: true
    title?: true
    body?: true
    url?: true
    status?: true
    tenantKey?: true
    contentHash?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchDocumentCountAggregateInputType = {
    id?: true
    externalKey?: true
    sourceType?: true
    title?: true
    body?: true
    url?: true
    status?: true
    tenantKey?: true
    metadata?: true
    contentHash?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchDocument to aggregate.
     */
    where?: SearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchDocuments to fetch.
     */
    orderBy?: SearchDocumentOrderByWithRelationInput | SearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchDocuments
    **/
    _count?: true | SearchDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchDocumentMaxAggregateInputType
  }

  export type GetSearchDocumentAggregateType<T extends SearchDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchDocument[P]>
      : GetScalarType<T[P], AggregateSearchDocument[P]>
  }




  export type SearchDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchDocumentWhereInput
    orderBy?: SearchDocumentOrderByWithAggregationInput | SearchDocumentOrderByWithAggregationInput[]
    by: SearchDocumentScalarFieldEnum[] | SearchDocumentScalarFieldEnum
    having?: SearchDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchDocumentCountAggregateInputType | true
    _avg?: SearchDocumentAvgAggregateInputType
    _sum?: SearchDocumentSumAggregateInputType
    _min?: SearchDocumentMinAggregateInputType
    _max?: SearchDocumentMaxAggregateInputType
  }

  export type SearchDocumentGroupByOutputType = {
    id: bigint
    externalKey: string
    sourceType: string
    title: string
    body: string
    url: string | null
    status: $Enums.SearchDocumentStatus
    tenantKey: string | null
    metadata: JsonValue | null
    contentHash: string
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SearchDocumentCountAggregateOutputType | null
    _avg: SearchDocumentAvgAggregateOutputType | null
    _sum: SearchDocumentSumAggregateOutputType | null
    _min: SearchDocumentMinAggregateOutputType | null
    _max: SearchDocumentMaxAggregateOutputType | null
  }

  type GetSearchDocumentGroupByPayload<T extends SearchDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], SearchDocumentGroupByOutputType[P]>
        }
      >
    >


  export type SearchDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalKey?: boolean
    sourceType?: boolean
    title?: boolean
    body?: boolean
    url?: boolean
    status?: boolean
    tenantKey?: boolean
    metadata?: boolean
    contentHash?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Chunks?: boolean | SearchDocument$ChunksArgs<ExtArgs>
    Jobs?: boolean | SearchDocument$JobsArgs<ExtArgs>
    _count?: boolean | SearchDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchDocument"]>

  export type SearchDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalKey?: boolean
    sourceType?: boolean
    title?: boolean
    body?: boolean
    url?: boolean
    status?: boolean
    tenantKey?: boolean
    metadata?: boolean
    contentHash?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchDocument"]>

  export type SearchDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalKey?: boolean
    sourceType?: boolean
    title?: boolean
    body?: boolean
    url?: boolean
    status?: boolean
    tenantKey?: boolean
    metadata?: boolean
    contentHash?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchDocument"]>

  export type SearchDocumentSelectScalar = {
    id?: boolean
    externalKey?: boolean
    sourceType?: boolean
    title?: boolean
    body?: boolean
    url?: boolean
    status?: boolean
    tenantKey?: boolean
    metadata?: boolean
    contentHash?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SearchDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalKey" | "sourceType" | "title" | "body" | "url" | "status" | "tenantKey" | "metadata" | "contentHash" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["searchDocument"]>
  export type SearchDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chunks?: boolean | SearchDocument$ChunksArgs<ExtArgs>
    Jobs?: boolean | SearchDocument$JobsArgs<ExtArgs>
    _count?: boolean | SearchDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SearchDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SearchDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SearchDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchDocument"
    objects: {
      Chunks: Prisma.$SearchChunkPayload<ExtArgs>[]
      Jobs: Prisma.$SearchIndexJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      externalKey: string
      sourceType: string
      title: string
      body: string
      url: string | null
      status: $Enums.SearchDocumentStatus
      tenantKey: string | null
      metadata: Prisma.JsonValue | null
      contentHash: string
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchDocument"]>
    composites: {}
  }

  type SearchDocumentGetPayload<S extends boolean | null | undefined | SearchDocumentDefaultArgs> = $Result.GetResult<Prisma.$SearchDocumentPayload, S>

  type SearchDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchDocumentCountAggregateInputType | true
    }

  export interface SearchDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchDocument'], meta: { name: 'SearchDocument' } }
    /**
     * Find zero or one SearchDocument that matches the filter.
     * @param {SearchDocumentFindUniqueArgs} args - Arguments to find a SearchDocument
     * @example
     * // Get one SearchDocument
     * const searchDocument = await prisma.searchDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchDocumentFindUniqueArgs>(args: SelectSubset<T, SearchDocumentFindUniqueArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchDocumentFindUniqueOrThrowArgs} args - Arguments to find a SearchDocument
     * @example
     * // Get one SearchDocument
     * const searchDocument = await prisma.searchDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchDocumentFindFirstArgs} args - Arguments to find a SearchDocument
     * @example
     * // Get one SearchDocument
     * const searchDocument = await prisma.searchDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchDocumentFindFirstArgs>(args?: SelectSubset<T, SearchDocumentFindFirstArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchDocumentFindFirstOrThrowArgs} args - Arguments to find a SearchDocument
     * @example
     * // Get one SearchDocument
     * const searchDocument = await prisma.searchDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchDocuments
     * const searchDocuments = await prisma.searchDocument.findMany()
     * 
     * // Get first 10 SearchDocuments
     * const searchDocuments = await prisma.searchDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchDocumentWithIdOnly = await prisma.searchDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchDocumentFindManyArgs>(args?: SelectSubset<T, SearchDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchDocument.
     * @param {SearchDocumentCreateArgs} args - Arguments to create a SearchDocument.
     * @example
     * // Create one SearchDocument
     * const SearchDocument = await prisma.searchDocument.create({
     *   data: {
     *     // ... data to create a SearchDocument
     *   }
     * })
     * 
     */
    create<T extends SearchDocumentCreateArgs>(args: SelectSubset<T, SearchDocumentCreateArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchDocuments.
     * @param {SearchDocumentCreateManyArgs} args - Arguments to create many SearchDocuments.
     * @example
     * // Create many SearchDocuments
     * const searchDocument = await prisma.searchDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchDocumentCreateManyArgs>(args?: SelectSubset<T, SearchDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchDocuments and returns the data saved in the database.
     * @param {SearchDocumentCreateManyAndReturnArgs} args - Arguments to create many SearchDocuments.
     * @example
     * // Create many SearchDocuments
     * const searchDocument = await prisma.searchDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchDocuments and only return the `id`
     * const searchDocumentWithIdOnly = await prisma.searchDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchDocument.
     * @param {SearchDocumentDeleteArgs} args - Arguments to delete one SearchDocument.
     * @example
     * // Delete one SearchDocument
     * const SearchDocument = await prisma.searchDocument.delete({
     *   where: {
     *     // ... filter to delete one SearchDocument
     *   }
     * })
     * 
     */
    delete<T extends SearchDocumentDeleteArgs>(args: SelectSubset<T, SearchDocumentDeleteArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchDocument.
     * @param {SearchDocumentUpdateArgs} args - Arguments to update one SearchDocument.
     * @example
     * // Update one SearchDocument
     * const searchDocument = await prisma.searchDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchDocumentUpdateArgs>(args: SelectSubset<T, SearchDocumentUpdateArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchDocuments.
     * @param {SearchDocumentDeleteManyArgs} args - Arguments to filter SearchDocuments to delete.
     * @example
     * // Delete a few SearchDocuments
     * const { count } = await prisma.searchDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchDocumentDeleteManyArgs>(args?: SelectSubset<T, SearchDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchDocuments
     * const searchDocument = await prisma.searchDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchDocumentUpdateManyArgs>(args: SelectSubset<T, SearchDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchDocuments and returns the data updated in the database.
     * @param {SearchDocumentUpdateManyAndReturnArgs} args - Arguments to update many SearchDocuments.
     * @example
     * // Update many SearchDocuments
     * const searchDocument = await prisma.searchDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchDocuments and only return the `id`
     * const searchDocumentWithIdOnly = await prisma.searchDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends SearchDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchDocument.
     * @param {SearchDocumentUpsertArgs} args - Arguments to update or create a SearchDocument.
     * @example
     * // Update or create a SearchDocument
     * const searchDocument = await prisma.searchDocument.upsert({
     *   create: {
     *     // ... data to create a SearchDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchDocument we want to update
     *   }
     * })
     */
    upsert<T extends SearchDocumentUpsertArgs>(args: SelectSubset<T, SearchDocumentUpsertArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchDocumentCountArgs} args - Arguments to filter SearchDocuments to count.
     * @example
     * // Count the number of SearchDocuments
     * const count = await prisma.searchDocument.count({
     *   where: {
     *     // ... the filter for the SearchDocuments we want to count
     *   }
     * })
    **/
    count<T extends SearchDocumentCountArgs>(
      args?: Subset<T, SearchDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchDocumentAggregateArgs>(args: Subset<T, SearchDocumentAggregateArgs>): Prisma.PrismaPromise<GetSearchDocumentAggregateType<T>>

    /**
     * Group by SearchDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchDocumentGroupByArgs} args - Group by arguments.
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
      T extends SearchDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchDocumentGroupByArgs['orderBy'] }
        : { orderBy?: SearchDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchDocument model
   */
  readonly fields: SearchDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chunks<T extends SearchDocument$ChunksArgs<ExtArgs> = {}>(args?: Subset<T, SearchDocument$ChunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Jobs<T extends SearchDocument$JobsArgs<ExtArgs> = {}>(args?: Subset<T, SearchDocument$JobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SearchDocument model
   */
  interface SearchDocumentFieldRefs {
    readonly id: FieldRef<"SearchDocument", 'BigInt'>
    readonly externalKey: FieldRef<"SearchDocument", 'String'>
    readonly sourceType: FieldRef<"SearchDocument", 'String'>
    readonly title: FieldRef<"SearchDocument", 'String'>
    readonly body: FieldRef<"SearchDocument", 'String'>
    readonly url: FieldRef<"SearchDocument", 'String'>
    readonly status: FieldRef<"SearchDocument", 'SearchDocumentStatus'>
    readonly tenantKey: FieldRef<"SearchDocument", 'String'>
    readonly metadata: FieldRef<"SearchDocument", 'Json'>
    readonly contentHash: FieldRef<"SearchDocument", 'String'>
    readonly publishedAt: FieldRef<"SearchDocument", 'DateTime'>
    readonly createdAt: FieldRef<"SearchDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchDocument findUnique
   */
  export type SearchDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SearchDocument to fetch.
     */
    where: SearchDocumentWhereUniqueInput
  }

  /**
   * SearchDocument findUniqueOrThrow
   */
  export type SearchDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SearchDocument to fetch.
     */
    where: SearchDocumentWhereUniqueInput
  }

  /**
   * SearchDocument findFirst
   */
  export type SearchDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SearchDocument to fetch.
     */
    where?: SearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchDocuments to fetch.
     */
    orderBy?: SearchDocumentOrderByWithRelationInput | SearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchDocuments.
     */
    cursor?: SearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchDocuments.
     */
    distinct?: SearchDocumentScalarFieldEnum | SearchDocumentScalarFieldEnum[]
  }

  /**
   * SearchDocument findFirstOrThrow
   */
  export type SearchDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SearchDocument to fetch.
     */
    where?: SearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchDocuments to fetch.
     */
    orderBy?: SearchDocumentOrderByWithRelationInput | SearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchDocuments.
     */
    cursor?: SearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchDocuments.
     */
    distinct?: SearchDocumentScalarFieldEnum | SearchDocumentScalarFieldEnum[]
  }

  /**
   * SearchDocument findMany
   */
  export type SearchDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * Filter, which SearchDocuments to fetch.
     */
    where?: SearchDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchDocuments to fetch.
     */
    orderBy?: SearchDocumentOrderByWithRelationInput | SearchDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchDocuments.
     */
    cursor?: SearchDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchDocuments.
     */
    distinct?: SearchDocumentScalarFieldEnum | SearchDocumentScalarFieldEnum[]
  }

  /**
   * SearchDocument create
   */
  export type SearchDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchDocument.
     */
    data: XOR<SearchDocumentCreateInput, SearchDocumentUncheckedCreateInput>
  }

  /**
   * SearchDocument createMany
   */
  export type SearchDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchDocuments.
     */
    data: SearchDocumentCreateManyInput | SearchDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchDocument createManyAndReturn
   */
  export type SearchDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many SearchDocuments.
     */
    data: SearchDocumentCreateManyInput | SearchDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchDocument update
   */
  export type SearchDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchDocument.
     */
    data: XOR<SearchDocumentUpdateInput, SearchDocumentUncheckedUpdateInput>
    /**
     * Choose, which SearchDocument to update.
     */
    where: SearchDocumentWhereUniqueInput
  }

  /**
   * SearchDocument updateMany
   */
  export type SearchDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchDocuments.
     */
    data: XOR<SearchDocumentUpdateManyMutationInput, SearchDocumentUncheckedUpdateManyInput>
    /**
     * Filter which SearchDocuments to update
     */
    where?: SearchDocumentWhereInput
    /**
     * Limit how many SearchDocuments to update.
     */
    limit?: number
  }

  /**
   * SearchDocument updateManyAndReturn
   */
  export type SearchDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * The data used to update SearchDocuments.
     */
    data: XOR<SearchDocumentUpdateManyMutationInput, SearchDocumentUncheckedUpdateManyInput>
    /**
     * Filter which SearchDocuments to update
     */
    where?: SearchDocumentWhereInput
    /**
     * Limit how many SearchDocuments to update.
     */
    limit?: number
  }

  /**
   * SearchDocument upsert
   */
  export type SearchDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchDocument to update in case it exists.
     */
    where: SearchDocumentWhereUniqueInput
    /**
     * In case the SearchDocument found by the `where` argument doesn't exist, create a new SearchDocument with this data.
     */
    create: XOR<SearchDocumentCreateInput, SearchDocumentUncheckedCreateInput>
    /**
     * In case the SearchDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchDocumentUpdateInput, SearchDocumentUncheckedUpdateInput>
  }

  /**
   * SearchDocument delete
   */
  export type SearchDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    /**
     * Filter which SearchDocument to delete.
     */
    where: SearchDocumentWhereUniqueInput
  }

  /**
   * SearchDocument deleteMany
   */
  export type SearchDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchDocuments to delete
     */
    where?: SearchDocumentWhereInput
    /**
     * Limit how many SearchDocuments to delete.
     */
    limit?: number
  }

  /**
   * SearchDocument.Chunks
   */
  export type SearchDocument$ChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    where?: SearchChunkWhereInput
    orderBy?: SearchChunkOrderByWithRelationInput | SearchChunkOrderByWithRelationInput[]
    cursor?: SearchChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchChunkScalarFieldEnum | SearchChunkScalarFieldEnum[]
  }

  /**
   * SearchDocument.Jobs
   */
  export type SearchDocument$JobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    where?: SearchIndexJobWhereInput
    orderBy?: SearchIndexJobOrderByWithRelationInput | SearchIndexJobOrderByWithRelationInput[]
    cursor?: SearchIndexJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchIndexJobScalarFieldEnum | SearchIndexJobScalarFieldEnum[]
  }

  /**
   * SearchDocument without action
   */
  export type SearchDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
  }


  /**
   * Model SearchChunk
   */

  export type AggregateSearchChunk = {
    _count: SearchChunkCountAggregateOutputType | null
    _avg: SearchChunkAvgAggregateOutputType | null
    _sum: SearchChunkSumAggregateOutputType | null
    _min: SearchChunkMinAggregateOutputType | null
    _max: SearchChunkMaxAggregateOutputType | null
  }

  export type SearchChunkAvgAggregateOutputType = {
    id: number | null
    documentId: number | null
    ordinal: number | null
    tokenCount: number | null
  }

  export type SearchChunkSumAggregateOutputType = {
    id: bigint | null
    documentId: bigint | null
    ordinal: number | null
    tokenCount: number | null
  }

  export type SearchChunkMinAggregateOutputType = {
    id: bigint | null
    documentId: bigint | null
    ordinal: number | null
    content: string | null
    tokenCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchChunkMaxAggregateOutputType = {
    id: bigint | null
    documentId: bigint | null
    ordinal: number | null
    content: string | null
    tokenCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchChunkCountAggregateOutputType = {
    id: number
    documentId: number
    ordinal: number
    content: number
    tokenCount: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchChunkAvgAggregateInputType = {
    id?: true
    documentId?: true
    ordinal?: true
    tokenCount?: true
  }

  export type SearchChunkSumAggregateInputType = {
    id?: true
    documentId?: true
    ordinal?: true
    tokenCount?: true
  }

  export type SearchChunkMinAggregateInputType = {
    id?: true
    documentId?: true
    ordinal?: true
    content?: true
    tokenCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchChunkMaxAggregateInputType = {
    id?: true
    documentId?: true
    ordinal?: true
    content?: true
    tokenCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchChunkCountAggregateInputType = {
    id?: true
    documentId?: true
    ordinal?: true
    content?: true
    tokenCount?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchChunk to aggregate.
     */
    where?: SearchChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchChunks to fetch.
     */
    orderBy?: SearchChunkOrderByWithRelationInput | SearchChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchChunks
    **/
    _count?: true | SearchChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchChunkMaxAggregateInputType
  }

  export type GetSearchChunkAggregateType<T extends SearchChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchChunk[P]>
      : GetScalarType<T[P], AggregateSearchChunk[P]>
  }




  export type SearchChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchChunkWhereInput
    orderBy?: SearchChunkOrderByWithAggregationInput | SearchChunkOrderByWithAggregationInput[]
    by: SearchChunkScalarFieldEnum[] | SearchChunkScalarFieldEnum
    having?: SearchChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchChunkCountAggregateInputType | true
    _avg?: SearchChunkAvgAggregateInputType
    _sum?: SearchChunkSumAggregateInputType
    _min?: SearchChunkMinAggregateInputType
    _max?: SearchChunkMaxAggregateInputType
  }

  export type SearchChunkGroupByOutputType = {
    id: bigint
    documentId: bigint
    ordinal: number
    content: string
    tokenCount: number
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: SearchChunkCountAggregateOutputType | null
    _avg: SearchChunkAvgAggregateOutputType | null
    _sum: SearchChunkSumAggregateOutputType | null
    _min: SearchChunkMinAggregateOutputType | null
    _max: SearchChunkMaxAggregateOutputType | null
  }

  type GetSearchChunkGroupByPayload<T extends SearchChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchChunkGroupByOutputType[P]>
            : GetScalarType<T[P], SearchChunkGroupByOutputType[P]>
        }
      >
    >


  export type SearchChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    ordinal?: boolean
    content?: boolean
    tokenCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Document?: boolean | SearchDocumentDefaultArgs<ExtArgs>
    Embedding?: boolean | SearchChunk$EmbeddingArgs<ExtArgs>
  }, ExtArgs["result"]["searchChunk"]>

  export type SearchChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    ordinal?: boolean
    content?: boolean
    tokenCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Document?: boolean | SearchDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchChunk"]>

  export type SearchChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    ordinal?: boolean
    content?: boolean
    tokenCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Document?: boolean | SearchDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchChunk"]>

  export type SearchChunkSelectScalar = {
    id?: boolean
    documentId?: boolean
    ordinal?: boolean
    content?: boolean
    tokenCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SearchChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "ordinal" | "content" | "tokenCount" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["searchChunk"]>
  export type SearchChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | SearchDocumentDefaultArgs<ExtArgs>
    Embedding?: boolean | SearchChunk$EmbeddingArgs<ExtArgs>
  }
  export type SearchChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | SearchDocumentDefaultArgs<ExtArgs>
  }
  export type SearchChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | SearchDocumentDefaultArgs<ExtArgs>
  }

  export type $SearchChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchChunk"
    objects: {
      Document: Prisma.$SearchDocumentPayload<ExtArgs>
      Embedding: Prisma.$SearchEmbeddingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      documentId: bigint
      ordinal: number
      content: string
      tokenCount: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchChunk"]>
    composites: {}
  }

  type SearchChunkGetPayload<S extends boolean | null | undefined | SearchChunkDefaultArgs> = $Result.GetResult<Prisma.$SearchChunkPayload, S>

  type SearchChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchChunkCountAggregateInputType | true
    }

  export interface SearchChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchChunk'], meta: { name: 'SearchChunk' } }
    /**
     * Find zero or one SearchChunk that matches the filter.
     * @param {SearchChunkFindUniqueArgs} args - Arguments to find a SearchChunk
     * @example
     * // Get one SearchChunk
     * const searchChunk = await prisma.searchChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchChunkFindUniqueArgs>(args: SelectSubset<T, SearchChunkFindUniqueArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchChunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchChunkFindUniqueOrThrowArgs} args - Arguments to find a SearchChunk
     * @example
     * // Get one SearchChunk
     * const searchChunk = await prisma.searchChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchChunkFindFirstArgs} args - Arguments to find a SearchChunk
     * @example
     * // Get one SearchChunk
     * const searchChunk = await prisma.searchChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchChunkFindFirstArgs>(args?: SelectSubset<T, SearchChunkFindFirstArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchChunkFindFirstOrThrowArgs} args - Arguments to find a SearchChunk
     * @example
     * // Get one SearchChunk
     * const searchChunk = await prisma.searchChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchChunks
     * const searchChunks = await prisma.searchChunk.findMany()
     * 
     * // Get first 10 SearchChunks
     * const searchChunks = await prisma.searchChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchChunkWithIdOnly = await prisma.searchChunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchChunkFindManyArgs>(args?: SelectSubset<T, SearchChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchChunk.
     * @param {SearchChunkCreateArgs} args - Arguments to create a SearchChunk.
     * @example
     * // Create one SearchChunk
     * const SearchChunk = await prisma.searchChunk.create({
     *   data: {
     *     // ... data to create a SearchChunk
     *   }
     * })
     * 
     */
    create<T extends SearchChunkCreateArgs>(args: SelectSubset<T, SearchChunkCreateArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchChunks.
     * @param {SearchChunkCreateManyArgs} args - Arguments to create many SearchChunks.
     * @example
     * // Create many SearchChunks
     * const searchChunk = await prisma.searchChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchChunkCreateManyArgs>(args?: SelectSubset<T, SearchChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchChunks and returns the data saved in the database.
     * @param {SearchChunkCreateManyAndReturnArgs} args - Arguments to create many SearchChunks.
     * @example
     * // Create many SearchChunks
     * const searchChunk = await prisma.searchChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchChunks and only return the `id`
     * const searchChunkWithIdOnly = await prisma.searchChunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchChunk.
     * @param {SearchChunkDeleteArgs} args - Arguments to delete one SearchChunk.
     * @example
     * // Delete one SearchChunk
     * const SearchChunk = await prisma.searchChunk.delete({
     *   where: {
     *     // ... filter to delete one SearchChunk
     *   }
     * })
     * 
     */
    delete<T extends SearchChunkDeleteArgs>(args: SelectSubset<T, SearchChunkDeleteArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchChunk.
     * @param {SearchChunkUpdateArgs} args - Arguments to update one SearchChunk.
     * @example
     * // Update one SearchChunk
     * const searchChunk = await prisma.searchChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchChunkUpdateArgs>(args: SelectSubset<T, SearchChunkUpdateArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchChunks.
     * @param {SearchChunkDeleteManyArgs} args - Arguments to filter SearchChunks to delete.
     * @example
     * // Delete a few SearchChunks
     * const { count } = await prisma.searchChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchChunkDeleteManyArgs>(args?: SelectSubset<T, SearchChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchChunks
     * const searchChunk = await prisma.searchChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchChunkUpdateManyArgs>(args: SelectSubset<T, SearchChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchChunks and returns the data updated in the database.
     * @param {SearchChunkUpdateManyAndReturnArgs} args - Arguments to update many SearchChunks.
     * @example
     * // Update many SearchChunks
     * const searchChunk = await prisma.searchChunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchChunks and only return the `id`
     * const searchChunkWithIdOnly = await prisma.searchChunk.updateManyAndReturn({
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
    updateManyAndReturn<T extends SearchChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchChunk.
     * @param {SearchChunkUpsertArgs} args - Arguments to update or create a SearchChunk.
     * @example
     * // Update or create a SearchChunk
     * const searchChunk = await prisma.searchChunk.upsert({
     *   create: {
     *     // ... data to create a SearchChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchChunk we want to update
     *   }
     * })
     */
    upsert<T extends SearchChunkUpsertArgs>(args: SelectSubset<T, SearchChunkUpsertArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchChunkCountArgs} args - Arguments to filter SearchChunks to count.
     * @example
     * // Count the number of SearchChunks
     * const count = await prisma.searchChunk.count({
     *   where: {
     *     // ... the filter for the SearchChunks we want to count
     *   }
     * })
    **/
    count<T extends SearchChunkCountArgs>(
      args?: Subset<T, SearchChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchChunkAggregateArgs>(args: Subset<T, SearchChunkAggregateArgs>): Prisma.PrismaPromise<GetSearchChunkAggregateType<T>>

    /**
     * Group by SearchChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchChunkGroupByArgs} args - Group by arguments.
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
      T extends SearchChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchChunkGroupByArgs['orderBy'] }
        : { orderBy?: SearchChunkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchChunk model
   */
  readonly fields: SearchChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Document<T extends SearchDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SearchDocumentDefaultArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Embedding<T extends SearchChunk$EmbeddingArgs<ExtArgs> = {}>(args?: Subset<T, SearchChunk$EmbeddingArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SearchChunk model
   */
  interface SearchChunkFieldRefs {
    readonly id: FieldRef<"SearchChunk", 'BigInt'>
    readonly documentId: FieldRef<"SearchChunk", 'BigInt'>
    readonly ordinal: FieldRef<"SearchChunk", 'Int'>
    readonly content: FieldRef<"SearchChunk", 'String'>
    readonly tokenCount: FieldRef<"SearchChunk", 'Int'>
    readonly metadata: FieldRef<"SearchChunk", 'Json'>
    readonly createdAt: FieldRef<"SearchChunk", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchChunk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchChunk findUnique
   */
  export type SearchChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * Filter, which SearchChunk to fetch.
     */
    where: SearchChunkWhereUniqueInput
  }

  /**
   * SearchChunk findUniqueOrThrow
   */
  export type SearchChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * Filter, which SearchChunk to fetch.
     */
    where: SearchChunkWhereUniqueInput
  }

  /**
   * SearchChunk findFirst
   */
  export type SearchChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * Filter, which SearchChunk to fetch.
     */
    where?: SearchChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchChunks to fetch.
     */
    orderBy?: SearchChunkOrderByWithRelationInput | SearchChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchChunks.
     */
    cursor?: SearchChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchChunks.
     */
    distinct?: SearchChunkScalarFieldEnum | SearchChunkScalarFieldEnum[]
  }

  /**
   * SearchChunk findFirstOrThrow
   */
  export type SearchChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * Filter, which SearchChunk to fetch.
     */
    where?: SearchChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchChunks to fetch.
     */
    orderBy?: SearchChunkOrderByWithRelationInput | SearchChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchChunks.
     */
    cursor?: SearchChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchChunks.
     */
    distinct?: SearchChunkScalarFieldEnum | SearchChunkScalarFieldEnum[]
  }

  /**
   * SearchChunk findMany
   */
  export type SearchChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * Filter, which SearchChunks to fetch.
     */
    where?: SearchChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchChunks to fetch.
     */
    orderBy?: SearchChunkOrderByWithRelationInput | SearchChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchChunks.
     */
    cursor?: SearchChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchChunks.
     */
    distinct?: SearchChunkScalarFieldEnum | SearchChunkScalarFieldEnum[]
  }

  /**
   * SearchChunk create
   */
  export type SearchChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchChunk.
     */
    data: XOR<SearchChunkCreateInput, SearchChunkUncheckedCreateInput>
  }

  /**
   * SearchChunk createMany
   */
  export type SearchChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchChunks.
     */
    data: SearchChunkCreateManyInput | SearchChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchChunk createManyAndReturn
   */
  export type SearchChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * The data used to create many SearchChunks.
     */
    data: SearchChunkCreateManyInput | SearchChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchChunk update
   */
  export type SearchChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchChunk.
     */
    data: XOR<SearchChunkUpdateInput, SearchChunkUncheckedUpdateInput>
    /**
     * Choose, which SearchChunk to update.
     */
    where: SearchChunkWhereUniqueInput
  }

  /**
   * SearchChunk updateMany
   */
  export type SearchChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchChunks.
     */
    data: XOR<SearchChunkUpdateManyMutationInput, SearchChunkUncheckedUpdateManyInput>
    /**
     * Filter which SearchChunks to update
     */
    where?: SearchChunkWhereInput
    /**
     * Limit how many SearchChunks to update.
     */
    limit?: number
  }

  /**
   * SearchChunk updateManyAndReturn
   */
  export type SearchChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * The data used to update SearchChunks.
     */
    data: XOR<SearchChunkUpdateManyMutationInput, SearchChunkUncheckedUpdateManyInput>
    /**
     * Filter which SearchChunks to update
     */
    where?: SearchChunkWhereInput
    /**
     * Limit how many SearchChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchChunk upsert
   */
  export type SearchChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchChunk to update in case it exists.
     */
    where: SearchChunkWhereUniqueInput
    /**
     * In case the SearchChunk found by the `where` argument doesn't exist, create a new SearchChunk with this data.
     */
    create: XOR<SearchChunkCreateInput, SearchChunkUncheckedCreateInput>
    /**
     * In case the SearchChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchChunkUpdateInput, SearchChunkUncheckedUpdateInput>
  }

  /**
   * SearchChunk delete
   */
  export type SearchChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
    /**
     * Filter which SearchChunk to delete.
     */
    where: SearchChunkWhereUniqueInput
  }

  /**
   * SearchChunk deleteMany
   */
  export type SearchChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchChunks to delete
     */
    where?: SearchChunkWhereInput
    /**
     * Limit how many SearchChunks to delete.
     */
    limit?: number
  }

  /**
   * SearchChunk.Embedding
   */
  export type SearchChunk$EmbeddingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    where?: SearchEmbeddingWhereInput
  }

  /**
   * SearchChunk without action
   */
  export type SearchChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchChunk
     */
    select?: SearchChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchChunk
     */
    omit?: SearchChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchChunkInclude<ExtArgs> | null
  }


  /**
   * Model SearchEmbedding
   */

  export type AggregateSearchEmbedding = {
    _count: SearchEmbeddingCountAggregateOutputType | null
    _avg: SearchEmbeddingAvgAggregateOutputType | null
    _sum: SearchEmbeddingSumAggregateOutputType | null
    _min: SearchEmbeddingMinAggregateOutputType | null
    _max: SearchEmbeddingMaxAggregateOutputType | null
  }

  export type SearchEmbeddingAvgAggregateOutputType = {
    id: number | null
    chunkId: number | null
    dimensions: number | null
  }

  export type SearchEmbeddingSumAggregateOutputType = {
    id: bigint | null
    chunkId: bigint | null
    dimensions: number | null
  }

  export type SearchEmbeddingMinAggregateOutputType = {
    id: bigint | null
    chunkId: bigint | null
    model: string | null
    dimensions: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchEmbeddingMaxAggregateOutputType = {
    id: bigint | null
    chunkId: bigint | null
    model: string | null
    dimensions: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchEmbeddingCountAggregateOutputType = {
    id: number
    chunkId: number
    model: number
    dimensions: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchEmbeddingAvgAggregateInputType = {
    id?: true
    chunkId?: true
    dimensions?: true
  }

  export type SearchEmbeddingSumAggregateInputType = {
    id?: true
    chunkId?: true
    dimensions?: true
  }

  export type SearchEmbeddingMinAggregateInputType = {
    id?: true
    chunkId?: true
    model?: true
    dimensions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchEmbeddingMaxAggregateInputType = {
    id?: true
    chunkId?: true
    model?: true
    dimensions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchEmbeddingCountAggregateInputType = {
    id?: true
    chunkId?: true
    model?: true
    dimensions?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchEmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchEmbedding to aggregate.
     */
    where?: SearchEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchEmbeddings to fetch.
     */
    orderBy?: SearchEmbeddingOrderByWithRelationInput | SearchEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchEmbeddings
    **/
    _count?: true | SearchEmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchEmbeddingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchEmbeddingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchEmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchEmbeddingMaxAggregateInputType
  }

  export type GetSearchEmbeddingAggregateType<T extends SearchEmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchEmbedding[P]>
      : GetScalarType<T[P], AggregateSearchEmbedding[P]>
  }




  export type SearchEmbeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchEmbeddingWhereInput
    orderBy?: SearchEmbeddingOrderByWithAggregationInput | SearchEmbeddingOrderByWithAggregationInput[]
    by: SearchEmbeddingScalarFieldEnum[] | SearchEmbeddingScalarFieldEnum
    having?: SearchEmbeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchEmbeddingCountAggregateInputType | true
    _avg?: SearchEmbeddingAvgAggregateInputType
    _sum?: SearchEmbeddingSumAggregateInputType
    _min?: SearchEmbeddingMinAggregateInputType
    _max?: SearchEmbeddingMaxAggregateInputType
  }

  export type SearchEmbeddingGroupByOutputType = {
    id: bigint
    chunkId: bigint
    model: string
    dimensions: number
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: SearchEmbeddingCountAggregateOutputType | null
    _avg: SearchEmbeddingAvgAggregateOutputType | null
    _sum: SearchEmbeddingSumAggregateOutputType | null
    _min: SearchEmbeddingMinAggregateOutputType | null
    _max: SearchEmbeddingMaxAggregateOutputType | null
  }

  type GetSearchEmbeddingGroupByPayload<T extends SearchEmbeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchEmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchEmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchEmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], SearchEmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type SearchEmbeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chunkId?: boolean
    model?: boolean
    dimensions?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Chunk?: boolean | SearchChunkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchEmbedding"]>

  export type SearchEmbeddingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chunkId?: boolean
    model?: boolean
    dimensions?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Chunk?: boolean | SearchChunkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchEmbedding"]>

  export type SearchEmbeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chunkId?: boolean
    model?: boolean
    dimensions?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Chunk?: boolean | SearchChunkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchEmbedding"]>

  export type SearchEmbeddingSelectScalar = {
    id?: boolean
    chunkId?: boolean
    model?: boolean
    dimensions?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SearchEmbeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chunkId" | "model" | "dimensions" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["searchEmbedding"]>
  export type SearchEmbeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chunk?: boolean | SearchChunkDefaultArgs<ExtArgs>
  }
  export type SearchEmbeddingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chunk?: boolean | SearchChunkDefaultArgs<ExtArgs>
  }
  export type SearchEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chunk?: boolean | SearchChunkDefaultArgs<ExtArgs>
  }

  export type $SearchEmbeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchEmbedding"
    objects: {
      Chunk: Prisma.$SearchChunkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chunkId: bigint
      model: string
      dimensions: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchEmbedding"]>
    composites: {}
  }

  type SearchEmbeddingGetPayload<S extends boolean | null | undefined | SearchEmbeddingDefaultArgs> = $Result.GetResult<Prisma.$SearchEmbeddingPayload, S>

  type SearchEmbeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchEmbeddingCountAggregateInputType | true
    }

  export interface SearchEmbeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchEmbedding'], meta: { name: 'SearchEmbedding' } }
    /**
     * Find zero or one SearchEmbedding that matches the filter.
     * @param {SearchEmbeddingFindUniqueArgs} args - Arguments to find a SearchEmbedding
     * @example
     * // Get one SearchEmbedding
     * const searchEmbedding = await prisma.searchEmbedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchEmbeddingFindUniqueArgs>(args: SelectSubset<T, SearchEmbeddingFindUniqueArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchEmbedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchEmbeddingFindUniqueOrThrowArgs} args - Arguments to find a SearchEmbedding
     * @example
     * // Get one SearchEmbedding
     * const searchEmbedding = await prisma.searchEmbedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchEmbeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchEmbedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchEmbeddingFindFirstArgs} args - Arguments to find a SearchEmbedding
     * @example
     * // Get one SearchEmbedding
     * const searchEmbedding = await prisma.searchEmbedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchEmbeddingFindFirstArgs>(args?: SelectSubset<T, SearchEmbeddingFindFirstArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchEmbedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchEmbeddingFindFirstOrThrowArgs} args - Arguments to find a SearchEmbedding
     * @example
     * // Get one SearchEmbedding
     * const searchEmbedding = await prisma.searchEmbedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchEmbeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchEmbeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchEmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchEmbeddings
     * const searchEmbeddings = await prisma.searchEmbedding.findMany()
     * 
     * // Get first 10 SearchEmbeddings
     * const searchEmbeddings = await prisma.searchEmbedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchEmbeddingWithIdOnly = await prisma.searchEmbedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchEmbeddingFindManyArgs>(args?: SelectSubset<T, SearchEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchEmbedding.
     * @param {SearchEmbeddingCreateArgs} args - Arguments to create a SearchEmbedding.
     * @example
     * // Create one SearchEmbedding
     * const SearchEmbedding = await prisma.searchEmbedding.create({
     *   data: {
     *     // ... data to create a SearchEmbedding
     *   }
     * })
     * 
     */
    create<T extends SearchEmbeddingCreateArgs>(args: SelectSubset<T, SearchEmbeddingCreateArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchEmbeddings.
     * @param {SearchEmbeddingCreateManyArgs} args - Arguments to create many SearchEmbeddings.
     * @example
     * // Create many SearchEmbeddings
     * const searchEmbedding = await prisma.searchEmbedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchEmbeddingCreateManyArgs>(args?: SelectSubset<T, SearchEmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchEmbeddings and returns the data saved in the database.
     * @param {SearchEmbeddingCreateManyAndReturnArgs} args - Arguments to create many SearchEmbeddings.
     * @example
     * // Create many SearchEmbeddings
     * const searchEmbedding = await prisma.searchEmbedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchEmbeddings and only return the `id`
     * const searchEmbeddingWithIdOnly = await prisma.searchEmbedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchEmbeddingCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchEmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchEmbedding.
     * @param {SearchEmbeddingDeleteArgs} args - Arguments to delete one SearchEmbedding.
     * @example
     * // Delete one SearchEmbedding
     * const SearchEmbedding = await prisma.searchEmbedding.delete({
     *   where: {
     *     // ... filter to delete one SearchEmbedding
     *   }
     * })
     * 
     */
    delete<T extends SearchEmbeddingDeleteArgs>(args: SelectSubset<T, SearchEmbeddingDeleteArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchEmbedding.
     * @param {SearchEmbeddingUpdateArgs} args - Arguments to update one SearchEmbedding.
     * @example
     * // Update one SearchEmbedding
     * const searchEmbedding = await prisma.searchEmbedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchEmbeddingUpdateArgs>(args: SelectSubset<T, SearchEmbeddingUpdateArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchEmbeddings.
     * @param {SearchEmbeddingDeleteManyArgs} args - Arguments to filter SearchEmbeddings to delete.
     * @example
     * // Delete a few SearchEmbeddings
     * const { count } = await prisma.searchEmbedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchEmbeddingDeleteManyArgs>(args?: SelectSubset<T, SearchEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchEmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchEmbeddings
     * const searchEmbedding = await prisma.searchEmbedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchEmbeddingUpdateManyArgs>(args: SelectSubset<T, SearchEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchEmbeddings and returns the data updated in the database.
     * @param {SearchEmbeddingUpdateManyAndReturnArgs} args - Arguments to update many SearchEmbeddings.
     * @example
     * // Update many SearchEmbeddings
     * const searchEmbedding = await prisma.searchEmbedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchEmbeddings and only return the `id`
     * const searchEmbeddingWithIdOnly = await prisma.searchEmbedding.updateManyAndReturn({
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
    updateManyAndReturn<T extends SearchEmbeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchEmbedding.
     * @param {SearchEmbeddingUpsertArgs} args - Arguments to update or create a SearchEmbedding.
     * @example
     * // Update or create a SearchEmbedding
     * const searchEmbedding = await prisma.searchEmbedding.upsert({
     *   create: {
     *     // ... data to create a SearchEmbedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchEmbedding we want to update
     *   }
     * })
     */
    upsert<T extends SearchEmbeddingUpsertArgs>(args: SelectSubset<T, SearchEmbeddingUpsertArgs<ExtArgs>>): Prisma__SearchEmbeddingClient<$Result.GetResult<Prisma.$SearchEmbeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchEmbeddingCountArgs} args - Arguments to filter SearchEmbeddings to count.
     * @example
     * // Count the number of SearchEmbeddings
     * const count = await prisma.searchEmbedding.count({
     *   where: {
     *     // ... the filter for the SearchEmbeddings we want to count
     *   }
     * })
    **/
    count<T extends SearchEmbeddingCountArgs>(
      args?: Subset<T, SearchEmbeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchEmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchEmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchEmbeddingAggregateArgs>(args: Subset<T, SearchEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetSearchEmbeddingAggregateType<T>>

    /**
     * Group by SearchEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchEmbeddingGroupByArgs} args - Group by arguments.
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
      T extends SearchEmbeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchEmbeddingGroupByArgs['orderBy'] }
        : { orderBy?: SearchEmbeddingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchEmbedding model
   */
  readonly fields: SearchEmbeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchEmbedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchEmbeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chunk<T extends SearchChunkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SearchChunkDefaultArgs<ExtArgs>>): Prisma__SearchChunkClient<$Result.GetResult<Prisma.$SearchChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SearchEmbedding model
   */
  interface SearchEmbeddingFieldRefs {
    readonly id: FieldRef<"SearchEmbedding", 'BigInt'>
    readonly chunkId: FieldRef<"SearchEmbedding", 'BigInt'>
    readonly model: FieldRef<"SearchEmbedding", 'String'>
    readonly dimensions: FieldRef<"SearchEmbedding", 'Int'>
    readonly metadata: FieldRef<"SearchEmbedding", 'Json'>
    readonly createdAt: FieldRef<"SearchEmbedding", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchEmbedding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchEmbedding findUnique
   */
  export type SearchEmbeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SearchEmbedding to fetch.
     */
    where: SearchEmbeddingWhereUniqueInput
  }

  /**
   * SearchEmbedding findUniqueOrThrow
   */
  export type SearchEmbeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SearchEmbedding to fetch.
     */
    where: SearchEmbeddingWhereUniqueInput
  }

  /**
   * SearchEmbedding findFirst
   */
  export type SearchEmbeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SearchEmbedding to fetch.
     */
    where?: SearchEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchEmbeddings to fetch.
     */
    orderBy?: SearchEmbeddingOrderByWithRelationInput | SearchEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchEmbeddings.
     */
    cursor?: SearchEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchEmbeddings.
     */
    distinct?: SearchEmbeddingScalarFieldEnum | SearchEmbeddingScalarFieldEnum[]
  }

  /**
   * SearchEmbedding findFirstOrThrow
   */
  export type SearchEmbeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SearchEmbedding to fetch.
     */
    where?: SearchEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchEmbeddings to fetch.
     */
    orderBy?: SearchEmbeddingOrderByWithRelationInput | SearchEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchEmbeddings.
     */
    cursor?: SearchEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchEmbeddings.
     */
    distinct?: SearchEmbeddingScalarFieldEnum | SearchEmbeddingScalarFieldEnum[]
  }

  /**
   * SearchEmbedding findMany
   */
  export type SearchEmbeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SearchEmbeddings to fetch.
     */
    where?: SearchEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchEmbeddings to fetch.
     */
    orderBy?: SearchEmbeddingOrderByWithRelationInput | SearchEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchEmbeddings.
     */
    cursor?: SearchEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchEmbeddings.
     */
    distinct?: SearchEmbeddingScalarFieldEnum | SearchEmbeddingScalarFieldEnum[]
  }

  /**
   * SearchEmbedding create
   */
  export type SearchEmbeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchEmbedding.
     */
    data: XOR<SearchEmbeddingCreateInput, SearchEmbeddingUncheckedCreateInput>
  }

  /**
   * SearchEmbedding createMany
   */
  export type SearchEmbeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchEmbeddings.
     */
    data: SearchEmbeddingCreateManyInput | SearchEmbeddingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchEmbedding createManyAndReturn
   */
  export type SearchEmbeddingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to create many SearchEmbeddings.
     */
    data: SearchEmbeddingCreateManyInput | SearchEmbeddingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchEmbedding update
   */
  export type SearchEmbeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchEmbedding.
     */
    data: XOR<SearchEmbeddingUpdateInput, SearchEmbeddingUncheckedUpdateInput>
    /**
     * Choose, which SearchEmbedding to update.
     */
    where: SearchEmbeddingWhereUniqueInput
  }

  /**
   * SearchEmbedding updateMany
   */
  export type SearchEmbeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchEmbeddings.
     */
    data: XOR<SearchEmbeddingUpdateManyMutationInput, SearchEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which SearchEmbeddings to update
     */
    where?: SearchEmbeddingWhereInput
    /**
     * Limit how many SearchEmbeddings to update.
     */
    limit?: number
  }

  /**
   * SearchEmbedding updateManyAndReturn
   */
  export type SearchEmbeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to update SearchEmbeddings.
     */
    data: XOR<SearchEmbeddingUpdateManyMutationInput, SearchEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which SearchEmbeddings to update
     */
    where?: SearchEmbeddingWhereInput
    /**
     * Limit how many SearchEmbeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchEmbedding upsert
   */
  export type SearchEmbeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchEmbedding to update in case it exists.
     */
    where: SearchEmbeddingWhereUniqueInput
    /**
     * In case the SearchEmbedding found by the `where` argument doesn't exist, create a new SearchEmbedding with this data.
     */
    create: XOR<SearchEmbeddingCreateInput, SearchEmbeddingUncheckedCreateInput>
    /**
     * In case the SearchEmbedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchEmbeddingUpdateInput, SearchEmbeddingUncheckedUpdateInput>
  }

  /**
   * SearchEmbedding delete
   */
  export type SearchEmbeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
    /**
     * Filter which SearchEmbedding to delete.
     */
    where: SearchEmbeddingWhereUniqueInput
  }

  /**
   * SearchEmbedding deleteMany
   */
  export type SearchEmbeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchEmbeddings to delete
     */
    where?: SearchEmbeddingWhereInput
    /**
     * Limit how many SearchEmbeddings to delete.
     */
    limit?: number
  }

  /**
   * SearchEmbedding without action
   */
  export type SearchEmbeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchEmbedding
     */
    select?: SearchEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchEmbedding
     */
    omit?: SearchEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchEmbeddingInclude<ExtArgs> | null
  }


  /**
   * Model SearchIndexJob
   */

  export type AggregateSearchIndexJob = {
    _count: SearchIndexJobCountAggregateOutputType | null
    _avg: SearchIndexJobAvgAggregateOutputType | null
    _sum: SearchIndexJobSumAggregateOutputType | null
    _min: SearchIndexJobMinAggregateOutputType | null
    _max: SearchIndexJobMaxAggregateOutputType | null
  }

  export type SearchIndexJobAvgAggregateOutputType = {
    id: number | null
    documentId: number | null
  }

  export type SearchIndexJobSumAggregateOutputType = {
    id: bigint | null
    documentId: bigint | null
  }

  export type SearchIndexJobMinAggregateOutputType = {
    id: bigint | null
    documentId: bigint | null
    externalKey: string | null
    status: $Enums.SearchIndexJobStatus | null
    operation: string | null
    message: string | null
    correlationId: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchIndexJobMaxAggregateOutputType = {
    id: bigint | null
    documentId: bigint | null
    externalKey: string | null
    status: $Enums.SearchIndexJobStatus | null
    operation: string | null
    message: string | null
    correlationId: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchIndexJobCountAggregateOutputType = {
    id: number
    documentId: number
    externalKey: number
    status: number
    operation: number
    message: number
    correlationId: number
    startedAt: number
    finishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchIndexJobAvgAggregateInputType = {
    id?: true
    documentId?: true
  }

  export type SearchIndexJobSumAggregateInputType = {
    id?: true
    documentId?: true
  }

  export type SearchIndexJobMinAggregateInputType = {
    id?: true
    documentId?: true
    externalKey?: true
    status?: true
    operation?: true
    message?: true
    correlationId?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchIndexJobMaxAggregateInputType = {
    id?: true
    documentId?: true
    externalKey?: true
    status?: true
    operation?: true
    message?: true
    correlationId?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchIndexJobCountAggregateInputType = {
    id?: true
    documentId?: true
    externalKey?: true
    status?: true
    operation?: true
    message?: true
    correlationId?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchIndexJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchIndexJob to aggregate.
     */
    where?: SearchIndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndexJobs to fetch.
     */
    orderBy?: SearchIndexJobOrderByWithRelationInput | SearchIndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchIndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchIndexJobs
    **/
    _count?: true | SearchIndexJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchIndexJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchIndexJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchIndexJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchIndexJobMaxAggregateInputType
  }

  export type GetSearchIndexJobAggregateType<T extends SearchIndexJobAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchIndexJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchIndexJob[P]>
      : GetScalarType<T[P], AggregateSearchIndexJob[P]>
  }




  export type SearchIndexJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchIndexJobWhereInput
    orderBy?: SearchIndexJobOrderByWithAggregationInput | SearchIndexJobOrderByWithAggregationInput[]
    by: SearchIndexJobScalarFieldEnum[] | SearchIndexJobScalarFieldEnum
    having?: SearchIndexJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchIndexJobCountAggregateInputType | true
    _avg?: SearchIndexJobAvgAggregateInputType
    _sum?: SearchIndexJobSumAggregateInputType
    _min?: SearchIndexJobMinAggregateInputType
    _max?: SearchIndexJobMaxAggregateInputType
  }

  export type SearchIndexJobGroupByOutputType = {
    id: bigint
    documentId: bigint | null
    externalKey: string | null
    status: $Enums.SearchIndexJobStatus
    operation: string
    message: string | null
    correlationId: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SearchIndexJobCountAggregateOutputType | null
    _avg: SearchIndexJobAvgAggregateOutputType | null
    _sum: SearchIndexJobSumAggregateOutputType | null
    _min: SearchIndexJobMinAggregateOutputType | null
    _max: SearchIndexJobMaxAggregateOutputType | null
  }

  type GetSearchIndexJobGroupByPayload<T extends SearchIndexJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchIndexJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchIndexJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchIndexJobGroupByOutputType[P]>
            : GetScalarType<T[P], SearchIndexJobGroupByOutputType[P]>
        }
      >
    >


  export type SearchIndexJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    externalKey?: boolean
    status?: boolean
    operation?: boolean
    message?: boolean
    correlationId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Document?: boolean | SearchIndexJob$DocumentArgs<ExtArgs>
  }, ExtArgs["result"]["searchIndexJob"]>

  export type SearchIndexJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    externalKey?: boolean
    status?: boolean
    operation?: boolean
    message?: boolean
    correlationId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Document?: boolean | SearchIndexJob$DocumentArgs<ExtArgs>
  }, ExtArgs["result"]["searchIndexJob"]>

  export type SearchIndexJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    externalKey?: boolean
    status?: boolean
    operation?: boolean
    message?: boolean
    correlationId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Document?: boolean | SearchIndexJob$DocumentArgs<ExtArgs>
  }, ExtArgs["result"]["searchIndexJob"]>

  export type SearchIndexJobSelectScalar = {
    id?: boolean
    documentId?: boolean
    externalKey?: boolean
    status?: boolean
    operation?: boolean
    message?: boolean
    correlationId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SearchIndexJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "externalKey" | "status" | "operation" | "message" | "correlationId" | "startedAt" | "finishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["searchIndexJob"]>
  export type SearchIndexJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | SearchIndexJob$DocumentArgs<ExtArgs>
  }
  export type SearchIndexJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | SearchIndexJob$DocumentArgs<ExtArgs>
  }
  export type SearchIndexJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Document?: boolean | SearchIndexJob$DocumentArgs<ExtArgs>
  }

  export type $SearchIndexJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchIndexJob"
    objects: {
      Document: Prisma.$SearchDocumentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      documentId: bigint | null
      externalKey: string | null
      status: $Enums.SearchIndexJobStatus
      operation: string
      message: string | null
      correlationId: string | null
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchIndexJob"]>
    composites: {}
  }

  type SearchIndexJobGetPayload<S extends boolean | null | undefined | SearchIndexJobDefaultArgs> = $Result.GetResult<Prisma.$SearchIndexJobPayload, S>

  type SearchIndexJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchIndexJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchIndexJobCountAggregateInputType | true
    }

  export interface SearchIndexJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchIndexJob'], meta: { name: 'SearchIndexJob' } }
    /**
     * Find zero or one SearchIndexJob that matches the filter.
     * @param {SearchIndexJobFindUniqueArgs} args - Arguments to find a SearchIndexJob
     * @example
     * // Get one SearchIndexJob
     * const searchIndexJob = await prisma.searchIndexJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchIndexJobFindUniqueArgs>(args: SelectSubset<T, SearchIndexJobFindUniqueArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchIndexJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchIndexJobFindUniqueOrThrowArgs} args - Arguments to find a SearchIndexJob
     * @example
     * // Get one SearchIndexJob
     * const searchIndexJob = await prisma.searchIndexJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchIndexJobFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchIndexJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchIndexJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexJobFindFirstArgs} args - Arguments to find a SearchIndexJob
     * @example
     * // Get one SearchIndexJob
     * const searchIndexJob = await prisma.searchIndexJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchIndexJobFindFirstArgs>(args?: SelectSubset<T, SearchIndexJobFindFirstArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchIndexJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexJobFindFirstOrThrowArgs} args - Arguments to find a SearchIndexJob
     * @example
     * // Get one SearchIndexJob
     * const searchIndexJob = await prisma.searchIndexJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchIndexJobFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchIndexJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchIndexJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchIndexJobs
     * const searchIndexJobs = await prisma.searchIndexJob.findMany()
     * 
     * // Get first 10 SearchIndexJobs
     * const searchIndexJobs = await prisma.searchIndexJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchIndexJobWithIdOnly = await prisma.searchIndexJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchIndexJobFindManyArgs>(args?: SelectSubset<T, SearchIndexJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchIndexJob.
     * @param {SearchIndexJobCreateArgs} args - Arguments to create a SearchIndexJob.
     * @example
     * // Create one SearchIndexJob
     * const SearchIndexJob = await prisma.searchIndexJob.create({
     *   data: {
     *     // ... data to create a SearchIndexJob
     *   }
     * })
     * 
     */
    create<T extends SearchIndexJobCreateArgs>(args: SelectSubset<T, SearchIndexJobCreateArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchIndexJobs.
     * @param {SearchIndexJobCreateManyArgs} args - Arguments to create many SearchIndexJobs.
     * @example
     * // Create many SearchIndexJobs
     * const searchIndexJob = await prisma.searchIndexJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchIndexJobCreateManyArgs>(args?: SelectSubset<T, SearchIndexJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchIndexJobs and returns the data saved in the database.
     * @param {SearchIndexJobCreateManyAndReturnArgs} args - Arguments to create many SearchIndexJobs.
     * @example
     * // Create many SearchIndexJobs
     * const searchIndexJob = await prisma.searchIndexJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchIndexJobs and only return the `id`
     * const searchIndexJobWithIdOnly = await prisma.searchIndexJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchIndexJobCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchIndexJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchIndexJob.
     * @param {SearchIndexJobDeleteArgs} args - Arguments to delete one SearchIndexJob.
     * @example
     * // Delete one SearchIndexJob
     * const SearchIndexJob = await prisma.searchIndexJob.delete({
     *   where: {
     *     // ... filter to delete one SearchIndexJob
     *   }
     * })
     * 
     */
    delete<T extends SearchIndexJobDeleteArgs>(args: SelectSubset<T, SearchIndexJobDeleteArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchIndexJob.
     * @param {SearchIndexJobUpdateArgs} args - Arguments to update one SearchIndexJob.
     * @example
     * // Update one SearchIndexJob
     * const searchIndexJob = await prisma.searchIndexJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchIndexJobUpdateArgs>(args: SelectSubset<T, SearchIndexJobUpdateArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchIndexJobs.
     * @param {SearchIndexJobDeleteManyArgs} args - Arguments to filter SearchIndexJobs to delete.
     * @example
     * // Delete a few SearchIndexJobs
     * const { count } = await prisma.searchIndexJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchIndexJobDeleteManyArgs>(args?: SelectSubset<T, SearchIndexJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchIndexJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchIndexJobs
     * const searchIndexJob = await prisma.searchIndexJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchIndexJobUpdateManyArgs>(args: SelectSubset<T, SearchIndexJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchIndexJobs and returns the data updated in the database.
     * @param {SearchIndexJobUpdateManyAndReturnArgs} args - Arguments to update many SearchIndexJobs.
     * @example
     * // Update many SearchIndexJobs
     * const searchIndexJob = await prisma.searchIndexJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchIndexJobs and only return the `id`
     * const searchIndexJobWithIdOnly = await prisma.searchIndexJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends SearchIndexJobUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchIndexJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchIndexJob.
     * @param {SearchIndexJobUpsertArgs} args - Arguments to update or create a SearchIndexJob.
     * @example
     * // Update or create a SearchIndexJob
     * const searchIndexJob = await prisma.searchIndexJob.upsert({
     *   create: {
     *     // ... data to create a SearchIndexJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchIndexJob we want to update
     *   }
     * })
     */
    upsert<T extends SearchIndexJobUpsertArgs>(args: SelectSubset<T, SearchIndexJobUpsertArgs<ExtArgs>>): Prisma__SearchIndexJobClient<$Result.GetResult<Prisma.$SearchIndexJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchIndexJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexJobCountArgs} args - Arguments to filter SearchIndexJobs to count.
     * @example
     * // Count the number of SearchIndexJobs
     * const count = await prisma.searchIndexJob.count({
     *   where: {
     *     // ... the filter for the SearchIndexJobs we want to count
     *   }
     * })
    **/
    count<T extends SearchIndexJobCountArgs>(
      args?: Subset<T, SearchIndexJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchIndexJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchIndexJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SearchIndexJobAggregateArgs>(args: Subset<T, SearchIndexJobAggregateArgs>): Prisma.PrismaPromise<GetSearchIndexJobAggregateType<T>>

    /**
     * Group by SearchIndexJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchIndexJobGroupByArgs} args - Group by arguments.
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
      T extends SearchIndexJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchIndexJobGroupByArgs['orderBy'] }
        : { orderBy?: SearchIndexJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SearchIndexJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchIndexJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchIndexJob model
   */
  readonly fields: SearchIndexJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchIndexJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchIndexJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Document<T extends SearchIndexJob$DocumentArgs<ExtArgs> = {}>(args?: Subset<T, SearchIndexJob$DocumentArgs<ExtArgs>>): Prisma__SearchDocumentClient<$Result.GetResult<Prisma.$SearchDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SearchIndexJob model
   */
  interface SearchIndexJobFieldRefs {
    readonly id: FieldRef<"SearchIndexJob", 'BigInt'>
    readonly documentId: FieldRef<"SearchIndexJob", 'BigInt'>
    readonly externalKey: FieldRef<"SearchIndexJob", 'String'>
    readonly status: FieldRef<"SearchIndexJob", 'SearchIndexJobStatus'>
    readonly operation: FieldRef<"SearchIndexJob", 'String'>
    readonly message: FieldRef<"SearchIndexJob", 'String'>
    readonly correlationId: FieldRef<"SearchIndexJob", 'String'>
    readonly startedAt: FieldRef<"SearchIndexJob", 'DateTime'>
    readonly finishedAt: FieldRef<"SearchIndexJob", 'DateTime'>
    readonly createdAt: FieldRef<"SearchIndexJob", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchIndexJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchIndexJob findUnique
   */
  export type SearchIndexJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchIndexJob to fetch.
     */
    where: SearchIndexJobWhereUniqueInput
  }

  /**
   * SearchIndexJob findUniqueOrThrow
   */
  export type SearchIndexJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchIndexJob to fetch.
     */
    where: SearchIndexJobWhereUniqueInput
  }

  /**
   * SearchIndexJob findFirst
   */
  export type SearchIndexJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchIndexJob to fetch.
     */
    where?: SearchIndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndexJobs to fetch.
     */
    orderBy?: SearchIndexJobOrderByWithRelationInput | SearchIndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchIndexJobs.
     */
    cursor?: SearchIndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchIndexJobs.
     */
    distinct?: SearchIndexJobScalarFieldEnum | SearchIndexJobScalarFieldEnum[]
  }

  /**
   * SearchIndexJob findFirstOrThrow
   */
  export type SearchIndexJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchIndexJob to fetch.
     */
    where?: SearchIndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndexJobs to fetch.
     */
    orderBy?: SearchIndexJobOrderByWithRelationInput | SearchIndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchIndexJobs.
     */
    cursor?: SearchIndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchIndexJobs.
     */
    distinct?: SearchIndexJobScalarFieldEnum | SearchIndexJobScalarFieldEnum[]
  }

  /**
   * SearchIndexJob findMany
   */
  export type SearchIndexJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * Filter, which SearchIndexJobs to fetch.
     */
    where?: SearchIndexJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchIndexJobs to fetch.
     */
    orderBy?: SearchIndexJobOrderByWithRelationInput | SearchIndexJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchIndexJobs.
     */
    cursor?: SearchIndexJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchIndexJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchIndexJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchIndexJobs.
     */
    distinct?: SearchIndexJobScalarFieldEnum | SearchIndexJobScalarFieldEnum[]
  }

  /**
   * SearchIndexJob create
   */
  export type SearchIndexJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchIndexJob.
     */
    data: XOR<SearchIndexJobCreateInput, SearchIndexJobUncheckedCreateInput>
  }

  /**
   * SearchIndexJob createMany
   */
  export type SearchIndexJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchIndexJobs.
     */
    data: SearchIndexJobCreateManyInput | SearchIndexJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchIndexJob createManyAndReturn
   */
  export type SearchIndexJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * The data used to create many SearchIndexJobs.
     */
    data: SearchIndexJobCreateManyInput | SearchIndexJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchIndexJob update
   */
  export type SearchIndexJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchIndexJob.
     */
    data: XOR<SearchIndexJobUpdateInput, SearchIndexJobUncheckedUpdateInput>
    /**
     * Choose, which SearchIndexJob to update.
     */
    where: SearchIndexJobWhereUniqueInput
  }

  /**
   * SearchIndexJob updateMany
   */
  export type SearchIndexJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchIndexJobs.
     */
    data: XOR<SearchIndexJobUpdateManyMutationInput, SearchIndexJobUncheckedUpdateManyInput>
    /**
     * Filter which SearchIndexJobs to update
     */
    where?: SearchIndexJobWhereInput
    /**
     * Limit how many SearchIndexJobs to update.
     */
    limit?: number
  }

  /**
   * SearchIndexJob updateManyAndReturn
   */
  export type SearchIndexJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * The data used to update SearchIndexJobs.
     */
    data: XOR<SearchIndexJobUpdateManyMutationInput, SearchIndexJobUncheckedUpdateManyInput>
    /**
     * Filter which SearchIndexJobs to update
     */
    where?: SearchIndexJobWhereInput
    /**
     * Limit how many SearchIndexJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchIndexJob upsert
   */
  export type SearchIndexJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchIndexJob to update in case it exists.
     */
    where: SearchIndexJobWhereUniqueInput
    /**
     * In case the SearchIndexJob found by the `where` argument doesn't exist, create a new SearchIndexJob with this data.
     */
    create: XOR<SearchIndexJobCreateInput, SearchIndexJobUncheckedCreateInput>
    /**
     * In case the SearchIndexJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchIndexJobUpdateInput, SearchIndexJobUncheckedUpdateInput>
  }

  /**
   * SearchIndexJob delete
   */
  export type SearchIndexJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
    /**
     * Filter which SearchIndexJob to delete.
     */
    where: SearchIndexJobWhereUniqueInput
  }

  /**
   * SearchIndexJob deleteMany
   */
  export type SearchIndexJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchIndexJobs to delete
     */
    where?: SearchIndexJobWhereInput
    /**
     * Limit how many SearchIndexJobs to delete.
     */
    limit?: number
  }

  /**
   * SearchIndexJob.Document
   */
  export type SearchIndexJob$DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchDocument
     */
    select?: SearchDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchDocument
     */
    omit?: SearchDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchDocumentInclude<ExtArgs> | null
    where?: SearchDocumentWhereInput
  }

  /**
   * SearchIndexJob without action
   */
  export type SearchIndexJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchIndexJob
     */
    select?: SearchIndexJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchIndexJob
     */
    omit?: SearchIndexJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchIndexJobInclude<ExtArgs> | null
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


  export const SearchDocumentScalarFieldEnum: {
    id: 'id',
    externalKey: 'externalKey',
    sourceType: 'sourceType',
    title: 'title',
    body: 'body',
    url: 'url',
    status: 'status',
    tenantKey: 'tenantKey',
    metadata: 'metadata',
    contentHash: 'contentHash',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchDocumentScalarFieldEnum = (typeof SearchDocumentScalarFieldEnum)[keyof typeof SearchDocumentScalarFieldEnum]


  export const SearchChunkScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    ordinal: 'ordinal',
    content: 'content',
    tokenCount: 'tokenCount',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchChunkScalarFieldEnum = (typeof SearchChunkScalarFieldEnum)[keyof typeof SearchChunkScalarFieldEnum]


  export const SearchEmbeddingScalarFieldEnum: {
    id: 'id',
    chunkId: 'chunkId',
    model: 'model',
    dimensions: 'dimensions',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchEmbeddingScalarFieldEnum = (typeof SearchEmbeddingScalarFieldEnum)[keyof typeof SearchEmbeddingScalarFieldEnum]


  export const SearchIndexJobScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    externalKey: 'externalKey',
    status: 'status',
    operation: 'operation',
    message: 'message',
    correlationId: 'correlationId',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchIndexJobScalarFieldEnum = (typeof SearchIndexJobScalarFieldEnum)[keyof typeof SearchIndexJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'SearchDocumentStatus'
   */
  export type EnumSearchDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchDocumentStatus'>
    


  /**
   * Reference to a field of type 'SearchDocumentStatus[]'
   */
  export type ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchDocumentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SearchIndexJobStatus'
   */
  export type EnumSearchIndexJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchIndexJobStatus'>
    


  /**
   * Reference to a field of type 'SearchIndexJobStatus[]'
   */
  export type ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SearchIndexJobStatus[]'>
    


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


  export type SearchDocumentWhereInput = {
    AND?: SearchDocumentWhereInput | SearchDocumentWhereInput[]
    OR?: SearchDocumentWhereInput[]
    NOT?: SearchDocumentWhereInput | SearchDocumentWhereInput[]
    id?: BigIntFilter<"SearchDocument"> | bigint | number
    externalKey?: StringFilter<"SearchDocument"> | string
    sourceType?: StringFilter<"SearchDocument"> | string
    title?: StringFilter<"SearchDocument"> | string
    body?: StringFilter<"SearchDocument"> | string
    url?: StringNullableFilter<"SearchDocument"> | string | null
    status?: EnumSearchDocumentStatusFilter<"SearchDocument"> | $Enums.SearchDocumentStatus
    tenantKey?: StringNullableFilter<"SearchDocument"> | string | null
    metadata?: JsonNullableFilter<"SearchDocument">
    contentHash?: StringFilter<"SearchDocument"> | string
    publishedAt?: DateTimeNullableFilter<"SearchDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchDocument"> | Date | string
    updatedAt?: DateTimeFilter<"SearchDocument"> | Date | string
    Chunks?: SearchChunkListRelationFilter
    Jobs?: SearchIndexJobListRelationFilter
  }

  export type SearchDocumentOrderByWithRelationInput = {
    id?: SortOrder
    externalKey?: SortOrder
    sourceType?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrder
    tenantKey?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    contentHash?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Chunks?: SearchChunkOrderByRelationAggregateInput
    Jobs?: SearchIndexJobOrderByRelationAggregateInput
  }

  export type SearchDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    externalKey?: string
    AND?: SearchDocumentWhereInput | SearchDocumentWhereInput[]
    OR?: SearchDocumentWhereInput[]
    NOT?: SearchDocumentWhereInput | SearchDocumentWhereInput[]
    sourceType?: StringFilter<"SearchDocument"> | string
    title?: StringFilter<"SearchDocument"> | string
    body?: StringFilter<"SearchDocument"> | string
    url?: StringNullableFilter<"SearchDocument"> | string | null
    status?: EnumSearchDocumentStatusFilter<"SearchDocument"> | $Enums.SearchDocumentStatus
    tenantKey?: StringNullableFilter<"SearchDocument"> | string | null
    metadata?: JsonNullableFilter<"SearchDocument">
    contentHash?: StringFilter<"SearchDocument"> | string
    publishedAt?: DateTimeNullableFilter<"SearchDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchDocument"> | Date | string
    updatedAt?: DateTimeFilter<"SearchDocument"> | Date | string
    Chunks?: SearchChunkListRelationFilter
    Jobs?: SearchIndexJobListRelationFilter
  }, "id" | "externalKey">

  export type SearchDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    externalKey?: SortOrder
    sourceType?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrder
    tenantKey?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    contentHash?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchDocumentCountOrderByAggregateInput
    _avg?: SearchDocumentAvgOrderByAggregateInput
    _max?: SearchDocumentMaxOrderByAggregateInput
    _min?: SearchDocumentMinOrderByAggregateInput
    _sum?: SearchDocumentSumOrderByAggregateInput
  }

  export type SearchDocumentScalarWhereWithAggregatesInput = {
    AND?: SearchDocumentScalarWhereWithAggregatesInput | SearchDocumentScalarWhereWithAggregatesInput[]
    OR?: SearchDocumentScalarWhereWithAggregatesInput[]
    NOT?: SearchDocumentScalarWhereWithAggregatesInput | SearchDocumentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SearchDocument"> | bigint | number
    externalKey?: StringWithAggregatesFilter<"SearchDocument"> | string
    sourceType?: StringWithAggregatesFilter<"SearchDocument"> | string
    title?: StringWithAggregatesFilter<"SearchDocument"> | string
    body?: StringWithAggregatesFilter<"SearchDocument"> | string
    url?: StringNullableWithAggregatesFilter<"SearchDocument"> | string | null
    status?: EnumSearchDocumentStatusWithAggregatesFilter<"SearchDocument"> | $Enums.SearchDocumentStatus
    tenantKey?: StringNullableWithAggregatesFilter<"SearchDocument"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"SearchDocument">
    contentHash?: StringWithAggregatesFilter<"SearchDocument"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"SearchDocument"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SearchDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchDocument"> | Date | string
  }

  export type SearchChunkWhereInput = {
    AND?: SearchChunkWhereInput | SearchChunkWhereInput[]
    OR?: SearchChunkWhereInput[]
    NOT?: SearchChunkWhereInput | SearchChunkWhereInput[]
    id?: BigIntFilter<"SearchChunk"> | bigint | number
    documentId?: BigIntFilter<"SearchChunk"> | bigint | number
    ordinal?: IntFilter<"SearchChunk"> | number
    content?: StringFilter<"SearchChunk"> | string
    tokenCount?: IntFilter<"SearchChunk"> | number
    metadata?: JsonNullableFilter<"SearchChunk">
    createdAt?: DateTimeFilter<"SearchChunk"> | Date | string
    updatedAt?: DateTimeFilter<"SearchChunk"> | Date | string
    Document?: XOR<SearchDocumentScalarRelationFilter, SearchDocumentWhereInput>
    Embedding?: XOR<SearchEmbeddingNullableScalarRelationFilter, SearchEmbeddingWhereInput> | null
  }

  export type SearchChunkOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    ordinal?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Document?: SearchDocumentOrderByWithRelationInput
    Embedding?: SearchEmbeddingOrderByWithRelationInput
  }

  export type SearchChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    documentId_ordinal?: SearchChunkDocumentIdOrdinalCompoundUniqueInput
    AND?: SearchChunkWhereInput | SearchChunkWhereInput[]
    OR?: SearchChunkWhereInput[]
    NOT?: SearchChunkWhereInput | SearchChunkWhereInput[]
    documentId?: BigIntFilter<"SearchChunk"> | bigint | number
    ordinal?: IntFilter<"SearchChunk"> | number
    content?: StringFilter<"SearchChunk"> | string
    tokenCount?: IntFilter<"SearchChunk"> | number
    metadata?: JsonNullableFilter<"SearchChunk">
    createdAt?: DateTimeFilter<"SearchChunk"> | Date | string
    updatedAt?: DateTimeFilter<"SearchChunk"> | Date | string
    Document?: XOR<SearchDocumentScalarRelationFilter, SearchDocumentWhereInput>
    Embedding?: XOR<SearchEmbeddingNullableScalarRelationFilter, SearchEmbeddingWhereInput> | null
  }, "id" | "documentId_ordinal">

  export type SearchChunkOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    ordinal?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchChunkCountOrderByAggregateInput
    _avg?: SearchChunkAvgOrderByAggregateInput
    _max?: SearchChunkMaxOrderByAggregateInput
    _min?: SearchChunkMinOrderByAggregateInput
    _sum?: SearchChunkSumOrderByAggregateInput
  }

  export type SearchChunkScalarWhereWithAggregatesInput = {
    AND?: SearchChunkScalarWhereWithAggregatesInput | SearchChunkScalarWhereWithAggregatesInput[]
    OR?: SearchChunkScalarWhereWithAggregatesInput[]
    NOT?: SearchChunkScalarWhereWithAggregatesInput | SearchChunkScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SearchChunk"> | bigint | number
    documentId?: BigIntWithAggregatesFilter<"SearchChunk"> | bigint | number
    ordinal?: IntWithAggregatesFilter<"SearchChunk"> | number
    content?: StringWithAggregatesFilter<"SearchChunk"> | string
    tokenCount?: IntWithAggregatesFilter<"SearchChunk"> | number
    metadata?: JsonNullableWithAggregatesFilter<"SearchChunk">
    createdAt?: DateTimeWithAggregatesFilter<"SearchChunk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchChunk"> | Date | string
  }

  export type SearchEmbeddingWhereInput = {
    AND?: SearchEmbeddingWhereInput | SearchEmbeddingWhereInput[]
    OR?: SearchEmbeddingWhereInput[]
    NOT?: SearchEmbeddingWhereInput | SearchEmbeddingWhereInput[]
    id?: BigIntFilter<"SearchEmbedding"> | bigint | number
    chunkId?: BigIntFilter<"SearchEmbedding"> | bigint | number
    model?: StringFilter<"SearchEmbedding"> | string
    dimensions?: IntFilter<"SearchEmbedding"> | number
    metadata?: JsonNullableFilter<"SearchEmbedding">
    createdAt?: DateTimeFilter<"SearchEmbedding"> | Date | string
    updatedAt?: DateTimeFilter<"SearchEmbedding"> | Date | string
    Chunk?: XOR<SearchChunkScalarRelationFilter, SearchChunkWhereInput>
  }

  export type SearchEmbeddingOrderByWithRelationInput = {
    id?: SortOrder
    chunkId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Chunk?: SearchChunkOrderByWithRelationInput
  }

  export type SearchEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    chunkId?: bigint | number
    AND?: SearchEmbeddingWhereInput | SearchEmbeddingWhereInput[]
    OR?: SearchEmbeddingWhereInput[]
    NOT?: SearchEmbeddingWhereInput | SearchEmbeddingWhereInput[]
    model?: StringFilter<"SearchEmbedding"> | string
    dimensions?: IntFilter<"SearchEmbedding"> | number
    metadata?: JsonNullableFilter<"SearchEmbedding">
    createdAt?: DateTimeFilter<"SearchEmbedding"> | Date | string
    updatedAt?: DateTimeFilter<"SearchEmbedding"> | Date | string
    Chunk?: XOR<SearchChunkScalarRelationFilter, SearchChunkWhereInput>
  }, "id" | "chunkId">

  export type SearchEmbeddingOrderByWithAggregationInput = {
    id?: SortOrder
    chunkId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchEmbeddingCountOrderByAggregateInput
    _avg?: SearchEmbeddingAvgOrderByAggregateInput
    _max?: SearchEmbeddingMaxOrderByAggregateInput
    _min?: SearchEmbeddingMinOrderByAggregateInput
    _sum?: SearchEmbeddingSumOrderByAggregateInput
  }

  export type SearchEmbeddingScalarWhereWithAggregatesInput = {
    AND?: SearchEmbeddingScalarWhereWithAggregatesInput | SearchEmbeddingScalarWhereWithAggregatesInput[]
    OR?: SearchEmbeddingScalarWhereWithAggregatesInput[]
    NOT?: SearchEmbeddingScalarWhereWithAggregatesInput | SearchEmbeddingScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SearchEmbedding"> | bigint | number
    chunkId?: BigIntWithAggregatesFilter<"SearchEmbedding"> | bigint | number
    model?: StringWithAggregatesFilter<"SearchEmbedding"> | string
    dimensions?: IntWithAggregatesFilter<"SearchEmbedding"> | number
    metadata?: JsonNullableWithAggregatesFilter<"SearchEmbedding">
    createdAt?: DateTimeWithAggregatesFilter<"SearchEmbedding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchEmbedding"> | Date | string
  }

  export type SearchIndexJobWhereInput = {
    AND?: SearchIndexJobWhereInput | SearchIndexJobWhereInput[]
    OR?: SearchIndexJobWhereInput[]
    NOT?: SearchIndexJobWhereInput | SearchIndexJobWhereInput[]
    id?: BigIntFilter<"SearchIndexJob"> | bigint | number
    documentId?: BigIntNullableFilter<"SearchIndexJob"> | bigint | number | null
    externalKey?: StringNullableFilter<"SearchIndexJob"> | string | null
    status?: EnumSearchIndexJobStatusFilter<"SearchIndexJob"> | $Enums.SearchIndexJobStatus
    operation?: StringFilter<"SearchIndexJob"> | string
    message?: StringNullableFilter<"SearchIndexJob"> | string | null
    correlationId?: StringNullableFilter<"SearchIndexJob"> | string | null
    startedAt?: DateTimeNullableFilter<"SearchIndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"SearchIndexJob"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchIndexJob"> | Date | string
    updatedAt?: DateTimeFilter<"SearchIndexJob"> | Date | string
    Document?: XOR<SearchDocumentNullableScalarRelationFilter, SearchDocumentWhereInput> | null
  }

  export type SearchIndexJobOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrderInput | SortOrder
    externalKey?: SortOrderInput | SortOrder
    status?: SortOrder
    operation?: SortOrder
    message?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Document?: SearchDocumentOrderByWithRelationInput
  }

  export type SearchIndexJobWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SearchIndexJobWhereInput | SearchIndexJobWhereInput[]
    OR?: SearchIndexJobWhereInput[]
    NOT?: SearchIndexJobWhereInput | SearchIndexJobWhereInput[]
    documentId?: BigIntNullableFilter<"SearchIndexJob"> | bigint | number | null
    externalKey?: StringNullableFilter<"SearchIndexJob"> | string | null
    status?: EnumSearchIndexJobStatusFilter<"SearchIndexJob"> | $Enums.SearchIndexJobStatus
    operation?: StringFilter<"SearchIndexJob"> | string
    message?: StringNullableFilter<"SearchIndexJob"> | string | null
    correlationId?: StringNullableFilter<"SearchIndexJob"> | string | null
    startedAt?: DateTimeNullableFilter<"SearchIndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"SearchIndexJob"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchIndexJob"> | Date | string
    updatedAt?: DateTimeFilter<"SearchIndexJob"> | Date | string
    Document?: XOR<SearchDocumentNullableScalarRelationFilter, SearchDocumentWhereInput> | null
  }, "id">

  export type SearchIndexJobOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrderInput | SortOrder
    externalKey?: SortOrderInput | SortOrder
    status?: SortOrder
    operation?: SortOrder
    message?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchIndexJobCountOrderByAggregateInput
    _avg?: SearchIndexJobAvgOrderByAggregateInput
    _max?: SearchIndexJobMaxOrderByAggregateInput
    _min?: SearchIndexJobMinOrderByAggregateInput
    _sum?: SearchIndexJobSumOrderByAggregateInput
  }

  export type SearchIndexJobScalarWhereWithAggregatesInput = {
    AND?: SearchIndexJobScalarWhereWithAggregatesInput | SearchIndexJobScalarWhereWithAggregatesInput[]
    OR?: SearchIndexJobScalarWhereWithAggregatesInput[]
    NOT?: SearchIndexJobScalarWhereWithAggregatesInput | SearchIndexJobScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SearchIndexJob"> | bigint | number
    documentId?: BigIntNullableWithAggregatesFilter<"SearchIndexJob"> | bigint | number | null
    externalKey?: StringNullableWithAggregatesFilter<"SearchIndexJob"> | string | null
    status?: EnumSearchIndexJobStatusWithAggregatesFilter<"SearchIndexJob"> | $Enums.SearchIndexJobStatus
    operation?: StringWithAggregatesFilter<"SearchIndexJob"> | string
    message?: StringNullableWithAggregatesFilter<"SearchIndexJob"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"SearchIndexJob"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"SearchIndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"SearchIndexJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SearchIndexJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchIndexJob"> | Date | string
  }

  export type SearchDocumentCreateInput = {
    id?: bigint | number
    externalKey: string
    sourceType: string
    title: string
    body: string
    url?: string | null
    status?: $Enums.SearchDocumentStatus
    tenantKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Chunks?: SearchChunkCreateNestedManyWithoutDocumentInput
    Jobs?: SearchIndexJobCreateNestedManyWithoutDocumentInput
  }

  export type SearchDocumentUncheckedCreateInput = {
    id?: bigint | number
    externalKey: string
    sourceType: string
    title: string
    body: string
    url?: string | null
    status?: $Enums.SearchDocumentStatus
    tenantKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Chunks?: SearchChunkUncheckedCreateNestedManyWithoutDocumentInput
    Jobs?: SearchIndexJobUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type SearchDocumentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chunks?: SearchChunkUpdateManyWithoutDocumentNestedInput
    Jobs?: SearchIndexJobUpdateManyWithoutDocumentNestedInput
  }

  export type SearchDocumentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chunks?: SearchChunkUncheckedUpdateManyWithoutDocumentNestedInput
    Jobs?: SearchIndexJobUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type SearchDocumentCreateManyInput = {
    id?: bigint | number
    externalKey: string
    sourceType: string
    title: string
    body: string
    url?: string | null
    status?: $Enums.SearchDocumentStatus
    tenantKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchDocumentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchDocumentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchChunkCreateInput = {
    id?: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Document: SearchDocumentCreateNestedOneWithoutChunksInput
    Embedding?: SearchEmbeddingCreateNestedOneWithoutChunkInput
  }

  export type SearchChunkUncheckedCreateInput = {
    id?: bigint | number
    documentId: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Embedding?: SearchEmbeddingUncheckedCreateNestedOneWithoutChunkInput
  }

  export type SearchChunkUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: SearchDocumentUpdateOneRequiredWithoutChunksNestedInput
    Embedding?: SearchEmbeddingUpdateOneWithoutChunkNestedInput
  }

  export type SearchChunkUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Embedding?: SearchEmbeddingUncheckedUpdateOneWithoutChunkNestedInput
  }

  export type SearchChunkCreateManyInput = {
    id?: bigint | number
    documentId: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchChunkUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchChunkUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchEmbeddingCreateInput = {
    id?: bigint | number
    model: string
    dimensions?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Chunk: SearchChunkCreateNestedOneWithoutEmbeddingInput
  }

  export type SearchEmbeddingUncheckedCreateInput = {
    id?: bigint | number
    chunkId: bigint | number
    model: string
    dimensions?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchEmbeddingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chunk?: SearchChunkUpdateOneRequiredWithoutEmbeddingNestedInput
  }

  export type SearchEmbeddingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkId?: BigIntFieldUpdateOperationsInput | bigint | number
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchEmbeddingCreateManyInput = {
    id?: bigint | number
    chunkId: bigint | number
    model: string
    dimensions?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchEmbeddingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchEmbeddingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chunkId?: BigIntFieldUpdateOperationsInput | bigint | number
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexJobCreateInput = {
    id?: bigint | number
    externalKey?: string | null
    status?: $Enums.SearchIndexJobStatus
    operation: string
    message?: string | null
    correlationId?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Document?: SearchDocumentCreateNestedOneWithoutJobsInput
  }

  export type SearchIndexJobUncheckedCreateInput = {
    id?: bigint | number
    documentId?: bigint | number | null
    externalKey?: string | null
    status?: $Enums.SearchIndexJobStatus
    operation: string
    message?: string | null
    correlationId?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexJobUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchIndexJobStatusFieldUpdateOperationsInput | $Enums.SearchIndexJobStatus
    operation?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: SearchDocumentUpdateOneWithoutJobsNestedInput
  }

  export type SearchIndexJobUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    externalKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchIndexJobStatusFieldUpdateOperationsInput | $Enums.SearchIndexJobStatus
    operation?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexJobCreateManyInput = {
    id?: bigint | number
    documentId?: bigint | number | null
    externalKey?: string | null
    status?: $Enums.SearchIndexJobStatus
    operation: string
    message?: string | null
    correlationId?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexJobUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchIndexJobStatusFieldUpdateOperationsInput | $Enums.SearchIndexJobStatus
    operation?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexJobUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    externalKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchIndexJobStatusFieldUpdateOperationsInput | $Enums.SearchIndexJobStatus
    operation?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumSearchDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchDocumentStatus | EnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchDocumentStatusFilter<$PrismaModel> | $Enums.SearchDocumentStatus
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

  export type SearchChunkListRelationFilter = {
    every?: SearchChunkWhereInput
    some?: SearchChunkWhereInput
    none?: SearchChunkWhereInput
  }

  export type SearchIndexJobListRelationFilter = {
    every?: SearchIndexJobWhereInput
    some?: SearchIndexJobWhereInput
    none?: SearchIndexJobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SearchChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SearchIndexJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SearchDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    externalKey?: SortOrder
    sourceType?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    status?: SortOrder
    tenantKey?: SortOrder
    metadata?: SortOrder
    contentHash?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SearchDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    externalKey?: SortOrder
    sourceType?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    status?: SortOrder
    tenantKey?: SortOrder
    contentHash?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    externalKey?: SortOrder
    sourceType?: SortOrder
    title?: SortOrder
    body?: SortOrder
    url?: SortOrder
    status?: SortOrder
    tenantKey?: SortOrder
    contentHash?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchDocumentSumOrderByAggregateInput = {
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

  export type EnumSearchDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchDocumentStatus | EnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.SearchDocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumSearchDocumentStatusFilter<$PrismaModel>
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

  export type SearchDocumentScalarRelationFilter = {
    is?: SearchDocumentWhereInput
    isNot?: SearchDocumentWhereInput
  }

  export type SearchEmbeddingNullableScalarRelationFilter = {
    is?: SearchEmbeddingWhereInput | null
    isNot?: SearchEmbeddingWhereInput | null
  }

  export type SearchChunkDocumentIdOrdinalCompoundUniqueInput = {
    documentId: bigint | number
    ordinal: number
  }

  export type SearchChunkCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    ordinal?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchChunkAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    ordinal?: SortOrder
    tokenCount?: SortOrder
  }

  export type SearchChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    ordinal?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchChunkMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    ordinal?: SortOrder
    content?: SortOrder
    tokenCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchChunkSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    ordinal?: SortOrder
    tokenCount?: SortOrder
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

  export type SearchChunkScalarRelationFilter = {
    is?: SearchChunkWhereInput
    isNot?: SearchChunkWhereInput
  }

  export type SearchEmbeddingCountOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchEmbeddingAvgOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    dimensions?: SortOrder
  }

  export type SearchEmbeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchEmbeddingMinOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    model?: SortOrder
    dimensions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchEmbeddingSumOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    dimensions?: SortOrder
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

  export type EnumSearchIndexJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchIndexJobStatus | EnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchIndexJobStatusFilter<$PrismaModel> | $Enums.SearchIndexJobStatus
  }

  export type SearchDocumentNullableScalarRelationFilter = {
    is?: SearchDocumentWhereInput | null
    isNot?: SearchDocumentWhereInput | null
  }

  export type SearchIndexJobCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    externalKey?: SortOrder
    status?: SortOrder
    operation?: SortOrder
    message?: SortOrder
    correlationId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchIndexJobAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
  }

  export type SearchIndexJobMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    externalKey?: SortOrder
    status?: SortOrder
    operation?: SortOrder
    message?: SortOrder
    correlationId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchIndexJobMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    externalKey?: SortOrder
    status?: SortOrder
    operation?: SortOrder
    message?: SortOrder
    correlationId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchIndexJobSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
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

  export type EnumSearchIndexJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchIndexJobStatus | EnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchIndexJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.SearchIndexJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchIndexJobStatusFilter<$PrismaModel>
    _max?: NestedEnumSearchIndexJobStatusFilter<$PrismaModel>
  }

  export type SearchChunkCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SearchChunkCreateWithoutDocumentInput, SearchChunkUncheckedCreateWithoutDocumentInput> | SearchChunkCreateWithoutDocumentInput[] | SearchChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchChunkCreateOrConnectWithoutDocumentInput | SearchChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: SearchChunkCreateManyDocumentInputEnvelope
    connect?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
  }

  export type SearchIndexJobCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SearchIndexJobCreateWithoutDocumentInput, SearchIndexJobUncheckedCreateWithoutDocumentInput> | SearchIndexJobCreateWithoutDocumentInput[] | SearchIndexJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchIndexJobCreateOrConnectWithoutDocumentInput | SearchIndexJobCreateOrConnectWithoutDocumentInput[]
    createMany?: SearchIndexJobCreateManyDocumentInputEnvelope
    connect?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
  }

  export type SearchChunkUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SearchChunkCreateWithoutDocumentInput, SearchChunkUncheckedCreateWithoutDocumentInput> | SearchChunkCreateWithoutDocumentInput[] | SearchChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchChunkCreateOrConnectWithoutDocumentInput | SearchChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: SearchChunkCreateManyDocumentInputEnvelope
    connect?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
  }

  export type SearchIndexJobUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SearchIndexJobCreateWithoutDocumentInput, SearchIndexJobUncheckedCreateWithoutDocumentInput> | SearchIndexJobCreateWithoutDocumentInput[] | SearchIndexJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchIndexJobCreateOrConnectWithoutDocumentInput | SearchIndexJobCreateOrConnectWithoutDocumentInput[]
    createMany?: SearchIndexJobCreateManyDocumentInputEnvelope
    connect?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSearchDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.SearchDocumentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SearchChunkUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SearchChunkCreateWithoutDocumentInput, SearchChunkUncheckedCreateWithoutDocumentInput> | SearchChunkCreateWithoutDocumentInput[] | SearchChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchChunkCreateOrConnectWithoutDocumentInput | SearchChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: SearchChunkUpsertWithWhereUniqueWithoutDocumentInput | SearchChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SearchChunkCreateManyDocumentInputEnvelope
    set?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    disconnect?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    delete?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    connect?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    update?: SearchChunkUpdateWithWhereUniqueWithoutDocumentInput | SearchChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SearchChunkUpdateManyWithWhereWithoutDocumentInput | SearchChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SearchChunkScalarWhereInput | SearchChunkScalarWhereInput[]
  }

  export type SearchIndexJobUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SearchIndexJobCreateWithoutDocumentInput, SearchIndexJobUncheckedCreateWithoutDocumentInput> | SearchIndexJobCreateWithoutDocumentInput[] | SearchIndexJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchIndexJobCreateOrConnectWithoutDocumentInput | SearchIndexJobCreateOrConnectWithoutDocumentInput[]
    upsert?: SearchIndexJobUpsertWithWhereUniqueWithoutDocumentInput | SearchIndexJobUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SearchIndexJobCreateManyDocumentInputEnvelope
    set?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    disconnect?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    delete?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    connect?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    update?: SearchIndexJobUpdateWithWhereUniqueWithoutDocumentInput | SearchIndexJobUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SearchIndexJobUpdateManyWithWhereWithoutDocumentInput | SearchIndexJobUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SearchIndexJobScalarWhereInput | SearchIndexJobScalarWhereInput[]
  }

  export type SearchChunkUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SearchChunkCreateWithoutDocumentInput, SearchChunkUncheckedCreateWithoutDocumentInput> | SearchChunkCreateWithoutDocumentInput[] | SearchChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchChunkCreateOrConnectWithoutDocumentInput | SearchChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: SearchChunkUpsertWithWhereUniqueWithoutDocumentInput | SearchChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SearchChunkCreateManyDocumentInputEnvelope
    set?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    disconnect?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    delete?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    connect?: SearchChunkWhereUniqueInput | SearchChunkWhereUniqueInput[]
    update?: SearchChunkUpdateWithWhereUniqueWithoutDocumentInput | SearchChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SearchChunkUpdateManyWithWhereWithoutDocumentInput | SearchChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SearchChunkScalarWhereInput | SearchChunkScalarWhereInput[]
  }

  export type SearchIndexJobUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SearchIndexJobCreateWithoutDocumentInput, SearchIndexJobUncheckedCreateWithoutDocumentInput> | SearchIndexJobCreateWithoutDocumentInput[] | SearchIndexJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SearchIndexJobCreateOrConnectWithoutDocumentInput | SearchIndexJobCreateOrConnectWithoutDocumentInput[]
    upsert?: SearchIndexJobUpsertWithWhereUniqueWithoutDocumentInput | SearchIndexJobUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SearchIndexJobCreateManyDocumentInputEnvelope
    set?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    disconnect?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    delete?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    connect?: SearchIndexJobWhereUniqueInput | SearchIndexJobWhereUniqueInput[]
    update?: SearchIndexJobUpdateWithWhereUniqueWithoutDocumentInput | SearchIndexJobUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SearchIndexJobUpdateManyWithWhereWithoutDocumentInput | SearchIndexJobUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SearchIndexJobScalarWhereInput | SearchIndexJobScalarWhereInput[]
  }

  export type SearchDocumentCreateNestedOneWithoutChunksInput = {
    create?: XOR<SearchDocumentCreateWithoutChunksInput, SearchDocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: SearchDocumentCreateOrConnectWithoutChunksInput
    connect?: SearchDocumentWhereUniqueInput
  }

  export type SearchEmbeddingCreateNestedOneWithoutChunkInput = {
    create?: XOR<SearchEmbeddingCreateWithoutChunkInput, SearchEmbeddingUncheckedCreateWithoutChunkInput>
    connectOrCreate?: SearchEmbeddingCreateOrConnectWithoutChunkInput
    connect?: SearchEmbeddingWhereUniqueInput
  }

  export type SearchEmbeddingUncheckedCreateNestedOneWithoutChunkInput = {
    create?: XOR<SearchEmbeddingCreateWithoutChunkInput, SearchEmbeddingUncheckedCreateWithoutChunkInput>
    connectOrCreate?: SearchEmbeddingCreateOrConnectWithoutChunkInput
    connect?: SearchEmbeddingWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SearchDocumentUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<SearchDocumentCreateWithoutChunksInput, SearchDocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: SearchDocumentCreateOrConnectWithoutChunksInput
    upsert?: SearchDocumentUpsertWithoutChunksInput
    connect?: SearchDocumentWhereUniqueInput
    update?: XOR<XOR<SearchDocumentUpdateToOneWithWhereWithoutChunksInput, SearchDocumentUpdateWithoutChunksInput>, SearchDocumentUncheckedUpdateWithoutChunksInput>
  }

  export type SearchEmbeddingUpdateOneWithoutChunkNestedInput = {
    create?: XOR<SearchEmbeddingCreateWithoutChunkInput, SearchEmbeddingUncheckedCreateWithoutChunkInput>
    connectOrCreate?: SearchEmbeddingCreateOrConnectWithoutChunkInput
    upsert?: SearchEmbeddingUpsertWithoutChunkInput
    disconnect?: SearchEmbeddingWhereInput | boolean
    delete?: SearchEmbeddingWhereInput | boolean
    connect?: SearchEmbeddingWhereUniqueInput
    update?: XOR<XOR<SearchEmbeddingUpdateToOneWithWhereWithoutChunkInput, SearchEmbeddingUpdateWithoutChunkInput>, SearchEmbeddingUncheckedUpdateWithoutChunkInput>
  }

  export type SearchEmbeddingUncheckedUpdateOneWithoutChunkNestedInput = {
    create?: XOR<SearchEmbeddingCreateWithoutChunkInput, SearchEmbeddingUncheckedCreateWithoutChunkInput>
    connectOrCreate?: SearchEmbeddingCreateOrConnectWithoutChunkInput
    upsert?: SearchEmbeddingUpsertWithoutChunkInput
    disconnect?: SearchEmbeddingWhereInput | boolean
    delete?: SearchEmbeddingWhereInput | boolean
    connect?: SearchEmbeddingWhereUniqueInput
    update?: XOR<XOR<SearchEmbeddingUpdateToOneWithWhereWithoutChunkInput, SearchEmbeddingUpdateWithoutChunkInput>, SearchEmbeddingUncheckedUpdateWithoutChunkInput>
  }

  export type SearchChunkCreateNestedOneWithoutEmbeddingInput = {
    create?: XOR<SearchChunkCreateWithoutEmbeddingInput, SearchChunkUncheckedCreateWithoutEmbeddingInput>
    connectOrCreate?: SearchChunkCreateOrConnectWithoutEmbeddingInput
    connect?: SearchChunkWhereUniqueInput
  }

  export type SearchChunkUpdateOneRequiredWithoutEmbeddingNestedInput = {
    create?: XOR<SearchChunkCreateWithoutEmbeddingInput, SearchChunkUncheckedCreateWithoutEmbeddingInput>
    connectOrCreate?: SearchChunkCreateOrConnectWithoutEmbeddingInput
    upsert?: SearchChunkUpsertWithoutEmbeddingInput
    connect?: SearchChunkWhereUniqueInput
    update?: XOR<XOR<SearchChunkUpdateToOneWithWhereWithoutEmbeddingInput, SearchChunkUpdateWithoutEmbeddingInput>, SearchChunkUncheckedUpdateWithoutEmbeddingInput>
  }

  export type SearchDocumentCreateNestedOneWithoutJobsInput = {
    create?: XOR<SearchDocumentCreateWithoutJobsInput, SearchDocumentUncheckedCreateWithoutJobsInput>
    connectOrCreate?: SearchDocumentCreateOrConnectWithoutJobsInput
    connect?: SearchDocumentWhereUniqueInput
  }

  export type EnumSearchIndexJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.SearchIndexJobStatus
  }

  export type SearchDocumentUpdateOneWithoutJobsNestedInput = {
    create?: XOR<SearchDocumentCreateWithoutJobsInput, SearchDocumentUncheckedCreateWithoutJobsInput>
    connectOrCreate?: SearchDocumentCreateOrConnectWithoutJobsInput
    upsert?: SearchDocumentUpsertWithoutJobsInput
    disconnect?: SearchDocumentWhereInput | boolean
    delete?: SearchDocumentWhereInput | boolean
    connect?: SearchDocumentWhereUniqueInput
    update?: XOR<XOR<SearchDocumentUpdateToOneWithWhereWithoutJobsInput, SearchDocumentUpdateWithoutJobsInput>, SearchDocumentUncheckedUpdateWithoutJobsInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedEnumSearchDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchDocumentStatus | EnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchDocumentStatusFilter<$PrismaModel> | $Enums.SearchDocumentStatus
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

  export type NestedEnumSearchDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchDocumentStatus | EnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchDocumentStatus[] | ListEnumSearchDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.SearchDocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumSearchDocumentStatusFilter<$PrismaModel>
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

  export type NestedEnumSearchIndexJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchIndexJobStatus | EnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchIndexJobStatusFilter<$PrismaModel> | $Enums.SearchIndexJobStatus
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

  export type NestedEnumSearchIndexJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SearchIndexJobStatus | EnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SearchIndexJobStatus[] | ListEnumSearchIndexJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSearchIndexJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.SearchIndexJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSearchIndexJobStatusFilter<$PrismaModel>
    _max?: NestedEnumSearchIndexJobStatusFilter<$PrismaModel>
  }

  export type SearchChunkCreateWithoutDocumentInput = {
    id?: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Embedding?: SearchEmbeddingCreateNestedOneWithoutChunkInput
  }

  export type SearchChunkUncheckedCreateWithoutDocumentInput = {
    id?: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Embedding?: SearchEmbeddingUncheckedCreateNestedOneWithoutChunkInput
  }

  export type SearchChunkCreateOrConnectWithoutDocumentInput = {
    where: SearchChunkWhereUniqueInput
    create: XOR<SearchChunkCreateWithoutDocumentInput, SearchChunkUncheckedCreateWithoutDocumentInput>
  }

  export type SearchChunkCreateManyDocumentInputEnvelope = {
    data: SearchChunkCreateManyDocumentInput | SearchChunkCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type SearchIndexJobCreateWithoutDocumentInput = {
    id?: bigint | number
    externalKey?: string | null
    status?: $Enums.SearchIndexJobStatus
    operation: string
    message?: string | null
    correlationId?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexJobUncheckedCreateWithoutDocumentInput = {
    id?: bigint | number
    externalKey?: string | null
    status?: $Enums.SearchIndexJobStatus
    operation: string
    message?: string | null
    correlationId?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexJobCreateOrConnectWithoutDocumentInput = {
    where: SearchIndexJobWhereUniqueInput
    create: XOR<SearchIndexJobCreateWithoutDocumentInput, SearchIndexJobUncheckedCreateWithoutDocumentInput>
  }

  export type SearchIndexJobCreateManyDocumentInputEnvelope = {
    data: SearchIndexJobCreateManyDocumentInput | SearchIndexJobCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type SearchChunkUpsertWithWhereUniqueWithoutDocumentInput = {
    where: SearchChunkWhereUniqueInput
    update: XOR<SearchChunkUpdateWithoutDocumentInput, SearchChunkUncheckedUpdateWithoutDocumentInput>
    create: XOR<SearchChunkCreateWithoutDocumentInput, SearchChunkUncheckedCreateWithoutDocumentInput>
  }

  export type SearchChunkUpdateWithWhereUniqueWithoutDocumentInput = {
    where: SearchChunkWhereUniqueInput
    data: XOR<SearchChunkUpdateWithoutDocumentInput, SearchChunkUncheckedUpdateWithoutDocumentInput>
  }

  export type SearchChunkUpdateManyWithWhereWithoutDocumentInput = {
    where: SearchChunkScalarWhereInput
    data: XOR<SearchChunkUpdateManyMutationInput, SearchChunkUncheckedUpdateManyWithoutDocumentInput>
  }

  export type SearchChunkScalarWhereInput = {
    AND?: SearchChunkScalarWhereInput | SearchChunkScalarWhereInput[]
    OR?: SearchChunkScalarWhereInput[]
    NOT?: SearchChunkScalarWhereInput | SearchChunkScalarWhereInput[]
    id?: BigIntFilter<"SearchChunk"> | bigint | number
    documentId?: BigIntFilter<"SearchChunk"> | bigint | number
    ordinal?: IntFilter<"SearchChunk"> | number
    content?: StringFilter<"SearchChunk"> | string
    tokenCount?: IntFilter<"SearchChunk"> | number
    metadata?: JsonNullableFilter<"SearchChunk">
    createdAt?: DateTimeFilter<"SearchChunk"> | Date | string
    updatedAt?: DateTimeFilter<"SearchChunk"> | Date | string
  }

  export type SearchIndexJobUpsertWithWhereUniqueWithoutDocumentInput = {
    where: SearchIndexJobWhereUniqueInput
    update: XOR<SearchIndexJobUpdateWithoutDocumentInput, SearchIndexJobUncheckedUpdateWithoutDocumentInput>
    create: XOR<SearchIndexJobCreateWithoutDocumentInput, SearchIndexJobUncheckedCreateWithoutDocumentInput>
  }

  export type SearchIndexJobUpdateWithWhereUniqueWithoutDocumentInput = {
    where: SearchIndexJobWhereUniqueInput
    data: XOR<SearchIndexJobUpdateWithoutDocumentInput, SearchIndexJobUncheckedUpdateWithoutDocumentInput>
  }

  export type SearchIndexJobUpdateManyWithWhereWithoutDocumentInput = {
    where: SearchIndexJobScalarWhereInput
    data: XOR<SearchIndexJobUpdateManyMutationInput, SearchIndexJobUncheckedUpdateManyWithoutDocumentInput>
  }

  export type SearchIndexJobScalarWhereInput = {
    AND?: SearchIndexJobScalarWhereInput | SearchIndexJobScalarWhereInput[]
    OR?: SearchIndexJobScalarWhereInput[]
    NOT?: SearchIndexJobScalarWhereInput | SearchIndexJobScalarWhereInput[]
    id?: BigIntFilter<"SearchIndexJob"> | bigint | number
    documentId?: BigIntNullableFilter<"SearchIndexJob"> | bigint | number | null
    externalKey?: StringNullableFilter<"SearchIndexJob"> | string | null
    status?: EnumSearchIndexJobStatusFilter<"SearchIndexJob"> | $Enums.SearchIndexJobStatus
    operation?: StringFilter<"SearchIndexJob"> | string
    message?: StringNullableFilter<"SearchIndexJob"> | string | null
    correlationId?: StringNullableFilter<"SearchIndexJob"> | string | null
    startedAt?: DateTimeNullableFilter<"SearchIndexJob"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"SearchIndexJob"> | Date | string | null
    createdAt?: DateTimeFilter<"SearchIndexJob"> | Date | string
    updatedAt?: DateTimeFilter<"SearchIndexJob"> | Date | string
  }

  export type SearchDocumentCreateWithoutChunksInput = {
    id?: bigint | number
    externalKey: string
    sourceType: string
    title: string
    body: string
    url?: string | null
    status?: $Enums.SearchDocumentStatus
    tenantKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Jobs?: SearchIndexJobCreateNestedManyWithoutDocumentInput
  }

  export type SearchDocumentUncheckedCreateWithoutChunksInput = {
    id?: bigint | number
    externalKey: string
    sourceType: string
    title: string
    body: string
    url?: string | null
    status?: $Enums.SearchDocumentStatus
    tenantKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Jobs?: SearchIndexJobUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type SearchDocumentCreateOrConnectWithoutChunksInput = {
    where: SearchDocumentWhereUniqueInput
    create: XOR<SearchDocumentCreateWithoutChunksInput, SearchDocumentUncheckedCreateWithoutChunksInput>
  }

  export type SearchEmbeddingCreateWithoutChunkInput = {
    id?: bigint | number
    model: string
    dimensions?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchEmbeddingUncheckedCreateWithoutChunkInput = {
    id?: bigint | number
    model: string
    dimensions?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchEmbeddingCreateOrConnectWithoutChunkInput = {
    where: SearchEmbeddingWhereUniqueInput
    create: XOR<SearchEmbeddingCreateWithoutChunkInput, SearchEmbeddingUncheckedCreateWithoutChunkInput>
  }

  export type SearchDocumentUpsertWithoutChunksInput = {
    update: XOR<SearchDocumentUpdateWithoutChunksInput, SearchDocumentUncheckedUpdateWithoutChunksInput>
    create: XOR<SearchDocumentCreateWithoutChunksInput, SearchDocumentUncheckedCreateWithoutChunksInput>
    where?: SearchDocumentWhereInput
  }

  export type SearchDocumentUpdateToOneWithWhereWithoutChunksInput = {
    where?: SearchDocumentWhereInput
    data: XOR<SearchDocumentUpdateWithoutChunksInput, SearchDocumentUncheckedUpdateWithoutChunksInput>
  }

  export type SearchDocumentUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Jobs?: SearchIndexJobUpdateManyWithoutDocumentNestedInput
  }

  export type SearchDocumentUncheckedUpdateWithoutChunksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Jobs?: SearchIndexJobUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type SearchEmbeddingUpsertWithoutChunkInput = {
    update: XOR<SearchEmbeddingUpdateWithoutChunkInput, SearchEmbeddingUncheckedUpdateWithoutChunkInput>
    create: XOR<SearchEmbeddingCreateWithoutChunkInput, SearchEmbeddingUncheckedCreateWithoutChunkInput>
    where?: SearchEmbeddingWhereInput
  }

  export type SearchEmbeddingUpdateToOneWithWhereWithoutChunkInput = {
    where?: SearchEmbeddingWhereInput
    data: XOR<SearchEmbeddingUpdateWithoutChunkInput, SearchEmbeddingUncheckedUpdateWithoutChunkInput>
  }

  export type SearchEmbeddingUpdateWithoutChunkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchEmbeddingUncheckedUpdateWithoutChunkInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    model?: StringFieldUpdateOperationsInput | string
    dimensions?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchChunkCreateWithoutEmbeddingInput = {
    id?: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Document: SearchDocumentCreateNestedOneWithoutChunksInput
  }

  export type SearchChunkUncheckedCreateWithoutEmbeddingInput = {
    id?: bigint | number
    documentId: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchChunkCreateOrConnectWithoutEmbeddingInput = {
    where: SearchChunkWhereUniqueInput
    create: XOR<SearchChunkCreateWithoutEmbeddingInput, SearchChunkUncheckedCreateWithoutEmbeddingInput>
  }

  export type SearchChunkUpsertWithoutEmbeddingInput = {
    update: XOR<SearchChunkUpdateWithoutEmbeddingInput, SearchChunkUncheckedUpdateWithoutEmbeddingInput>
    create: XOR<SearchChunkCreateWithoutEmbeddingInput, SearchChunkUncheckedCreateWithoutEmbeddingInput>
    where?: SearchChunkWhereInput
  }

  export type SearchChunkUpdateToOneWithWhereWithoutEmbeddingInput = {
    where?: SearchChunkWhereInput
    data: XOR<SearchChunkUpdateWithoutEmbeddingInput, SearchChunkUncheckedUpdateWithoutEmbeddingInput>
  }

  export type SearchChunkUpdateWithoutEmbeddingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Document?: SearchDocumentUpdateOneRequiredWithoutChunksNestedInput
  }

  export type SearchChunkUncheckedUpdateWithoutEmbeddingInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    documentId?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchDocumentCreateWithoutJobsInput = {
    id?: bigint | number
    externalKey: string
    sourceType: string
    title: string
    body: string
    url?: string | null
    status?: $Enums.SearchDocumentStatus
    tenantKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Chunks?: SearchChunkCreateNestedManyWithoutDocumentInput
  }

  export type SearchDocumentUncheckedCreateWithoutJobsInput = {
    id?: bigint | number
    externalKey: string
    sourceType: string
    title: string
    body: string
    url?: string | null
    status?: $Enums.SearchDocumentStatus
    tenantKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Chunks?: SearchChunkUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type SearchDocumentCreateOrConnectWithoutJobsInput = {
    where: SearchDocumentWhereUniqueInput
    create: XOR<SearchDocumentCreateWithoutJobsInput, SearchDocumentUncheckedCreateWithoutJobsInput>
  }

  export type SearchDocumentUpsertWithoutJobsInput = {
    update: XOR<SearchDocumentUpdateWithoutJobsInput, SearchDocumentUncheckedUpdateWithoutJobsInput>
    create: XOR<SearchDocumentCreateWithoutJobsInput, SearchDocumentUncheckedCreateWithoutJobsInput>
    where?: SearchDocumentWhereInput
  }

  export type SearchDocumentUpdateToOneWithWhereWithoutJobsInput = {
    where?: SearchDocumentWhereInput
    data: XOR<SearchDocumentUpdateWithoutJobsInput, SearchDocumentUncheckedUpdateWithoutJobsInput>
  }

  export type SearchDocumentUpdateWithoutJobsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chunks?: SearchChunkUpdateManyWithoutDocumentNestedInput
  }

  export type SearchDocumentUncheckedUpdateWithoutJobsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchDocumentStatusFieldUpdateOperationsInput | $Enums.SearchDocumentStatus
    tenantKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    contentHash?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chunks?: SearchChunkUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type SearchChunkCreateManyDocumentInput = {
    id?: bigint | number
    ordinal: number
    content: string
    tokenCount?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchIndexJobCreateManyDocumentInput = {
    id?: bigint | number
    externalKey?: string | null
    status?: $Enums.SearchIndexJobStatus
    operation: string
    message?: string | null
    correlationId?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchChunkUpdateWithoutDocumentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Embedding?: SearchEmbeddingUpdateOneWithoutChunkNestedInput
  }

  export type SearchChunkUncheckedUpdateWithoutDocumentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Embedding?: SearchEmbeddingUncheckedUpdateOneWithoutChunkNestedInput
  }

  export type SearchChunkUncheckedUpdateManyWithoutDocumentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ordinal?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    tokenCount?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexJobUpdateWithoutDocumentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchIndexJobStatusFieldUpdateOperationsInput | $Enums.SearchIndexJobStatus
    operation?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexJobUncheckedUpdateWithoutDocumentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchIndexJobStatusFieldUpdateOperationsInput | $Enums.SearchIndexJobStatus
    operation?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchIndexJobUncheckedUpdateManyWithoutDocumentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    externalKey?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSearchIndexJobStatusFieldUpdateOperationsInput | $Enums.SearchIndexJobStatus
    operation?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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