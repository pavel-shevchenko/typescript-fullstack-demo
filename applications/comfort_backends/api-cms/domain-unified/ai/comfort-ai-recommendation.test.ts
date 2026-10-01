import { describe, expect, test } from 'bun:test';
import { createHmac } from 'node:crypto';
import { ConflictException, ForbiddenException } from 'domain_unified/nest-for-hono';
import { apiCmsModels } from 'types_consts_utils';
import { ComfortAiRecommendationController } from './comfort-ai-recommendation.controller';

process.env.JWT_SECRET ??= 'comfort-test-secret';

type RecommendationRecord = {
  id: bigint;
  authorUserId: bigint;
  confirmerUserId: bigint | null;
  requiresAdminConfirm: boolean;
  payloadJson: Record<string, unknown>;
  targetService: 'cms' | 'crm';
  status: 'pending' | 'applying' | 'confirmed' | 'failed' | 'rejected';
  applyKey: string | null;
  applyAttempt: number;
  applyError: string | null;
  applyStartedAt: Date | null;
  applyFinishedAt: Date | null;
};

type AuditEvent = {
  actorUserId: bigint;
  action: string;
  entityModel: string;
  entityId: string;
  correlationId: string;
  payloadJson?: unknown;
};

function createApplyOutcomeProof(id: bigint, applyKey: string, succeeded: boolean): string {
  return createHmac('sha256', process.env.JWT_SECRET!)
    .update(`${id.toString()}:${applyKey}:${succeeded ? 'confirmed' : 'failed'}`)
    .digest('hex');
}

function createRequest(userId: bigint, role: 'admin' | 'customer' = 'admin') {
  return {
    user: {
      data: {
        id: userId,
        role,
        email: `${role}@comfort.local`,
      },
    },
  };
}

function createRecommendation(
  overrides: Partial<RecommendationRecord> = {},
): RecommendationRecord {
  return {
    id: 1n,
    authorUserId: 10n,
    confirmerUserId: null,
    requiresAdminConfirm: false,
    payloadJson: { model: 'cmsPage', operation: 'prismaUpdateMany' },
    targetService: 'cms',
    status: 'pending',
    applyKey: null,
    applyAttempt: 0,
    applyError: null,
    applyStartedAt: null,
    applyFinishedAt: null,
    ...overrides,
  };
}

function createController(recommendation: RecommendationRecord) {
  const audits: AuditEvent[] = [];

  const matchAccess = (
    record: RecommendationRecord,
    where: Record<string, unknown>,
  ): boolean => {
    if (where.id != null && record.id !== where.id) return false;
    if (
      where.authorUserId != null &&
      record.authorUserId !== where.authorUserId
    ) {
      return false;
    }
    if (
      where.requiresAdminConfirm != null &&
      record.requiresAdminConfirm !== where.requiresAdminConfirm
    ) {
      return false;
    }
    return true;
  };

  const tx = {
    comfortAiRecommendation: {
      updateMany: async ({
        where,
        data,
      }: {
        where: Record<string, unknown>;
        data: Record<string, unknown>;
      }) => {
        const statusFilter = where.status as
          | string
          | { in?: string[] }
          | undefined;
        const allowedStatuses = Array.isArray(statusFilter)
          ? statusFilter
          : typeof statusFilter === 'string'
            ? [statusFilter]
            : statusFilter?.in;
        if (allowedStatuses && !allowedStatuses.includes(recommendation.status)) {
          return { count: 0 };
        }
        if (!matchAccess(recommendation, where)) return { count: 0 };

        if (Array.isArray(where.OR)) {
          const matchesOr = where.OR.some((entry) => {
            if (!entry || typeof entry !== 'object') return false;
            const objectEntry = entry as { applyKey?: string | null };
            return objectEntry.applyKey === recommendation.applyKey;
          });
          if (!matchesOr) return { count: 0 };
        }

        if (
          where.applyKey != null &&
          recommendation.applyKey !== where.applyKey
        ) {
          return { count: 0 };
        }
        if (
          where.confirmerUserId != null &&
          recommendation.confirmerUserId !== where.confirmerUserId
        ) {
          return { count: 0 };
        }

        recommendation.status = data.status as RecommendationRecord['status'];
        recommendation.applyKey = (data.applyKey as string | undefined) ?? recommendation.applyKey;
        recommendation.applyError =
          (data.applyError as string | null | undefined) ?? recommendation.applyError;
        recommendation.applyStartedAt =
          (data.applyStartedAt as Date | null | undefined) ?? recommendation.applyStartedAt;
        recommendation.applyFinishedAt =
          (data.applyFinishedAt as Date | null | undefined) ?? recommendation.applyFinishedAt;
        recommendation.confirmerUserId =
          (data.confirmerUserId as bigint | null | undefined) ??
          recommendation.confirmerUserId;
        if (
          data.applyAttempt &&
          typeof data.applyAttempt === 'object' &&
          'increment' in data.applyAttempt
        ) {
          recommendation.applyAttempt += Number(
            (data.applyAttempt as { increment: number }).increment,
          );
        }
        return { count: 1 };
      },
      findUnique: async ({ where }: { where: { id: bigint } }) =>
        where.id === recommendation.id ? recommendation : null,
    },
    comfortAuditEvent: {
      create: async ({ data }: { data: AuditEvent }) => {
        audits.push(data);
        return data;
      },
    },
  };

  const prisma = {
    $transaction: async <T>(callback: (client: typeof tx) => Promise<T>) =>
      callback(tx),
    comfortAiRecommendation: {
      findFirst: async ({ where }: { where: Record<string, unknown> }) =>
        matchAccess(recommendation, where) ? recommendation : null,
    },
  };

  const controller = new ComfortAiRecommendationController(
    prisma as never,
  );

  return { controller, recommendation, audits };
}

describe('comfort ai recommendation confirmation state machine', () => {
  test('claims a pending recommendation and records intent audit atomically', async () => {
    const { controller, recommendation, audits } = createController(
      createRecommendation(),
    );

    const result = await controller.claimApply(createRequest(99n), { id: '1' });

    expect(result.state).toBe('claimed');
    expect(result.applyKey).toBe('comfort-ai-recommendation:1');
    expect(recommendation.status).toBe('applying');
    expect(recommendation.applyAttempt).toBe(1);
    expect(recommendation.confirmerUserId).toBe(99n);
    expect(audits).toEqual([
      {
        actorUserId: 99n,
        action: 'ai_recommendation_apply_intent',
        entityModel: apiCmsModels.comfortAiRecommendation,
        entityId: '1',
        correlationId: 'comfort-ai-recommendation:1',
      },
    ]);
  });

  test('finalizes a claimed recommendation and records success audit', async () => {
    const { controller, recommendation, audits } = createController(
      createRecommendation({
        status: 'applying',
        applyKey: 'comfort-ai-recommendation:1',
        applyAttempt: 1,
        confirmerUserId: 77n,
      }),
    );

    const result = await controller.finishApply(createRequest(77n), {
      id: '1',
      succeeded: true,
      proof: createApplyOutcomeProof(1n, 'comfort-ai-recommendation:1', true),
    });

    expect(result.status).toBe('confirmed');
    expect(recommendation.status).toBe('confirmed');
    expect(recommendation.applyError).toBeNull();
    expect(audits).toEqual([
      {
        actorUserId: 77n,
        action: 'ai_recommendation_apply_succeeded',
        entityModel: apiCmsModels.comfortAiRecommendation,
        entityId: '1',
        correlationId: 'comfort-ai-recommendation:1',
        payloadJson: undefined,
      },
    ]);
  });

  test('records failed apply and allows deterministic retry from failed state', async () => {
    const { controller, recommendation, audits } = createController(
      createRecommendation({
        status: 'applying',
        applyKey: 'comfort-ai-recommendation:1',
        applyAttempt: 1,
        confirmerUserId: 50n,
      }),
    );

    const failed = await controller.finishApply(createRequest(50n), {
      id: '1',
      succeeded: false,
      error: 'Target service failed',
      proof: createApplyOutcomeProof(1n, 'comfort-ai-recommendation:1', false),
    });

    expect(failed.status).toBe('failed');
    expect(recommendation.status).toBe('failed');
    expect(recommendation.applyError).toBe('Target service failed');
    expect(audits[0]?.action).toBe('ai_recommendation_apply_failed');

    const retried = await controller.claimApply(createRequest(50n), { id: '1' });

    expect(retried.state).toBe('claimed');
    expect(recommendation.status).toBe('applying');
    expect(recommendation.applyAttempt).toBe(2);
    expect(audits[1]?.action).toBe('ai_recommendation_apply_intent');
  });

  test('returns stable confirmed state for duplicate claim after success', async () => {
    const { controller } = createController(
      createRecommendation({
        status: 'confirmed',
        applyKey: 'comfort-ai-recommendation:1',
        applyAttempt: 1,
        confirmerUserId: 99n,
      }),
    );

    const result = await controller.claimApply(createRequest(99n), { id: '1' });

    expect(result).toEqual({
      state: 'confirmed',
      applyKey: 'comfort-ai-recommendation:1',
    });
  });

  test('rejects invalid completion proof before mutating state', async () => {
    const { controller, recommendation, audits } = createController(
      createRecommendation({
        status: 'applying',
        applyKey: 'comfort-ai-recommendation:1',
        applyAttempt: 1,
        confirmerUserId: 77n,
      }),
    );

    await expect(
      controller.finishApply(createRequest(77n), {
        id: '1',
        succeeded: true,
        proof: '0'.repeat(64),
      }),
    ).rejects.toBeInstanceOf(ForbiddenException);

    expect(recommendation.status).toBe('applying');
    expect(audits).toHaveLength(0);
  });

  test('prevents customer from claiming admin-only recommendation', async () => {
    const { controller } = createController(
      createRecommendation({
        authorUserId: 10n,
        requiresAdminConfirm: true,
      }),
    );

    await expect(
      controller.claimApply(createRequest(10n, 'customer'), { id: '1' }),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  test('prevents finishing apply from a different actor', async () => {
    const { controller } = createController(
      createRecommendation({
        status: 'applying',
        applyKey: 'comfort-ai-recommendation:1',
        applyAttempt: 1,
        confirmerUserId: 50n,
      }),
    );

    await expect(
      controller.finishApply(createRequest(77n), {
        id: '1',
        succeeded: true,
        proof: createApplyOutcomeProof(1n, 'comfort-ai-recommendation:1', true),
      }),
    ).rejects.toBeInstanceOf(ConflictException);
  });
});
