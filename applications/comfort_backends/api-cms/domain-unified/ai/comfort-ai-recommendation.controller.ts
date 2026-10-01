import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  ForbiddenException,
  Post,
  Request,
  UseGuards,
} from 'domain_unified/nest-for-hono';
import { createHmac, timingSafeEqual } from 'node:crypto';
import {
  buildDomainController,
  type IDomainController,
} from 'domain_unified';
import {
  apiCmsModels,
  apiMicroservices,
  type IncludePermissionsByRole,
} from 'types_consts_utils';
import { ApiCmsPrismaService, type ApiCmsPrisma } from 'prisma_cms';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ComfortAiRecommendationDto } from 'validation';
import {
  ensureComfortAiRecommendationCreate,
  resolveComfortAiRecommendationScope,
} from '../cms/cms-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const DomainController = buildDomainController<
  IDomainController,
  typeof apiCmsModels.comfortAiRecommendation,
  ApiCmsPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCms,
  prismaModel: apiCmsModels.comfortAiRecommendation,
  dtoClass: ComfortAiRecommendationDto,
  includePermissions: {
    admin: true,
    customer: {},
  } satisfies IncludePermissionsByRole<
    NonNullable<ApiCmsPrisma.ComfortAiRecommendationFindManyArgs['include']>
  >,
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveComfortAiRecommendationScope,
    methodDecorators: authDecorators,
  },
  prismaCreateMany: {
    checkPermissions: ensureComfortAiRecommendationCreate,
    methodDecorators: authDecorators,
  },
  prismaUpdateMany: {
    checkPermAndGetScope: resolveComfortAiRecommendationScope,
    methodDecorators: authDecorators,
    immutableFields: [
      'authorUserId',
      'confirmerUserId',
      'payloadJson',
      'status',
      'applyKey',
      'applyAttempt',
      'applyError',
      'applyStartedAt',
      'applyFinishedAt',
    ] as never,
  },
});

type AuthenticatedRequest = {
  user: {
    data: { id: bigint; role: 'admin' | 'customer'; email: string };
  };
};

type RecommendationDraftInput = {
  targetService?: unknown;
  title?: unknown;
  explanation?: unknown;
  payloadJson?: unknown;
  requiresAdminConfirm?: unknown;
};

@Controller(`public/domain/${apiCmsModels.comfortAiRecommendation}`)
export class ComfortAiRecommendationController extends DomainController {
  constructor(private readonly prisma: ApiCmsPrismaService) {
    super(prisma);
  }

  @Post('create-request')
  @UseGuards(JwtAuthGuard)
  async createRequest(
    @Request() req: AuthenticatedRequest,
    @Body() body: { recommendations?: RecommendationDraftInput[] },
  ) {
    const drafts = body.recommendations;
    if (!Array.isArray(drafts) || drafts.length === 0 || drafts.length > 50) {
      throw new BadRequestException('recommendations must contain 1..50 items');
    }

    const data = drafts.map((draft) => {
      if (draft.targetService !== 'cms' && draft.targetService !== 'crm') {
        throw new BadRequestException('Invalid recommendation targetService');
      }
      if (typeof draft.title !== 'string' || !draft.title.trim() || draft.title.length > 300) {
        throw new BadRequestException('Invalid recommendation title');
      }
      if (
        draft.payloadJson === null ||
        typeof draft.payloadJson !== 'object' ||
        Array.isArray(draft.payloadJson)
      ) {
        throw new BadRequestException('Invalid recommendation payloadJson');
      }
      return {
        authorUserId: req.user.data.id,
        targetService: draft.targetService as 'cms' | 'crm',
        title: draft.title.trim(),
        explanation:
          typeof draft.explanation === 'string' ? draft.explanation.slice(0, 4_000) : '',
        payloadJson: draft.payloadJson as ApiCmsPrisma.InputJsonValue,
        requiresAdminConfirm: draft.requiresAdminConfirm === true,
        status: 'pending' as const,
      };
    });

    const created = await this.prisma.comfortAiRecommendation.createMany({ data });
    return { savedCount: created.count };
  }

  @Post('claim-apply')
  @UseGuards(JwtAuthGuard)
  async claimApply(
    @Request() req: AuthenticatedRequest,
    @Body() body: { id?: string },
  ) {
    const id = parseRecommendationId(body.id);
    const actor = req.user.data;
    const applyKey = `comfort-ai-recommendation:${id.toString()}`;
    const access =
      actor.role === 'admin'
        ? {}
        : { authorUserId: actor.id, requiresAdminConfirm: false };

    const claimed = await this.prisma.$transaction(async (tx) => {
      const result = await tx.comfortAiRecommendation.updateMany({
        where: {
          id,
          ...access,
          status: { in: ['pending', 'failed'] },
          OR: [{ applyKey: null }, { applyKey }],
        },
        data: {
          status: 'applying',
          applyKey,
          applyAttempt: { increment: 1 },
          applyError: null,
          applyStartedAt: new Date(),
          applyFinishedAt: null,
          confirmerUserId: actor.id,
        },
      });
      if (result.count !== 1) return null;

      await tx.comfortAuditEvent.create({
        data: {
          actorUserId: actor.id,
          action: 'ai_recommendation_apply_intent',
          entityModel: apiCmsModels.comfortAiRecommendation,
          entityId: id.toString(),
          correlationId: applyKey,
        },
      });
      return tx.comfortAiRecommendation.findUnique({ where: { id } });
    });

    if (claimed) {
      return {
        state: 'claimed',
        applyKey,
        recommendation: serializeRecommendation(claimed),
      };
    }

    const existing = await this.prisma.comfortAiRecommendation.findFirst({
      where: { id, ...access },
    });
    if (!existing) throw new ForbiddenException();
    if (existing.status === 'confirmed' && existing.applyKey === applyKey) {
      return { state: 'confirmed', applyKey };
    }
    if (existing.status === 'applying' && existing.applyKey === applyKey) {
      return { state: 'applying', applyKey };
    }
    throw new ConflictException(`Recommendation cannot be claimed from ${existing.status}`);
  }

  @Post('finish-apply')
  @UseGuards(JwtAuthGuard)
  async finishApply(
    @Request() req: AuthenticatedRequest,
    @Body() body: { id?: string; succeeded?: boolean; error?: string; proof?: string },
  ) {
    const id = parseRecommendationId(body.id);
    const actor = req.user.data;
    const applyKey = `comfort-ai-recommendation:${id.toString()}`;
    const status = body.succeeded === true ? 'confirmed' : 'failed';
    verifyApplyOutcomeProof(id, applyKey, body.succeeded === true, body.proof);
    const error =
      status === 'failed'
        ? String(body.error || 'Apply failed').slice(0, 4_000)
        : null;

    const updated = await this.prisma.$transaction(async (tx) => {
      const result = await tx.comfortAiRecommendation.updateMany({
        where: {
          id,
          status: 'applying',
          applyKey,
          confirmerUserId: actor.id,
        },
        data: {
          status,
          applyError: error,
          applyFinishedAt: new Date(),
        },
      });
      if (result.count !== 1) return false;
      await tx.comfortAuditEvent.create({
        data: {
          actorUserId: actor.id,
          action:
            status === 'confirmed'
              ? 'ai_recommendation_apply_succeeded'
              : 'ai_recommendation_apply_failed',
          entityModel: apiCmsModels.comfortAiRecommendation,
          entityId: id.toString(),
          correlationId: applyKey,
          payloadJson: error ? { error } : undefined,
        },
      });
      return true;
    });

    if (!updated) throw new ConflictException('Recommendation is not owned by this apply');
    return { status, applyKey };
  }

  @Post('reject')
  @UseGuards(JwtAuthGuard)
  async reject(
    @Request() req: AuthenticatedRequest,
    @Body() body: { id?: string },
  ) {
    const id = parseRecommendationId(body.id);
    const actor = req.user.data;
    const result = await this.prisma.comfortAiRecommendation.updateMany({
      where: {
        id,
        status: { in: ['pending', 'failed'] },
        ...(actor.role === 'admin' ? {} : { authorUserId: actor.id }),
      },
      data: { status: 'rejected', confirmerUserId: actor.id },
    });
    if (result.count !== 1) throw new ConflictException('Recommendation cannot be rejected');
    return { ok: true };
  }
}

function parseRecommendationId(value: unknown): bigint {
  if (typeof value !== 'string' || !/^[1-9]\d*$/.test(value)) {
    throw new BadRequestException('Invalid recommendation id');
  }
  return BigInt(value);
}

function serializeRecommendation(recommendation: {
  id: bigint;
  requiresAdminConfirm: boolean;
  payloadJson: unknown;
  targetService: string;
}) {
  return {
    id: recommendation.id.toString(),
    requiresAdminConfirm: recommendation.requiresAdminConfirm,
    payloadJson: recommendation.payloadJson,
    targetService: recommendation.targetService,
  };
}

function verifyApplyOutcomeProof(
  id: bigint,
  applyKey: string,
  succeeded: boolean,
  proof: unknown,
) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is required for apply outcome proof');
  if (typeof proof !== 'string' || !/^[a-f0-9]{64}$/.test(proof)) {
    throw new ForbiddenException('Invalid apply outcome proof');
  }
  const expected = createHmac('sha256', secret)
    .update(`${id.toString()}:${applyKey}:${succeeded ? 'confirmed' : 'failed'}`)
    .digest();
  const actual = Buffer.from(proof, 'hex');
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    throw new ForbiddenException('Invalid apply outcome proof');
  }
}
