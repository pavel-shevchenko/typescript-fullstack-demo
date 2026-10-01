'use server';

import { getApiBaseUrl } from 'types_consts_utils/server';
import { apiMicroservices } from 'types_consts_utils';
import { readAuthTokenFromCookie } from '../../server/auth-cookie';
import { domainUnifiedPost } from 'types_consts_utils/server';
import { serverActionCorrelationId } from '../../server/request-security';

export async function fetchPublicLandingAction() {
  const correlationId = await serverActionCorrelationId();
  try {
    const resp = await fetch(`${getApiBaseUrl(apiMicroservices.apiCms)}public/cms-read/landing`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-correlation-id': correlationId },
      body: '{}',
      cache: 'no-store',
    });
    if (!resp.ok) {
      return { pages: [], promos: [], articles: [] };
    }
    return resp.json() as Promise<{
      pages: Array<Record<string, unknown>>;
      promos: Array<Record<string, unknown>>;
      articles: Array<Record<string, unknown>>;
    }>;
  } catch {
    return { pages: [], promos: [], articles: [] };
  }
}

export async function fetchAdminCmsSnapshotAction() {
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  const models = ['cmsPage', 'cmsArticle', 'cmsPromoBlock', 'cmsAiPromptSlot', 'comfortAiRecommendation'] as const;
  const out: Record<string, unknown[]> = {};
  for (const model of models) {
    const res = await domainUnifiedPost<{ items: unknown[] }>(
      apiMicroservices.apiCms,
      `public/domain/${model}/prisma-get-many`,
      { prismaGetManyParams: { take: 20 } },
      token,
    );
    out[model] = res.items;
  }
  return out;
}

export async function fetchAdminCrmSnapshotAction() {
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  const models = ['crmTenant', 'crmContact', 'crmService', 'crmAppointment'] as const;
  const out: Record<string, unknown[]> = {};
  for (const model of models) {
    const res = await domainUnifiedPost<{ items: unknown[] }>(
      apiMicroservices.apiCrm,
      `public/domain/${model}/prisma-get-many`,
      { prismaGetManyParams: { take: 20 } },
      token,
    );
    out[model] = res.items;
  }
  return out;
}
