
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
 * Model CrmTenant
 * 
 */
export type CrmTenant = $Result.DefaultSelection<Prisma.$CrmTenantPayload>
/**
 * Model CrmTenantMember
 * 
 */
export type CrmTenantMember = $Result.DefaultSelection<Prisma.$CrmTenantMemberPayload>
/**
 * Model CrmContact
 * 
 */
export type CrmContact = $Result.DefaultSelection<Prisma.$CrmContactPayload>
/**
 * Model CrmService
 * 
 */
export type CrmService = $Result.DefaultSelection<Prisma.$CrmServicePayload>
/**
 * Model CrmAppointment
 * 
 */
export type CrmAppointment = $Result.DefaultSelection<Prisma.$CrmAppointmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CrmMemberRole: {
  owner: 'owner',
  manager: 'manager',
  staff: 'staff'
};

export type CrmMemberRole = (typeof CrmMemberRole)[keyof typeof CrmMemberRole]

}

export type CrmMemberRole = $Enums.CrmMemberRole

export const CrmMemberRole: typeof $Enums.CrmMemberRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CrmTenants
 * const crmTenants = await prisma.crmTenant.findMany()
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
   * // Fetch zero or more CrmTenants
   * const crmTenants = await prisma.crmTenant.findMany()
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
   * `prisma.crmTenant`: Exposes CRUD operations for the **CrmTenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrmTenants
    * const crmTenants = await prisma.crmTenant.findMany()
    * ```
    */
  get crmTenant(): Prisma.CrmTenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crmTenantMember`: Exposes CRUD operations for the **CrmTenantMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrmTenantMembers
    * const crmTenantMembers = await prisma.crmTenantMember.findMany()
    * ```
    */
  get crmTenantMember(): Prisma.CrmTenantMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crmContact`: Exposes CRUD operations for the **CrmContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrmContacts
    * const crmContacts = await prisma.crmContact.findMany()
    * ```
    */
  get crmContact(): Prisma.CrmContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crmService`: Exposes CRUD operations for the **CrmService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrmServices
    * const crmServices = await prisma.crmService.findMany()
    * ```
    */
  get crmService(): Prisma.CrmServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crmAppointment`: Exposes CRUD operations for the **CrmAppointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrmAppointments
    * const crmAppointments = await prisma.crmAppointment.findMany()
    * ```
    */
  get crmAppointment(): Prisma.CrmAppointmentDelegate<ExtArgs, ClientOptions>;
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
    CrmTenant: 'CrmTenant',
    CrmTenantMember: 'CrmTenantMember',
    CrmContact: 'CrmContact',
    CrmService: 'CrmService',
    CrmAppointment: 'CrmAppointment'
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
      modelProps: "crmTenant" | "crmTenantMember" | "crmContact" | "crmService" | "crmAppointment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CrmTenant: {
        payload: Prisma.$CrmTenantPayload<ExtArgs>
        fields: Prisma.CrmTenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrmTenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrmTenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>
          }
          findFirst: {
            args: Prisma.CrmTenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrmTenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>
          }
          findMany: {
            args: Prisma.CrmTenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>[]
          }
          create: {
            args: Prisma.CrmTenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>
          }
          createMany: {
            args: Prisma.CrmTenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrmTenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>[]
          }
          delete: {
            args: Prisma.CrmTenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>
          }
          update: {
            args: Prisma.CrmTenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>
          }
          deleteMany: {
            args: Prisma.CrmTenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrmTenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrmTenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>[]
          }
          upsert: {
            args: Prisma.CrmTenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantPayload>
          }
          aggregate: {
            args: Prisma.CrmTenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrmTenant>
          }
          groupBy: {
            args: Prisma.CrmTenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrmTenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrmTenantCountArgs<ExtArgs>
            result: $Utils.Optional<CrmTenantCountAggregateOutputType> | number
          }
        }
      }
      CrmTenantMember: {
        payload: Prisma.$CrmTenantMemberPayload<ExtArgs>
        fields: Prisma.CrmTenantMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrmTenantMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrmTenantMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>
          }
          findFirst: {
            args: Prisma.CrmTenantMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrmTenantMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>
          }
          findMany: {
            args: Prisma.CrmTenantMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>[]
          }
          create: {
            args: Prisma.CrmTenantMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>
          }
          createMany: {
            args: Prisma.CrmTenantMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrmTenantMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>[]
          }
          delete: {
            args: Prisma.CrmTenantMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>
          }
          update: {
            args: Prisma.CrmTenantMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>
          }
          deleteMany: {
            args: Prisma.CrmTenantMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrmTenantMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrmTenantMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>[]
          }
          upsert: {
            args: Prisma.CrmTenantMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmTenantMemberPayload>
          }
          aggregate: {
            args: Prisma.CrmTenantMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrmTenantMember>
          }
          groupBy: {
            args: Prisma.CrmTenantMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrmTenantMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrmTenantMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CrmTenantMemberCountAggregateOutputType> | number
          }
        }
      }
      CrmContact: {
        payload: Prisma.$CrmContactPayload<ExtArgs>
        fields: Prisma.CrmContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrmContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrmContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>
          }
          findFirst: {
            args: Prisma.CrmContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrmContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>
          }
          findMany: {
            args: Prisma.CrmContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>[]
          }
          create: {
            args: Prisma.CrmContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>
          }
          createMany: {
            args: Prisma.CrmContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrmContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>[]
          }
          delete: {
            args: Prisma.CrmContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>
          }
          update: {
            args: Prisma.CrmContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>
          }
          deleteMany: {
            args: Prisma.CrmContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrmContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrmContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>[]
          }
          upsert: {
            args: Prisma.CrmContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmContactPayload>
          }
          aggregate: {
            args: Prisma.CrmContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrmContact>
          }
          groupBy: {
            args: Prisma.CrmContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrmContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrmContactCountArgs<ExtArgs>
            result: $Utils.Optional<CrmContactCountAggregateOutputType> | number
          }
        }
      }
      CrmService: {
        payload: Prisma.$CrmServicePayload<ExtArgs>
        fields: Prisma.CrmServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrmServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrmServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>
          }
          findFirst: {
            args: Prisma.CrmServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrmServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>
          }
          findMany: {
            args: Prisma.CrmServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>[]
          }
          create: {
            args: Prisma.CrmServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>
          }
          createMany: {
            args: Prisma.CrmServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrmServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>[]
          }
          delete: {
            args: Prisma.CrmServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>
          }
          update: {
            args: Prisma.CrmServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>
          }
          deleteMany: {
            args: Prisma.CrmServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrmServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrmServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>[]
          }
          upsert: {
            args: Prisma.CrmServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmServicePayload>
          }
          aggregate: {
            args: Prisma.CrmServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrmService>
          }
          groupBy: {
            args: Prisma.CrmServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrmServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrmServiceCountArgs<ExtArgs>
            result: $Utils.Optional<CrmServiceCountAggregateOutputType> | number
          }
        }
      }
      CrmAppointment: {
        payload: Prisma.$CrmAppointmentPayload<ExtArgs>
        fields: Prisma.CrmAppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CrmAppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CrmAppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>
          }
          findFirst: {
            args: Prisma.CrmAppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CrmAppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>
          }
          findMany: {
            args: Prisma.CrmAppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>[]
          }
          create: {
            args: Prisma.CrmAppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>
          }
          createMany: {
            args: Prisma.CrmAppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CrmAppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>[]
          }
          delete: {
            args: Prisma.CrmAppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>
          }
          update: {
            args: Prisma.CrmAppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>
          }
          deleteMany: {
            args: Prisma.CrmAppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CrmAppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CrmAppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>[]
          }
          upsert: {
            args: Prisma.CrmAppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CrmAppointmentPayload>
          }
          aggregate: {
            args: Prisma.CrmAppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrmAppointment>
          }
          groupBy: {
            args: Prisma.CrmAppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CrmAppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CrmAppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<CrmAppointmentCountAggregateOutputType> | number
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
    crmTenant?: CrmTenantOmit
    crmTenantMember?: CrmTenantMemberOmit
    crmContact?: CrmContactOmit
    crmService?: CrmServiceOmit
    crmAppointment?: CrmAppointmentOmit
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
   * Count Type CrmTenantCountOutputType
   */

  export type CrmTenantCountOutputType = {
    Members: number
    Contacts: number
    Services: number
    Appointments: number
  }

  export type CrmTenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Members?: boolean | CrmTenantCountOutputTypeCountMembersArgs
    Contacts?: boolean | CrmTenantCountOutputTypeCountContactsArgs
    Services?: boolean | CrmTenantCountOutputTypeCountServicesArgs
    Appointments?: boolean | CrmTenantCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * CrmTenantCountOutputType without action
   */
  export type CrmTenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantCountOutputType
     */
    select?: CrmTenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrmTenantCountOutputType without action
   */
  export type CrmTenantCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmTenantMemberWhereInput
  }

  /**
   * CrmTenantCountOutputType without action
   */
  export type CrmTenantCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmContactWhereInput
  }

  /**
   * CrmTenantCountOutputType without action
   */
  export type CrmTenantCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmServiceWhereInput
  }

  /**
   * CrmTenantCountOutputType without action
   */
  export type CrmTenantCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmAppointmentWhereInput
  }


  /**
   * Count Type CrmContactCountOutputType
   */

  export type CrmContactCountOutputType = {
    Appointments: number
  }

  export type CrmContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | CrmContactCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * CrmContactCountOutputType without action
   */
  export type CrmContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContactCountOutputType
     */
    select?: CrmContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrmContactCountOutputType without action
   */
  export type CrmContactCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmAppointmentWhereInput
  }


  /**
   * Count Type CrmServiceCountOutputType
   */

  export type CrmServiceCountOutputType = {
    Appointments: number
  }

  export type CrmServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | CrmServiceCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * CrmServiceCountOutputType without action
   */
  export type CrmServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmServiceCountOutputType
     */
    select?: CrmServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CrmServiceCountOutputType without action
   */
  export type CrmServiceCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmAppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CrmTenant
   */

  export type AggregateCrmTenant = {
    _count: CrmTenantCountAggregateOutputType | null
    _avg: CrmTenantAvgAggregateOutputType | null
    _sum: CrmTenantSumAggregateOutputType | null
    _min: CrmTenantMinAggregateOutputType | null
    _max: CrmTenantMaxAggregateOutputType | null
  }

  export type CrmTenantAvgAggregateOutputType = {
    id: number | null
  }

  export type CrmTenantSumAggregateOutputType = {
    id: bigint | null
  }

  export type CrmTenantMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    displayName: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmTenantMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    displayName: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmTenantCountAggregateOutputType = {
    id: number
    slug: number
    displayName: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrmTenantAvgAggregateInputType = {
    id?: true
  }

  export type CrmTenantSumAggregateInputType = {
    id?: true
  }

  export type CrmTenantMinAggregateInputType = {
    id?: true
    slug?: true
    displayName?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmTenantMaxAggregateInputType = {
    id?: true
    slug?: true
    displayName?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmTenantCountAggregateInputType = {
    id?: true
    slug?: true
    displayName?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrmTenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmTenant to aggregate.
     */
    where?: CrmTenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenants to fetch.
     */
    orderBy?: CrmTenantOrderByWithRelationInput | CrmTenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrmTenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrmTenants
    **/
    _count?: true | CrmTenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrmTenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrmTenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrmTenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrmTenantMaxAggregateInputType
  }

  export type GetCrmTenantAggregateType<T extends CrmTenantAggregateArgs> = {
        [P in keyof T & keyof AggregateCrmTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrmTenant[P]>
      : GetScalarType<T[P], AggregateCrmTenant[P]>
  }




  export type CrmTenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmTenantWhereInput
    orderBy?: CrmTenantOrderByWithAggregationInput | CrmTenantOrderByWithAggregationInput[]
    by: CrmTenantScalarFieldEnum[] | CrmTenantScalarFieldEnum
    having?: CrmTenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrmTenantCountAggregateInputType | true
    _avg?: CrmTenantAvgAggregateInputType
    _sum?: CrmTenantSumAggregateInputType
    _min?: CrmTenantMinAggregateInputType
    _max?: CrmTenantMaxAggregateInputType
  }

  export type CrmTenantGroupByOutputType = {
    id: bigint
    slug: string
    displayName: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: CrmTenantCountAggregateOutputType | null
    _avg: CrmTenantAvgAggregateOutputType | null
    _sum: CrmTenantSumAggregateOutputType | null
    _min: CrmTenantMinAggregateOutputType | null
    _max: CrmTenantMaxAggregateOutputType | null
  }

  type GetCrmTenantGroupByPayload<T extends CrmTenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrmTenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrmTenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrmTenantGroupByOutputType[P]>
            : GetScalarType<T[P], CrmTenantGroupByOutputType[P]>
        }
      >
    >


  export type CrmTenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Members?: boolean | CrmTenant$MembersArgs<ExtArgs>
    Contacts?: boolean | CrmTenant$ContactsArgs<ExtArgs>
    Services?: boolean | CrmTenant$ServicesArgs<ExtArgs>
    Appointments?: boolean | CrmTenant$AppointmentsArgs<ExtArgs>
    _count?: boolean | CrmTenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmTenant"]>

  export type CrmTenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crmTenant"]>

  export type CrmTenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crmTenant"]>

  export type CrmTenantSelectScalar = {
    id?: boolean
    slug?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrmTenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "displayName" | "timezone" | "createdAt" | "updatedAt", ExtArgs["result"]["crmTenant"]>
  export type CrmTenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Members?: boolean | CrmTenant$MembersArgs<ExtArgs>
    Contacts?: boolean | CrmTenant$ContactsArgs<ExtArgs>
    Services?: boolean | CrmTenant$ServicesArgs<ExtArgs>
    Appointments?: boolean | CrmTenant$AppointmentsArgs<ExtArgs>
    _count?: boolean | CrmTenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrmTenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CrmTenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CrmTenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrmTenant"
    objects: {
      Members: Prisma.$CrmTenantMemberPayload<ExtArgs>[]
      Contacts: Prisma.$CrmContactPayload<ExtArgs>[]
      Services: Prisma.$CrmServicePayload<ExtArgs>[]
      Appointments: Prisma.$CrmAppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      displayName: string
      timezone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crmTenant"]>
    composites: {}
  }

  type CrmTenantGetPayload<S extends boolean | null | undefined | CrmTenantDefaultArgs> = $Result.GetResult<Prisma.$CrmTenantPayload, S>

  type CrmTenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrmTenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrmTenantCountAggregateInputType | true
    }

  export interface CrmTenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrmTenant'], meta: { name: 'CrmTenant' } }
    /**
     * Find zero or one CrmTenant that matches the filter.
     * @param {CrmTenantFindUniqueArgs} args - Arguments to find a CrmTenant
     * @example
     * // Get one CrmTenant
     * const crmTenant = await prisma.crmTenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrmTenantFindUniqueArgs>(args: SelectSubset<T, CrmTenantFindUniqueArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrmTenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrmTenantFindUniqueOrThrowArgs} args - Arguments to find a CrmTenant
     * @example
     * // Get one CrmTenant
     * const crmTenant = await prisma.crmTenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrmTenantFindUniqueOrThrowArgs>(args: SelectSubset<T, CrmTenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmTenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantFindFirstArgs} args - Arguments to find a CrmTenant
     * @example
     * // Get one CrmTenant
     * const crmTenant = await prisma.crmTenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrmTenantFindFirstArgs>(args?: SelectSubset<T, CrmTenantFindFirstArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmTenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantFindFirstOrThrowArgs} args - Arguments to find a CrmTenant
     * @example
     * // Get one CrmTenant
     * const crmTenant = await prisma.crmTenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrmTenantFindFirstOrThrowArgs>(args?: SelectSubset<T, CrmTenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrmTenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrmTenants
     * const crmTenants = await prisma.crmTenant.findMany()
     * 
     * // Get first 10 CrmTenants
     * const crmTenants = await prisma.crmTenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crmTenantWithIdOnly = await prisma.crmTenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrmTenantFindManyArgs>(args?: SelectSubset<T, CrmTenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrmTenant.
     * @param {CrmTenantCreateArgs} args - Arguments to create a CrmTenant.
     * @example
     * // Create one CrmTenant
     * const CrmTenant = await prisma.crmTenant.create({
     *   data: {
     *     // ... data to create a CrmTenant
     *   }
     * })
     * 
     */
    create<T extends CrmTenantCreateArgs>(args: SelectSubset<T, CrmTenantCreateArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrmTenants.
     * @param {CrmTenantCreateManyArgs} args - Arguments to create many CrmTenants.
     * @example
     * // Create many CrmTenants
     * const crmTenant = await prisma.crmTenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrmTenantCreateManyArgs>(args?: SelectSubset<T, CrmTenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrmTenants and returns the data saved in the database.
     * @param {CrmTenantCreateManyAndReturnArgs} args - Arguments to create many CrmTenants.
     * @example
     * // Create many CrmTenants
     * const crmTenant = await prisma.crmTenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrmTenants and only return the `id`
     * const crmTenantWithIdOnly = await prisma.crmTenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrmTenantCreateManyAndReturnArgs>(args?: SelectSubset<T, CrmTenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrmTenant.
     * @param {CrmTenantDeleteArgs} args - Arguments to delete one CrmTenant.
     * @example
     * // Delete one CrmTenant
     * const CrmTenant = await prisma.crmTenant.delete({
     *   where: {
     *     // ... filter to delete one CrmTenant
     *   }
     * })
     * 
     */
    delete<T extends CrmTenantDeleteArgs>(args: SelectSubset<T, CrmTenantDeleteArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrmTenant.
     * @param {CrmTenantUpdateArgs} args - Arguments to update one CrmTenant.
     * @example
     * // Update one CrmTenant
     * const crmTenant = await prisma.crmTenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrmTenantUpdateArgs>(args: SelectSubset<T, CrmTenantUpdateArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrmTenants.
     * @param {CrmTenantDeleteManyArgs} args - Arguments to filter CrmTenants to delete.
     * @example
     * // Delete a few CrmTenants
     * const { count } = await prisma.crmTenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrmTenantDeleteManyArgs>(args?: SelectSubset<T, CrmTenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrmTenants
     * const crmTenant = await prisma.crmTenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrmTenantUpdateManyArgs>(args: SelectSubset<T, CrmTenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmTenants and returns the data updated in the database.
     * @param {CrmTenantUpdateManyAndReturnArgs} args - Arguments to update many CrmTenants.
     * @example
     * // Update many CrmTenants
     * const crmTenant = await prisma.crmTenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrmTenants and only return the `id`
     * const crmTenantWithIdOnly = await prisma.crmTenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends CrmTenantUpdateManyAndReturnArgs>(args: SelectSubset<T, CrmTenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrmTenant.
     * @param {CrmTenantUpsertArgs} args - Arguments to update or create a CrmTenant.
     * @example
     * // Update or create a CrmTenant
     * const crmTenant = await prisma.crmTenant.upsert({
     *   create: {
     *     // ... data to create a CrmTenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrmTenant we want to update
     *   }
     * })
     */
    upsert<T extends CrmTenantUpsertArgs>(args: SelectSubset<T, CrmTenantUpsertArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrmTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantCountArgs} args - Arguments to filter CrmTenants to count.
     * @example
     * // Count the number of CrmTenants
     * const count = await prisma.crmTenant.count({
     *   where: {
     *     // ... the filter for the CrmTenants we want to count
     *   }
     * })
    **/
    count<T extends CrmTenantCountArgs>(
      args?: Subset<T, CrmTenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrmTenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrmTenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrmTenantAggregateArgs>(args: Subset<T, CrmTenantAggregateArgs>): Prisma.PrismaPromise<GetCrmTenantAggregateType<T>>

    /**
     * Group by CrmTenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantGroupByArgs} args - Group by arguments.
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
      T extends CrmTenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrmTenantGroupByArgs['orderBy'] }
        : { orderBy?: CrmTenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrmTenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrmTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrmTenant model
   */
  readonly fields: CrmTenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrmTenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrmTenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Members<T extends CrmTenant$MembersArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenant$MembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Contacts<T extends CrmTenant$ContactsArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenant$ContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Services<T extends CrmTenant$ServicesArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenant$ServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appointments<T extends CrmTenant$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenant$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CrmTenant model
   */
  interface CrmTenantFieldRefs {
    readonly id: FieldRef<"CrmTenant", 'BigInt'>
    readonly slug: FieldRef<"CrmTenant", 'String'>
    readonly displayName: FieldRef<"CrmTenant", 'String'>
    readonly timezone: FieldRef<"CrmTenant", 'String'>
    readonly createdAt: FieldRef<"CrmTenant", 'DateTime'>
    readonly updatedAt: FieldRef<"CrmTenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrmTenant findUnique
   */
  export type CrmTenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenant to fetch.
     */
    where: CrmTenantWhereUniqueInput
  }

  /**
   * CrmTenant findUniqueOrThrow
   */
  export type CrmTenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenant to fetch.
     */
    where: CrmTenantWhereUniqueInput
  }

  /**
   * CrmTenant findFirst
   */
  export type CrmTenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenant to fetch.
     */
    where?: CrmTenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenants to fetch.
     */
    orderBy?: CrmTenantOrderByWithRelationInput | CrmTenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmTenants.
     */
    cursor?: CrmTenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmTenants.
     */
    distinct?: CrmTenantScalarFieldEnum | CrmTenantScalarFieldEnum[]
  }

  /**
   * CrmTenant findFirstOrThrow
   */
  export type CrmTenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenant to fetch.
     */
    where?: CrmTenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenants to fetch.
     */
    orderBy?: CrmTenantOrderByWithRelationInput | CrmTenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmTenants.
     */
    cursor?: CrmTenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmTenants.
     */
    distinct?: CrmTenantScalarFieldEnum | CrmTenantScalarFieldEnum[]
  }

  /**
   * CrmTenant findMany
   */
  export type CrmTenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenants to fetch.
     */
    where?: CrmTenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenants to fetch.
     */
    orderBy?: CrmTenantOrderByWithRelationInput | CrmTenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrmTenants.
     */
    cursor?: CrmTenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmTenants.
     */
    distinct?: CrmTenantScalarFieldEnum | CrmTenantScalarFieldEnum[]
  }

  /**
   * CrmTenant create
   */
  export type CrmTenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * The data needed to create a CrmTenant.
     */
    data: XOR<CrmTenantCreateInput, CrmTenantUncheckedCreateInput>
  }

  /**
   * CrmTenant createMany
   */
  export type CrmTenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrmTenants.
     */
    data: CrmTenantCreateManyInput | CrmTenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrmTenant createManyAndReturn
   */
  export type CrmTenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * The data used to create many CrmTenants.
     */
    data: CrmTenantCreateManyInput | CrmTenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrmTenant update
   */
  export type CrmTenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * The data needed to update a CrmTenant.
     */
    data: XOR<CrmTenantUpdateInput, CrmTenantUncheckedUpdateInput>
    /**
     * Choose, which CrmTenant to update.
     */
    where: CrmTenantWhereUniqueInput
  }

  /**
   * CrmTenant updateMany
   */
  export type CrmTenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrmTenants.
     */
    data: XOR<CrmTenantUpdateManyMutationInput, CrmTenantUncheckedUpdateManyInput>
    /**
     * Filter which CrmTenants to update
     */
    where?: CrmTenantWhereInput
    /**
     * Limit how many CrmTenants to update.
     */
    limit?: number
  }

  /**
   * CrmTenant updateManyAndReturn
   */
  export type CrmTenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * The data used to update CrmTenants.
     */
    data: XOR<CrmTenantUpdateManyMutationInput, CrmTenantUncheckedUpdateManyInput>
    /**
     * Filter which CrmTenants to update
     */
    where?: CrmTenantWhereInput
    /**
     * Limit how many CrmTenants to update.
     */
    limit?: number
  }

  /**
   * CrmTenant upsert
   */
  export type CrmTenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * The filter to search for the CrmTenant to update in case it exists.
     */
    where: CrmTenantWhereUniqueInput
    /**
     * In case the CrmTenant found by the `where` argument doesn't exist, create a new CrmTenant with this data.
     */
    create: XOR<CrmTenantCreateInput, CrmTenantUncheckedCreateInput>
    /**
     * In case the CrmTenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrmTenantUpdateInput, CrmTenantUncheckedUpdateInput>
  }

  /**
   * CrmTenant delete
   */
  export type CrmTenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
    /**
     * Filter which CrmTenant to delete.
     */
    where: CrmTenantWhereUniqueInput
  }

  /**
   * CrmTenant deleteMany
   */
  export type CrmTenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmTenants to delete
     */
    where?: CrmTenantWhereInput
    /**
     * Limit how many CrmTenants to delete.
     */
    limit?: number
  }

  /**
   * CrmTenant.Members
   */
  export type CrmTenant$MembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    where?: CrmTenantMemberWhereInput
    orderBy?: CrmTenantMemberOrderByWithRelationInput | CrmTenantMemberOrderByWithRelationInput[]
    cursor?: CrmTenantMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrmTenantMemberScalarFieldEnum | CrmTenantMemberScalarFieldEnum[]
  }

  /**
   * CrmTenant.Contacts
   */
  export type CrmTenant$ContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    where?: CrmContactWhereInput
    orderBy?: CrmContactOrderByWithRelationInput | CrmContactOrderByWithRelationInput[]
    cursor?: CrmContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrmContactScalarFieldEnum | CrmContactScalarFieldEnum[]
  }

  /**
   * CrmTenant.Services
   */
  export type CrmTenant$ServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    where?: CrmServiceWhereInput
    orderBy?: CrmServiceOrderByWithRelationInput | CrmServiceOrderByWithRelationInput[]
    cursor?: CrmServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrmServiceScalarFieldEnum | CrmServiceScalarFieldEnum[]
  }

  /**
   * CrmTenant.Appointments
   */
  export type CrmTenant$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    where?: CrmAppointmentWhereInput
    orderBy?: CrmAppointmentOrderByWithRelationInput | CrmAppointmentOrderByWithRelationInput[]
    cursor?: CrmAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrmAppointmentScalarFieldEnum | CrmAppointmentScalarFieldEnum[]
  }

  /**
   * CrmTenant without action
   */
  export type CrmTenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenant
     */
    select?: CrmTenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenant
     */
    omit?: CrmTenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantInclude<ExtArgs> | null
  }


  /**
   * Model CrmTenantMember
   */

  export type AggregateCrmTenantMember = {
    _count: CrmTenantMemberCountAggregateOutputType | null
    _avg: CrmTenantMemberAvgAggregateOutputType | null
    _sum: CrmTenantMemberSumAggregateOutputType | null
    _min: CrmTenantMemberMinAggregateOutputType | null
    _max: CrmTenantMemberMaxAggregateOutputType | null
  }

  export type CrmTenantMemberAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    userId: number | null
  }

  export type CrmTenantMemberSumAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    userId: bigint | null
  }

  export type CrmTenantMemberMinAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    userId: bigint | null
    role: $Enums.CrmMemberRole | null
    createdAt: Date | null
  }

  export type CrmTenantMemberMaxAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    userId: bigint | null
    role: $Enums.CrmMemberRole | null
    createdAt: Date | null
  }

  export type CrmTenantMemberCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type CrmTenantMemberAvgAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
  }

  export type CrmTenantMemberSumAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
  }

  export type CrmTenantMemberMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type CrmTenantMemberMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type CrmTenantMemberCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type CrmTenantMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmTenantMember to aggregate.
     */
    where?: CrmTenantMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenantMembers to fetch.
     */
    orderBy?: CrmTenantMemberOrderByWithRelationInput | CrmTenantMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrmTenantMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenantMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenantMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrmTenantMembers
    **/
    _count?: true | CrmTenantMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrmTenantMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrmTenantMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrmTenantMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrmTenantMemberMaxAggregateInputType
  }

  export type GetCrmTenantMemberAggregateType<T extends CrmTenantMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCrmTenantMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrmTenantMember[P]>
      : GetScalarType<T[P], AggregateCrmTenantMember[P]>
  }




  export type CrmTenantMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmTenantMemberWhereInput
    orderBy?: CrmTenantMemberOrderByWithAggregationInput | CrmTenantMemberOrderByWithAggregationInput[]
    by: CrmTenantMemberScalarFieldEnum[] | CrmTenantMemberScalarFieldEnum
    having?: CrmTenantMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrmTenantMemberCountAggregateInputType | true
    _avg?: CrmTenantMemberAvgAggregateInputType
    _sum?: CrmTenantMemberSumAggregateInputType
    _min?: CrmTenantMemberMinAggregateInputType
    _max?: CrmTenantMemberMaxAggregateInputType
  }

  export type CrmTenantMemberGroupByOutputType = {
    id: bigint
    tenantId: bigint
    userId: bigint
    role: $Enums.CrmMemberRole
    createdAt: Date
    _count: CrmTenantMemberCountAggregateOutputType | null
    _avg: CrmTenantMemberAvgAggregateOutputType | null
    _sum: CrmTenantMemberSumAggregateOutputType | null
    _min: CrmTenantMemberMinAggregateOutputType | null
    _max: CrmTenantMemberMaxAggregateOutputType | null
  }

  type GetCrmTenantMemberGroupByPayload<T extends CrmTenantMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrmTenantMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrmTenantMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrmTenantMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CrmTenantMemberGroupByOutputType[P]>
        }
      >
    >


  export type CrmTenantMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmTenantMember"]>

  export type CrmTenantMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmTenantMember"]>

  export type CrmTenantMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmTenantMember"]>

  export type CrmTenantMemberSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type CrmTenantMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "role" | "createdAt", ExtArgs["result"]["crmTenantMember"]>
  export type CrmTenantMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }
  export type CrmTenantMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }
  export type CrmTenantMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }

  export type $CrmTenantMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrmTenantMember"
    objects: {
      Tenant: Prisma.$CrmTenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tenantId: bigint
      userId: bigint
      role: $Enums.CrmMemberRole
      createdAt: Date
    }, ExtArgs["result"]["crmTenantMember"]>
    composites: {}
  }

  type CrmTenantMemberGetPayload<S extends boolean | null | undefined | CrmTenantMemberDefaultArgs> = $Result.GetResult<Prisma.$CrmTenantMemberPayload, S>

  type CrmTenantMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrmTenantMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrmTenantMemberCountAggregateInputType | true
    }

  export interface CrmTenantMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrmTenantMember'], meta: { name: 'CrmTenantMember' } }
    /**
     * Find zero or one CrmTenantMember that matches the filter.
     * @param {CrmTenantMemberFindUniqueArgs} args - Arguments to find a CrmTenantMember
     * @example
     * // Get one CrmTenantMember
     * const crmTenantMember = await prisma.crmTenantMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrmTenantMemberFindUniqueArgs>(args: SelectSubset<T, CrmTenantMemberFindUniqueArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrmTenantMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrmTenantMemberFindUniqueOrThrowArgs} args - Arguments to find a CrmTenantMember
     * @example
     * // Get one CrmTenantMember
     * const crmTenantMember = await prisma.crmTenantMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrmTenantMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CrmTenantMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmTenantMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantMemberFindFirstArgs} args - Arguments to find a CrmTenantMember
     * @example
     * // Get one CrmTenantMember
     * const crmTenantMember = await prisma.crmTenantMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrmTenantMemberFindFirstArgs>(args?: SelectSubset<T, CrmTenantMemberFindFirstArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmTenantMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantMemberFindFirstOrThrowArgs} args - Arguments to find a CrmTenantMember
     * @example
     * // Get one CrmTenantMember
     * const crmTenantMember = await prisma.crmTenantMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrmTenantMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CrmTenantMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrmTenantMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrmTenantMembers
     * const crmTenantMembers = await prisma.crmTenantMember.findMany()
     * 
     * // Get first 10 CrmTenantMembers
     * const crmTenantMembers = await prisma.crmTenantMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crmTenantMemberWithIdOnly = await prisma.crmTenantMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrmTenantMemberFindManyArgs>(args?: SelectSubset<T, CrmTenantMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrmTenantMember.
     * @param {CrmTenantMemberCreateArgs} args - Arguments to create a CrmTenantMember.
     * @example
     * // Create one CrmTenantMember
     * const CrmTenantMember = await prisma.crmTenantMember.create({
     *   data: {
     *     // ... data to create a CrmTenantMember
     *   }
     * })
     * 
     */
    create<T extends CrmTenantMemberCreateArgs>(args: SelectSubset<T, CrmTenantMemberCreateArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrmTenantMembers.
     * @param {CrmTenantMemberCreateManyArgs} args - Arguments to create many CrmTenantMembers.
     * @example
     * // Create many CrmTenantMembers
     * const crmTenantMember = await prisma.crmTenantMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrmTenantMemberCreateManyArgs>(args?: SelectSubset<T, CrmTenantMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrmTenantMembers and returns the data saved in the database.
     * @param {CrmTenantMemberCreateManyAndReturnArgs} args - Arguments to create many CrmTenantMembers.
     * @example
     * // Create many CrmTenantMembers
     * const crmTenantMember = await prisma.crmTenantMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrmTenantMembers and only return the `id`
     * const crmTenantMemberWithIdOnly = await prisma.crmTenantMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrmTenantMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CrmTenantMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrmTenantMember.
     * @param {CrmTenantMemberDeleteArgs} args - Arguments to delete one CrmTenantMember.
     * @example
     * // Delete one CrmTenantMember
     * const CrmTenantMember = await prisma.crmTenantMember.delete({
     *   where: {
     *     // ... filter to delete one CrmTenantMember
     *   }
     * })
     * 
     */
    delete<T extends CrmTenantMemberDeleteArgs>(args: SelectSubset<T, CrmTenantMemberDeleteArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrmTenantMember.
     * @param {CrmTenantMemberUpdateArgs} args - Arguments to update one CrmTenantMember.
     * @example
     * // Update one CrmTenantMember
     * const crmTenantMember = await prisma.crmTenantMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrmTenantMemberUpdateArgs>(args: SelectSubset<T, CrmTenantMemberUpdateArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrmTenantMembers.
     * @param {CrmTenantMemberDeleteManyArgs} args - Arguments to filter CrmTenantMembers to delete.
     * @example
     * // Delete a few CrmTenantMembers
     * const { count } = await prisma.crmTenantMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrmTenantMemberDeleteManyArgs>(args?: SelectSubset<T, CrmTenantMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmTenantMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrmTenantMembers
     * const crmTenantMember = await prisma.crmTenantMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrmTenantMemberUpdateManyArgs>(args: SelectSubset<T, CrmTenantMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmTenantMembers and returns the data updated in the database.
     * @param {CrmTenantMemberUpdateManyAndReturnArgs} args - Arguments to update many CrmTenantMembers.
     * @example
     * // Update many CrmTenantMembers
     * const crmTenantMember = await prisma.crmTenantMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrmTenantMembers and only return the `id`
     * const crmTenantMemberWithIdOnly = await prisma.crmTenantMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends CrmTenantMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CrmTenantMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrmTenantMember.
     * @param {CrmTenantMemberUpsertArgs} args - Arguments to update or create a CrmTenantMember.
     * @example
     * // Update or create a CrmTenantMember
     * const crmTenantMember = await prisma.crmTenantMember.upsert({
     *   create: {
     *     // ... data to create a CrmTenantMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrmTenantMember we want to update
     *   }
     * })
     */
    upsert<T extends CrmTenantMemberUpsertArgs>(args: SelectSubset<T, CrmTenantMemberUpsertArgs<ExtArgs>>): Prisma__CrmTenantMemberClient<$Result.GetResult<Prisma.$CrmTenantMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrmTenantMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantMemberCountArgs} args - Arguments to filter CrmTenantMembers to count.
     * @example
     * // Count the number of CrmTenantMembers
     * const count = await prisma.crmTenantMember.count({
     *   where: {
     *     // ... the filter for the CrmTenantMembers we want to count
     *   }
     * })
    **/
    count<T extends CrmTenantMemberCountArgs>(
      args?: Subset<T, CrmTenantMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrmTenantMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrmTenantMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrmTenantMemberAggregateArgs>(args: Subset<T, CrmTenantMemberAggregateArgs>): Prisma.PrismaPromise<GetCrmTenantMemberAggregateType<T>>

    /**
     * Group by CrmTenantMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmTenantMemberGroupByArgs} args - Group by arguments.
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
      T extends CrmTenantMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrmTenantMemberGroupByArgs['orderBy'] }
        : { orderBy?: CrmTenantMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrmTenantMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrmTenantMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrmTenantMember model
   */
  readonly fields: CrmTenantMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrmTenantMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrmTenantMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tenant<T extends CrmTenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenantDefaultArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CrmTenantMember model
   */
  interface CrmTenantMemberFieldRefs {
    readonly id: FieldRef<"CrmTenantMember", 'BigInt'>
    readonly tenantId: FieldRef<"CrmTenantMember", 'BigInt'>
    readonly userId: FieldRef<"CrmTenantMember", 'BigInt'>
    readonly role: FieldRef<"CrmTenantMember", 'CrmMemberRole'>
    readonly createdAt: FieldRef<"CrmTenantMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrmTenantMember findUnique
   */
  export type CrmTenantMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenantMember to fetch.
     */
    where: CrmTenantMemberWhereUniqueInput
  }

  /**
   * CrmTenantMember findUniqueOrThrow
   */
  export type CrmTenantMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenantMember to fetch.
     */
    where: CrmTenantMemberWhereUniqueInput
  }

  /**
   * CrmTenantMember findFirst
   */
  export type CrmTenantMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenantMember to fetch.
     */
    where?: CrmTenantMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenantMembers to fetch.
     */
    orderBy?: CrmTenantMemberOrderByWithRelationInput | CrmTenantMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmTenantMembers.
     */
    cursor?: CrmTenantMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenantMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenantMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmTenantMembers.
     */
    distinct?: CrmTenantMemberScalarFieldEnum | CrmTenantMemberScalarFieldEnum[]
  }

  /**
   * CrmTenantMember findFirstOrThrow
   */
  export type CrmTenantMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenantMember to fetch.
     */
    where?: CrmTenantMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenantMembers to fetch.
     */
    orderBy?: CrmTenantMemberOrderByWithRelationInput | CrmTenantMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmTenantMembers.
     */
    cursor?: CrmTenantMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenantMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenantMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmTenantMembers.
     */
    distinct?: CrmTenantMemberScalarFieldEnum | CrmTenantMemberScalarFieldEnum[]
  }

  /**
   * CrmTenantMember findMany
   */
  export type CrmTenantMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * Filter, which CrmTenantMembers to fetch.
     */
    where?: CrmTenantMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmTenantMembers to fetch.
     */
    orderBy?: CrmTenantMemberOrderByWithRelationInput | CrmTenantMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrmTenantMembers.
     */
    cursor?: CrmTenantMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmTenantMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmTenantMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmTenantMembers.
     */
    distinct?: CrmTenantMemberScalarFieldEnum | CrmTenantMemberScalarFieldEnum[]
  }

  /**
   * CrmTenantMember create
   */
  export type CrmTenantMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CrmTenantMember.
     */
    data: XOR<CrmTenantMemberCreateInput, CrmTenantMemberUncheckedCreateInput>
  }

  /**
   * CrmTenantMember createMany
   */
  export type CrmTenantMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrmTenantMembers.
     */
    data: CrmTenantMemberCreateManyInput | CrmTenantMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrmTenantMember createManyAndReturn
   */
  export type CrmTenantMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CrmTenantMembers.
     */
    data: CrmTenantMemberCreateManyInput | CrmTenantMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmTenantMember update
   */
  export type CrmTenantMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CrmTenantMember.
     */
    data: XOR<CrmTenantMemberUpdateInput, CrmTenantMemberUncheckedUpdateInput>
    /**
     * Choose, which CrmTenantMember to update.
     */
    where: CrmTenantMemberWhereUniqueInput
  }

  /**
   * CrmTenantMember updateMany
   */
  export type CrmTenantMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrmTenantMembers.
     */
    data: XOR<CrmTenantMemberUpdateManyMutationInput, CrmTenantMemberUncheckedUpdateManyInput>
    /**
     * Filter which CrmTenantMembers to update
     */
    where?: CrmTenantMemberWhereInput
    /**
     * Limit how many CrmTenantMembers to update.
     */
    limit?: number
  }

  /**
   * CrmTenantMember updateManyAndReturn
   */
  export type CrmTenantMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * The data used to update CrmTenantMembers.
     */
    data: XOR<CrmTenantMemberUpdateManyMutationInput, CrmTenantMemberUncheckedUpdateManyInput>
    /**
     * Filter which CrmTenantMembers to update
     */
    where?: CrmTenantMemberWhereInput
    /**
     * Limit how many CrmTenantMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmTenantMember upsert
   */
  export type CrmTenantMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CrmTenantMember to update in case it exists.
     */
    where: CrmTenantMemberWhereUniqueInput
    /**
     * In case the CrmTenantMember found by the `where` argument doesn't exist, create a new CrmTenantMember with this data.
     */
    create: XOR<CrmTenantMemberCreateInput, CrmTenantMemberUncheckedCreateInput>
    /**
     * In case the CrmTenantMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrmTenantMemberUpdateInput, CrmTenantMemberUncheckedUpdateInput>
  }

  /**
   * CrmTenantMember delete
   */
  export type CrmTenantMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
    /**
     * Filter which CrmTenantMember to delete.
     */
    where: CrmTenantMemberWhereUniqueInput
  }

  /**
   * CrmTenantMember deleteMany
   */
  export type CrmTenantMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmTenantMembers to delete
     */
    where?: CrmTenantMemberWhereInput
    /**
     * Limit how many CrmTenantMembers to delete.
     */
    limit?: number
  }

  /**
   * CrmTenantMember without action
   */
  export type CrmTenantMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmTenantMember
     */
    select?: CrmTenantMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmTenantMember
     */
    omit?: CrmTenantMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmTenantMemberInclude<ExtArgs> | null
  }


  /**
   * Model CrmContact
   */

  export type AggregateCrmContact = {
    _count: CrmContactCountAggregateOutputType | null
    _avg: CrmContactAvgAggregateOutputType | null
    _sum: CrmContactSumAggregateOutputType | null
    _min: CrmContactMinAggregateOutputType | null
    _max: CrmContactMaxAggregateOutputType | null
  }

  export type CrmContactAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type CrmContactSumAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
  }

  export type CrmContactMinAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    fullName: string | null
    phone: string | null
    email: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmContactMaxAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    fullName: string | null
    phone: string | null
    email: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmContactCountAggregateOutputType = {
    id: number
    tenantId: number
    fullName: number
    phone: number
    email: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrmContactAvgAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type CrmContactSumAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type CrmContactMinAggregateInputType = {
    id?: true
    tenantId?: true
    fullName?: true
    phone?: true
    email?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmContactMaxAggregateInputType = {
    id?: true
    tenantId?: true
    fullName?: true
    phone?: true
    email?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmContactCountAggregateInputType = {
    id?: true
    tenantId?: true
    fullName?: true
    phone?: true
    email?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrmContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmContact to aggregate.
     */
    where?: CrmContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmContacts to fetch.
     */
    orderBy?: CrmContactOrderByWithRelationInput | CrmContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrmContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrmContacts
    **/
    _count?: true | CrmContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrmContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrmContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrmContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrmContactMaxAggregateInputType
  }

  export type GetCrmContactAggregateType<T extends CrmContactAggregateArgs> = {
        [P in keyof T & keyof AggregateCrmContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrmContact[P]>
      : GetScalarType<T[P], AggregateCrmContact[P]>
  }




  export type CrmContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmContactWhereInput
    orderBy?: CrmContactOrderByWithAggregationInput | CrmContactOrderByWithAggregationInput[]
    by: CrmContactScalarFieldEnum[] | CrmContactScalarFieldEnum
    having?: CrmContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrmContactCountAggregateInputType | true
    _avg?: CrmContactAvgAggregateInputType
    _sum?: CrmContactSumAggregateInputType
    _min?: CrmContactMinAggregateInputType
    _max?: CrmContactMaxAggregateInputType
  }

  export type CrmContactGroupByOutputType = {
    id: bigint
    tenantId: bigint
    fullName: string
    phone: string | null
    email: string | null
    notes: string
    createdAt: Date
    updatedAt: Date
    _count: CrmContactCountAggregateOutputType | null
    _avg: CrmContactAvgAggregateOutputType | null
    _sum: CrmContactSumAggregateOutputType | null
    _min: CrmContactMinAggregateOutputType | null
    _max: CrmContactMaxAggregateOutputType | null
  }

  type GetCrmContactGroupByPayload<T extends CrmContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrmContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrmContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrmContactGroupByOutputType[P]>
            : GetScalarType<T[P], CrmContactGroupByOutputType[P]>
        }
      >
    >


  export type CrmContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Appointments?: boolean | CrmContact$AppointmentsArgs<ExtArgs>
    _count?: boolean | CrmContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmContact"]>

  export type CrmContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmContact"]>

  export type CrmContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmContact"]>

  export type CrmContactSelectScalar = {
    id?: boolean
    tenantId?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrmContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "fullName" | "phone" | "email" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["crmContact"]>
  export type CrmContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Appointments?: boolean | CrmContact$AppointmentsArgs<ExtArgs>
    _count?: boolean | CrmContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrmContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }
  export type CrmContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }

  export type $CrmContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrmContact"
    objects: {
      Tenant: Prisma.$CrmTenantPayload<ExtArgs>
      Appointments: Prisma.$CrmAppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tenantId: bigint
      fullName: string
      phone: string | null
      email: string | null
      notes: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crmContact"]>
    composites: {}
  }

  type CrmContactGetPayload<S extends boolean | null | undefined | CrmContactDefaultArgs> = $Result.GetResult<Prisma.$CrmContactPayload, S>

  type CrmContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrmContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrmContactCountAggregateInputType | true
    }

  export interface CrmContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrmContact'], meta: { name: 'CrmContact' } }
    /**
     * Find zero or one CrmContact that matches the filter.
     * @param {CrmContactFindUniqueArgs} args - Arguments to find a CrmContact
     * @example
     * // Get one CrmContact
     * const crmContact = await prisma.crmContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrmContactFindUniqueArgs>(args: SelectSubset<T, CrmContactFindUniqueArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrmContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrmContactFindUniqueOrThrowArgs} args - Arguments to find a CrmContact
     * @example
     * // Get one CrmContact
     * const crmContact = await prisma.crmContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrmContactFindUniqueOrThrowArgs>(args: SelectSubset<T, CrmContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmContactFindFirstArgs} args - Arguments to find a CrmContact
     * @example
     * // Get one CrmContact
     * const crmContact = await prisma.crmContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrmContactFindFirstArgs>(args?: SelectSubset<T, CrmContactFindFirstArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmContactFindFirstOrThrowArgs} args - Arguments to find a CrmContact
     * @example
     * // Get one CrmContact
     * const crmContact = await prisma.crmContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrmContactFindFirstOrThrowArgs>(args?: SelectSubset<T, CrmContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrmContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrmContacts
     * const crmContacts = await prisma.crmContact.findMany()
     * 
     * // Get first 10 CrmContacts
     * const crmContacts = await prisma.crmContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crmContactWithIdOnly = await prisma.crmContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrmContactFindManyArgs>(args?: SelectSubset<T, CrmContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrmContact.
     * @param {CrmContactCreateArgs} args - Arguments to create a CrmContact.
     * @example
     * // Create one CrmContact
     * const CrmContact = await prisma.crmContact.create({
     *   data: {
     *     // ... data to create a CrmContact
     *   }
     * })
     * 
     */
    create<T extends CrmContactCreateArgs>(args: SelectSubset<T, CrmContactCreateArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrmContacts.
     * @param {CrmContactCreateManyArgs} args - Arguments to create many CrmContacts.
     * @example
     * // Create many CrmContacts
     * const crmContact = await prisma.crmContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrmContactCreateManyArgs>(args?: SelectSubset<T, CrmContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrmContacts and returns the data saved in the database.
     * @param {CrmContactCreateManyAndReturnArgs} args - Arguments to create many CrmContacts.
     * @example
     * // Create many CrmContacts
     * const crmContact = await prisma.crmContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrmContacts and only return the `id`
     * const crmContactWithIdOnly = await prisma.crmContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrmContactCreateManyAndReturnArgs>(args?: SelectSubset<T, CrmContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrmContact.
     * @param {CrmContactDeleteArgs} args - Arguments to delete one CrmContact.
     * @example
     * // Delete one CrmContact
     * const CrmContact = await prisma.crmContact.delete({
     *   where: {
     *     // ... filter to delete one CrmContact
     *   }
     * })
     * 
     */
    delete<T extends CrmContactDeleteArgs>(args: SelectSubset<T, CrmContactDeleteArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrmContact.
     * @param {CrmContactUpdateArgs} args - Arguments to update one CrmContact.
     * @example
     * // Update one CrmContact
     * const crmContact = await prisma.crmContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrmContactUpdateArgs>(args: SelectSubset<T, CrmContactUpdateArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrmContacts.
     * @param {CrmContactDeleteManyArgs} args - Arguments to filter CrmContacts to delete.
     * @example
     * // Delete a few CrmContacts
     * const { count } = await prisma.crmContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrmContactDeleteManyArgs>(args?: SelectSubset<T, CrmContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrmContacts
     * const crmContact = await prisma.crmContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrmContactUpdateManyArgs>(args: SelectSubset<T, CrmContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmContacts and returns the data updated in the database.
     * @param {CrmContactUpdateManyAndReturnArgs} args - Arguments to update many CrmContacts.
     * @example
     * // Update many CrmContacts
     * const crmContact = await prisma.crmContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrmContacts and only return the `id`
     * const crmContactWithIdOnly = await prisma.crmContact.updateManyAndReturn({
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
    updateManyAndReturn<T extends CrmContactUpdateManyAndReturnArgs>(args: SelectSubset<T, CrmContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrmContact.
     * @param {CrmContactUpsertArgs} args - Arguments to update or create a CrmContact.
     * @example
     * // Update or create a CrmContact
     * const crmContact = await prisma.crmContact.upsert({
     *   create: {
     *     // ... data to create a CrmContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrmContact we want to update
     *   }
     * })
     */
    upsert<T extends CrmContactUpsertArgs>(args: SelectSubset<T, CrmContactUpsertArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrmContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmContactCountArgs} args - Arguments to filter CrmContacts to count.
     * @example
     * // Count the number of CrmContacts
     * const count = await prisma.crmContact.count({
     *   where: {
     *     // ... the filter for the CrmContacts we want to count
     *   }
     * })
    **/
    count<T extends CrmContactCountArgs>(
      args?: Subset<T, CrmContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrmContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrmContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrmContactAggregateArgs>(args: Subset<T, CrmContactAggregateArgs>): Prisma.PrismaPromise<GetCrmContactAggregateType<T>>

    /**
     * Group by CrmContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmContactGroupByArgs} args - Group by arguments.
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
      T extends CrmContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrmContactGroupByArgs['orderBy'] }
        : { orderBy?: CrmContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrmContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrmContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrmContact model
   */
  readonly fields: CrmContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrmContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrmContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tenant<T extends CrmTenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenantDefaultArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Appointments<T extends CrmContact$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, CrmContact$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CrmContact model
   */
  interface CrmContactFieldRefs {
    readonly id: FieldRef<"CrmContact", 'BigInt'>
    readonly tenantId: FieldRef<"CrmContact", 'BigInt'>
    readonly fullName: FieldRef<"CrmContact", 'String'>
    readonly phone: FieldRef<"CrmContact", 'String'>
    readonly email: FieldRef<"CrmContact", 'String'>
    readonly notes: FieldRef<"CrmContact", 'String'>
    readonly createdAt: FieldRef<"CrmContact", 'DateTime'>
    readonly updatedAt: FieldRef<"CrmContact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrmContact findUnique
   */
  export type CrmContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * Filter, which CrmContact to fetch.
     */
    where: CrmContactWhereUniqueInput
  }

  /**
   * CrmContact findUniqueOrThrow
   */
  export type CrmContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * Filter, which CrmContact to fetch.
     */
    where: CrmContactWhereUniqueInput
  }

  /**
   * CrmContact findFirst
   */
  export type CrmContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * Filter, which CrmContact to fetch.
     */
    where?: CrmContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmContacts to fetch.
     */
    orderBy?: CrmContactOrderByWithRelationInput | CrmContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmContacts.
     */
    cursor?: CrmContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmContacts.
     */
    distinct?: CrmContactScalarFieldEnum | CrmContactScalarFieldEnum[]
  }

  /**
   * CrmContact findFirstOrThrow
   */
  export type CrmContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * Filter, which CrmContact to fetch.
     */
    where?: CrmContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmContacts to fetch.
     */
    orderBy?: CrmContactOrderByWithRelationInput | CrmContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmContacts.
     */
    cursor?: CrmContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmContacts.
     */
    distinct?: CrmContactScalarFieldEnum | CrmContactScalarFieldEnum[]
  }

  /**
   * CrmContact findMany
   */
  export type CrmContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * Filter, which CrmContacts to fetch.
     */
    where?: CrmContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmContacts to fetch.
     */
    orderBy?: CrmContactOrderByWithRelationInput | CrmContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrmContacts.
     */
    cursor?: CrmContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmContacts.
     */
    distinct?: CrmContactScalarFieldEnum | CrmContactScalarFieldEnum[]
  }

  /**
   * CrmContact create
   */
  export type CrmContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * The data needed to create a CrmContact.
     */
    data: XOR<CrmContactCreateInput, CrmContactUncheckedCreateInput>
  }

  /**
   * CrmContact createMany
   */
  export type CrmContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrmContacts.
     */
    data: CrmContactCreateManyInput | CrmContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrmContact createManyAndReturn
   */
  export type CrmContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * The data used to create many CrmContacts.
     */
    data: CrmContactCreateManyInput | CrmContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmContact update
   */
  export type CrmContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * The data needed to update a CrmContact.
     */
    data: XOR<CrmContactUpdateInput, CrmContactUncheckedUpdateInput>
    /**
     * Choose, which CrmContact to update.
     */
    where: CrmContactWhereUniqueInput
  }

  /**
   * CrmContact updateMany
   */
  export type CrmContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrmContacts.
     */
    data: XOR<CrmContactUpdateManyMutationInput, CrmContactUncheckedUpdateManyInput>
    /**
     * Filter which CrmContacts to update
     */
    where?: CrmContactWhereInput
    /**
     * Limit how many CrmContacts to update.
     */
    limit?: number
  }

  /**
   * CrmContact updateManyAndReturn
   */
  export type CrmContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * The data used to update CrmContacts.
     */
    data: XOR<CrmContactUpdateManyMutationInput, CrmContactUncheckedUpdateManyInput>
    /**
     * Filter which CrmContacts to update
     */
    where?: CrmContactWhereInput
    /**
     * Limit how many CrmContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmContact upsert
   */
  export type CrmContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * The filter to search for the CrmContact to update in case it exists.
     */
    where: CrmContactWhereUniqueInput
    /**
     * In case the CrmContact found by the `where` argument doesn't exist, create a new CrmContact with this data.
     */
    create: XOR<CrmContactCreateInput, CrmContactUncheckedCreateInput>
    /**
     * In case the CrmContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrmContactUpdateInput, CrmContactUncheckedUpdateInput>
  }

  /**
   * CrmContact delete
   */
  export type CrmContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
    /**
     * Filter which CrmContact to delete.
     */
    where: CrmContactWhereUniqueInput
  }

  /**
   * CrmContact deleteMany
   */
  export type CrmContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmContacts to delete
     */
    where?: CrmContactWhereInput
    /**
     * Limit how many CrmContacts to delete.
     */
    limit?: number
  }

  /**
   * CrmContact.Appointments
   */
  export type CrmContact$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    where?: CrmAppointmentWhereInput
    orderBy?: CrmAppointmentOrderByWithRelationInput | CrmAppointmentOrderByWithRelationInput[]
    cursor?: CrmAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrmAppointmentScalarFieldEnum | CrmAppointmentScalarFieldEnum[]
  }

  /**
   * CrmContact without action
   */
  export type CrmContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmContact
     */
    select?: CrmContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmContact
     */
    omit?: CrmContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmContactInclude<ExtArgs> | null
  }


  /**
   * Model CrmService
   */

  export type AggregateCrmService = {
    _count: CrmServiceCountAggregateOutputType | null
    _avg: CrmServiceAvgAggregateOutputType | null
    _sum: CrmServiceSumAggregateOutputType | null
    _min: CrmServiceMinAggregateOutputType | null
    _max: CrmServiceMaxAggregateOutputType | null
  }

  export type CrmServiceAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    durationMin: number | null
    priceRub: number | null
  }

  export type CrmServiceSumAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    durationMin: number | null
    priceRub: number | null
  }

  export type CrmServiceMinAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    name: string | null
    durationMin: number | null
    priceRub: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmServiceMaxAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    name: string | null
    durationMin: number | null
    priceRub: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmServiceCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    durationMin: number
    priceRub: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrmServiceAvgAggregateInputType = {
    id?: true
    tenantId?: true
    durationMin?: true
    priceRub?: true
  }

  export type CrmServiceSumAggregateInputType = {
    id?: true
    tenantId?: true
    durationMin?: true
    priceRub?: true
  }

  export type CrmServiceMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    durationMin?: true
    priceRub?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmServiceMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    durationMin?: true
    priceRub?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmServiceCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    durationMin?: true
    priceRub?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrmServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmService to aggregate.
     */
    where?: CrmServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmServices to fetch.
     */
    orderBy?: CrmServiceOrderByWithRelationInput | CrmServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrmServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrmServices
    **/
    _count?: true | CrmServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrmServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrmServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrmServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrmServiceMaxAggregateInputType
  }

  export type GetCrmServiceAggregateType<T extends CrmServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateCrmService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrmService[P]>
      : GetScalarType<T[P], AggregateCrmService[P]>
  }




  export type CrmServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmServiceWhereInput
    orderBy?: CrmServiceOrderByWithAggregationInput | CrmServiceOrderByWithAggregationInput[]
    by: CrmServiceScalarFieldEnum[] | CrmServiceScalarFieldEnum
    having?: CrmServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrmServiceCountAggregateInputType | true
    _avg?: CrmServiceAvgAggregateInputType
    _sum?: CrmServiceSumAggregateInputType
    _min?: CrmServiceMinAggregateInputType
    _max?: CrmServiceMaxAggregateInputType
  }

  export type CrmServiceGroupByOutputType = {
    id: bigint
    tenantId: bigint
    name: string
    durationMin: number
    priceRub: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CrmServiceCountAggregateOutputType | null
    _avg: CrmServiceAvgAggregateOutputType | null
    _sum: CrmServiceSumAggregateOutputType | null
    _min: CrmServiceMinAggregateOutputType | null
    _max: CrmServiceMaxAggregateOutputType | null
  }

  type GetCrmServiceGroupByPayload<T extends CrmServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrmServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrmServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrmServiceGroupByOutputType[P]>
            : GetScalarType<T[P], CrmServiceGroupByOutputType[P]>
        }
      >
    >


  export type CrmServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    durationMin?: boolean
    priceRub?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Appointments?: boolean | CrmService$AppointmentsArgs<ExtArgs>
    _count?: boolean | CrmServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmService"]>

  export type CrmServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    durationMin?: boolean
    priceRub?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmService"]>

  export type CrmServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    durationMin?: boolean
    priceRub?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmService"]>

  export type CrmServiceSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    durationMin?: boolean
    priceRub?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrmServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "durationMin" | "priceRub" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["crmService"]>
  export type CrmServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Appointments?: boolean | CrmService$AppointmentsArgs<ExtArgs>
    _count?: boolean | CrmServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CrmServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }
  export type CrmServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
  }

  export type $CrmServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrmService"
    objects: {
      Tenant: Prisma.$CrmTenantPayload<ExtArgs>
      Appointments: Prisma.$CrmAppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tenantId: bigint
      name: string
      durationMin: number
      priceRub: number
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crmService"]>
    composites: {}
  }

  type CrmServiceGetPayload<S extends boolean | null | undefined | CrmServiceDefaultArgs> = $Result.GetResult<Prisma.$CrmServicePayload, S>

  type CrmServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrmServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrmServiceCountAggregateInputType | true
    }

  export interface CrmServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrmService'], meta: { name: 'CrmService' } }
    /**
     * Find zero or one CrmService that matches the filter.
     * @param {CrmServiceFindUniqueArgs} args - Arguments to find a CrmService
     * @example
     * // Get one CrmService
     * const crmService = await prisma.crmService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrmServiceFindUniqueArgs>(args: SelectSubset<T, CrmServiceFindUniqueArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrmService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrmServiceFindUniqueOrThrowArgs} args - Arguments to find a CrmService
     * @example
     * // Get one CrmService
     * const crmService = await prisma.crmService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrmServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, CrmServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmServiceFindFirstArgs} args - Arguments to find a CrmService
     * @example
     * // Get one CrmService
     * const crmService = await prisma.crmService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrmServiceFindFirstArgs>(args?: SelectSubset<T, CrmServiceFindFirstArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmServiceFindFirstOrThrowArgs} args - Arguments to find a CrmService
     * @example
     * // Get one CrmService
     * const crmService = await prisma.crmService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrmServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, CrmServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrmServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrmServices
     * const crmServices = await prisma.crmService.findMany()
     * 
     * // Get first 10 CrmServices
     * const crmServices = await prisma.crmService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crmServiceWithIdOnly = await prisma.crmService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrmServiceFindManyArgs>(args?: SelectSubset<T, CrmServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrmService.
     * @param {CrmServiceCreateArgs} args - Arguments to create a CrmService.
     * @example
     * // Create one CrmService
     * const CrmService = await prisma.crmService.create({
     *   data: {
     *     // ... data to create a CrmService
     *   }
     * })
     * 
     */
    create<T extends CrmServiceCreateArgs>(args: SelectSubset<T, CrmServiceCreateArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrmServices.
     * @param {CrmServiceCreateManyArgs} args - Arguments to create many CrmServices.
     * @example
     * // Create many CrmServices
     * const crmService = await prisma.crmService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrmServiceCreateManyArgs>(args?: SelectSubset<T, CrmServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrmServices and returns the data saved in the database.
     * @param {CrmServiceCreateManyAndReturnArgs} args - Arguments to create many CrmServices.
     * @example
     * // Create many CrmServices
     * const crmService = await prisma.crmService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrmServices and only return the `id`
     * const crmServiceWithIdOnly = await prisma.crmService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrmServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, CrmServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrmService.
     * @param {CrmServiceDeleteArgs} args - Arguments to delete one CrmService.
     * @example
     * // Delete one CrmService
     * const CrmService = await prisma.crmService.delete({
     *   where: {
     *     // ... filter to delete one CrmService
     *   }
     * })
     * 
     */
    delete<T extends CrmServiceDeleteArgs>(args: SelectSubset<T, CrmServiceDeleteArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrmService.
     * @param {CrmServiceUpdateArgs} args - Arguments to update one CrmService.
     * @example
     * // Update one CrmService
     * const crmService = await prisma.crmService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrmServiceUpdateArgs>(args: SelectSubset<T, CrmServiceUpdateArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrmServices.
     * @param {CrmServiceDeleteManyArgs} args - Arguments to filter CrmServices to delete.
     * @example
     * // Delete a few CrmServices
     * const { count } = await prisma.crmService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrmServiceDeleteManyArgs>(args?: SelectSubset<T, CrmServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrmServices
     * const crmService = await prisma.crmService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrmServiceUpdateManyArgs>(args: SelectSubset<T, CrmServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmServices and returns the data updated in the database.
     * @param {CrmServiceUpdateManyAndReturnArgs} args - Arguments to update many CrmServices.
     * @example
     * // Update many CrmServices
     * const crmService = await prisma.crmService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrmServices and only return the `id`
     * const crmServiceWithIdOnly = await prisma.crmService.updateManyAndReturn({
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
    updateManyAndReturn<T extends CrmServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, CrmServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrmService.
     * @param {CrmServiceUpsertArgs} args - Arguments to update or create a CrmService.
     * @example
     * // Update or create a CrmService
     * const crmService = await prisma.crmService.upsert({
     *   create: {
     *     // ... data to create a CrmService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrmService we want to update
     *   }
     * })
     */
    upsert<T extends CrmServiceUpsertArgs>(args: SelectSubset<T, CrmServiceUpsertArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrmServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmServiceCountArgs} args - Arguments to filter CrmServices to count.
     * @example
     * // Count the number of CrmServices
     * const count = await prisma.crmService.count({
     *   where: {
     *     // ... the filter for the CrmServices we want to count
     *   }
     * })
    **/
    count<T extends CrmServiceCountArgs>(
      args?: Subset<T, CrmServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrmServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrmService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrmServiceAggregateArgs>(args: Subset<T, CrmServiceAggregateArgs>): Prisma.PrismaPromise<GetCrmServiceAggregateType<T>>

    /**
     * Group by CrmService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmServiceGroupByArgs} args - Group by arguments.
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
      T extends CrmServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrmServiceGroupByArgs['orderBy'] }
        : { orderBy?: CrmServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrmServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrmServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrmService model
   */
  readonly fields: CrmServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrmService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrmServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tenant<T extends CrmTenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenantDefaultArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Appointments<T extends CrmService$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, CrmService$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CrmService model
   */
  interface CrmServiceFieldRefs {
    readonly id: FieldRef<"CrmService", 'BigInt'>
    readonly tenantId: FieldRef<"CrmService", 'BigInt'>
    readonly name: FieldRef<"CrmService", 'String'>
    readonly durationMin: FieldRef<"CrmService", 'Int'>
    readonly priceRub: FieldRef<"CrmService", 'Int'>
    readonly active: FieldRef<"CrmService", 'Boolean'>
    readonly createdAt: FieldRef<"CrmService", 'DateTime'>
    readonly updatedAt: FieldRef<"CrmService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrmService findUnique
   */
  export type CrmServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * Filter, which CrmService to fetch.
     */
    where: CrmServiceWhereUniqueInput
  }

  /**
   * CrmService findUniqueOrThrow
   */
  export type CrmServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * Filter, which CrmService to fetch.
     */
    where: CrmServiceWhereUniqueInput
  }

  /**
   * CrmService findFirst
   */
  export type CrmServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * Filter, which CrmService to fetch.
     */
    where?: CrmServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmServices to fetch.
     */
    orderBy?: CrmServiceOrderByWithRelationInput | CrmServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmServices.
     */
    cursor?: CrmServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmServices.
     */
    distinct?: CrmServiceScalarFieldEnum | CrmServiceScalarFieldEnum[]
  }

  /**
   * CrmService findFirstOrThrow
   */
  export type CrmServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * Filter, which CrmService to fetch.
     */
    where?: CrmServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmServices to fetch.
     */
    orderBy?: CrmServiceOrderByWithRelationInput | CrmServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmServices.
     */
    cursor?: CrmServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmServices.
     */
    distinct?: CrmServiceScalarFieldEnum | CrmServiceScalarFieldEnum[]
  }

  /**
   * CrmService findMany
   */
  export type CrmServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * Filter, which CrmServices to fetch.
     */
    where?: CrmServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmServices to fetch.
     */
    orderBy?: CrmServiceOrderByWithRelationInput | CrmServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrmServices.
     */
    cursor?: CrmServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmServices.
     */
    distinct?: CrmServiceScalarFieldEnum | CrmServiceScalarFieldEnum[]
  }

  /**
   * CrmService create
   */
  export type CrmServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a CrmService.
     */
    data: XOR<CrmServiceCreateInput, CrmServiceUncheckedCreateInput>
  }

  /**
   * CrmService createMany
   */
  export type CrmServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrmServices.
     */
    data: CrmServiceCreateManyInput | CrmServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrmService createManyAndReturn
   */
  export type CrmServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * The data used to create many CrmServices.
     */
    data: CrmServiceCreateManyInput | CrmServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmService update
   */
  export type CrmServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a CrmService.
     */
    data: XOR<CrmServiceUpdateInput, CrmServiceUncheckedUpdateInput>
    /**
     * Choose, which CrmService to update.
     */
    where: CrmServiceWhereUniqueInput
  }

  /**
   * CrmService updateMany
   */
  export type CrmServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrmServices.
     */
    data: XOR<CrmServiceUpdateManyMutationInput, CrmServiceUncheckedUpdateManyInput>
    /**
     * Filter which CrmServices to update
     */
    where?: CrmServiceWhereInput
    /**
     * Limit how many CrmServices to update.
     */
    limit?: number
  }

  /**
   * CrmService updateManyAndReturn
   */
  export type CrmServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * The data used to update CrmServices.
     */
    data: XOR<CrmServiceUpdateManyMutationInput, CrmServiceUncheckedUpdateManyInput>
    /**
     * Filter which CrmServices to update
     */
    where?: CrmServiceWhereInput
    /**
     * Limit how many CrmServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmService upsert
   */
  export type CrmServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the CrmService to update in case it exists.
     */
    where: CrmServiceWhereUniqueInput
    /**
     * In case the CrmService found by the `where` argument doesn't exist, create a new CrmService with this data.
     */
    create: XOR<CrmServiceCreateInput, CrmServiceUncheckedCreateInput>
    /**
     * In case the CrmService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrmServiceUpdateInput, CrmServiceUncheckedUpdateInput>
  }

  /**
   * CrmService delete
   */
  export type CrmServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
    /**
     * Filter which CrmService to delete.
     */
    where: CrmServiceWhereUniqueInput
  }

  /**
   * CrmService deleteMany
   */
  export type CrmServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmServices to delete
     */
    where?: CrmServiceWhereInput
    /**
     * Limit how many CrmServices to delete.
     */
    limit?: number
  }

  /**
   * CrmService.Appointments
   */
  export type CrmService$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    where?: CrmAppointmentWhereInput
    orderBy?: CrmAppointmentOrderByWithRelationInput | CrmAppointmentOrderByWithRelationInput[]
    cursor?: CrmAppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CrmAppointmentScalarFieldEnum | CrmAppointmentScalarFieldEnum[]
  }

  /**
   * CrmService without action
   */
  export type CrmServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmService
     */
    select?: CrmServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmService
     */
    omit?: CrmServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmServiceInclude<ExtArgs> | null
  }


  /**
   * Model CrmAppointment
   */

  export type AggregateCrmAppointment = {
    _count: CrmAppointmentCountAggregateOutputType | null
    _avg: CrmAppointmentAvgAggregateOutputType | null
    _sum: CrmAppointmentSumAggregateOutputType | null
    _min: CrmAppointmentMinAggregateOutputType | null
    _max: CrmAppointmentMaxAggregateOutputType | null
  }

  export type CrmAppointmentAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    contactId: number | null
    serviceId: number | null
  }

  export type CrmAppointmentSumAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    contactId: bigint | null
    serviceId: bigint | null
  }

  export type CrmAppointmentMinAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    contactId: bigint | null
    serviceId: bigint | null
    startsAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmAppointmentMaxAggregateOutputType = {
    id: bigint | null
    tenantId: bigint | null
    contactId: bigint | null
    serviceId: bigint | null
    startsAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CrmAppointmentCountAggregateOutputType = {
    id: number
    tenantId: number
    contactId: number
    serviceId: number
    startsAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CrmAppointmentAvgAggregateInputType = {
    id?: true
    tenantId?: true
    contactId?: true
    serviceId?: true
  }

  export type CrmAppointmentSumAggregateInputType = {
    id?: true
    tenantId?: true
    contactId?: true
    serviceId?: true
  }

  export type CrmAppointmentMinAggregateInputType = {
    id?: true
    tenantId?: true
    contactId?: true
    serviceId?: true
    startsAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmAppointmentMaxAggregateInputType = {
    id?: true
    tenantId?: true
    contactId?: true
    serviceId?: true
    startsAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CrmAppointmentCountAggregateInputType = {
    id?: true
    tenantId?: true
    contactId?: true
    serviceId?: true
    startsAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CrmAppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmAppointment to aggregate.
     */
    where?: CrmAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmAppointments to fetch.
     */
    orderBy?: CrmAppointmentOrderByWithRelationInput | CrmAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CrmAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CrmAppointments
    **/
    _count?: true | CrmAppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CrmAppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CrmAppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CrmAppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CrmAppointmentMaxAggregateInputType
  }

  export type GetCrmAppointmentAggregateType<T extends CrmAppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCrmAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrmAppointment[P]>
      : GetScalarType<T[P], AggregateCrmAppointment[P]>
  }




  export type CrmAppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CrmAppointmentWhereInput
    orderBy?: CrmAppointmentOrderByWithAggregationInput | CrmAppointmentOrderByWithAggregationInput[]
    by: CrmAppointmentScalarFieldEnum[] | CrmAppointmentScalarFieldEnum
    having?: CrmAppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CrmAppointmentCountAggregateInputType | true
    _avg?: CrmAppointmentAvgAggregateInputType
    _sum?: CrmAppointmentSumAggregateInputType
    _min?: CrmAppointmentMinAggregateInputType
    _max?: CrmAppointmentMaxAggregateInputType
  }

  export type CrmAppointmentGroupByOutputType = {
    id: bigint
    tenantId: bigint
    contactId: bigint
    serviceId: bigint
    startsAt: Date
    notes: string
    createdAt: Date
    updatedAt: Date
    _count: CrmAppointmentCountAggregateOutputType | null
    _avg: CrmAppointmentAvgAggregateOutputType | null
    _sum: CrmAppointmentSumAggregateOutputType | null
    _min: CrmAppointmentMinAggregateOutputType | null
    _max: CrmAppointmentMaxAggregateOutputType | null
  }

  type GetCrmAppointmentGroupByPayload<T extends CrmAppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CrmAppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CrmAppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CrmAppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], CrmAppointmentGroupByOutputType[P]>
        }
      >
    >


  export type CrmAppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    contactId?: boolean
    serviceId?: boolean
    startsAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Contact?: boolean | CrmContactDefaultArgs<ExtArgs>
    Service?: boolean | CrmServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmAppointment"]>

  export type CrmAppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    contactId?: boolean
    serviceId?: boolean
    startsAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Contact?: boolean | CrmContactDefaultArgs<ExtArgs>
    Service?: boolean | CrmServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmAppointment"]>

  export type CrmAppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    contactId?: boolean
    serviceId?: boolean
    startsAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Contact?: boolean | CrmContactDefaultArgs<ExtArgs>
    Service?: boolean | CrmServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crmAppointment"]>

  export type CrmAppointmentSelectScalar = {
    id?: boolean
    tenantId?: boolean
    contactId?: boolean
    serviceId?: boolean
    startsAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CrmAppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "contactId" | "serviceId" | "startsAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["crmAppointment"]>
  export type CrmAppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Contact?: boolean | CrmContactDefaultArgs<ExtArgs>
    Service?: boolean | CrmServiceDefaultArgs<ExtArgs>
  }
  export type CrmAppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Contact?: boolean | CrmContactDefaultArgs<ExtArgs>
    Service?: boolean | CrmServiceDefaultArgs<ExtArgs>
  }
  export type CrmAppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tenant?: boolean | CrmTenantDefaultArgs<ExtArgs>
    Contact?: boolean | CrmContactDefaultArgs<ExtArgs>
    Service?: boolean | CrmServiceDefaultArgs<ExtArgs>
  }

  export type $CrmAppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CrmAppointment"
    objects: {
      Tenant: Prisma.$CrmTenantPayload<ExtArgs>
      Contact: Prisma.$CrmContactPayload<ExtArgs>
      Service: Prisma.$CrmServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tenantId: bigint
      contactId: bigint
      serviceId: bigint
      startsAt: Date
      notes: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crmAppointment"]>
    composites: {}
  }

  type CrmAppointmentGetPayload<S extends boolean | null | undefined | CrmAppointmentDefaultArgs> = $Result.GetResult<Prisma.$CrmAppointmentPayload, S>

  type CrmAppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CrmAppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CrmAppointmentCountAggregateInputType | true
    }

  export interface CrmAppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CrmAppointment'], meta: { name: 'CrmAppointment' } }
    /**
     * Find zero or one CrmAppointment that matches the filter.
     * @param {CrmAppointmentFindUniqueArgs} args - Arguments to find a CrmAppointment
     * @example
     * // Get one CrmAppointment
     * const crmAppointment = await prisma.crmAppointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CrmAppointmentFindUniqueArgs>(args: SelectSubset<T, CrmAppointmentFindUniqueArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CrmAppointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CrmAppointmentFindUniqueOrThrowArgs} args - Arguments to find a CrmAppointment
     * @example
     * // Get one CrmAppointment
     * const crmAppointment = await prisma.crmAppointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CrmAppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, CrmAppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmAppointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmAppointmentFindFirstArgs} args - Arguments to find a CrmAppointment
     * @example
     * // Get one CrmAppointment
     * const crmAppointment = await prisma.crmAppointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CrmAppointmentFindFirstArgs>(args?: SelectSubset<T, CrmAppointmentFindFirstArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CrmAppointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmAppointmentFindFirstOrThrowArgs} args - Arguments to find a CrmAppointment
     * @example
     * // Get one CrmAppointment
     * const crmAppointment = await prisma.crmAppointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CrmAppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, CrmAppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CrmAppointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmAppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CrmAppointments
     * const crmAppointments = await prisma.crmAppointment.findMany()
     * 
     * // Get first 10 CrmAppointments
     * const crmAppointments = await prisma.crmAppointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const crmAppointmentWithIdOnly = await prisma.crmAppointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CrmAppointmentFindManyArgs>(args?: SelectSubset<T, CrmAppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CrmAppointment.
     * @param {CrmAppointmentCreateArgs} args - Arguments to create a CrmAppointment.
     * @example
     * // Create one CrmAppointment
     * const CrmAppointment = await prisma.crmAppointment.create({
     *   data: {
     *     // ... data to create a CrmAppointment
     *   }
     * })
     * 
     */
    create<T extends CrmAppointmentCreateArgs>(args: SelectSubset<T, CrmAppointmentCreateArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CrmAppointments.
     * @param {CrmAppointmentCreateManyArgs} args - Arguments to create many CrmAppointments.
     * @example
     * // Create many CrmAppointments
     * const crmAppointment = await prisma.crmAppointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CrmAppointmentCreateManyArgs>(args?: SelectSubset<T, CrmAppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CrmAppointments and returns the data saved in the database.
     * @param {CrmAppointmentCreateManyAndReturnArgs} args - Arguments to create many CrmAppointments.
     * @example
     * // Create many CrmAppointments
     * const crmAppointment = await prisma.crmAppointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CrmAppointments and only return the `id`
     * const crmAppointmentWithIdOnly = await prisma.crmAppointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CrmAppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, CrmAppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CrmAppointment.
     * @param {CrmAppointmentDeleteArgs} args - Arguments to delete one CrmAppointment.
     * @example
     * // Delete one CrmAppointment
     * const CrmAppointment = await prisma.crmAppointment.delete({
     *   where: {
     *     // ... filter to delete one CrmAppointment
     *   }
     * })
     * 
     */
    delete<T extends CrmAppointmentDeleteArgs>(args: SelectSubset<T, CrmAppointmentDeleteArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CrmAppointment.
     * @param {CrmAppointmentUpdateArgs} args - Arguments to update one CrmAppointment.
     * @example
     * // Update one CrmAppointment
     * const crmAppointment = await prisma.crmAppointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CrmAppointmentUpdateArgs>(args: SelectSubset<T, CrmAppointmentUpdateArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CrmAppointments.
     * @param {CrmAppointmentDeleteManyArgs} args - Arguments to filter CrmAppointments to delete.
     * @example
     * // Delete a few CrmAppointments
     * const { count } = await prisma.crmAppointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CrmAppointmentDeleteManyArgs>(args?: SelectSubset<T, CrmAppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmAppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmAppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CrmAppointments
     * const crmAppointment = await prisma.crmAppointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CrmAppointmentUpdateManyArgs>(args: SelectSubset<T, CrmAppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CrmAppointments and returns the data updated in the database.
     * @param {CrmAppointmentUpdateManyAndReturnArgs} args - Arguments to update many CrmAppointments.
     * @example
     * // Update many CrmAppointments
     * const crmAppointment = await prisma.crmAppointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CrmAppointments and only return the `id`
     * const crmAppointmentWithIdOnly = await prisma.crmAppointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CrmAppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, CrmAppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CrmAppointment.
     * @param {CrmAppointmentUpsertArgs} args - Arguments to update or create a CrmAppointment.
     * @example
     * // Update or create a CrmAppointment
     * const crmAppointment = await prisma.crmAppointment.upsert({
     *   create: {
     *     // ... data to create a CrmAppointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CrmAppointment we want to update
     *   }
     * })
     */
    upsert<T extends CrmAppointmentUpsertArgs>(args: SelectSubset<T, CrmAppointmentUpsertArgs<ExtArgs>>): Prisma__CrmAppointmentClient<$Result.GetResult<Prisma.$CrmAppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CrmAppointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmAppointmentCountArgs} args - Arguments to filter CrmAppointments to count.
     * @example
     * // Count the number of CrmAppointments
     * const count = await prisma.crmAppointment.count({
     *   where: {
     *     // ... the filter for the CrmAppointments we want to count
     *   }
     * })
    **/
    count<T extends CrmAppointmentCountArgs>(
      args?: Subset<T, CrmAppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CrmAppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CrmAppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmAppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CrmAppointmentAggregateArgs>(args: Subset<T, CrmAppointmentAggregateArgs>): Prisma.PrismaPromise<GetCrmAppointmentAggregateType<T>>

    /**
     * Group by CrmAppointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CrmAppointmentGroupByArgs} args - Group by arguments.
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
      T extends CrmAppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CrmAppointmentGroupByArgs['orderBy'] }
        : { orderBy?: CrmAppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CrmAppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrmAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CrmAppointment model
   */
  readonly fields: CrmAppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CrmAppointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CrmAppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tenant<T extends CrmTenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrmTenantDefaultArgs<ExtArgs>>): Prisma__CrmTenantClient<$Result.GetResult<Prisma.$CrmTenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Contact<T extends CrmContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrmContactDefaultArgs<ExtArgs>>): Prisma__CrmContactClient<$Result.GetResult<Prisma.$CrmContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Service<T extends CrmServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CrmServiceDefaultArgs<ExtArgs>>): Prisma__CrmServiceClient<$Result.GetResult<Prisma.$CrmServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CrmAppointment model
   */
  interface CrmAppointmentFieldRefs {
    readonly id: FieldRef<"CrmAppointment", 'BigInt'>
    readonly tenantId: FieldRef<"CrmAppointment", 'BigInt'>
    readonly contactId: FieldRef<"CrmAppointment", 'BigInt'>
    readonly serviceId: FieldRef<"CrmAppointment", 'BigInt'>
    readonly startsAt: FieldRef<"CrmAppointment", 'DateTime'>
    readonly notes: FieldRef<"CrmAppointment", 'String'>
    readonly createdAt: FieldRef<"CrmAppointment", 'DateTime'>
    readonly updatedAt: FieldRef<"CrmAppointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CrmAppointment findUnique
   */
  export type CrmAppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which CrmAppointment to fetch.
     */
    where: CrmAppointmentWhereUniqueInput
  }

  /**
   * CrmAppointment findUniqueOrThrow
   */
  export type CrmAppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which CrmAppointment to fetch.
     */
    where: CrmAppointmentWhereUniqueInput
  }

  /**
   * CrmAppointment findFirst
   */
  export type CrmAppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which CrmAppointment to fetch.
     */
    where?: CrmAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmAppointments to fetch.
     */
    orderBy?: CrmAppointmentOrderByWithRelationInput | CrmAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmAppointments.
     */
    cursor?: CrmAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmAppointments.
     */
    distinct?: CrmAppointmentScalarFieldEnum | CrmAppointmentScalarFieldEnum[]
  }

  /**
   * CrmAppointment findFirstOrThrow
   */
  export type CrmAppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which CrmAppointment to fetch.
     */
    where?: CrmAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmAppointments to fetch.
     */
    orderBy?: CrmAppointmentOrderByWithRelationInput | CrmAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CrmAppointments.
     */
    cursor?: CrmAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmAppointments.
     */
    distinct?: CrmAppointmentScalarFieldEnum | CrmAppointmentScalarFieldEnum[]
  }

  /**
   * CrmAppointment findMany
   */
  export type CrmAppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * Filter, which CrmAppointments to fetch.
     */
    where?: CrmAppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CrmAppointments to fetch.
     */
    orderBy?: CrmAppointmentOrderByWithRelationInput | CrmAppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CrmAppointments.
     */
    cursor?: CrmAppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CrmAppointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CrmAppointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CrmAppointments.
     */
    distinct?: CrmAppointmentScalarFieldEnum | CrmAppointmentScalarFieldEnum[]
  }

  /**
   * CrmAppointment create
   */
  export type CrmAppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a CrmAppointment.
     */
    data: XOR<CrmAppointmentCreateInput, CrmAppointmentUncheckedCreateInput>
  }

  /**
   * CrmAppointment createMany
   */
  export type CrmAppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CrmAppointments.
     */
    data: CrmAppointmentCreateManyInput | CrmAppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CrmAppointment createManyAndReturn
   */
  export type CrmAppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many CrmAppointments.
     */
    data: CrmAppointmentCreateManyInput | CrmAppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmAppointment update
   */
  export type CrmAppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a CrmAppointment.
     */
    data: XOR<CrmAppointmentUpdateInput, CrmAppointmentUncheckedUpdateInput>
    /**
     * Choose, which CrmAppointment to update.
     */
    where: CrmAppointmentWhereUniqueInput
  }

  /**
   * CrmAppointment updateMany
   */
  export type CrmAppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CrmAppointments.
     */
    data: XOR<CrmAppointmentUpdateManyMutationInput, CrmAppointmentUncheckedUpdateManyInput>
    /**
     * Filter which CrmAppointments to update
     */
    where?: CrmAppointmentWhereInput
    /**
     * Limit how many CrmAppointments to update.
     */
    limit?: number
  }

  /**
   * CrmAppointment updateManyAndReturn
   */
  export type CrmAppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * The data used to update CrmAppointments.
     */
    data: XOR<CrmAppointmentUpdateManyMutationInput, CrmAppointmentUncheckedUpdateManyInput>
    /**
     * Filter which CrmAppointments to update
     */
    where?: CrmAppointmentWhereInput
    /**
     * Limit how many CrmAppointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CrmAppointment upsert
   */
  export type CrmAppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the CrmAppointment to update in case it exists.
     */
    where: CrmAppointmentWhereUniqueInput
    /**
     * In case the CrmAppointment found by the `where` argument doesn't exist, create a new CrmAppointment with this data.
     */
    create: XOR<CrmAppointmentCreateInput, CrmAppointmentUncheckedCreateInput>
    /**
     * In case the CrmAppointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CrmAppointmentUpdateInput, CrmAppointmentUncheckedUpdateInput>
  }

  /**
   * CrmAppointment delete
   */
  export type CrmAppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
    /**
     * Filter which CrmAppointment to delete.
     */
    where: CrmAppointmentWhereUniqueInput
  }

  /**
   * CrmAppointment deleteMany
   */
  export type CrmAppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CrmAppointments to delete
     */
    where?: CrmAppointmentWhereInput
    /**
     * Limit how many CrmAppointments to delete.
     */
    limit?: number
  }

  /**
   * CrmAppointment without action
   */
  export type CrmAppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CrmAppointment
     */
    select?: CrmAppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CrmAppointment
     */
    omit?: CrmAppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CrmAppointmentInclude<ExtArgs> | null
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


  export const CrmTenantScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    displayName: 'displayName',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrmTenantScalarFieldEnum = (typeof CrmTenantScalarFieldEnum)[keyof typeof CrmTenantScalarFieldEnum]


  export const CrmTenantMemberScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type CrmTenantMemberScalarFieldEnum = (typeof CrmTenantMemberScalarFieldEnum)[keyof typeof CrmTenantMemberScalarFieldEnum]


  export const CrmContactScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrmContactScalarFieldEnum = (typeof CrmContactScalarFieldEnum)[keyof typeof CrmContactScalarFieldEnum]


  export const CrmServiceScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    durationMin: 'durationMin',
    priceRub: 'priceRub',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrmServiceScalarFieldEnum = (typeof CrmServiceScalarFieldEnum)[keyof typeof CrmServiceScalarFieldEnum]


  export const CrmAppointmentScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    contactId: 'contactId',
    serviceId: 'serviceId',
    startsAt: 'startsAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CrmAppointmentScalarFieldEnum = (typeof CrmAppointmentScalarFieldEnum)[keyof typeof CrmAppointmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CrmMemberRole'
   */
  export type EnumCrmMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrmMemberRole'>
    


  /**
   * Reference to a field of type 'CrmMemberRole[]'
   */
  export type ListEnumCrmMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CrmMemberRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type CrmTenantWhereInput = {
    AND?: CrmTenantWhereInput | CrmTenantWhereInput[]
    OR?: CrmTenantWhereInput[]
    NOT?: CrmTenantWhereInput | CrmTenantWhereInput[]
    id?: BigIntFilter<"CrmTenant"> | bigint | number
    slug?: StringFilter<"CrmTenant"> | string
    displayName?: StringFilter<"CrmTenant"> | string
    timezone?: StringFilter<"CrmTenant"> | string
    createdAt?: DateTimeFilter<"CrmTenant"> | Date | string
    updatedAt?: DateTimeFilter<"CrmTenant"> | Date | string
    Members?: CrmTenantMemberListRelationFilter
    Contacts?: CrmContactListRelationFilter
    Services?: CrmServiceListRelationFilter
    Appointments?: CrmAppointmentListRelationFilter
  }

  export type CrmTenantOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Members?: CrmTenantMemberOrderByRelationAggregateInput
    Contacts?: CrmContactOrderByRelationAggregateInput
    Services?: CrmServiceOrderByRelationAggregateInput
    Appointments?: CrmAppointmentOrderByRelationAggregateInput
  }

  export type CrmTenantWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: CrmTenantWhereInput | CrmTenantWhereInput[]
    OR?: CrmTenantWhereInput[]
    NOT?: CrmTenantWhereInput | CrmTenantWhereInput[]
    displayName?: StringFilter<"CrmTenant"> | string
    timezone?: StringFilter<"CrmTenant"> | string
    createdAt?: DateTimeFilter<"CrmTenant"> | Date | string
    updatedAt?: DateTimeFilter<"CrmTenant"> | Date | string
    Members?: CrmTenantMemberListRelationFilter
    Contacts?: CrmContactListRelationFilter
    Services?: CrmServiceListRelationFilter
    Appointments?: CrmAppointmentListRelationFilter
  }, "id" | "slug">

  export type CrmTenantOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrmTenantCountOrderByAggregateInput
    _avg?: CrmTenantAvgOrderByAggregateInput
    _max?: CrmTenantMaxOrderByAggregateInput
    _min?: CrmTenantMinOrderByAggregateInput
    _sum?: CrmTenantSumOrderByAggregateInput
  }

  export type CrmTenantScalarWhereWithAggregatesInput = {
    AND?: CrmTenantScalarWhereWithAggregatesInput | CrmTenantScalarWhereWithAggregatesInput[]
    OR?: CrmTenantScalarWhereWithAggregatesInput[]
    NOT?: CrmTenantScalarWhereWithAggregatesInput | CrmTenantScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CrmTenant"> | bigint | number
    slug?: StringWithAggregatesFilter<"CrmTenant"> | string
    displayName?: StringWithAggregatesFilter<"CrmTenant"> | string
    timezone?: StringWithAggregatesFilter<"CrmTenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CrmTenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CrmTenant"> | Date | string
  }

  export type CrmTenantMemberWhereInput = {
    AND?: CrmTenantMemberWhereInput | CrmTenantMemberWhereInput[]
    OR?: CrmTenantMemberWhereInput[]
    NOT?: CrmTenantMemberWhereInput | CrmTenantMemberWhereInput[]
    id?: BigIntFilter<"CrmTenantMember"> | bigint | number
    tenantId?: BigIntFilter<"CrmTenantMember"> | bigint | number
    userId?: BigIntFilter<"CrmTenantMember"> | bigint | number
    role?: EnumCrmMemberRoleFilter<"CrmTenantMember"> | $Enums.CrmMemberRole
    createdAt?: DateTimeFilter<"CrmTenantMember"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
  }

  export type CrmTenantMemberOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    Tenant?: CrmTenantOrderByWithRelationInput
  }

  export type CrmTenantMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    tenantId_userId?: CrmTenantMemberTenantIdUserIdCompoundUniqueInput
    AND?: CrmTenantMemberWhereInput | CrmTenantMemberWhereInput[]
    OR?: CrmTenantMemberWhereInput[]
    NOT?: CrmTenantMemberWhereInput | CrmTenantMemberWhereInput[]
    tenantId?: BigIntFilter<"CrmTenantMember"> | bigint | number
    userId?: BigIntFilter<"CrmTenantMember"> | bigint | number
    role?: EnumCrmMemberRoleFilter<"CrmTenantMember"> | $Enums.CrmMemberRole
    createdAt?: DateTimeFilter<"CrmTenantMember"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
  }, "id" | "tenantId_userId">

  export type CrmTenantMemberOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: CrmTenantMemberCountOrderByAggregateInput
    _avg?: CrmTenantMemberAvgOrderByAggregateInput
    _max?: CrmTenantMemberMaxOrderByAggregateInput
    _min?: CrmTenantMemberMinOrderByAggregateInput
    _sum?: CrmTenantMemberSumOrderByAggregateInput
  }

  export type CrmTenantMemberScalarWhereWithAggregatesInput = {
    AND?: CrmTenantMemberScalarWhereWithAggregatesInput | CrmTenantMemberScalarWhereWithAggregatesInput[]
    OR?: CrmTenantMemberScalarWhereWithAggregatesInput[]
    NOT?: CrmTenantMemberScalarWhereWithAggregatesInput | CrmTenantMemberScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CrmTenantMember"> | bigint | number
    tenantId?: BigIntWithAggregatesFilter<"CrmTenantMember"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"CrmTenantMember"> | bigint | number
    role?: EnumCrmMemberRoleWithAggregatesFilter<"CrmTenantMember"> | $Enums.CrmMemberRole
    createdAt?: DateTimeWithAggregatesFilter<"CrmTenantMember"> | Date | string
  }

  export type CrmContactWhereInput = {
    AND?: CrmContactWhereInput | CrmContactWhereInput[]
    OR?: CrmContactWhereInput[]
    NOT?: CrmContactWhereInput | CrmContactWhereInput[]
    id?: BigIntFilter<"CrmContact"> | bigint | number
    tenantId?: BigIntFilter<"CrmContact"> | bigint | number
    fullName?: StringFilter<"CrmContact"> | string
    phone?: StringNullableFilter<"CrmContact"> | string | null
    email?: StringNullableFilter<"CrmContact"> | string | null
    notes?: StringFilter<"CrmContact"> | string
    createdAt?: DateTimeFilter<"CrmContact"> | Date | string
    updatedAt?: DateTimeFilter<"CrmContact"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
    Appointments?: CrmAppointmentListRelationFilter
  }

  export type CrmContactOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tenant?: CrmTenantOrderByWithRelationInput
    Appointments?: CrmAppointmentOrderByRelationAggregateInput
  }

  export type CrmContactWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CrmContactWhereInput | CrmContactWhereInput[]
    OR?: CrmContactWhereInput[]
    NOT?: CrmContactWhereInput | CrmContactWhereInput[]
    tenantId?: BigIntFilter<"CrmContact"> | bigint | number
    fullName?: StringFilter<"CrmContact"> | string
    phone?: StringNullableFilter<"CrmContact"> | string | null
    email?: StringNullableFilter<"CrmContact"> | string | null
    notes?: StringFilter<"CrmContact"> | string
    createdAt?: DateTimeFilter<"CrmContact"> | Date | string
    updatedAt?: DateTimeFilter<"CrmContact"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
    Appointments?: CrmAppointmentListRelationFilter
  }, "id">

  export type CrmContactOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrmContactCountOrderByAggregateInput
    _avg?: CrmContactAvgOrderByAggregateInput
    _max?: CrmContactMaxOrderByAggregateInput
    _min?: CrmContactMinOrderByAggregateInput
    _sum?: CrmContactSumOrderByAggregateInput
  }

  export type CrmContactScalarWhereWithAggregatesInput = {
    AND?: CrmContactScalarWhereWithAggregatesInput | CrmContactScalarWhereWithAggregatesInput[]
    OR?: CrmContactScalarWhereWithAggregatesInput[]
    NOT?: CrmContactScalarWhereWithAggregatesInput | CrmContactScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CrmContact"> | bigint | number
    tenantId?: BigIntWithAggregatesFilter<"CrmContact"> | bigint | number
    fullName?: StringWithAggregatesFilter<"CrmContact"> | string
    phone?: StringNullableWithAggregatesFilter<"CrmContact"> | string | null
    email?: StringNullableWithAggregatesFilter<"CrmContact"> | string | null
    notes?: StringWithAggregatesFilter<"CrmContact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CrmContact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CrmContact"> | Date | string
  }

  export type CrmServiceWhereInput = {
    AND?: CrmServiceWhereInput | CrmServiceWhereInput[]
    OR?: CrmServiceWhereInput[]
    NOT?: CrmServiceWhereInput | CrmServiceWhereInput[]
    id?: BigIntFilter<"CrmService"> | bigint | number
    tenantId?: BigIntFilter<"CrmService"> | bigint | number
    name?: StringFilter<"CrmService"> | string
    durationMin?: IntFilter<"CrmService"> | number
    priceRub?: IntFilter<"CrmService"> | number
    active?: BoolFilter<"CrmService"> | boolean
    createdAt?: DateTimeFilter<"CrmService"> | Date | string
    updatedAt?: DateTimeFilter<"CrmService"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
    Appointments?: CrmAppointmentListRelationFilter
  }

  export type CrmServiceOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    priceRub?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tenant?: CrmTenantOrderByWithRelationInput
    Appointments?: CrmAppointmentOrderByRelationAggregateInput
  }

  export type CrmServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CrmServiceWhereInput | CrmServiceWhereInput[]
    OR?: CrmServiceWhereInput[]
    NOT?: CrmServiceWhereInput | CrmServiceWhereInput[]
    tenantId?: BigIntFilter<"CrmService"> | bigint | number
    name?: StringFilter<"CrmService"> | string
    durationMin?: IntFilter<"CrmService"> | number
    priceRub?: IntFilter<"CrmService"> | number
    active?: BoolFilter<"CrmService"> | boolean
    createdAt?: DateTimeFilter<"CrmService"> | Date | string
    updatedAt?: DateTimeFilter<"CrmService"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
    Appointments?: CrmAppointmentListRelationFilter
  }, "id">

  export type CrmServiceOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    priceRub?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrmServiceCountOrderByAggregateInput
    _avg?: CrmServiceAvgOrderByAggregateInput
    _max?: CrmServiceMaxOrderByAggregateInput
    _min?: CrmServiceMinOrderByAggregateInput
    _sum?: CrmServiceSumOrderByAggregateInput
  }

  export type CrmServiceScalarWhereWithAggregatesInput = {
    AND?: CrmServiceScalarWhereWithAggregatesInput | CrmServiceScalarWhereWithAggregatesInput[]
    OR?: CrmServiceScalarWhereWithAggregatesInput[]
    NOT?: CrmServiceScalarWhereWithAggregatesInput | CrmServiceScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CrmService"> | bigint | number
    tenantId?: BigIntWithAggregatesFilter<"CrmService"> | bigint | number
    name?: StringWithAggregatesFilter<"CrmService"> | string
    durationMin?: IntWithAggregatesFilter<"CrmService"> | number
    priceRub?: IntWithAggregatesFilter<"CrmService"> | number
    active?: BoolWithAggregatesFilter<"CrmService"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CrmService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CrmService"> | Date | string
  }

  export type CrmAppointmentWhereInput = {
    AND?: CrmAppointmentWhereInput | CrmAppointmentWhereInput[]
    OR?: CrmAppointmentWhereInput[]
    NOT?: CrmAppointmentWhereInput | CrmAppointmentWhereInput[]
    id?: BigIntFilter<"CrmAppointment"> | bigint | number
    tenantId?: BigIntFilter<"CrmAppointment"> | bigint | number
    contactId?: BigIntFilter<"CrmAppointment"> | bigint | number
    serviceId?: BigIntFilter<"CrmAppointment"> | bigint | number
    startsAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    notes?: StringFilter<"CrmAppointment"> | string
    createdAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    updatedAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
    Contact?: XOR<CrmContactScalarRelationFilter, CrmContactWhereInput>
    Service?: XOR<CrmServiceScalarRelationFilter, CrmServiceWhereInput>
  }

  export type CrmAppointmentOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    contactId?: SortOrder
    serviceId?: SortOrder
    startsAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Tenant?: CrmTenantOrderByWithRelationInput
    Contact?: CrmContactOrderByWithRelationInput
    Service?: CrmServiceOrderByWithRelationInput
  }

  export type CrmAppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CrmAppointmentWhereInput | CrmAppointmentWhereInput[]
    OR?: CrmAppointmentWhereInput[]
    NOT?: CrmAppointmentWhereInput | CrmAppointmentWhereInput[]
    tenantId?: BigIntFilter<"CrmAppointment"> | bigint | number
    contactId?: BigIntFilter<"CrmAppointment"> | bigint | number
    serviceId?: BigIntFilter<"CrmAppointment"> | bigint | number
    startsAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    notes?: StringFilter<"CrmAppointment"> | string
    createdAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    updatedAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    Tenant?: XOR<CrmTenantScalarRelationFilter, CrmTenantWhereInput>
    Contact?: XOR<CrmContactScalarRelationFilter, CrmContactWhereInput>
    Service?: XOR<CrmServiceScalarRelationFilter, CrmServiceWhereInput>
  }, "id">

  export type CrmAppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    contactId?: SortOrder
    serviceId?: SortOrder
    startsAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CrmAppointmentCountOrderByAggregateInput
    _avg?: CrmAppointmentAvgOrderByAggregateInput
    _max?: CrmAppointmentMaxOrderByAggregateInput
    _min?: CrmAppointmentMinOrderByAggregateInput
    _sum?: CrmAppointmentSumOrderByAggregateInput
  }

  export type CrmAppointmentScalarWhereWithAggregatesInput = {
    AND?: CrmAppointmentScalarWhereWithAggregatesInput | CrmAppointmentScalarWhereWithAggregatesInput[]
    OR?: CrmAppointmentScalarWhereWithAggregatesInput[]
    NOT?: CrmAppointmentScalarWhereWithAggregatesInput | CrmAppointmentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CrmAppointment"> | bigint | number
    tenantId?: BigIntWithAggregatesFilter<"CrmAppointment"> | bigint | number
    contactId?: BigIntWithAggregatesFilter<"CrmAppointment"> | bigint | number
    serviceId?: BigIntWithAggregatesFilter<"CrmAppointment"> | bigint | number
    startsAt?: DateTimeWithAggregatesFilter<"CrmAppointment"> | Date | string
    notes?: StringWithAggregatesFilter<"CrmAppointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CrmAppointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CrmAppointment"> | Date | string
  }

  export type CrmTenantCreateInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberCreateNestedManyWithoutTenantInput
    Contacts?: CrmContactCreateNestedManyWithoutTenantInput
    Services?: CrmServiceCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantUncheckedCreateInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberUncheckedCreateNestedManyWithoutTenantInput
    Contacts?: CrmContactUncheckedCreateNestedManyWithoutTenantInput
    Services?: CrmServiceUncheckedCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUpdateManyWithoutTenantNestedInput
    Contacts?: CrmContactUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUpdateManyWithoutTenantNestedInput
  }

  export type CrmTenantUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUncheckedUpdateManyWithoutTenantNestedInput
    Contacts?: CrmContactUncheckedUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUncheckedUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CrmTenantCreateManyInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmTenantUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmTenantUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmTenantMemberCreateInput = {
    id?: bigint | number
    userId: bigint | number
    role?: $Enums.CrmMemberRole
    createdAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutMembersInput
  }

  export type CrmTenantMemberUncheckedCreateInput = {
    id?: bigint | number
    tenantId: bigint | number
    userId: bigint | number
    role?: $Enums.CrmMemberRole
    createdAt?: Date | string
  }

  export type CrmTenantMemberUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumCrmMemberRoleFieldUpdateOperationsInput | $Enums.CrmMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CrmTenantMemberUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumCrmMemberRoleFieldUpdateOperationsInput | $Enums.CrmMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmTenantMemberCreateManyInput = {
    id?: bigint | number
    tenantId: bigint | number
    userId: bigint | number
    role?: $Enums.CrmMemberRole
    createdAt?: Date | string
  }

  export type CrmTenantMemberUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumCrmMemberRoleFieldUpdateOperationsInput | $Enums.CrmMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmTenantMemberUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumCrmMemberRoleFieldUpdateOperationsInput | $Enums.CrmMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmContactCreateInput = {
    id?: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutContactsInput
    Appointments?: CrmAppointmentCreateNestedManyWithoutContactInput
  }

  export type CrmContactUncheckedCreateInput = {
    id?: bigint | number
    tenantId: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutContactInput
  }

  export type CrmContactUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutContactsNestedInput
    Appointments?: CrmAppointmentUpdateManyWithoutContactNestedInput
  }

  export type CrmContactUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutContactNestedInput
  }

  export type CrmContactCreateManyInput = {
    id?: bigint | number
    tenantId: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmContactUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmContactUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmServiceCreateInput = {
    id?: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutServicesInput
    Appointments?: CrmAppointmentCreateNestedManyWithoutServiceInput
  }

  export type CrmServiceUncheckedCreateInput = {
    id?: bigint | number
    tenantId: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type CrmServiceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutServicesNestedInput
    Appointments?: CrmAppointmentUpdateManyWithoutServiceNestedInput
  }

  export type CrmServiceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type CrmServiceCreateManyInput = {
    id?: bigint | number
    tenantId: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmServiceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmServiceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentCreateInput = {
    id?: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutAppointmentsInput
    Contact: CrmContactCreateNestedOneWithoutAppointmentsInput
    Service: CrmServiceCreateNestedOneWithoutAppointmentsInput
  }

  export type CrmAppointmentUncheckedCreateInput = {
    id?: bigint | number
    tenantId: bigint | number
    contactId: bigint | number
    serviceId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutAppointmentsNestedInput
    Contact?: CrmContactUpdateOneRequiredWithoutAppointmentsNestedInput
    Service?: CrmServiceUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type CrmAppointmentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    contactId?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentCreateManyInput = {
    id?: bigint | number
    tenantId: bigint | number
    contactId: bigint | number
    serviceId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    contactId?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
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

  export type CrmTenantMemberListRelationFilter = {
    every?: CrmTenantMemberWhereInput
    some?: CrmTenantMemberWhereInput
    none?: CrmTenantMemberWhereInput
  }

  export type CrmContactListRelationFilter = {
    every?: CrmContactWhereInput
    some?: CrmContactWhereInput
    none?: CrmContactWhereInput
  }

  export type CrmServiceListRelationFilter = {
    every?: CrmServiceWhereInput
    some?: CrmServiceWhereInput
    none?: CrmServiceWhereInput
  }

  export type CrmAppointmentListRelationFilter = {
    every?: CrmAppointmentWhereInput
    some?: CrmAppointmentWhereInput
    none?: CrmAppointmentWhereInput
  }

  export type CrmTenantMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrmContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrmServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrmAppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CrmTenantCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmTenantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CrmTenantMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmTenantMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmTenantSumOrderByAggregateInput = {
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

  export type EnumCrmMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CrmMemberRole | EnumCrmMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCrmMemberRoleFilter<$PrismaModel> | $Enums.CrmMemberRole
  }

  export type CrmTenantScalarRelationFilter = {
    is?: CrmTenantWhereInput
    isNot?: CrmTenantWhereInput
  }

  export type CrmTenantMemberTenantIdUserIdCompoundUniqueInput = {
    tenantId: bigint | number
    userId: bigint | number
  }

  export type CrmTenantMemberCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type CrmTenantMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
  }

  export type CrmTenantMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type CrmTenantMemberMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type CrmTenantMemberSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
  }

  export type EnumCrmMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrmMemberRole | EnumCrmMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCrmMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.CrmMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrmMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumCrmMemberRoleFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CrmContactCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmContactAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type CrmContactMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmContactMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmContactSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CrmServiceCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    priceRub?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    durationMin?: SortOrder
    priceRub?: SortOrder
  }

  export type CrmServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    priceRub?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmServiceMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    durationMin?: SortOrder
    priceRub?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmServiceSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    durationMin?: SortOrder
    priceRub?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CrmContactScalarRelationFilter = {
    is?: CrmContactWhereInput
    isNot?: CrmContactWhereInput
  }

  export type CrmServiceScalarRelationFilter = {
    is?: CrmServiceWhereInput
    isNot?: CrmServiceWhereInput
  }

  export type CrmAppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    contactId?: SortOrder
    serviceId?: SortOrder
    startsAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmAppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    contactId?: SortOrder
    serviceId?: SortOrder
  }

  export type CrmAppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    contactId?: SortOrder
    serviceId?: SortOrder
    startsAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmAppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    contactId?: SortOrder
    serviceId?: SortOrder
    startsAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CrmAppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    contactId?: SortOrder
    serviceId?: SortOrder
  }

  export type CrmTenantMemberCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmTenantMemberCreateWithoutTenantInput, CrmTenantMemberUncheckedCreateWithoutTenantInput> | CrmTenantMemberCreateWithoutTenantInput[] | CrmTenantMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmTenantMemberCreateOrConnectWithoutTenantInput | CrmTenantMemberCreateOrConnectWithoutTenantInput[]
    createMany?: CrmTenantMemberCreateManyTenantInputEnvelope
    connect?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
  }

  export type CrmContactCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmContactCreateWithoutTenantInput, CrmContactUncheckedCreateWithoutTenantInput> | CrmContactCreateWithoutTenantInput[] | CrmContactUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmContactCreateOrConnectWithoutTenantInput | CrmContactCreateOrConnectWithoutTenantInput[]
    createMany?: CrmContactCreateManyTenantInputEnvelope
    connect?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
  }

  export type CrmServiceCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmServiceCreateWithoutTenantInput, CrmServiceUncheckedCreateWithoutTenantInput> | CrmServiceCreateWithoutTenantInput[] | CrmServiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmServiceCreateOrConnectWithoutTenantInput | CrmServiceCreateOrConnectWithoutTenantInput[]
    createMany?: CrmServiceCreateManyTenantInputEnvelope
    connect?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
  }

  export type CrmAppointmentCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmAppointmentCreateWithoutTenantInput, CrmAppointmentUncheckedCreateWithoutTenantInput> | CrmAppointmentCreateWithoutTenantInput[] | CrmAppointmentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutTenantInput | CrmAppointmentCreateOrConnectWithoutTenantInput[]
    createMany?: CrmAppointmentCreateManyTenantInputEnvelope
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
  }

  export type CrmTenantMemberUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmTenantMemberCreateWithoutTenantInput, CrmTenantMemberUncheckedCreateWithoutTenantInput> | CrmTenantMemberCreateWithoutTenantInput[] | CrmTenantMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmTenantMemberCreateOrConnectWithoutTenantInput | CrmTenantMemberCreateOrConnectWithoutTenantInput[]
    createMany?: CrmTenantMemberCreateManyTenantInputEnvelope
    connect?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
  }

  export type CrmContactUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmContactCreateWithoutTenantInput, CrmContactUncheckedCreateWithoutTenantInput> | CrmContactCreateWithoutTenantInput[] | CrmContactUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmContactCreateOrConnectWithoutTenantInput | CrmContactCreateOrConnectWithoutTenantInput[]
    createMany?: CrmContactCreateManyTenantInputEnvelope
    connect?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
  }

  export type CrmServiceUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmServiceCreateWithoutTenantInput, CrmServiceUncheckedCreateWithoutTenantInput> | CrmServiceCreateWithoutTenantInput[] | CrmServiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmServiceCreateOrConnectWithoutTenantInput | CrmServiceCreateOrConnectWithoutTenantInput[]
    createMany?: CrmServiceCreateManyTenantInputEnvelope
    connect?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
  }

  export type CrmAppointmentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CrmAppointmentCreateWithoutTenantInput, CrmAppointmentUncheckedCreateWithoutTenantInput> | CrmAppointmentCreateWithoutTenantInput[] | CrmAppointmentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutTenantInput | CrmAppointmentCreateOrConnectWithoutTenantInput[]
    createMany?: CrmAppointmentCreateManyTenantInputEnvelope
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CrmTenantMemberUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmTenantMemberCreateWithoutTenantInput, CrmTenantMemberUncheckedCreateWithoutTenantInput> | CrmTenantMemberCreateWithoutTenantInput[] | CrmTenantMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmTenantMemberCreateOrConnectWithoutTenantInput | CrmTenantMemberCreateOrConnectWithoutTenantInput[]
    upsert?: CrmTenantMemberUpsertWithWhereUniqueWithoutTenantInput | CrmTenantMemberUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmTenantMemberCreateManyTenantInputEnvelope
    set?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    disconnect?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    delete?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    connect?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    update?: CrmTenantMemberUpdateWithWhereUniqueWithoutTenantInput | CrmTenantMemberUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmTenantMemberUpdateManyWithWhereWithoutTenantInput | CrmTenantMemberUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmTenantMemberScalarWhereInput | CrmTenantMemberScalarWhereInput[]
  }

  export type CrmContactUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmContactCreateWithoutTenantInput, CrmContactUncheckedCreateWithoutTenantInput> | CrmContactCreateWithoutTenantInput[] | CrmContactUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmContactCreateOrConnectWithoutTenantInput | CrmContactCreateOrConnectWithoutTenantInput[]
    upsert?: CrmContactUpsertWithWhereUniqueWithoutTenantInput | CrmContactUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmContactCreateManyTenantInputEnvelope
    set?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    disconnect?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    delete?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    connect?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    update?: CrmContactUpdateWithWhereUniqueWithoutTenantInput | CrmContactUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmContactUpdateManyWithWhereWithoutTenantInput | CrmContactUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmContactScalarWhereInput | CrmContactScalarWhereInput[]
  }

  export type CrmServiceUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmServiceCreateWithoutTenantInput, CrmServiceUncheckedCreateWithoutTenantInput> | CrmServiceCreateWithoutTenantInput[] | CrmServiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmServiceCreateOrConnectWithoutTenantInput | CrmServiceCreateOrConnectWithoutTenantInput[]
    upsert?: CrmServiceUpsertWithWhereUniqueWithoutTenantInput | CrmServiceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmServiceCreateManyTenantInputEnvelope
    set?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    disconnect?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    delete?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    connect?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    update?: CrmServiceUpdateWithWhereUniqueWithoutTenantInput | CrmServiceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmServiceUpdateManyWithWhereWithoutTenantInput | CrmServiceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmServiceScalarWhereInput | CrmServiceScalarWhereInput[]
  }

  export type CrmAppointmentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmAppointmentCreateWithoutTenantInput, CrmAppointmentUncheckedCreateWithoutTenantInput> | CrmAppointmentCreateWithoutTenantInput[] | CrmAppointmentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutTenantInput | CrmAppointmentCreateOrConnectWithoutTenantInput[]
    upsert?: CrmAppointmentUpsertWithWhereUniqueWithoutTenantInput | CrmAppointmentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmAppointmentCreateManyTenantInputEnvelope
    set?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    disconnect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    delete?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    update?: CrmAppointmentUpdateWithWhereUniqueWithoutTenantInput | CrmAppointmentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmAppointmentUpdateManyWithWhereWithoutTenantInput | CrmAppointmentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
  }

  export type CrmTenantMemberUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmTenantMemberCreateWithoutTenantInput, CrmTenantMemberUncheckedCreateWithoutTenantInput> | CrmTenantMemberCreateWithoutTenantInput[] | CrmTenantMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmTenantMemberCreateOrConnectWithoutTenantInput | CrmTenantMemberCreateOrConnectWithoutTenantInput[]
    upsert?: CrmTenantMemberUpsertWithWhereUniqueWithoutTenantInput | CrmTenantMemberUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmTenantMemberCreateManyTenantInputEnvelope
    set?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    disconnect?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    delete?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    connect?: CrmTenantMemberWhereUniqueInput | CrmTenantMemberWhereUniqueInput[]
    update?: CrmTenantMemberUpdateWithWhereUniqueWithoutTenantInput | CrmTenantMemberUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmTenantMemberUpdateManyWithWhereWithoutTenantInput | CrmTenantMemberUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmTenantMemberScalarWhereInput | CrmTenantMemberScalarWhereInput[]
  }

  export type CrmContactUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmContactCreateWithoutTenantInput, CrmContactUncheckedCreateWithoutTenantInput> | CrmContactCreateWithoutTenantInput[] | CrmContactUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmContactCreateOrConnectWithoutTenantInput | CrmContactCreateOrConnectWithoutTenantInput[]
    upsert?: CrmContactUpsertWithWhereUniqueWithoutTenantInput | CrmContactUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmContactCreateManyTenantInputEnvelope
    set?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    disconnect?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    delete?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    connect?: CrmContactWhereUniqueInput | CrmContactWhereUniqueInput[]
    update?: CrmContactUpdateWithWhereUniqueWithoutTenantInput | CrmContactUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmContactUpdateManyWithWhereWithoutTenantInput | CrmContactUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmContactScalarWhereInput | CrmContactScalarWhereInput[]
  }

  export type CrmServiceUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmServiceCreateWithoutTenantInput, CrmServiceUncheckedCreateWithoutTenantInput> | CrmServiceCreateWithoutTenantInput[] | CrmServiceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmServiceCreateOrConnectWithoutTenantInput | CrmServiceCreateOrConnectWithoutTenantInput[]
    upsert?: CrmServiceUpsertWithWhereUniqueWithoutTenantInput | CrmServiceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmServiceCreateManyTenantInputEnvelope
    set?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    disconnect?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    delete?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    connect?: CrmServiceWhereUniqueInput | CrmServiceWhereUniqueInput[]
    update?: CrmServiceUpdateWithWhereUniqueWithoutTenantInput | CrmServiceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmServiceUpdateManyWithWhereWithoutTenantInput | CrmServiceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmServiceScalarWhereInput | CrmServiceScalarWhereInput[]
  }

  export type CrmAppointmentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CrmAppointmentCreateWithoutTenantInput, CrmAppointmentUncheckedCreateWithoutTenantInput> | CrmAppointmentCreateWithoutTenantInput[] | CrmAppointmentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutTenantInput | CrmAppointmentCreateOrConnectWithoutTenantInput[]
    upsert?: CrmAppointmentUpsertWithWhereUniqueWithoutTenantInput | CrmAppointmentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CrmAppointmentCreateManyTenantInputEnvelope
    set?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    disconnect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    delete?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    update?: CrmAppointmentUpdateWithWhereUniqueWithoutTenantInput | CrmAppointmentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CrmAppointmentUpdateManyWithWhereWithoutTenantInput | CrmAppointmentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
  }

  export type CrmTenantCreateNestedOneWithoutMembersInput = {
    create?: XOR<CrmTenantCreateWithoutMembersInput, CrmTenantUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutMembersInput
    connect?: CrmTenantWhereUniqueInput
  }

  export type EnumCrmMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.CrmMemberRole
  }

  export type CrmTenantUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CrmTenantCreateWithoutMembersInput, CrmTenantUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutMembersInput
    upsert?: CrmTenantUpsertWithoutMembersInput
    connect?: CrmTenantWhereUniqueInput
    update?: XOR<XOR<CrmTenantUpdateToOneWithWhereWithoutMembersInput, CrmTenantUpdateWithoutMembersInput>, CrmTenantUncheckedUpdateWithoutMembersInput>
  }

  export type CrmTenantCreateNestedOneWithoutContactsInput = {
    create?: XOR<CrmTenantCreateWithoutContactsInput, CrmTenantUncheckedCreateWithoutContactsInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutContactsInput
    connect?: CrmTenantWhereUniqueInput
  }

  export type CrmAppointmentCreateNestedManyWithoutContactInput = {
    create?: XOR<CrmAppointmentCreateWithoutContactInput, CrmAppointmentUncheckedCreateWithoutContactInput> | CrmAppointmentCreateWithoutContactInput[] | CrmAppointmentUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutContactInput | CrmAppointmentCreateOrConnectWithoutContactInput[]
    createMany?: CrmAppointmentCreateManyContactInputEnvelope
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
  }

  export type CrmAppointmentUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<CrmAppointmentCreateWithoutContactInput, CrmAppointmentUncheckedCreateWithoutContactInput> | CrmAppointmentCreateWithoutContactInput[] | CrmAppointmentUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutContactInput | CrmAppointmentCreateOrConnectWithoutContactInput[]
    createMany?: CrmAppointmentCreateManyContactInputEnvelope
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CrmTenantUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<CrmTenantCreateWithoutContactsInput, CrmTenantUncheckedCreateWithoutContactsInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutContactsInput
    upsert?: CrmTenantUpsertWithoutContactsInput
    connect?: CrmTenantWhereUniqueInput
    update?: XOR<XOR<CrmTenantUpdateToOneWithWhereWithoutContactsInput, CrmTenantUpdateWithoutContactsInput>, CrmTenantUncheckedUpdateWithoutContactsInput>
  }

  export type CrmAppointmentUpdateManyWithoutContactNestedInput = {
    create?: XOR<CrmAppointmentCreateWithoutContactInput, CrmAppointmentUncheckedCreateWithoutContactInput> | CrmAppointmentCreateWithoutContactInput[] | CrmAppointmentUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutContactInput | CrmAppointmentCreateOrConnectWithoutContactInput[]
    upsert?: CrmAppointmentUpsertWithWhereUniqueWithoutContactInput | CrmAppointmentUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: CrmAppointmentCreateManyContactInputEnvelope
    set?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    disconnect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    delete?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    update?: CrmAppointmentUpdateWithWhereUniqueWithoutContactInput | CrmAppointmentUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: CrmAppointmentUpdateManyWithWhereWithoutContactInput | CrmAppointmentUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
  }

  export type CrmAppointmentUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<CrmAppointmentCreateWithoutContactInput, CrmAppointmentUncheckedCreateWithoutContactInput> | CrmAppointmentCreateWithoutContactInput[] | CrmAppointmentUncheckedCreateWithoutContactInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutContactInput | CrmAppointmentCreateOrConnectWithoutContactInput[]
    upsert?: CrmAppointmentUpsertWithWhereUniqueWithoutContactInput | CrmAppointmentUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: CrmAppointmentCreateManyContactInputEnvelope
    set?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    disconnect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    delete?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    update?: CrmAppointmentUpdateWithWhereUniqueWithoutContactInput | CrmAppointmentUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: CrmAppointmentUpdateManyWithWhereWithoutContactInput | CrmAppointmentUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
  }

  export type CrmTenantCreateNestedOneWithoutServicesInput = {
    create?: XOR<CrmTenantCreateWithoutServicesInput, CrmTenantUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutServicesInput
    connect?: CrmTenantWhereUniqueInput
  }

  export type CrmAppointmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<CrmAppointmentCreateWithoutServiceInput, CrmAppointmentUncheckedCreateWithoutServiceInput> | CrmAppointmentCreateWithoutServiceInput[] | CrmAppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutServiceInput | CrmAppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: CrmAppointmentCreateManyServiceInputEnvelope
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
  }

  export type CrmAppointmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<CrmAppointmentCreateWithoutServiceInput, CrmAppointmentUncheckedCreateWithoutServiceInput> | CrmAppointmentCreateWithoutServiceInput[] | CrmAppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutServiceInput | CrmAppointmentCreateOrConnectWithoutServiceInput[]
    createMany?: CrmAppointmentCreateManyServiceInputEnvelope
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CrmTenantUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<CrmTenantCreateWithoutServicesInput, CrmTenantUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutServicesInput
    upsert?: CrmTenantUpsertWithoutServicesInput
    connect?: CrmTenantWhereUniqueInput
    update?: XOR<XOR<CrmTenantUpdateToOneWithWhereWithoutServicesInput, CrmTenantUpdateWithoutServicesInput>, CrmTenantUncheckedUpdateWithoutServicesInput>
  }

  export type CrmAppointmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<CrmAppointmentCreateWithoutServiceInput, CrmAppointmentUncheckedCreateWithoutServiceInput> | CrmAppointmentCreateWithoutServiceInput[] | CrmAppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutServiceInput | CrmAppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: CrmAppointmentUpsertWithWhereUniqueWithoutServiceInput | CrmAppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: CrmAppointmentCreateManyServiceInputEnvelope
    set?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    disconnect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    delete?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    update?: CrmAppointmentUpdateWithWhereUniqueWithoutServiceInput | CrmAppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: CrmAppointmentUpdateManyWithWhereWithoutServiceInput | CrmAppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
  }

  export type CrmAppointmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<CrmAppointmentCreateWithoutServiceInput, CrmAppointmentUncheckedCreateWithoutServiceInput> | CrmAppointmentCreateWithoutServiceInput[] | CrmAppointmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CrmAppointmentCreateOrConnectWithoutServiceInput | CrmAppointmentCreateOrConnectWithoutServiceInput[]
    upsert?: CrmAppointmentUpsertWithWhereUniqueWithoutServiceInput | CrmAppointmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: CrmAppointmentCreateManyServiceInputEnvelope
    set?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    disconnect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    delete?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    connect?: CrmAppointmentWhereUniqueInput | CrmAppointmentWhereUniqueInput[]
    update?: CrmAppointmentUpdateWithWhereUniqueWithoutServiceInput | CrmAppointmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: CrmAppointmentUpdateManyWithWhereWithoutServiceInput | CrmAppointmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
  }

  export type CrmTenantCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CrmTenantCreateWithoutAppointmentsInput, CrmTenantUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutAppointmentsInput
    connect?: CrmTenantWhereUniqueInput
  }

  export type CrmContactCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CrmContactCreateWithoutAppointmentsInput, CrmContactUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CrmContactCreateOrConnectWithoutAppointmentsInput
    connect?: CrmContactWhereUniqueInput
  }

  export type CrmServiceCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CrmServiceCreateWithoutAppointmentsInput, CrmServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CrmServiceCreateOrConnectWithoutAppointmentsInput
    connect?: CrmServiceWhereUniqueInput
  }

  export type CrmTenantUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<CrmTenantCreateWithoutAppointmentsInput, CrmTenantUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CrmTenantCreateOrConnectWithoutAppointmentsInput
    upsert?: CrmTenantUpsertWithoutAppointmentsInput
    connect?: CrmTenantWhereUniqueInput
    update?: XOR<XOR<CrmTenantUpdateToOneWithWhereWithoutAppointmentsInput, CrmTenantUpdateWithoutAppointmentsInput>, CrmTenantUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CrmContactUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<CrmContactCreateWithoutAppointmentsInput, CrmContactUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CrmContactCreateOrConnectWithoutAppointmentsInput
    upsert?: CrmContactUpsertWithoutAppointmentsInput
    connect?: CrmContactWhereUniqueInput
    update?: XOR<XOR<CrmContactUpdateToOneWithWhereWithoutAppointmentsInput, CrmContactUpdateWithoutAppointmentsInput>, CrmContactUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CrmServiceUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<CrmServiceCreateWithoutAppointmentsInput, CrmServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CrmServiceCreateOrConnectWithoutAppointmentsInput
    upsert?: CrmServiceUpsertWithoutAppointmentsInput
    connect?: CrmServiceWhereUniqueInput
    update?: XOR<XOR<CrmServiceUpdateToOneWithWhereWithoutAppointmentsInput, CrmServiceUpdateWithoutAppointmentsInput>, CrmServiceUncheckedUpdateWithoutAppointmentsInput>
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

  export type NestedEnumCrmMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CrmMemberRole | EnumCrmMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCrmMemberRoleFilter<$PrismaModel> | $Enums.CrmMemberRole
  }

  export type NestedEnumCrmMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CrmMemberRole | EnumCrmMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CrmMemberRole[] | ListEnumCrmMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCrmMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.CrmMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCrmMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumCrmMemberRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CrmTenantMemberCreateWithoutTenantInput = {
    id?: bigint | number
    userId: bigint | number
    role?: $Enums.CrmMemberRole
    createdAt?: Date | string
  }

  export type CrmTenantMemberUncheckedCreateWithoutTenantInput = {
    id?: bigint | number
    userId: bigint | number
    role?: $Enums.CrmMemberRole
    createdAt?: Date | string
  }

  export type CrmTenantMemberCreateOrConnectWithoutTenantInput = {
    where: CrmTenantMemberWhereUniqueInput
    create: XOR<CrmTenantMemberCreateWithoutTenantInput, CrmTenantMemberUncheckedCreateWithoutTenantInput>
  }

  export type CrmTenantMemberCreateManyTenantInputEnvelope = {
    data: CrmTenantMemberCreateManyTenantInput | CrmTenantMemberCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CrmContactCreateWithoutTenantInput = {
    id?: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Appointments?: CrmAppointmentCreateNestedManyWithoutContactInput
  }

  export type CrmContactUncheckedCreateWithoutTenantInput = {
    id?: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutContactInput
  }

  export type CrmContactCreateOrConnectWithoutTenantInput = {
    where: CrmContactWhereUniqueInput
    create: XOR<CrmContactCreateWithoutTenantInput, CrmContactUncheckedCreateWithoutTenantInput>
  }

  export type CrmContactCreateManyTenantInputEnvelope = {
    data: CrmContactCreateManyTenantInput | CrmContactCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CrmServiceCreateWithoutTenantInput = {
    id?: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Appointments?: CrmAppointmentCreateNestedManyWithoutServiceInput
  }

  export type CrmServiceUncheckedCreateWithoutTenantInput = {
    id?: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type CrmServiceCreateOrConnectWithoutTenantInput = {
    where: CrmServiceWhereUniqueInput
    create: XOR<CrmServiceCreateWithoutTenantInput, CrmServiceUncheckedCreateWithoutTenantInput>
  }

  export type CrmServiceCreateManyTenantInputEnvelope = {
    data: CrmServiceCreateManyTenantInput | CrmServiceCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CrmAppointmentCreateWithoutTenantInput = {
    id?: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Contact: CrmContactCreateNestedOneWithoutAppointmentsInput
    Service: CrmServiceCreateNestedOneWithoutAppointmentsInput
  }

  export type CrmAppointmentUncheckedCreateWithoutTenantInput = {
    id?: bigint | number
    contactId: bigint | number
    serviceId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentCreateOrConnectWithoutTenantInput = {
    where: CrmAppointmentWhereUniqueInput
    create: XOR<CrmAppointmentCreateWithoutTenantInput, CrmAppointmentUncheckedCreateWithoutTenantInput>
  }

  export type CrmAppointmentCreateManyTenantInputEnvelope = {
    data: CrmAppointmentCreateManyTenantInput | CrmAppointmentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CrmTenantMemberUpsertWithWhereUniqueWithoutTenantInput = {
    where: CrmTenantMemberWhereUniqueInput
    update: XOR<CrmTenantMemberUpdateWithoutTenantInput, CrmTenantMemberUncheckedUpdateWithoutTenantInput>
    create: XOR<CrmTenantMemberCreateWithoutTenantInput, CrmTenantMemberUncheckedCreateWithoutTenantInput>
  }

  export type CrmTenantMemberUpdateWithWhereUniqueWithoutTenantInput = {
    where: CrmTenantMemberWhereUniqueInput
    data: XOR<CrmTenantMemberUpdateWithoutTenantInput, CrmTenantMemberUncheckedUpdateWithoutTenantInput>
  }

  export type CrmTenantMemberUpdateManyWithWhereWithoutTenantInput = {
    where: CrmTenantMemberScalarWhereInput
    data: XOR<CrmTenantMemberUpdateManyMutationInput, CrmTenantMemberUncheckedUpdateManyWithoutTenantInput>
  }

  export type CrmTenantMemberScalarWhereInput = {
    AND?: CrmTenantMemberScalarWhereInput | CrmTenantMemberScalarWhereInput[]
    OR?: CrmTenantMemberScalarWhereInput[]
    NOT?: CrmTenantMemberScalarWhereInput | CrmTenantMemberScalarWhereInput[]
    id?: BigIntFilter<"CrmTenantMember"> | bigint | number
    tenantId?: BigIntFilter<"CrmTenantMember"> | bigint | number
    userId?: BigIntFilter<"CrmTenantMember"> | bigint | number
    role?: EnumCrmMemberRoleFilter<"CrmTenantMember"> | $Enums.CrmMemberRole
    createdAt?: DateTimeFilter<"CrmTenantMember"> | Date | string
  }

  export type CrmContactUpsertWithWhereUniqueWithoutTenantInput = {
    where: CrmContactWhereUniqueInput
    update: XOR<CrmContactUpdateWithoutTenantInput, CrmContactUncheckedUpdateWithoutTenantInput>
    create: XOR<CrmContactCreateWithoutTenantInput, CrmContactUncheckedCreateWithoutTenantInput>
  }

  export type CrmContactUpdateWithWhereUniqueWithoutTenantInput = {
    where: CrmContactWhereUniqueInput
    data: XOR<CrmContactUpdateWithoutTenantInput, CrmContactUncheckedUpdateWithoutTenantInput>
  }

  export type CrmContactUpdateManyWithWhereWithoutTenantInput = {
    where: CrmContactScalarWhereInput
    data: XOR<CrmContactUpdateManyMutationInput, CrmContactUncheckedUpdateManyWithoutTenantInput>
  }

  export type CrmContactScalarWhereInput = {
    AND?: CrmContactScalarWhereInput | CrmContactScalarWhereInput[]
    OR?: CrmContactScalarWhereInput[]
    NOT?: CrmContactScalarWhereInput | CrmContactScalarWhereInput[]
    id?: BigIntFilter<"CrmContact"> | bigint | number
    tenantId?: BigIntFilter<"CrmContact"> | bigint | number
    fullName?: StringFilter<"CrmContact"> | string
    phone?: StringNullableFilter<"CrmContact"> | string | null
    email?: StringNullableFilter<"CrmContact"> | string | null
    notes?: StringFilter<"CrmContact"> | string
    createdAt?: DateTimeFilter<"CrmContact"> | Date | string
    updatedAt?: DateTimeFilter<"CrmContact"> | Date | string
  }

  export type CrmServiceUpsertWithWhereUniqueWithoutTenantInput = {
    where: CrmServiceWhereUniqueInput
    update: XOR<CrmServiceUpdateWithoutTenantInput, CrmServiceUncheckedUpdateWithoutTenantInput>
    create: XOR<CrmServiceCreateWithoutTenantInput, CrmServiceUncheckedCreateWithoutTenantInput>
  }

  export type CrmServiceUpdateWithWhereUniqueWithoutTenantInput = {
    where: CrmServiceWhereUniqueInput
    data: XOR<CrmServiceUpdateWithoutTenantInput, CrmServiceUncheckedUpdateWithoutTenantInput>
  }

  export type CrmServiceUpdateManyWithWhereWithoutTenantInput = {
    where: CrmServiceScalarWhereInput
    data: XOR<CrmServiceUpdateManyMutationInput, CrmServiceUncheckedUpdateManyWithoutTenantInput>
  }

  export type CrmServiceScalarWhereInput = {
    AND?: CrmServiceScalarWhereInput | CrmServiceScalarWhereInput[]
    OR?: CrmServiceScalarWhereInput[]
    NOT?: CrmServiceScalarWhereInput | CrmServiceScalarWhereInput[]
    id?: BigIntFilter<"CrmService"> | bigint | number
    tenantId?: BigIntFilter<"CrmService"> | bigint | number
    name?: StringFilter<"CrmService"> | string
    durationMin?: IntFilter<"CrmService"> | number
    priceRub?: IntFilter<"CrmService"> | number
    active?: BoolFilter<"CrmService"> | boolean
    createdAt?: DateTimeFilter<"CrmService"> | Date | string
    updatedAt?: DateTimeFilter<"CrmService"> | Date | string
  }

  export type CrmAppointmentUpsertWithWhereUniqueWithoutTenantInput = {
    where: CrmAppointmentWhereUniqueInput
    update: XOR<CrmAppointmentUpdateWithoutTenantInput, CrmAppointmentUncheckedUpdateWithoutTenantInput>
    create: XOR<CrmAppointmentCreateWithoutTenantInput, CrmAppointmentUncheckedCreateWithoutTenantInput>
  }

  export type CrmAppointmentUpdateWithWhereUniqueWithoutTenantInput = {
    where: CrmAppointmentWhereUniqueInput
    data: XOR<CrmAppointmentUpdateWithoutTenantInput, CrmAppointmentUncheckedUpdateWithoutTenantInput>
  }

  export type CrmAppointmentUpdateManyWithWhereWithoutTenantInput = {
    where: CrmAppointmentScalarWhereInput
    data: XOR<CrmAppointmentUpdateManyMutationInput, CrmAppointmentUncheckedUpdateManyWithoutTenantInput>
  }

  export type CrmAppointmentScalarWhereInput = {
    AND?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
    OR?: CrmAppointmentScalarWhereInput[]
    NOT?: CrmAppointmentScalarWhereInput | CrmAppointmentScalarWhereInput[]
    id?: BigIntFilter<"CrmAppointment"> | bigint | number
    tenantId?: BigIntFilter<"CrmAppointment"> | bigint | number
    contactId?: BigIntFilter<"CrmAppointment"> | bigint | number
    serviceId?: BigIntFilter<"CrmAppointment"> | bigint | number
    startsAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    notes?: StringFilter<"CrmAppointment"> | string
    createdAt?: DateTimeFilter<"CrmAppointment"> | Date | string
    updatedAt?: DateTimeFilter<"CrmAppointment"> | Date | string
  }

  export type CrmTenantCreateWithoutMembersInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Contacts?: CrmContactCreateNestedManyWithoutTenantInput
    Services?: CrmServiceCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantUncheckedCreateWithoutMembersInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Contacts?: CrmContactUncheckedCreateNestedManyWithoutTenantInput
    Services?: CrmServiceUncheckedCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantCreateOrConnectWithoutMembersInput = {
    where: CrmTenantWhereUniqueInput
    create: XOR<CrmTenantCreateWithoutMembersInput, CrmTenantUncheckedCreateWithoutMembersInput>
  }

  export type CrmTenantUpsertWithoutMembersInput = {
    update: XOR<CrmTenantUpdateWithoutMembersInput, CrmTenantUncheckedUpdateWithoutMembersInput>
    create: XOR<CrmTenantCreateWithoutMembersInput, CrmTenantUncheckedCreateWithoutMembersInput>
    where?: CrmTenantWhereInput
  }

  export type CrmTenantUpdateToOneWithWhereWithoutMembersInput = {
    where?: CrmTenantWhereInput
    data: XOR<CrmTenantUpdateWithoutMembersInput, CrmTenantUncheckedUpdateWithoutMembersInput>
  }

  export type CrmTenantUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contacts?: CrmContactUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUpdateManyWithoutTenantNestedInput
  }

  export type CrmTenantUncheckedUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contacts?: CrmContactUncheckedUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUncheckedUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CrmTenantCreateWithoutContactsInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberCreateNestedManyWithoutTenantInput
    Services?: CrmServiceCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantUncheckedCreateWithoutContactsInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberUncheckedCreateNestedManyWithoutTenantInput
    Services?: CrmServiceUncheckedCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantCreateOrConnectWithoutContactsInput = {
    where: CrmTenantWhereUniqueInput
    create: XOR<CrmTenantCreateWithoutContactsInput, CrmTenantUncheckedCreateWithoutContactsInput>
  }

  export type CrmAppointmentCreateWithoutContactInput = {
    id?: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutAppointmentsInput
    Service: CrmServiceCreateNestedOneWithoutAppointmentsInput
  }

  export type CrmAppointmentUncheckedCreateWithoutContactInput = {
    id?: bigint | number
    tenantId: bigint | number
    serviceId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentCreateOrConnectWithoutContactInput = {
    where: CrmAppointmentWhereUniqueInput
    create: XOR<CrmAppointmentCreateWithoutContactInput, CrmAppointmentUncheckedCreateWithoutContactInput>
  }

  export type CrmAppointmentCreateManyContactInputEnvelope = {
    data: CrmAppointmentCreateManyContactInput | CrmAppointmentCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type CrmTenantUpsertWithoutContactsInput = {
    update: XOR<CrmTenantUpdateWithoutContactsInput, CrmTenantUncheckedUpdateWithoutContactsInput>
    create: XOR<CrmTenantCreateWithoutContactsInput, CrmTenantUncheckedCreateWithoutContactsInput>
    where?: CrmTenantWhereInput
  }

  export type CrmTenantUpdateToOneWithWhereWithoutContactsInput = {
    where?: CrmTenantWhereInput
    data: XOR<CrmTenantUpdateWithoutContactsInput, CrmTenantUncheckedUpdateWithoutContactsInput>
  }

  export type CrmTenantUpdateWithoutContactsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUpdateManyWithoutTenantNestedInput
  }

  export type CrmTenantUncheckedUpdateWithoutContactsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUncheckedUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUncheckedUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CrmAppointmentUpsertWithWhereUniqueWithoutContactInput = {
    where: CrmAppointmentWhereUniqueInput
    update: XOR<CrmAppointmentUpdateWithoutContactInput, CrmAppointmentUncheckedUpdateWithoutContactInput>
    create: XOR<CrmAppointmentCreateWithoutContactInput, CrmAppointmentUncheckedCreateWithoutContactInput>
  }

  export type CrmAppointmentUpdateWithWhereUniqueWithoutContactInput = {
    where: CrmAppointmentWhereUniqueInput
    data: XOR<CrmAppointmentUpdateWithoutContactInput, CrmAppointmentUncheckedUpdateWithoutContactInput>
  }

  export type CrmAppointmentUpdateManyWithWhereWithoutContactInput = {
    where: CrmAppointmentScalarWhereInput
    data: XOR<CrmAppointmentUpdateManyMutationInput, CrmAppointmentUncheckedUpdateManyWithoutContactInput>
  }

  export type CrmTenantCreateWithoutServicesInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberCreateNestedManyWithoutTenantInput
    Contacts?: CrmContactCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantUncheckedCreateWithoutServicesInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberUncheckedCreateNestedManyWithoutTenantInput
    Contacts?: CrmContactUncheckedCreateNestedManyWithoutTenantInput
    Appointments?: CrmAppointmentUncheckedCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantCreateOrConnectWithoutServicesInput = {
    where: CrmTenantWhereUniqueInput
    create: XOR<CrmTenantCreateWithoutServicesInput, CrmTenantUncheckedCreateWithoutServicesInput>
  }

  export type CrmAppointmentCreateWithoutServiceInput = {
    id?: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutAppointmentsInput
    Contact: CrmContactCreateNestedOneWithoutAppointmentsInput
  }

  export type CrmAppointmentUncheckedCreateWithoutServiceInput = {
    id?: bigint | number
    tenantId: bigint | number
    contactId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentCreateOrConnectWithoutServiceInput = {
    where: CrmAppointmentWhereUniqueInput
    create: XOR<CrmAppointmentCreateWithoutServiceInput, CrmAppointmentUncheckedCreateWithoutServiceInput>
  }

  export type CrmAppointmentCreateManyServiceInputEnvelope = {
    data: CrmAppointmentCreateManyServiceInput | CrmAppointmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type CrmTenantUpsertWithoutServicesInput = {
    update: XOR<CrmTenantUpdateWithoutServicesInput, CrmTenantUncheckedUpdateWithoutServicesInput>
    create: XOR<CrmTenantCreateWithoutServicesInput, CrmTenantUncheckedCreateWithoutServicesInput>
    where?: CrmTenantWhereInput
  }

  export type CrmTenantUpdateToOneWithWhereWithoutServicesInput = {
    where?: CrmTenantWhereInput
    data: XOR<CrmTenantUpdateWithoutServicesInput, CrmTenantUncheckedUpdateWithoutServicesInput>
  }

  export type CrmTenantUpdateWithoutServicesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUpdateManyWithoutTenantNestedInput
    Contacts?: CrmContactUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUpdateManyWithoutTenantNestedInput
  }

  export type CrmTenantUncheckedUpdateWithoutServicesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUncheckedUpdateManyWithoutTenantNestedInput
    Contacts?: CrmContactUncheckedUpdateManyWithoutTenantNestedInput
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CrmAppointmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: CrmAppointmentWhereUniqueInput
    update: XOR<CrmAppointmentUpdateWithoutServiceInput, CrmAppointmentUncheckedUpdateWithoutServiceInput>
    create: XOR<CrmAppointmentCreateWithoutServiceInput, CrmAppointmentUncheckedCreateWithoutServiceInput>
  }

  export type CrmAppointmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: CrmAppointmentWhereUniqueInput
    data: XOR<CrmAppointmentUpdateWithoutServiceInput, CrmAppointmentUncheckedUpdateWithoutServiceInput>
  }

  export type CrmAppointmentUpdateManyWithWhereWithoutServiceInput = {
    where: CrmAppointmentScalarWhereInput
    data: XOR<CrmAppointmentUpdateManyMutationInput, CrmAppointmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type CrmTenantCreateWithoutAppointmentsInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberCreateNestedManyWithoutTenantInput
    Contacts?: CrmContactCreateNestedManyWithoutTenantInput
    Services?: CrmServiceCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantUncheckedCreateWithoutAppointmentsInput = {
    id?: bigint | number
    slug: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: CrmTenantMemberUncheckedCreateNestedManyWithoutTenantInput
    Contacts?: CrmContactUncheckedCreateNestedManyWithoutTenantInput
    Services?: CrmServiceUncheckedCreateNestedManyWithoutTenantInput
  }

  export type CrmTenantCreateOrConnectWithoutAppointmentsInput = {
    where: CrmTenantWhereUniqueInput
    create: XOR<CrmTenantCreateWithoutAppointmentsInput, CrmTenantUncheckedCreateWithoutAppointmentsInput>
  }

  export type CrmContactCreateWithoutAppointmentsInput = {
    id?: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutContactsInput
  }

  export type CrmContactUncheckedCreateWithoutAppointmentsInput = {
    id?: bigint | number
    tenantId: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmContactCreateOrConnectWithoutAppointmentsInput = {
    where: CrmContactWhereUniqueInput
    create: XOR<CrmContactCreateWithoutAppointmentsInput, CrmContactUncheckedCreateWithoutAppointmentsInput>
  }

  export type CrmServiceCreateWithoutAppointmentsInput = {
    id?: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Tenant: CrmTenantCreateNestedOneWithoutServicesInput
  }

  export type CrmServiceUncheckedCreateWithoutAppointmentsInput = {
    id?: bigint | number
    tenantId: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmServiceCreateOrConnectWithoutAppointmentsInput = {
    where: CrmServiceWhereUniqueInput
    create: XOR<CrmServiceCreateWithoutAppointmentsInput, CrmServiceUncheckedCreateWithoutAppointmentsInput>
  }

  export type CrmTenantUpsertWithoutAppointmentsInput = {
    update: XOR<CrmTenantUpdateWithoutAppointmentsInput, CrmTenantUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CrmTenantCreateWithoutAppointmentsInput, CrmTenantUncheckedCreateWithoutAppointmentsInput>
    where?: CrmTenantWhereInput
  }

  export type CrmTenantUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CrmTenantWhereInput
    data: XOR<CrmTenantUpdateWithoutAppointmentsInput, CrmTenantUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CrmTenantUpdateWithoutAppointmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUpdateManyWithoutTenantNestedInput
    Contacts?: CrmContactUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUpdateManyWithoutTenantNestedInput
  }

  export type CrmTenantUncheckedUpdateWithoutAppointmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: CrmTenantMemberUncheckedUpdateManyWithoutTenantNestedInput
    Contacts?: CrmContactUncheckedUpdateManyWithoutTenantNestedInput
    Services?: CrmServiceUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CrmContactUpsertWithoutAppointmentsInput = {
    update: XOR<CrmContactUpdateWithoutAppointmentsInput, CrmContactUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CrmContactCreateWithoutAppointmentsInput, CrmContactUncheckedCreateWithoutAppointmentsInput>
    where?: CrmContactWhereInput
  }

  export type CrmContactUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CrmContactWhereInput
    data: XOR<CrmContactUpdateWithoutAppointmentsInput, CrmContactUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CrmContactUpdateWithoutAppointmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutContactsNestedInput
  }

  export type CrmContactUncheckedUpdateWithoutAppointmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmServiceUpsertWithoutAppointmentsInput = {
    update: XOR<CrmServiceUpdateWithoutAppointmentsInput, CrmServiceUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CrmServiceCreateWithoutAppointmentsInput, CrmServiceUncheckedCreateWithoutAppointmentsInput>
    where?: CrmServiceWhereInput
  }

  export type CrmServiceUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CrmServiceWhereInput
    data: XOR<CrmServiceUpdateWithoutAppointmentsInput, CrmServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CrmServiceUpdateWithoutAppointmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutServicesNestedInput
  }

  export type CrmServiceUncheckedUpdateWithoutAppointmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmTenantMemberCreateManyTenantInput = {
    id?: bigint | number
    userId: bigint | number
    role?: $Enums.CrmMemberRole
    createdAt?: Date | string
  }

  export type CrmContactCreateManyTenantInput = {
    id?: bigint | number
    fullName: string
    phone?: string | null
    email?: string | null
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmServiceCreateManyTenantInput = {
    id?: bigint | number
    name: string
    durationMin?: number
    priceRub?: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentCreateManyTenantInput = {
    id?: bigint | number
    contactId: bigint | number
    serviceId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmTenantMemberUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumCrmMemberRoleFieldUpdateOperationsInput | $Enums.CrmMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmTenantMemberUncheckedUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumCrmMemberRoleFieldUpdateOperationsInput | $Enums.CrmMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmTenantMemberUncheckedUpdateManyWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    role?: EnumCrmMemberRoleFieldUpdateOperationsInput | $Enums.CrmMemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmContactUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointments?: CrmAppointmentUpdateManyWithoutContactNestedInput
  }

  export type CrmContactUncheckedUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutContactNestedInput
  }

  export type CrmContactUncheckedUpdateManyWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmServiceUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointments?: CrmAppointmentUpdateManyWithoutServiceNestedInput
  }

  export type CrmServiceUncheckedUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Appointments?: CrmAppointmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type CrmServiceUncheckedUpdateManyWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    priceRub?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contact?: CrmContactUpdateOneRequiredWithoutAppointmentsNestedInput
    Service?: CrmServiceUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type CrmAppointmentUncheckedUpdateWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contactId?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentUncheckedUpdateManyWithoutTenantInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    contactId?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentCreateManyContactInput = {
    id?: bigint | number
    tenantId: bigint | number
    serviceId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentUpdateWithoutContactInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutAppointmentsNestedInput
    Service?: CrmServiceUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type CrmAppointmentUncheckedUpdateWithoutContactInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentUncheckedUpdateManyWithoutContactInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    serviceId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentCreateManyServiceInput = {
    id?: bigint | number
    tenantId: bigint | number
    contactId: bigint | number
    startsAt: Date | string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CrmAppointmentUpdateWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tenant?: CrmTenantUpdateOneRequiredWithoutAppointmentsNestedInput
    Contact?: CrmContactUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type CrmAppointmentUncheckedUpdateWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    contactId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CrmAppointmentUncheckedUpdateManyWithoutServiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tenantId?: BigIntFieldUpdateOperationsInput | bigint | number
    contactId?: BigIntFieldUpdateOperationsInput | bigint | number
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: StringFieldUpdateOperationsInput | string
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