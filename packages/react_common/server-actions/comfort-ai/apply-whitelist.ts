import { apiCmsModels, apiCrmModels, apiMicroservices } from 'types_consts_utils';

export type AllowedOperation =
  | 'prisma-get-many'
  | 'prisma-create-many'
  | 'prisma-update-many'
  | 'prisma-delete-many';

export type WhitelistedPayload = {
  model: string;
  operation: AllowedOperation;
  data?: unknown;
  prismaGetManyParams?: unknown;
  prismaCreateManyParams?: unknown;
  prismaUpdateManyParamsInArr?: unknown;
  prismaDeleteManyParams?: unknown;
};

const CMS_MODELS = new Set(Object.values(apiCmsModels));
const CRM_MODELS = new Set(Object.values(apiCrmModels));

const ALLOWED_OPS = new Set<AllowedOperation>([
  'prisma-get-many',
  'prisma-create-many',
  'prisma-update-many',
  'prisma-delete-many',
]);

export function assertWhitelistedPayload(payload: unknown): WhitelistedPayload {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid recommendation payload');
  }
  const p = payload as Record<string, unknown>;
  const model = String(p.model ?? '');
  const operation = String(p.operation ?? '') as AllowedOperation;
  if (!ALLOWED_OPS.has(operation)) {
    throw new Error(`Operation not allowed: ${operation}`);
  }
  if (!CMS_MODELS.has(model as never) && !CRM_MODELS.has(model as never)) {
    throw new Error(`Model not in whitelist: ${model}`);
  }
  return {
    model,
    operation,
    data: p.data,
    prismaGetManyParams: p.prismaGetManyParams,
    prismaCreateManyParams: p.prismaCreateManyParams ?? (p.data ? { data: p.data } : undefined),
    prismaUpdateManyParamsInArr: p.prismaUpdateManyParamsInArr ?? p.data,
    prismaDeleteManyParams: p.prismaDeleteManyParams,
  };
}

export function microserviceForModel(model: string) {
  if (CMS_MODELS.has(model as never)) return apiMicroservices.apiCms;
  if (CRM_MODELS.has(model as never)) return apiMicroservices.apiCrm;
  throw new Error(`Unknown model: ${model}`);
}

export function domainPath(model: string, operation: AllowedOperation) {
  return `public/domain/${model}/${operation}`;
}

const CRM_MODELS_REQUIRING_TENANT = new Set([
  'crmContact',
  'crmService',
  'crmAppointment',
  'crmTenantMember',
]);

/**
 * Heuristic AI drafts often omit tenantId ("from membership"). Resolve the first
 * visible CRM tenant for this JWT and inject it into createMany rows.
 */
export async function enrichCreateManyWithTenantId(
  payload: WhitelistedPayload,
  resolveDefaultTenantId: () => Promise<string>,
): Promise<WhitelistedPayload> {
  if (
    payload.operation !== 'prisma-create-many' ||
    !CRM_MODELS_REQUIRING_TENANT.has(payload.model)
  ) {
    return payload;
  }

  const createParams = (payload.prismaCreateManyParams ?? {
    data: payload.data,
  }) as { data?: Array<Record<string, unknown>> };
  const rows = createParams.data;
  if (!Array.isArray(rows) || rows.length === 0) return payload;

  const missing = rows.some(
    (row) => row.tenantId == null || row.tenantId === '',
  );
  if (!missing) return payload;

  const tenantId = await resolveDefaultTenantId();
  const data = rows.map((row) => ({
    ...row,
    tenantId: row.tenantId == null || row.tenantId === '' ? tenantId : row.tenantId,
  }));

  return {
    ...payload,
    data,
    prismaCreateManyParams: { ...createParams, data },
  };
}
