'use server';

import { apiMicroservices } from 'types_consts_utils';
import {
  domainUnifiedPost,
  getApiBaseUrl,
} from 'types_consts_utils/server';
import { readAuthTokenFromCookie } from '../../server/auth-cookie';
import {
  assertTrustedServerActionOrigin,
  serverActionCorrelationId,
} from '../../server/request-security';

export type ArticleHeroFile = {
  fieldName: string;
  originalName: string;
  objectName: string;
  mimetype: string;
  size: number;
};

async function credentials() {
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  return { token, correlationId: await serverActionCorrelationId() };
}

export async function listArticleHeroFilesAction(articleId: string) {
  if (!/^\d+$/.test(articleId)) throw new Error('Invalid article ID');
  const { token, correlationId } = await credentials();
  const result = await domainUnifiedPost<
    Record<string, { heroFiles?: ArticleHeroFile[] }>
  >(
    apiMicroservices.apiCms,
    'public/domain/cmsArticle/list-files-metadata-by-fields',
    { recordIds: [articleId], fieldsConfig: [{ fieldName: 'heroFiles' }] },
    token,
    correlationId,
  );
  return result[articleId]?.heroFiles ?? [];
}

export async function uploadArticleHeroFileAction(formData: FormData) {
  await assertTrustedServerActionOrigin();
  const articleId = String(formData.get('articleId') ?? '');
  const file = formData.get('file');
  if (!/^\d+$/.test(articleId) || !(file instanceof File)) throw new Error('Invalid upload');
  if (file.size > 5 * 1024 * 1024) throw new Error('File exceeds 5 MB');
  if (!['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(file.type)) {
    throw new Error('Unsupported image type');
  }
  const { token, correlationId } = await credentials();
  const body = new FormData();
  body.append(`fileByRecordIdAndFieldNameAndFileIndex[${articleId}][heroFiles][]`, file);
  const response = await fetch(
    `${getApiBaseUrl(apiMicroservices.apiCms)}public/domain/cmsArticle/upload-files-to-fields`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'x-correlation-id': correlationId,
      },
      body,
      cache: 'no-store',
    },
  );
  if (!response.ok) throw new Error(`Upload failed (${response.status})`);
  return response.json();
}

export async function removeArticleHeroFileAction(articleId: string, index: number) {
  await assertTrustedServerActionOrigin();
  if (!/^\d+$/.test(articleId) || !Number.isInteger(index) || index < 0) {
    throw new Error('Invalid file selection');
  }
  const { token, correlationId } = await credentials();
  return domainUnifiedPost(
    apiMicroservices.apiCms,
    'public/domain/cmsArticle/remove-files-by-fields',
    {
      recordIds: [articleId],
      fieldsConfig: [{ fieldName: 'heroFiles', fileIndices: [index] }],
    },
    token,
    correlationId,
  );
}
