import { describe, expect, test } from 'bun:test';

process.env.CMS_DATABASE_URL ??= 'postgresql://localhost/comfort_test';
process.env.CRM_DATABASE_URL ??= 'postgresql://localhost/comfort_test';
process.env.SEARCH_DATABASE_URL ??= 'postgresql://localhost/comfort_test';

describe('search query boundary', () => {
  test('rejects empty query and oversized page', async () => {
    const [{ validate }, { SearchQueryDto }] = await Promise.all([
      import('class-validator'),
      import('validation'),
    ]);
    const dto = new SearchQueryDto();
    dto.query = '';
    dto.pageSize = 101;
    const errors = await validate(dto);
    expect(errors.map((error) => error.property)).toContain('query');
    expect(errors.map((error) => error.property)).toContain('pageSize');
  });

  test('shapes bigint identifiers for JSON', async () => {
    const { shapeSearchRows } = await import('prisma_search');
    const result = shapeSearchRows([
      {
        documentId: 10n,
        chunkId: 20n,
        title: 'Result',
        url: null,
        excerpt: 'Excerpt',
        score: 0.75,
        metadata: null,
        totalCount: 3n,
      },
    ]);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]?.documentId).toBe('10');
    expect(result.items[0]?.chunkId).toBe('20');
  });
});
