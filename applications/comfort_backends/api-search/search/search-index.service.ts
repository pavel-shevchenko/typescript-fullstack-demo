import { ForbiddenException, Injectable } from 'domain_unified/nest-for-hono';
import { ApiSearchPrismaService, upsertSearchDocument } from 'prisma_search';
import type { SearchIndexUpsertDto } from 'validation';

@Injectable()
export class SearchIndexService {
  constructor(private readonly prisma: ApiSearchPrismaService) {}

  assertAdmin(user: { data?: { role?: string } } | undefined) {
    if (user?.data?.role !== 'admin') throw new ForbiddenException();
  }

  async upsert(
    input: SearchIndexUpsertDto,
    correlationId?: string,
  ): Promise<{ documentId: string; chunks: number; unchanged: boolean }> {
    return upsertSearchDocument(this.prisma, input, correlationId);
  }
}
