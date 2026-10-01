'use server';

import { apiMicroservices } from 'types_consts_utils';
import {
  domainUnifiedPost,
  getApiBaseUrl,
} from 'types_consts_utils/server';
import { readAuthTokenFromCookie } from '../../server/auth-cookie';

export type PublicSearchInput = {
  query: string;
  page?: number;
  pageSize?: number;
  semanticVector?: number[];
};

export type PublicSearchResult = {
  items: Array<{
    documentId: string;
    chunkId: string;
    title: string;
    url: string | null;
    excerpt: string;
    score: number;
    metadata: unknown;
  }>;
  totalCount: number;
};

export async function publicSearchAction(
  input: PublicSearchInput,
): Promise<PublicSearchResult> {
  return domainUnifiedPost(
    apiMicroservices.apiSearch,
    'public/search/query',
    input,
  );
}

export async function customerSearchAction(
  input: PublicSearchInput,
): Promise<PublicSearchResult> {
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  return domainUnifiedPost(
    apiMicroservices.apiSearch,
    'customer/search/query',
    input,
    token,
  );
}

export async function adminUpsertSearchDocumentAction(input: {
  externalKey: string;
  sourceType: string;
  title: string;
  body: string;
  url?: string;
  status?: 'draft' | 'published' | 'archived';
  tenantKey?: string;
  metadata?: Record<string, unknown>;
  semanticVector?: number[];
}) {
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  return domainUnifiedPost<{
    documentId: string;
    chunks: number;
    unchanged: boolean;
  }>(
    apiMicroservices.apiSearch,
    'admin/index/upsert',
    input,
    token,
  );
}

export async function readSearchRuntimeArtifactAction(name: string) {
  if (!/^[a-zA-Z0-9_-]{1,100}$/.test(name)) return null;
  const response = await fetch(
    `${getApiBaseUrl(apiMicroservices.apiSearch)}public/coding/runtime/${name}`,
    { cache: 'no-store' },
  );
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`runtime artifact fetch failed: ${response.status}`);
  return response.json() as Promise<{
    name: string;
    mtimeMs: number;
    hash: string;
    artifact: unknown;
  }>;
}
