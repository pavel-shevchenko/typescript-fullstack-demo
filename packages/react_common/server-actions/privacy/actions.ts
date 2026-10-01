'use server';

import { apiMicroservices } from 'types_consts_utils';
import { getApiBaseUrl } from 'types_consts_utils/server';
import { readAuthTokenFromCookie } from '../../server/auth-cookie';
import {
  assertTrustedServerActionOrigin,
  serverActionCorrelationId,
} from '../../server/request-security';

async function privacyRequest<T>(operation: 'export' | 'delete', userId?: string): Promise<T> {
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  const correlationId = await serverActionCorrelationId();
  const response = await fetch(
    `${getApiBaseUrl(apiMicroservices.apiCms)}public/privacy/${operation}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
        'x-correlation-id': correlationId,
      },
      body: JSON.stringify(userId ? { userId } : {}),
      cache: 'no-store',
    },
  );
  if (!response.ok) {
    const detail = (await response.text().catch(() => '')).slice(0, 400);
    throw new Error(
      `Privacy ${operation} failed (${response.status})${detail ? `: ${detail}` : ''}`,
    );
  }
  return response.json() as Promise<T>;
}

export async function exportPersonalDataAction(userId?: string) {
  await assertTrustedServerActionOrigin();
  return privacyRequest<Record<string, unknown>>('export', userId);
}

export async function deletePersonalDataAction(userId?: string) {
  await assertTrustedServerActionOrigin();
  return privacyRequest<{
    deleted: boolean;
    correlationId: string;
    transactionLimits: string;
  }>('delete', userId);
}
