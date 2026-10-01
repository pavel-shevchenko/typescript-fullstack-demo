'use server';

import { createHash, createHmac } from 'node:crypto';
import { apiCmsModels, apiCrmModels, apiMicroservices } from 'types_consts_utils';
import { domainUnifiedPost, getApiBaseUrl } from 'types_consts_utils/server';
import { readAuthTokenFromCookie } from '../../server/auth-cookie';
import {
  assertTrustedServerActionOrigin,
  serverActionCorrelationId,
} from '../../server/request-security';
import {
  assertWhitelistedPayload,
  domainPath,
  enrichCreateManyWithTenantId,
  microserviceForModel,
} from './apply-whitelist';

export type ComfortRecommendationDraft = {
  targetService: 'cms' | 'crm';
  title: string;
  explanation: string;
  payloadJson: Record<string, unknown>;
  requiresAdminConfirm: boolean;
  askUserFor?: string;
};

async function authHeaders() {
  const token = await readAuthTokenFromCookie();
  if (!token) throw new Error('Unauthorized');
  return token;
}

type VerifiedSession = {
  token: string;
  user: { id: string; role: 'admin' | 'customer'; email: string };
};

async function verifiedSession(): Promise<VerifiedSession> {
  const token = await authHeaders();
  const response = await fetch(
    `${getApiBaseUrl(apiMicroservices.apiCms)}public/auth/session`,
    {
      headers: { authorization: `Bearer ${token}` },
      cache: 'no-store',
    },
  );
  if (!response.ok) throw new Error('Unauthorized');
  const data = (await response.json()) as { user?: VerifiedSession['user'] };
  if (
    !data.user ||
    !/^[1-9]\d*$/.test(data.user.id) ||
    (data.user.role !== 'admin' && data.user.role !== 'customer') ||
    typeof data.user.email !== 'string'
  ) {
    throw new Error('Invalid verified session');
  }
  return { token, user: data.user };
}

export async function requestAiRecommendationsAction(input: {
  prompt: string;
  userContext?: Record<string, unknown>;
  missingFields?: string[];
}) {
  await assertTrustedServerActionOrigin();
  const { token } = await verifiedSession();
  const cid = await serverActionCorrelationId();
  const base = process.env.PYTHON_CODING_URL ?? 'http://python-coding:8200';
  const started = Date.now();
  let retrievedContext: Array<Record<string, unknown>> = [];
  try {
    const search = await domainUnifiedPost<{
      items: Array<Record<string, unknown>>;
    }>(
      apiMicroservices.apiSearch,
      'customer/search/query',
      { query: input.prompt, page: 1, pageSize: 5 },
      token,
      cid,
    );
    retrievedContext = search.items;
  } catch {
    // Search/RAG is an optional enhancement; AI recommendations degrade gracefully.
  }
  const resp = await fetch(`${base}/recommend`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-correlation-id': cid,
    },
    body: JSON.stringify({
      prompt: input.prompt,
      userContext: {
        ...(input.userContext ?? {}),
        retrievedContext,
      },
      missingFields: input.missingFields ?? [],
    }),
    cache: 'no-store',
  }).catch((err: unknown) => {
    const detail = err instanceof Error ? err.message : String(err);
    throw new Error(
      `python-coding unreachable at ${base}/recommend (${detail}). ` +
        `Check: docker compose ps python-coding && docker compose up -d --build python-coding`,
    );
  });
  if (!resp.ok) throw new Error(`python-coding failed: ${resp.status}`);
  const data = (await resp.json()) as {
    recommendations: ComfortRecommendationDraft[];
    provider?: string;
  };
  const latencyMs = Date.now() - started;

  try {
    await domainUnifiedPost(
      apiMicroservices.apiCms,
      `public/domain/${apiCmsModels.comfortAiCallLog}/record-own-request`,
      {
        correlationId: cid,
        provider: data.provider ?? 'heuristic',
        latencyMs,
        promptChars: input.prompt.length,
        responseChars: JSON.stringify(data.recommendations).length,
        success: true,
      },
      token,
    );
  } catch {
    // call log is best-effort
  }

  const drafts: ComfortRecommendationDraft[] = [];
  for (const rec of data.recommendations) {
    if (rec.payloadJson && typeof rec.payloadJson === 'object' && 'askUserFor' in rec.payloadJson) {
      drafts.push({
        ...rec,
        askUserFor: String((rec.payloadJson as { askUserFor: string }).askUserFor),
      });
      continue;
    }
    drafts.push(rec);
  }

  return { recommendations: drafts, correlationId: cid };
}

export async function saveRecommendationDraftsAction(input: {
  recommendations: ComfortRecommendationDraft[];
}) {
  await assertTrustedServerActionOrigin();
  const { token } = await verifiedSession();
  const recommendations = input.recommendations
    .filter((rec) => !rec.askUserFor)
    .map((rec) => ({
      targetService: rec.targetService,
      title: rec.title,
      explanation: rec.explanation,
      payloadJson: rec.payloadJson,
      requiresAdminConfirm: rec.requiresAdminConfirm,
    }));
  if (recommendations.length === 0) return { savedCount: 0 };
  return domainUnifiedPost<{ savedCount: number }>(
    apiMicroservices.apiCms,
    `public/domain/${apiCmsModels.comfortAiRecommendation}/create-request`,
    { recommendations },
    token,
  );
}

export async function fetchPendingRecommendationsAction() {
  const token = await authHeaders();
  return domainUnifiedPost<{ items: Array<Record<string, unknown>>; totalCount: number }>(
    apiMicroservices.apiCms,
    `public/domain/${apiCmsModels.comfortAiRecommendation}/prisma-get-many`,
    {
      prismaGetManyParams: {
        where: { status: 'pending' },
        orderBy: { createdAt: 'desc' },
        take: 50,
      },
    },
    token,
  );
}

export async function confirmRecommendationAction(input: { id: string }) {
  await assertTrustedServerActionOrigin();
  const { token, user } = await verifiedSession();
  const claim = await domainUnifiedPost<{
    state: 'claimed' | 'confirmed' | 'applying';
    applyKey: string;
    recommendation?: {
      id: string;
      requiresAdminConfirm: boolean;
      payloadJson: unknown;
      targetService: string;
    };
  }>(
    apiMicroservices.apiCms,
    `public/domain/${apiCmsModels.comfortAiRecommendation}/claim-apply`,
    { id: input.id },
    token,
  );
  if (claim.state === 'confirmed') return { alreadyApplied: true };
  if (claim.state === 'applying') throw new Error('Recommendation is already applying');
  const rec = claim.recommendation;
  if (!rec) throw new Error('Claimed recommendation is missing');
  if (rec.requiresAdminConfirm && user.role !== 'admin') {
    throw new Error('Backend authorization mismatch');
  }

  const whitelisted = await enrichCreateManyWithTenantId(
    assertWhitelistedPayload(rec.payloadJson),
    async () => {
      const tenants = await domainUnifiedPost<{
        items: Array<{ id: string | number }>;
      }>(
        apiMicroservices.apiCrm,
        `public/domain/${apiCrmModels.crmTenant}/prisma-get-many`,
        { prismaGetManyParams: { take: 1, orderBy: { id: 'asc' } } },
        token,
      );
      const id = tenants.items[0]?.id;
      if (id == null) {
        throw new Error(
          'No CRM tenant available — run CRM seed (demo-salon) or create a tenant first',
        );
      }
      return String(id);
    },
  );
  const ms = microserviceForModel(whitelisted.model);
  const path = domainPath(whitelisted.model, whitelisted.operation);
  const body: Record<string, unknown> = {};
  if (whitelisted.prismaCreateManyParams) body.prismaCreateManyParams = whitelisted.prismaCreateManyParams;
  if (whitelisted.prismaUpdateManyParamsInArr) body.prismaUpdateManyParamsInArr = whitelisted.prismaUpdateManyParamsInArr;
  if (whitelisted.prismaDeleteManyParams) body.prismaDeleteManyParams = whitelisted.prismaDeleteManyParams;
  if (whitelisted.prismaGetManyParams) body.prismaGetManyParams = whitelisted.prismaGetManyParams;

  try {
    // The CMS claim prevents concurrent application. The target service remains a
    // separate transaction boundary, so applyKey is also propagated as correlation.
    const applyResult = await domainUnifiedPost(ms, path, body, token, claim.applyKey);
    const proof = createApplyOutcomeProof(input.id, claim.applyKey, true);
    await domainUnifiedPost(
      apiMicroservices.apiCms,
      `public/domain/${apiCmsModels.comfortAiRecommendation}/finish-apply`,
      { id: input.id, succeeded: true, proof },
      token,
    );
    return { applyResult };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Apply failed';
    try {
      const proof = createApplyOutcomeProof(input.id, claim.applyKey, false);
      await domainUnifiedPost(
        apiMicroservices.apiCms,
        `public/domain/${apiCmsModels.comfortAiRecommendation}/finish-apply`,
        { id: input.id, succeeded: false, error: message, proof },
        token,
      );
    } catch {
      // A process or network failure can leave "applying"; operators can inspect
      // applyKey and audit intent without incorrectly marking it confirmed.
    }
    throw error;
  }
}

export async function rejectRecommendationAction(input: { id: string }) {
  await assertTrustedServerActionOrigin();
  const { token } = await verifiedSession();
  await domainUnifiedPost(
    apiMicroservices.apiCms,
    `public/domain/${apiCmsModels.comfortAiRecommendation}/reject`,
    { id: input.id },
    token,
  );
  return { ok: true };
}

export async function compileRuntimeArtifactAction(spec: {
  artifactName: string;
  spec: Record<string, unknown>;
}) {
  await assertTrustedServerActionOrigin();
  const { token } = await verifiedSession();
  const cid = await serverActionCorrelationId();
  const artifactName = normalizeArtifactName(spec.artifactName);
  const base = process.env.PYTHON_CODING_URL ?? 'http://python-coding:8200';
  const resp = await fetch(`${base}/artifacts/compile`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
      'x-correlation-id': cid,
    },
    body: JSON.stringify({ artifactName, spec: spec.spec }),
    cache: 'no-store',
  });
  if (!resp.ok) throw new Error(`artifact compile failed: ${resp.status}`);
  return resp.json();
}

export async function readRuntimeArtifactAction(name: string) {
  await verifiedSession();
  try {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const root = process.env.COMFORT_GENERATED_ROOT ?? `${process.cwd()}/../../generated/runtime`;
    const artifactName = normalizeArtifactName(name);
    const resolvedRoot = path.resolve(root);
    const file = path.resolve(resolvedRoot, `${artifactName}.json`);
    const manifestFile = path.resolve(resolvedRoot, `${artifactName}.manifest.json`);
    if (!file.startsWith(`${resolvedRoot}${path.sep}`)) throw new Error('Invalid artifact path');
    const stat = await fs.stat(file);
    if (stat.size > 1_000_000) throw new Error('Artifact is too large');
    const raw = await fs.readFile(file, 'utf8');
    const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8')) as {
      sha256?: { json?: string };
    };
    const checksum = createHash('sha256').update(raw, 'utf8').digest('hex');
    if (manifest.sha256?.json !== checksum) throw new Error('Artifact checksum mismatch');
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function normalizeArtifactName(value: string): string {
  const normalized = value.trim().toLowerCase();
  if (!/^[a-z0-9][a-z0-9._-]{0,63}$/.test(normalized)) {
    throw new Error('Invalid artifact name');
  }
  return normalized;
}

function createApplyOutcomeProof(id: string, applyKey: string, succeeded: boolean): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is required for apply outcome proof');
  return createHmac('sha256', secret)
    .update(`${id}:${applyKey}:${succeeded ? 'confirmed' : 'failed'}`)
    .digest('hex');
}
