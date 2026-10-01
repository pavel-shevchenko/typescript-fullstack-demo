import { BadRequestException, Body, Controller, Post, UseGuards } from 'domain_unified/nest-for-hono';
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
import { ComfortAiCallLogDto } from 'validation';
import {
  ensureCmsAdminCreate,
  resolveCmsAdminOnlyScope,
} from '../cms/cms-access';

const authDecorators: MethodDecorator[] = [UseGuards(JwtAuthGuard)];

const ComfortAiCallLogDomainController = buildDomainController<
  IDomainController,
  typeof apiCmsModels.comfortAiCallLog,
  ApiCmsPrismaService,
  unknown
>({
  microService: apiMicroservices.apiCms,
  prismaModel: apiCmsModels.comfortAiCallLog,
  dtoClass: ComfortAiCallLogDto,
  includePermissions: {
    admin: true as const,
    customer: {},
  },
  prismaAutoCacheInvalidation: { enabled: true },
  prismaGetMany: {
    checkPermAndGetScope: resolveCmsAdminOnlyScope,
    methodDecorators: authDecorators,
  },
  prismaCreateMany: {
    checkPermissions: ensureCmsAdminCreate,
    methodDecorators: authDecorators,
  },
});

@Controller(`public/domain/${apiCmsModels.comfortAiCallLog}`)
export class ComfortAiCallLogController extends ComfortAiCallLogDomainController {
  constructor(private readonly prisma: ApiCmsPrismaService) {
    super(prisma);
  }

  @Post('record-own-request')
  @UseGuards(JwtAuthGuard)
  async recordOwnRequest(
    @Body()
    body: {
      correlationId?: string;
      provider?: string;
      latencyMs?: number;
      promptChars?: number;
      responseChars?: number;
      success?: boolean;
    },
  ) {
    if (
      typeof body.provider !== 'string' ||
      body.provider.length > 100 ||
      !isBoundedInteger(body.latencyMs, 0, 300_000) ||
      !isBoundedInteger(body.promptChars, 0, 1_000_000) ||
      !isBoundedInteger(body.responseChars, 0, 10_000_000)
    ) {
      throw new BadRequestException('Invalid AI call log');
    }
    await this.prisma.comfortAiCallLog.create({
      data: {
        correlationId:
          typeof body.correlationId === 'string' ? body.correlationId.slice(0, 100) : null,
        provider: body.provider,
        latencyMs: body.latencyMs,
        promptChars: body.promptChars,
        responseChars: body.responseChars,
        success: body.success === true,
      },
    });
    return { ok: true };
  }
}

function isBoundedInteger(
  value: unknown,
  minimum: number,
  maximum: number,
): value is number {
  return Number.isInteger(value) && Number(value) >= minimum && Number(value) <= maximum;
}
