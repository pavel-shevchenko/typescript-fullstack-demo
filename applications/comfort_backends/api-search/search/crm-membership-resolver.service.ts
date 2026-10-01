import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from 'domain_unified/nest-for-hono';

@Injectable()
export class CrmMembershipResolver {
  async resolveTenantKeys(
    authorization: string | undefined,
  ): Promise<string[]> {
    if (!authorization?.startsWith('Bearer ')) {
      throw new UnauthorizedException();
    }

    const baseUrl =
      process.env.BASE_URL_OF_API_CRM ??
      'http://api-crm:3000/api-crm/';
    const response = await fetch(
      `${baseUrl}public/domain/crmTenantMember/prisma-get-many`,
      {
        method: 'POST',
        headers: {
          authorization,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          prismaGetManyParams: {
            select: { tenantId: true },
            take: 500,
          },
        }),
        signal: AbortSignal.timeout(5_000),
      },
    );

    if (!response.ok) {
      throw new BadGatewayException(
        `CRM membership lookup failed (${response.status})`,
      );
    }

    const payload = (await response.json()) as {
      items?: Array<{ tenantId?: string | number }>;
    };
    return [
      ...new Set(
        (payload.items ?? [])
          .map((item) => String(item.tenantId ?? ''))
          .filter((tenantId) => /^[1-9]\d*$/.test(tenantId)),
      ),
    ];
  }
}
