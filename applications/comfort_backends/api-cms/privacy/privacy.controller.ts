import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Req,
  UseGuards,
} from 'domain_unified/nest-for-hono';
import { randomUUID } from 'node:crypto';
import { ApiCmsPrismaService, type ApiCmsPrisma } from 'prisma_cms';
import {
  apiMicroservices,
  type IApiRequest,
} from 'types_consts_utils';
import { getApiBaseUrl } from 'types_consts_utils/server';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

type PrivacyInput = { userId?: string };
type PrivacyRequest = IApiRequest & {
  headers: { authorization?: string; [key: string]: unknown };
  header?: (name: string) => string | undefined;
};

function correlationIdFrom(req: PrivacyRequest): string {
  const fromHeader =
    req.header?.('x-correlation-id') ??
    (typeof req.headers['x-correlation-id'] === 'string'
      ? req.headers['x-correlation-id']
      : undefined);
  return fromHeader?.trim() || randomUUID();
}

function bearerFrom(req: PrivacyRequest): string {
  return (
    req.header?.('authorization') ??
    (typeof req.headers.authorization === 'string' ? req.headers.authorization : '')
  );
}

@Controller('public/privacy')
@UseGuards(JwtAuthGuard)
export class PrivacyController {
  constructor(private readonly prisma: ApiCmsPrismaService) {}

  private async target(req: IApiRequest, input: PrivacyInput) {
    const actor = req.user?.data;
    if (!actor) throw new ForbiddenException();
    const userId = input.userId ? BigInt(input.userId) : actor.id;
    if (actor.role !== 'admin' && userId !== actor.id) throw new ForbiddenException();
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, role: true, createdAt: true, updatedAt: true },
    });
    if (!user) throw new ForbiddenException('User not found');
    return { actor, user };
  }

  private async crm<T>(
    path: 'export' | 'delete',
    authorization: string,
    correlationId: string,
    body: { userId: string; email: string },
  ): Promise<T> {
    const response = await fetch(
      `${getApiBaseUrl(apiMicroservices.apiCrm)}internal/privacy/${path}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization,
          'x-correlation-id': correlationId,
        },
        body: JSON.stringify(body),
      },
    );
    if (!response.ok) {
      const detail = (await response.text().catch(() => '')).slice(0, 400);
      throw new Error(
        `CRM privacy ${path} failed (${response.status})${detail ? `: ${detail}` : ''}`,
      );
    }
    return response.json() as Promise<T>;
  }

  @Post('export')
  async exportData(@Req() req: PrivacyRequest, @Body() input: PrivacyInput) {
    const { actor, user } = await this.target(req, input);
    const correlationId = correlationIdFrom(req);
    const crm = await this.crm(
      'export',
      bearerFrom(req),
      correlationId,
      { userId: user.id.toString(), email: user.email },
    );
    await this.prisma.comfortAuditEvent.create({
      data: {
        actorUserId: actor.id,
        action: 'privacy.export',
        entityModel: 'User',
        entityId: user.id.toString(),
        correlationId,
        payloadJson: { includes: ['cms.user', 'crm.memberships', 'crm.contacts'] },
      },
    });
    return {
      format: 'comfort-privacy-export-v1',
      exportedAt: new Date().toISOString(),
      correlationId,
      data: {
        cms: {
          user: {
            ...user,
            id: user.id.toString(),
          },
        },
        crm,
      },
    };
  }

  @Post('delete')
  async deleteData(@Req() req: PrivacyRequest, @Body() input: PrivacyInput) {
    const { actor, user } = await this.target(req, input);
    const correlationId = correlationIdFrom(req);
    const crm = await this.crm<Record<string, unknown>>(
      'delete',
      bearerFrom(req),
      correlationId,
      { userId: user.id.toString(), email: user.email },
    );
    const anonymizedEmail = `deleted+${user.id}+${randomUUID()}@invalid.local`;
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: user.id },
        data: {
          email: anonymizedEmail,
          passwordHash: `!deleted:${randomUUID()}`,
          role: 'customer',
        },
        select: { id: true },
      }),
      this.prisma.comfortAuditEvent.create({
        data: {
          actorUserId: actor.id === user.id ? null : actor.id,
          action: 'privacy.delete',
          entityModel: 'User',
          entityId: user.id.toString(),
          correlationId,
          payloadJson: { crm, userAnonymized: true } as ApiCmsPrisma.InputJsonValue,
        },
      }),
    ]);
    return {
      deleted: true,
      correlationId,
      crm,
      transactionLimits:
        'CRM commits first in its own database; CMS user anonymization and audit are atomic only within CMS.',
    };
  }
}
