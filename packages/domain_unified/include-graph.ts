import {
  DEFAULT_INCLUDE_PERMISSIONS,
  type IncludePermissionsByRole,
  type IncludePermissionsTree,
  restrictIncludeByRole,
  restrictSelectByRole,
  type UserRole,
  walkIncludePermissionsTree,
} from 'types_consts_utils';
import type { ApiMicroservices } from 'types_consts_utils';
import { applyPrismaGetManyTakeLimits } from './request-guards';

type IncludePermissions = IncludePermissionsByRole<Record<string, unknown>>;

type RuntimeField = {
  name?: string;
  kind?: string;
  type?: string;
};

type RuntimeModel = {
  fields?: RuntimeField[];
};

type RuntimeDataModel = {
  models?: Record<string, RuntimeModel>;
};

/** modelPascal → relationName → targetModelPascal */
type RelationIndex = Map<string, Map<string, string>>;

type IncludeGraphEntry = {
  microService: string;
  prismaModel: string;
  includePermissions: IncludePermissions;
};

const includeGraphRegistry: IncludeGraphEntry[] = [];

const camelToPascal = (value: string): string =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : value;

const pascalToCamel = (value: string): string =>
  value ? value.charAt(0).toLowerCase() + value.slice(1) : value;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isRuntimeDataModel = (value: unknown): value is RuntimeDataModel => {
  if (!isPlainObject(value) || !isPlainObject(value.models)) {
    return false;
  }
  const firstModel = Object.values(value.models)[0];
  return (
    !firstModel ||
    (isPlainObject(firstModel) && Array.isArray(firstModel.fields))
  );
};

const indexRuntimeDataModel = (dataModel: RuntimeDataModel): RelationIndex => {
  const index: RelationIndex = new Map();
  for (const [modelName, model] of Object.entries(dataModel.models ?? {})) {
    const relations = new Map<string, string>();
    for (const field of model.fields ?? []) {
      if (field.kind !== 'object' || !field.name || !field.type) {
        continue;
      }
      relations.set(field.name, field.type);
    }
    index.set(modelName, relations);
  }
  return index;
};

const DMMF_CANDIDATE_KEYS = [
  '_runtimeDataModel',
  'runtimeDataModel',
  '_engineConfig',
  '_dmmf',
  'datamodel',
  '_originalClient',
  '_client',
  '_parent',
] as const;

const enqueueIfPresent = (
  record: object,
  key: string,
  queue: unknown[],
): void => {
  if (key in record) {
    queue.push((record as Record<string, unknown>)[key]);
  }
};

/**
 * DMMF после `$extends` часто лежит неenumerable на прототипе / `_originalClient`.
 * `in` находит inherited + non-enumerable; `getOwnPropertyNames` — own non-enumerable.
 */
const extractRuntimeDataModel = (prisma: unknown): RuntimeDataModel | null => {
  const seen = new Set<unknown>();
  const queue: unknown[] = [prisma];

  while (queue.length) {
    const current = queue.shift();
    if (!current || typeof current !== 'object' || seen.has(current)) {
      continue;
    }
    seen.add(current);
    if (seen.size > 120) {
      break;
    }

    const record = current as Record<string, unknown>;
    if (isRuntimeDataModel(record)) {
      return record;
    }

    if (isRuntimeDataModel(record._runtimeDataModel)) {
      return record._runtimeDataModel as RuntimeDataModel;
    }
    if (isRuntimeDataModel(record.runtimeDataModel)) {
      return record.runtimeDataModel as RuntimeDataModel;
    }

    for (const key of DMMF_CANDIDATE_KEYS) {
      enqueueIfPresent(record, key, queue);
    }

    for (const key of Object.getOwnPropertyNames(record)) {
      if (
        key.includes('runtimeDataModel') ||
        key.includes('engineConfig') ||
        key.includes('dmmf') ||
        key === '_originalClient'
      ) {
        queue.push(record[key]);
      }
    }

    const proto = Object.getPrototypeOf(current);
    if (proto && proto !== Object.prototype && proto !== Function.prototype) {
      queue.push(proto);
    }

    const ctor = (current as { constructor?: unknown }).constructor;
    if (typeof ctor === 'function' && ctor !== Object && ctor !== Function) {
      queue.push(ctor);
    }
  }

  return null;
};

let cachedRelationIndex: RelationIndex | null = null;
let cachedRelationIndexFrom: unknown = null;

const getRelationIndex = (prisma: unknown): RelationIndex | null => {
  if (!prisma) {
    return null;
  }
  if (cachedRelationIndex && cachedRelationIndexFrom === prisma) {
    return cachedRelationIndex;
  }
  const dataModel = extractRuntimeDataModel(prisma);
  if (!dataModel) {
    return null;
  }
  cachedRelationIndex = indexRuntimeDataModel(dataModel);
  cachedRelationIndexFrom = prisma;
  return cachedRelationIndex;
};

const resolveRelationTargetPascal = (
  modelPascal: string,
  relationName: string,
  relationIndex: RelationIndex | null,
): string | null => {
  const target = relationIndex?.get(modelPascal)?.get(relationName);
  if (target) {
    return target;
  }
  if (relationIndex?.has(relationName)) {
    return relationName;
  }
  // Без DMMF нельзя мапить алиасы (`Content` → `PartialChapterContent`).
  // Угадывать `relationName` как модель нельзя: обратный граф промахнётся
  // мимо `partialChapterContent` и не инвалидирует родителя.
  return null;
};

const collectModelsFromTree = (
  modelPascal: string,
  tree: IncludePermissionsTree<Record<string, unknown>> | undefined,
  relationIndex: RelationIndex | null,
  out: Set<string>,
): void => {
  walkIncludePermissionsTree(tree, (relationKey, nested) => {
    const targetPascal = resolveRelationTargetPascal(
      modelPascal,
      relationKey,
      relationIndex,
    );
    if (!targetPascal) {
      return;
    }
    out.add(pascalToCamel(targetPascal));
    // `Relation: true` — один hop для кэша: вложенные модели под `true`
    // разрешены на чтении, но в реестр инвалидации не входят.
    if (nested !== true) {
      collectModelsFromTree(targetPascal, nested, relationIndex, out);
    }
  });
};

const boundedTreesOf = (
  permissions: IncludePermissions,
): Array<IncludePermissionsTree<Record<string, unknown>>> => {
  const trees: Array<IncludePermissionsTree<Record<string, unknown>>> = [];
  if (permissions.customer) {
    trees.push(permissions.customer);
  }
  if (permissions.admin && permissions.admin !== true) {
    trees.push(permissions.admin);
  }
  return trees;
};

export const resolveIncludePermissions = (
  includePermissions: IncludePermissions | undefined,
): IncludePermissions => {
  if (!includePermissions) {
    return DEFAULT_INCLUDE_PERMISSIONS as IncludePermissions;
  }
  return {
    admin: includePermissions.admin ?? true,
    customer: includePermissions.customer ?? {},
  };
};

export const assertIncludePermissionsConfig = (
  prismaModel: string,
  includePermissions: IncludePermissions | undefined,
): void => {
  if (
    (includePermissions as { customer?: unknown } | undefined)?.customer === true
  ) {
    throw new Error(
      `includePermissions.customer: true запрещён (модель ${prismaModel}): это полный join-граф, как у admin`,
    );
  }
};

export const registerDomainIncludeGraph = (entry: {
  microService: ApiMicroservices | string;
  prismaModel: string;
  includePermissions?: IncludePermissions;
}): void => {
  assertIncludePermissionsConfig(entry.prismaModel, entry.includePermissions);
  const key = `${entry.microService}:${entry.prismaModel}`;
  const existingIndex = includeGraphRegistry.findIndex(
    (item) => `${item.microService}:${item.prismaModel}` === key,
  );
  const next: IncludeGraphEntry = {
    microService: String(entry.microService),
    prismaModel: entry.prismaModel,
    includePermissions: resolveIncludePermissions(entry.includePermissions),
  };
  if (existingIndex >= 0) {
    includeGraphRegistry[existingIndex] = next;
    return;
  }
  includeGraphRegistry.push(next);
};

export const collectModelsFromIncludePermissions = (
  prismaModelCamel: string,
  includePermissions: IncludePermissions,
  prisma: unknown,
): Set<string> => {
  const relationIndex = getRelationIndex(prisma);
  const modelPascal = camelToPascal(prismaModelCamel);
  const out = new Set<string>();
  for (const tree of boundedTreesOf(includePermissions)) {
    collectModelsFromTree(modelPascal, tree, relationIndex, out);
  }
  return out;
};

/**
 * Обратный join-граф: контроллеры **того же микросервиса**, в чьём
 * **ограниченном** дереве `includePermissions` есть `prismaModel`.
 *
 * Не инвертирует `admin: true` (это весь схема-граф). Учитываются:
 * - `customer: { ... }` (всегда, если это объект);
 * - `admin: { ... }` только если admin задан деревом, а не `true`.
 *
 * Лист `Relation: true` даёт только целевую модель связи, без вложенных.
 */
export const collectModelsWhoseIncludeGraphContains = (
  microService: string,
  prismaModelCamel: string,
  prisma: unknown,
): Set<string> => {
  const out = new Set<string>();
  for (const entry of includeGraphRegistry) {
    if (entry.microService !== microService) {
      continue;
    }
    if (entry.prismaModel === prismaModelCamel) {
      continue;
    }
    const related = collectModelsFromIncludePermissions(
      entry.prismaModel,
      entry.includePermissions,
      prisma,
    );
    if (related.has(prismaModelCamel)) {
      out.add(entry.prismaModel);
    }
  }
  return out;
};

export const collectJoinGraphModelsToInvalidate = (args: {
  microService: string;
  prismaModel: string;
  includePermissions?: IncludePermissions;
  prisma: unknown;
}): string[] => {
  const permissions = resolveIncludePermissions(args.includePermissions);
  const out = new Set<string>();
  out.add(args.prismaModel);

  for (const model of collectModelsFromIncludePermissions(
    args.prismaModel,
    permissions,
    args.prisma,
  )) {
    out.add(model);
  }

  for (const model of collectModelsWhoseIncludeGraphContains(
    args.microService,
    args.prismaModel,
    args.prisma,
  )) {
    out.add(model);
  }

  return [...out];
};

export const sanitizePrismaGetManyInclude = <
  TParams extends Record<string, unknown>,
>(
  params: TParams | undefined,
  role: UserRole | null | undefined,
  includePermissions?: IncludePermissions,
): TParams | undefined =>
  sanitizePrismaGetManyParams(params, role, includePermissions);

export const sanitizePrismaGetManyParams = <
  TParams extends Record<string, unknown>,
>(
  params: TParams | undefined,
  role: UserRole | null | undefined,
  includePermissions?: IncludePermissions,
): TParams => {
  const permissions = resolveIncludePermissions(includePermissions);
  const source = applyPrismaGetManyTakeLimits(
    (params ?? {}) as Record<string, unknown>,
  );

  const next: Record<string, unknown> = { ...source };

  if (isPlainObject(source.include)) {
    const sanitizedInclude = restrictIncludeByRole({
      include: source.include,
      role,
      permissionsByRole: permissions,
    });
    if (sanitizedInclude) {
      next.include = sanitizedInclude;
    } else {
      delete next.include;
    }
  }

  if (isPlainObject(source.select)) {
    const sanitizedSelect = restrictSelectByRole({
      select: source.select,
      role,
      permissionsByRole: permissions,
    });
    if (sanitizedSelect) {
      next.select = sanitizedSelect;
    } else {
      delete next.select;
    }
  }

  return next as TParams;
};
