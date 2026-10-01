import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ApiCmsPrismaClient } from 'prisma_cms';
import { ApiCrmPrismaClient } from 'prisma_crm';
import { PrismaClient as SearchPrismaClient } from './generated/client';
import {
  projectCmsArticle,
  projectCmsPage,
  projectCmsPromoBlock,
  projectCrmContact,
} from './comfort-search-projection';
import { upsertSearchDocument } from './search-index-upsert';

function createSearchClient(connectionString: string) {
  const pool = new Pool({
    connectionString,
    max: 1,
    connectionTimeoutMillis: 5_000,
    idleTimeoutMillis: 1_000,
    keepAlive: false,
    allowExitOnIdle: true,
  });
  return {
    prisma: new SearchPrismaClient({ adapter: new PrismaPg(pool) }),
    pool,
  };
}

export type ComfortReindexSummary = {
  indexed: number;
  skipped: number;
};

export async function reindexComfortSearchFromSources(options?: {
  searchDatabaseUrl?: string;
  cmsDatabaseUrl?: string;
  crmDatabaseUrl?: string;
}): Promise<ComfortReindexSummary> {
  const searchUrl =
    options?.searchDatabaseUrl ??
    process.env.SEARCH_DATABASE_DIRECT_URL ??
    process.env.SEARCH_DATABASE_URL;
  const cmsUrl =
    options?.cmsDatabaseUrl ??
    process.env.CMS_DATABASE_DIRECT_URL ??
    process.env.CMS_DATABASE_URL;
  const crmUrl =
    options?.crmDatabaseUrl ??
    process.env.CRM_DATABASE_DIRECT_URL ??
    process.env.CRM_DATABASE_URL;

  if (!searchUrl) {
    throw new Error(
      'SEARCH_DATABASE_DIRECT_URL or SEARCH_DATABASE_URL must be set for reindex.',
    );
  }

  const { prisma: searchPrisma, pool: searchPool } = createSearchClient(searchUrl);

  let indexed = 0;
  let skipped = 0;

  try {
    if (cmsUrl) {
      const cmsPool = new Pool({
        connectionString: cmsUrl,
        max: 1,
        connectionTimeoutMillis: 5_000,
        idleTimeoutMillis: 1_000,
        keepAlive: false,
        allowExitOnIdle: true,
      });
      const cmsPrisma = new ApiCmsPrismaClient({ adapter: new PrismaPg(cmsPool) });
      try {
        const [pages, articles, promos] = await Promise.all([
          cmsPrisma.cmsPage.findMany(),
          cmsPrisma.cmsArticle.findMany(),
          cmsPrisma.cmsPromoBlock.findMany(),
        ]);

        for (const page of pages) {
          const input = projectCmsPage(page);
          if (input.status !== 'published') {
            skipped += 1;
            continue;
          }
          await upsertSearchDocument(searchPrisma, input, 'comfort-reindex');
          indexed += 1;
        }
        for (const article of articles) {
          const input = projectCmsArticle(article);
          if (input.status !== 'published') {
            skipped += 1;
            continue;
          }
          await upsertSearchDocument(searchPrisma, input, 'comfort-reindex');
          indexed += 1;
        }
        for (const promo of promos) {
          const input = projectCmsPromoBlock(promo);
          if (input.status !== 'published') {
            skipped += 1;
            continue;
          }
          await upsertSearchDocument(searchPrisma, input, 'comfort-reindex');
          indexed += 1;
        }
      } finally {
        await cmsPrisma.$disconnect();
        await cmsPool.end();
      }
    }

    if (crmUrl) {
      const crmPool = new Pool({
        connectionString: crmUrl,
        max: 1,
        connectionTimeoutMillis: 5_000,
        idleTimeoutMillis: 1_000,
        keepAlive: false,
        allowExitOnIdle: true,
      });
      const crmPrisma = new ApiCrmPrismaClient({ adapter: new PrismaPg(crmPool) });
      try {
        const contacts = await crmPrisma.crmContact.findMany({
          include: { Tenant: { select: { slug: true } } },
        });
        for (const contact of contacts) {
          const tenantSlug = contact.Tenant?.slug;
          if (!tenantSlug) {
            skipped += 1;
            continue;
          }
          await upsertSearchDocument(
            searchPrisma,
            projectCrmContact(contact, tenantSlug),
            'comfort-reindex',
          );
          indexed += 1;
        }
      } finally {
        await crmPrisma.$disconnect();
        await crmPool.end();
      }
    }

    return { indexed, skipped };
  } finally {
    await searchPrisma.$disconnect();
    await searchPool.end();
  }
}
