'use server';

import { apiMicroservices } from 'types_consts_utils';
import { domainUnifiedPost } from 'types_consts_utils/server';
import { readAuthTokenFromCookie } from '../../server/auth-cookie';
import {
  assertTrustedServerActionOrigin,
  serverActionCorrelationId,
} from '../../server/request-security';

const CMS_MODELS = new Set([
  'cmsPage',
  'cmsArticle',
  'cmsPromoBlock',
]);
const CRM_MODELS = new Set([
  'crmTenant',
  'crmContact',
  'crmService',
  'crmAppointment',
]);

const NUMERIC_KEYS = new Set([
  'id',
  'tenantId',
  'contactId',
  'serviceId',
  'sortOrder',
  'durationMin',
  'priceRub',
]);

export type AdminEditableModel =
  | 'cmsPage'
  | 'cmsArticle'
  | 'cmsPromoBlock'
  | 'crmTenant'
  | 'crmContact'
  | 'crmService'
  | 'crmAppointment';

function serviceForModel(model: AdminEditableModel) {
  if (CMS_MODELS.has(model)) return apiMicroservices.apiCms;
  if (CRM_MODELS.has(model)) return apiMicroservices.apiCrm;
  throw new Error(`Model is not editable: ${model}`);
}

function coerceValue(key: string, value: unknown): unknown {
  if (value === '' || value === undefined) return undefined;
  if (NUMERIC_KEYS.has(key)) {
    const n = Number(value);
    if (!Number.isFinite(n)) throw new Error(`Invalid number for ${key}`);
    return n;
  }
  if (typeof value === 'boolean') return value;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}

function sanitizePayload(data: Record<string, unknown>): Record<string, unknown> {
  const skip = new Set(['createdAt', 'updatedAt', 'heroFiles']);
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (skip.has(key)) continue;
    const coerced = coerceValue(key, value);
    if (coerced !== undefined) out[key] = coerced;
  }
  return out;
}

async function credentials() {
  await assertTrustedServerActionOrigin();
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  return { token, correlationId: await serverActionCorrelationId() };
}

export async function adminCreateEntityAction(
  model: AdminEditableModel,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const { token, correlationId } = await credentials();
  const payload = sanitizePayload(data);
  const created = await domainUnifiedPost<Record<string, unknown>[]>(
    serviceForModel(model),
    `public/domain/${model}/prisma-create-many`,
    { prismaCreateManyParams: { data: [payload] } },
    token,
    correlationId,
  );
  return created[0] ?? {};
}

export async function adminUpdateEntityAction(
  model: AdminEditableModel,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const { token, correlationId } = await credentials();
  const payload = sanitizePayload(data);
  if (payload.id == null) throw new Error('Update requires id');
  const updated = await domainUnifiedPost<Record<string, unknown>[]>(
    serviceForModel(model),
    `public/domain/${model}/prisma-update-many`,
    { prismaUpdateManyParamsInArr: [{ data: payload }] },
    token,
    correlationId,
  );
  return updated[0] ?? payload;
}
