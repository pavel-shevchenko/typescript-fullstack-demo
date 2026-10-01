import 'server-only';

import { randomUUID } from 'node:crypto';
import { headers } from 'next/headers';

function normalizedAuthority(value: string): string {
  return value.trim().toLowerCase().replace(/:\d+$/, '');
}

export async function assertTrustedServerActionOrigin(): Promise<void> {
  const requestHeaders = await headers();
  const origin = requestHeaders.get('origin');
  const host =
    requestHeaders.get('x-forwarded-host')?.split(',')[0]?.trim() ||
    requestHeaders.get('host');
  if (!origin || !host) throw new Error('CSRF validation failed');

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    throw new Error('CSRF validation failed');
  }
  if (normalizedAuthority(originHost) !== normalizedAuthority(host)) {
    throw new Error('CSRF validation failed');
  }
}

export async function serverActionCorrelationId(): Promise<string> {
  const incoming = (await headers()).get('x-correlation-id')?.trim();
  return incoming && /^[a-zA-Z0-9._:-]{8,128}$/.test(incoming)
    ? incoming
    : randomUUID();
}
