import { BadRequestException } from './nest-for-hono/decorators';

/** Если клиент не передал `take`, Prisma иначе вернёт все строки. */
export const DOMAIN_PRISMA_DEFAULT_TAKE = 100;

/**
 * Потолок `take` (включая вложенный `include`/`select`).
 * Совпадает с максимумом легитимных HTTP-вызовов (twin / workspace lists = 5000).
 */
export const DOMAIN_PRISMA_MAX_TAKE = 5000;

/** Потолок createMany / updateMany / deleteMany `id.in`. */
export const DOMAIN_PRISMA_MAX_MUTATION_BATCH = 500;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const parsePositiveIntEnv = (name: string, fallback: number): number => {
  const raw = Number.parseInt(String(process.env[name] ?? ''), 10);
  return Number.isFinite(raw) && raw > 0 ? raw : fallback;
};

export const resolveDomainPrismaDefaultTake = (): number =>
  parsePositiveIntEnv('DOMAIN_PRISMA_DEFAULT_TAKE', DOMAIN_PRISMA_DEFAULT_TAKE);

export const resolveDomainPrismaMaxTake = (): number =>
  parsePositiveIntEnv('DOMAIN_PRISMA_MAX_TAKE', DOMAIN_PRISMA_MAX_TAKE);

export const resolveDomainPrismaMaxMutationBatch = (): number =>
  parsePositiveIntEnv(
    'DOMAIN_PRISMA_MAX_MUTATION_BATCH',
    DOMAIN_PRISMA_MAX_MUTATION_BATCH,
  );

export const clampPrismaTake = (value: unknown, maxTake: number): number => {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric)) {
    return resolveDomainPrismaDefaultTake();
  }
  return Math.min(Math.max(Math.trunc(numeric), 0), maxTake);
};

const clampTakesInTree = (value: unknown, maxTake: number): unknown => {
  if (Array.isArray(value)) {
    return value.map((item) => clampTakesInTree(item, maxTake));
  }
  if (!isPlainObject(value)) {
    return value;
  }

  const next: Record<string, unknown> = {};
  for (const [key, nested] of Object.entries(value)) {
    if (key === 'take') {
      next.take = clampPrismaTake(nested, maxTake);
      continue;
    }
    next[key] = clampTakesInTree(nested, maxTake);
  }
  return next;
};

export const applyPrismaGetManyTakeLimits = <
  TParams extends Record<string, unknown>,
>(
  params: TParams,
): TParams => {
  const maxTake = resolveDomainPrismaMaxTake();
  const defaultTake = resolveDomainPrismaDefaultTake();
  const withNested = clampTakesInTree(params, maxTake) as TParams;
  const take =
    withNested.take == null
      ? Math.min(defaultTake, maxTake)
      : clampPrismaTake(withNested.take, maxTake);

  return {
    ...withNested,
    take,
  };
};

export const assertPrismaMutationBatchSize = (
  count: number,
  action: 'создать' | 'обновить' | 'удалить',
): void => {
  const max = resolveDomainPrismaMaxMutationBatch();
  if (count > max) {
    throw new BadRequestException(
      `Нельзя ${action} более ${max} записей за один запрос`,
    );
  }
};

const isNonEmptyWhere = (where: unknown): boolean => {
  if (!isPlainObject(where)) {
    return false;
  }
  return Object.keys(where).length > 0;
};

export const assertPrismaDeleteManyWhere = (where: unknown): void => {
  if (!isNonEmptyWhere(where)) {
    throw new BadRequestException(
      'deleteMany требует ненустой where — пустой фильтр запрещён',
    );
  }

  if (!isPlainObject(where)) {
    return;
  }

  const idFilter = where.id;
  if (isPlainObject(idFilter) && Array.isArray(idFilter.in)) {
    assertPrismaMutationBatchSize(idFilter.in.length, 'удалить');
  }
};
