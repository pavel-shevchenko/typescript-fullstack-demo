import { Injectable } from 'domain_unified/nest-for-hono';
import { Prisma } from './generated/client';
import { ApiSearchPrismaService } from './prisma-search.service';
import { COMFORT_FTS_CONFIG } from './search-db-setup';

const ftsConfig = Prisma.raw(`'${COMFORT_FTS_CONFIG}'::regconfig`);

export type SearchQuery = {
  query: string;
  page: number;
  pageSize: number;
  semanticVector?: number[];
  allowedTenantKeys?: string[];
  includeAllTenants?: boolean;
};

export type SearchHit = {
  documentId: string;
  chunkId: string;
  title: string;
  url: string | null;
  excerpt: string;
  score: number;
  metadata: unknown;
};

export type SearchRow = {
  documentId: bigint;
  chunkId: bigint;
  title: string;
  url: string | null;
  excerpt: string;
  score: number;
  metadata: unknown;
  totalCount: bigint;
};

export const shapeSearchRows = (
  rows: SearchRow[],
): { items: SearchHit[]; totalCount: number } => ({
  items: rows.map((row) => ({
    documentId: row.documentId.toString(),
    chunkId: row.chunkId.toString(),
    title: row.title,
    url: row.url,
    excerpt: row.excerpt,
    score: Number(row.score),
    metadata: row.metadata,
  })),
  totalCount: Number(rows[0]?.totalCount ?? 0),
});

@Injectable()
export class SearchRepository {
  constructor(private readonly prisma: ApiSearchPrismaService) {}

  async isReady(): Promise<boolean> {
    await this.prisma.$queryRaw`SELECT 1`;
    return true;
  }

  async query(input: SearchQuery): Promise<{ items: SearchHit[]; totalCount: number }> {
    const skip = (input.page - 1) * input.pageSize;
    const vectorText = input.semanticVector
      ? `[${input.semanticVector.join(',')}]`
      : null;

    const vectorScore = vectorText
      ? Prisma.sql`COALESCE(1 - (e."vector" <=> ${vectorText}::vector), 0)`
      : Prisma.sql`0`;
    const vectorJoin = vectorText
      ? Prisma.sql`LEFT JOIN "search_embedding" e ON e."chunkId" = c.id`
      : Prisma.empty;
    const tenantScope = input.includeAllTenants
      ? Prisma.sql`TRUE`
      : input.allowedTenantKeys?.length
        ? Prisma.sql`(
            d."tenantKey" IS NULL
            OR d."tenantKey" IN (${Prisma.join(input.allowedTenantKeys)})
          )`
        : Prisma.sql`d."tenantKey" IS NULL`;

    let rows: SearchRow[];
    try {
      rows = await this.prisma.$queryRaw<SearchRow[]>(Prisma.sql`
        WITH ranked AS (
        SELECT
          d.id AS "documentId",
          c.id AS "chunkId",
          d.title,
          d.url,
          ts_headline(${ftsConfig}, c.content, plainto_tsquery(${ftsConfig}, ${input.query}),
            'MaxWords=35, MinWords=12, StartSel=<mark>, StopSel=</mark>') AS excerpt,
          (
            ts_rank_cd(c."searchVector", plainto_tsquery(${ftsConfig}, ${input.query})) * 0.65
            + similarity(comfort_unaccent(c.content), comfort_unaccent(${input.query})) * 0.15
            + ${vectorScore} * 0.20
          )::float8 AS score,
          COALESCE(c.metadata, d.metadata) AS metadata
        FROM "search_chunk" c
        JOIN "search_document" d ON d.id = c."documentId"
        ${vectorJoin}
        WHERE d.status = 'published'
          AND ${tenantScope}
          AND (
            (
              c."searchVector" IS NOT NULL
              AND c."searchVector" @@ plainto_tsquery(${ftsConfig}, ${input.query})
            )
            OR comfort_unaccent(c.content) ILIKE '%' || comfort_unaccent(${input.query}) || '%'
            OR c.content % ${input.query}
            ${vectorText ? Prisma.sql`OR e."vector" IS NOT NULL` : Prisma.empty}
          )
        )
        SELECT *, count(*) OVER() AS "totalCount"
        FROM ranked
        ORDER BY score DESC, "chunkId" ASC
        LIMIT ${input.pageSize}
        OFFSET ${skip}
      `);
    } catch (error) {
      if (input.semanticVector) {
        return this.query({ ...input, semanticVector: undefined });
      }
      throw error;
    }

    return shapeSearchRows(rows);
  }
}
