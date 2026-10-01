import 'server-only';

import { cookies } from 'next/headers';

export const authCookieName = 'auth_token';

export function authCookieMaxAgeSeconds(): number {
  const hours = Number(process.env.JWT_EXPIRES_IN_HOURS ?? 720);
  return Number.isFinite(hours) && hours > 0 ? Math.floor(hours * 60 * 60) : 86400;
}

export function authCookieOptions() {
  const secure = process.env.COOKIE_SECURE === 'true';
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure,
    path: '/',
    maxAge: authCookieMaxAgeSeconds(),
  };
}

export async function readAuthTokenFromCookie(): Promise<string> {
  const value = (await cookies()).get(authCookieName)?.value?.trim() ?? '';
  if (!value || value === 'undefined') return '';
  return value;
}

export async function writeAuthTokenToCookie(token: string): Promise<void> {
  const normalized = token?.trim();
  if (!normalized || normalized === 'undefined') return;
  (await cookies()).set(authCookieName, normalized, authCookieOptions());
}

export async function clearAuthTokenCookie(): Promise<void> {
  (await cookies()).delete(authCookieName);
}
