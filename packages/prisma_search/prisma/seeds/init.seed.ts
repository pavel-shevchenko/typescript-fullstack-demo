import { createHash } from 'node:crypto';
import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ensureSearchDatabaseFeatures } from '../search-db-setup';
import { reindexComfortSearchFromSources } from '../comfort-reindex';
import { upsertSearchDocument } from '../search-index-upsert';

function createPrismaClientForSeeding() {
  const connectionString =
    process.env.SEARCH_DATABASE_DIRECT_URL ?? process.env.SEARCH_DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      'SEARCH_DATABASE_DIRECT_URL or SEARCH_DATABASE_URL must be set for PrismaPg adapter.',
    );
  }

  const pool = new Pool({
    connectionString,
    max: 1,
    connectionTimeoutMillis: 5_000,
    idleTimeoutMillis: 1_000,
    keepAlive: false,
    allowExitOnIdle: true,
  });
  return {
    prisma: new PrismaClient({ adapter: new PrismaPg(pool) }),
    pool,
  };
}

async function main() {
  const connectionString =
    process.env.SEARCH_DATABASE_DIRECT_URL ?? process.env.SEARCH_DATABASE_URL;
  if (!connectionString) {
    throw new Error('SEARCH_DATABASE_URL must be set for search seed.');
  }

  await ensureSearchDatabaseFeatures(connectionString);

  const { prisma, pool } = createPrismaClientForSeeding();
  try {
    const introBody =
      'Comfort объединяет публичный контент, CRM и PostgreSQL-поиск. Поиск индексирует опубликованные CMS-материалы и CRM-контакты автоматически.';
    await upsertSearchDocument(prisma, {
      externalKey: 'comfort-search-intro',
      sourceType: 'seed',
      title: 'Поиск Comfort',
      body: introBody,
      status: 'published',
      metadata: { kind: 'search-intro' },
    });

    const summary = await reindexComfortSearchFromSources();
    console.log(
      'Search seed ok, reindexed=',
      summary.indexed,
      'skipped=',
      summary.skipped,
      'introHash=',
      createHash('sha256').update(introBody).digest('hex').slice(0, 12),
    );
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Search seed failed:', error);
    process.exit(1);
  });
