import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from 'domain_unified/nest-for-hono';
import type { Request } from 'express';
import { SearchRepository } from 'prisma_search';
import { SearchIndexUpsertDto, SearchQueryDto } from 'validation';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CrmMembershipResolver } from './crm-membership-resolver.service';
import { SearchIndexService } from './search-index.service';

type AuthenticatedRequest = Request & {
  user?: { data?: { role?: string } };
};

@Controller()
export class SearchController {
  constructor(
    private readonly search: SearchRepository,
    private readonly index: SearchIndexService,
    private readonly memberships: CrmMembershipResolver,
  ) {}

  @Post('public/search/query')
  query(@Body() body: SearchQueryDto) {
    return this.search.query(body);
  }

  @Post('customer/search/query')
  @UseGuards(JwtAuthGuard)
  async customerQuery(
    @Body() body: SearchQueryDto,
    @Req() req: AuthenticatedRequest,
  ) {
    if (req.user?.data?.role === 'admin') {
      return this.search.query({ ...body, includeAllTenants: true });
    }
    const allowedTenantKeys = await this.memberships.resolveTenantKeys(
      req.header('authorization'),
    );
    return this.search.query({ ...body, allowedTenantKeys });
  }

  @Post('admin/index/upsert')
  @UseGuards(JwtAuthGuard)
  upsert(
    @Body() body: SearchIndexUpsertDto,
    @Req() req: AuthenticatedRequest,
  ) {
    this.index.assertAdmin(req.user);
    const correlationId = req.header('x-correlation-id') ?? undefined;
    return this.index.upsert(body, correlationId);
  }
}
