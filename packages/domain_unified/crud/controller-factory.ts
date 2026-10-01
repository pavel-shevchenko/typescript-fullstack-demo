import {
  type Type,
  BadRequestException,
  ForbiddenException,
  Post,
  Request,
  UseGuards,
  applyDecorators,
} from '../nest-for-hono/decorators';
import { type Request as ExpressRequest } from 'express';
import {
  type AnyApiPrismaService,
  type DatabaseRecordId,
  type IApiRequest,
  DtoValidationError,
  isDatabaseRecordId,
  validateDtos as validateDtosUtil,
} from 'types_consts_utils';
import {
  type IDomainControllerFactoryOpts,
  type IValidateRelationConfig,
  type IDomainController,
} from '../types/controller-builder.interface';
import { type DomainControllerMixinBase } from '../domain-controller-base';
import {
  type DomainUnifiedRequest,
  IDomainUnifiedReqBody,
} from './../types/domain-unified-request';
import {
  type AllMicroservicesModels,
  methodsCodes,
} from '../types/domain-unified.types';
import { throwIfUserBlocked } from './../utils';
import { flushCacheAfterMutationIfConfigured } from '../utils';
import { PassportUserThrottlerGuard } from '../throttler/passport-user-throttler.guard';
import { sanitizePrismaGetManyParams } from '../include-graph';
import { type UserRole } from 'types_consts_utils';
import {
  assertPrismaDeleteManyWhere,
  assertPrismaMutationBatchSize,
} from '../request-guards';

const asDomainRequest = (
  req: IApiRequest | ExpressRequest,
): DomainUnifiedRequest => req as unknown as DomainUnifiedRequest;

function scheduleComfortSearchSyncIfConfigured(
  options: IDomainControllerFactoryOpts,
  mutationResult: unknown,
  prismaClient?: unknown,
): void {
  if (!options.comfortSearchSync) return;
  const records = flattenPrismaUpdateManyTransactionResult(mutationResult);
  void import('prisma_search')
    .then((module) =>
      module.scheduleComfortSearchSyncAfterMutation(
        options.prismaModel as string,
        records,
        prismaClient,
      ),
    )
    .catch((error) => {
      console.error('comfort search sync import failed', error);
    });
}

export const prismaGetManyControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.prismaGetMany)
    @applyDecorators(
      ...(options.prismaGetMany?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard),
    )
    async prismaGetMany(@Request() req: IApiRequest | ExpressRequest) {
      throwIfUserBlocked(req);
      const permScope = await options.prismaGetMany?.checkPermAndGetScope(
        asDomainRequest(req),
        this.prismaClient,
      );
      const body = req.body as IDomainUnifiedReqBody<AllMicroservicesModels>;
      const role = resolveUserRoleFromReq(req);
      const prismaGetManyParams = sanitizePrismaGetManyParams(
        (body.prismaGetManyParams ?? {}) as Record<string, unknown>,
        role,
        options.includePermissions,
      );

      const prismaModelClient = (this.prismaClient as unknown as Record<string, unknown>)[
        options.prismaModel
      ] as {
        findManyAndCount: (args: unknown) => Promise<
          import('types_consts_utils/server').IPrismaFindManyAndCountReturn<unknown>
        >;
      };

      return prismaModelClient.findManyAndCount({
        ...prismaGetManyParams,
        where: {
          AND: [permScope || {}, prismaGetManyParams?.where || {}],
        },
      });
    }
  }

  return DomainControllerLayer;
};

export const prismaCreateManyControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.prismaCreateMany)
    @applyDecorators(
      ...(options.prismaCreateMany?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard),
    )
    async prismaCreateMany(@Request() req: IApiRequest | ExpressRequest) {
      throwIfUserBlocked(req);
      const body = req.body as IDomainUnifiedReqBody<AllMicroservicesModels>;

      if (!Array.isArray(body.prismaCreateManyParams?.data)) {
        throw new BadRequestException('createMany требует массив data');
      }
      assertPrismaMutationBatchSize(
        body.prismaCreateManyParams.data.length,
        'создать',
      );

      if (options?.dtoClass && Array.isArray(body.prismaCreateManyParams?.data)) {
        const dtos = body.prismaCreateManyParams.data;
        try {
          validateDtosUtil(options.dtoClass, dtos);
        } catch (e) {
          if (e instanceof DtoValidationError) throw new BadRequestException(e.errors);
          throw e;
        }
      }
      await options.prismaCreateMany?.checkPermissions(
        asDomainRequest(req),
        this.prismaClient,
      );

      const sanitizeOwnerIdField = options.prismaCreateMany?.sanitizeOwnerIdField;
      if (sanitizeOwnerIdField && Array.isArray(body.prismaCreateManyParams?.data)) {
        const passportUser = getPassportUserFromReq(req);
        if (passportUser && passportUser.role !== 'admin') {
          (body.prismaCreateManyParams as { data: Record<string, unknown>[] }).data =
            body.prismaCreateManyParams.data.map(
            (item: Record<string, unknown>) => ({
              ...item,
              [sanitizeOwnerIdField]: passportUser.id,
            }),
            );
        }
      }

      const validateRelations = options.prismaCreateMany?.validateRelations;
      if (validateRelations?.length && Array.isArray(body.prismaCreateManyParams?.data)) {
        for (const relationConfig of validateRelations) {
          const ids = body.prismaCreateManyParams.data
            .map((d: Record<string, unknown>) => d[relationConfig.relationIdField])
            .filter((id: unknown) => id != null) as number[];
          await ensureRelationIdsInScope(this.prismaClient, req, relationConfig, ids);
        }
      }

      const prismaModelClient = (this.prismaClient as unknown as Record<string, unknown>)[
        options.prismaModel
      ];

      const result = await (
        prismaModelClient as { createManyAndReturn: (args: unknown) => unknown }
      ).createManyAndReturn(body.prismaCreateManyParams);

      flushCacheAfterMutationIfConfigured(this.prismaClient, options);
      scheduleComfortSearchSyncIfConfigured(options, result, this.prismaClient);

      return result;
    }
  }

  return DomainControllerLayer;
};

/**
 * Проверяет, что все переданные id есть в relationModel в рамках scope из config.resolveScope.
 * Передаёт config целиком для единообразной проверки привязок (несколько полей, опциональные привязки).
 */
async function ensureRelationIdsInScope(
  prismaClient: AnyApiPrismaService,
  req: IApiRequest | ExpressRequest,
  relationConfig: IValidateRelationConfig,
  ids: number[],
): Promise<void> {
  const uniqueIds = [...new Set(ids)].filter(
    (id) => id != null && Number.isInteger(id),
  );
  if (uniqueIds.length === 0) return;

  const scope = await relationConfig.resolveScope(
    asDomainRequest(req),
    prismaClient,
  );
  const relationClient = (prismaClient as unknown as Record<string, unknown>)[
    relationConfig.relationModel
  ] as {
    count: (args: { where: Record<string, unknown> }) => Promise<number>;
  };
  const where = { AND: [scope || {}, { id: { in: uniqueIds } }] };
  const count = await relationClient.count({ where });
  if (count !== uniqueIds.length) {
    // const found = await relationClient.findMany({
    //   where,
    //   select: { id: true },
    // });
    // const foundIds = new Set(found.map((r: { id: number }) => r.id));
    // const missing = uniqueIds.filter((id) => !foundIds.has(id)); // substitute ['Некоторые идентификаторы'] below with this missing variable
    throw new ForbiddenException(
      `Нет доступа к привязке: id по полю "${relationConfig.relationIdField}" ${['Некоторые идентификаторы'].join(', ')} не найдены или недоступны`,
    );
  }
}

export const prismaUpdateManyControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.prismaUpdateMany)
    @applyDecorators(
      ...(options.prismaUpdateMany?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard),
    )
    async prismaUpdateMany(@Request() req: IApiRequest | ExpressRequest) {
      throwIfUserBlocked(req);
      const body = req.body as IDomainUnifiedReqBody<AllMicroservicesModels>;

      if (!Array.isArray(body.prismaUpdateManyParamsInArr)) {
        throw new BadRequestException('updateMany требует массив записей');
      }
      assertPrismaMutationBatchSize(
        body.prismaUpdateManyParamsInArr.length,
        'обновить',
      );

      if (options?.dtoClass && Array.isArray(body.prismaUpdateManyParamsInArr)) {
        const dtos = body.prismaUpdateManyParamsInArr.map((dto) => dto.data);
        try {
          validateDtosUtil(options.dtoClass, dtos);
        } catch (e) {
          if (e instanceof DtoValidationError) throw new BadRequestException(e.errors);
          throw e;
        }
      }

      if (Array.isArray(body.prismaUpdateManyParamsInArr)) {
        const updateValidateRelations = options.prismaUpdateMany?.validateRelations;
        if (updateValidateRelations?.length) {
          for (const relationConfig of updateValidateRelations) {
            const ids = body.prismaUpdateManyParamsInArr
              .map((upd) => {
                const data = (upd as { data?: Record<string, unknown> } | null)?.data;
                return data?.[relationConfig.relationIdField];
              })
              .filter((id: unknown) => id != null) as number[];
            await ensureRelationIdsInScope(
              this.prismaClient,
              req,
              relationConfig,
              ids,
            );
          }
        }

        const fieldsToStrip = options.prismaUpdateMany?.immutableFields;

        const sanitizeOwnerIdField = options.prismaUpdateMany?.sanitizeOwnerIdField;
        const passportUser = getPassportUserFromReq(req);

        body.prismaUpdateManyParamsInArr = body.prismaUpdateManyParamsInArr.map(
          (updItem) => {
            let data = stripImmutableFields(
              updItem.data,
              fieldsToStrip,
            );
            if (sanitizeOwnerIdField && passportUser && passportUser.role !== 'admin') {
              data = { ...data, [sanitizeOwnerIdField]: passportUser.id };
            }
            return { ...updItem, data };
          },
        );
      }
      const permScope = await options.prismaUpdateMany?.checkPermAndGetScope(
        asDomainRequest(req),
        this.prismaClient,
      );

      const prismaModelClient = (this.prismaClient as unknown as Record<string, unknown>)[
        options.prismaModel
      ];
      if (!body.prismaUpdateManyParamsInArr?.length)
        throw new BadRequestException('No data to update');

      const updateManyAndReturn = (prismaModelClient as { updateManyAndReturn: (args: unknown) => unknown }).updateManyAndReturn;
      const promises = body.prismaUpdateManyParamsInArr.map((updateManyPrismaParams) =>
        updateManyAndReturn({
          where: {
            AND: [permScope || {}, { id: updateManyPrismaParams.data.id }],
          },
          data: updateManyPrismaParams.data,
        }),
      );
      const result = await (this.prismaClient as unknown as { $transaction: (ops: unknown[]) => Promise<unknown> }).$transaction(
        promises as unknown[],
      );

      flushCacheAfterMutationIfConfigured(this.prismaClient, options);
      const updated = flattenPrismaUpdateManyTransactionResult(result);
      scheduleComfortSearchSyncIfConfigured(options, updated, this.prismaClient);

      return updated;
    }
  }

  return DomainControllerLayer;
};

/**
 * `prismaUpdateMany` выполняется как `$transaction` по массиву `updateManyAndReturn`,
 * из-за чего Prisma возвращает `T[][]`. Для HTTP-клиента нормализуем в плоский `T[]`.
 */
function flattenPrismaUpdateManyTransactionResult(result: unknown): unknown[] {
  if (!Array.isArray(result)) return [];
  if (result.length === 0) return [];
  const first = (result as unknown[])[0];
  if (Array.isArray(first)) {
    return (result as unknown[][]).flat();
  }
  return result as unknown[];
}

function stripImmutableFields<T extends Record<string, unknown>>(
  data: T,
  immutableFields: readonly string[] | undefined,
): T {
  if (!immutableFields?.length) return data;
  const out = { ...data };
  for (const key of immutableFields) {
    delete out[key];
  }
  return out as T;
}

function getPassportUserFromReq(
  req: IApiRequest | ExpressRequest,
): { id: DatabaseRecordId; role: string } | null {
  const user = (req as IApiRequest).user?.data;
  if (!user || !isDatabaseRecordId(user.id)) return null;
  return { id: user.id, role: String(user.role ?? 'customer') };
}

function resolveUserRoleFromReq(
  req: IApiRequest | ExpressRequest,
): UserRole | null {
  const role = getPassportUserFromReq(req)?.role;
  if (role === 'admin' || role === 'customer') {
    return role;
  }
  return null;
}

export const prismaDeleteManyControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.prismaDeleteMany)
    @applyDecorators(
      ...(options.prismaDeleteMany?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard),
    )
    async prismaDeleteMany(@Request() req: IApiRequest | ExpressRequest) {
      throwIfUserBlocked(req);
      const body = req.body as IDomainUnifiedReqBody<AllMicroservicesModels>;

      assertPrismaDeleteManyWhere(body.prismaDeleteManyParams?.where);

      const permScope = await options.prismaDeleteMany?.checkPermAndGetScope(
        asDomainRequest(req),
        this.prismaClient,
      );

      const prismaModelClient = (this.prismaClient as unknown as Record<string, unknown>)[
        options.prismaModel
      ];

      const result = await (
        prismaModelClient as { deleteMany: (args: unknown) => unknown }
      ).deleteMany({
        where: {
          AND: [permScope || {}, body.prismaDeleteManyParams?.where || {}],
        },
      });

      flushCacheAfterMutationIfConfigured(this.prismaClient, options);

      return result;
    }
  }

  return DomainControllerLayer;
};

