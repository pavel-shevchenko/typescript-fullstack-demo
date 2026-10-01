'use server';

import {
  clearAuthTokenCookie,
  readAuthTokenFromCookie,
  writeAuthTokenToCookie,
} from '../../server/auth-cookie';
import {
  assertTrustedServerActionOrigin,
  serverActionCorrelationId,
} from '../../server/request-security';
import { getApiBaseUrl } from 'types_consts_utils/server';
import { apiMicroservices } from 'types_consts_utils';

export async function registerAction(input: { email: string; password: string }) {
  await assertTrustedServerActionOrigin();
  const correlationId = await serverActionCorrelationId();
  const result = await fetch(`${getApiBaseUrl(apiMicroservices.apiCms)}public/auth/register`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-correlation-id': correlationId },
    body: JSON.stringify(input),
    cache: 'no-store',
  });
  if (!result.ok) throw new Error('Registration failed');
  const data = (await result.json()) as { token: string; user: { id: string; role: string; email: string } };
  await writeAuthTokenToCookie(data.token);
  return data.user;
}

export async function loginAction(input: { email: string; password: string }) {
  await assertTrustedServerActionOrigin();
  const correlationId = await serverActionCorrelationId();
  const result = await fetch(`${getApiBaseUrl(apiMicroservices.apiCms)}public/auth/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-correlation-id': correlationId },
    body: JSON.stringify(input),
    cache: 'no-store',
  });
  if (!result.ok) throw new Error('Invalid credentials');
  const data = (await result.json()) as { token: string; user: { id: string; role: string; email: string } };
  await writeAuthTokenToCookie(data.token);
  return data.user;
}

export async function logoutAction() {
  await assertTrustedServerActionOrigin();
  await clearAuthTokenCookie();
}

export async function getSessionAction() {
  const token = await readAuthTokenFromCookie();
  if (!token) return null;
  const payload = decodeJwtPayload(token);
  if (!payload?.sub) {
    await clearAuthTokenCookie();
    return null;
  }
  // JWT-only session for SSR gates. Do not call Nest/Prisma from this action —
  // a failed CMS round-trip must not block /admin → /login redirects.
  return {
    token,
    user: {
      id: String(payload.sub),
      role: (payload.role as 'admin' | 'customer') ?? 'customer',
      email: String(payload.email ?? ''),
    },
  };
}

function decodeJwtPayload(token: string): { sub?: string; role?: string; email?: string } | null {
  const part = token.split('.')[1];
  if (!part) return null;
  try {
    const json = Buffer.from(part, 'base64url').toString('utf8');
    return JSON.parse(json) as { sub?: string; role?: string; email?: string };
  } catch {
    return null;
  }
}
