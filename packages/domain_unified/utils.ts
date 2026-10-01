import { ForbiddenException, UnauthorizedException } from './nest-for-hono/http-errors';
import type { Request as ExpressRequest } from 'express';
import { type IApiRequest,
  apiMicroservices,
  apiCmsModels,
  apiCrmModels,
  apiSearchModels,
} from 'types_consts_utils';
import { unlinkPatterns } from 'prisma-extension-redis';
import type { Redis } from 'iovalkey';
import type { IDomainControllerFactoryOpts } from './types/controller-builder.interface';
import { collectJoinGraphModelsToInvalidate } from './include-graph';

/** Prisma scope that matches no rows */
export const GUEST_EMPTY_READ_SCOPE = { id: { in: [] as number[] } };

/** Проверяет наличие авторизованного пользователя в запросе; иначе выбрасывает ForbiddenException. */
export const ensurePassportUser = (req: IApiRequest) => {
  const passportUser = req.user;

  if (!passportUser?.data || !passportUser?.data?.id || !passportUser?.data?.role) {
    throw new ForbiddenException('Требуется авторизация');
  }

  return passportUser;
};

/** Возвращает passportUser из запроса, если он есть, иначе null. */
export function getPassportUserFromRequest(req: IApiRequest) {
  const passportUser = req.user;
  if (!passportUser?.data?.id || !passportUser?.data?.role) {
    return null;
  }
  return passportUser;
}

/**
 * Если в запросе есть пользователь с user.data.isBlocked === true,
 * выбрасывает UnauthorizedException (401), чтобы клиент мог перенаправить на логин.
 */
export function throwIfUserBlocked(req: IApiRequest | ExpressRequest): void {
  const user = (req as IApiRequest).user?.data;
  if (user && (user as { isBlocked?: boolean }).isBlocked) {
    throw new UnauthorizedException();
  }
}

// ======= Кэш PRISMA =======

type PrismaClientWithRedisCache = {
  redis?: Redis;
  getKeyPattern?: (args: {
    model?: string;
    params: Record<string, string>[];
    operation?: string;
  }) => string;
};

const microserviceModelCamelToPascal = new Map<string, string>();
for (const [microservProp, microservCode] of Object.entries(apiMicroservices)) {
  switch (microservCode) {
    case apiMicroservices.apiCms:
      for (const [pascal, camel] of Object.entries(apiCmsModels)) {
        microserviceModelCamelToPascal.set(camel, pascal);
      }
      break;
    case apiMicroservices.apiCrm:
      for (const [pascal, camel] of Object.entries(apiCrmModels)) {
        microserviceModelCamelToPascal.set(camel, pascal);
      }
      break;
    case apiMicroservices.apiSearch:
      for (const [pascal, camel] of Object.entries(apiSearchModels)) {
        microserviceModelCamelToPascal.set(camel, pascal);
      }
      break;
    default:
      const exhaustiveCheck: never = microservCode;
      throw new Error(`Unhandled microservice: ${exhaustiveCheck}`);
  }
}

function toPrismaModelName(modelCamel: string): string {
  return microserviceModelCamelToPascal.get(modelCamel) ?? modelCamel;
}

/**
 * Сбрасывает auto-cache prisma-extension-redis по грубому паттерну «вся модель».
 * Без Redis-расширения (или без REDIS_URL) — no-op.
 */
export async function invalidatePrismaAutoCacheForModels(
  prisma: unknown,
  models: readonly string[],
): Promise<void> {
  const p = prisma as PrismaClientWithRedisCache;
  if (!p?.redis || !p?.getKeyPattern || models.length === 0) return;

  try {
    const patterns = models.map((model) =>
      p.getKeyPattern!({
        model: toPrismaModelName(model),
        params: [{ glob: '*' }],
      }),
    );

    await Promise.all(
      unlinkPatterns({
        redis: p.redis,
        patterns,
      }),
    );
  } catch {
    // Не ломаем ответ мутации, если Redis/SCAN недоступны
  }
}

export function collectPrismaAutoCacheModelsToInvalidate(
  options: IDomainControllerFactoryOpts,
  prisma?: unknown,
): readonly string[] | null {
  const cfg = options.prismaAutoCacheInvalidation;
  if (!cfg?.enabled) return null;

  return collectJoinGraphModelsToInvalidate({
    microService: String(options.microService),
    prismaModel: options.prismaModel as string,
    includePermissions: options.includePermissions,
    prisma,
  });
}

export async function flushCacheAfterMutationIfConfigured(
  prisma: unknown,
  options: IDomainControllerFactoryOpts,
): Promise<void> {
  const models = collectPrismaAutoCacheModelsToInvalidate(options, prisma);
  if (!models?.length) return;
  await invalidatePrismaAutoCacheForModels(prisma, models);
}