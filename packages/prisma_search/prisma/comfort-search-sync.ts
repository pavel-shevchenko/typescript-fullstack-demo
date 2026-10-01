import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ApiCrmPrismaClient } from 'prisma_crm';
import { PrismaClient as SearchPrismaClient } from './generated/client';
import {
  isComfortSearchIndexableModel,
  projectComfortSearchRecord,
} from './comfort-search-projection';
import { upsertSearchDocument } from './search-index-upsert';

let searchPrisma: SearchPrismaClient | null = null;
let searchPool: Pool | null = null;

function getSearchPrisma(): SearchPrismaClient | null {
  const connectionString =
    process.env.SEARCH_DATABASE_URL ??
    process.env.SEARCH_DATABASE_DIRECT_URL;
  if (!connectionString) return null;

  if (!searchPrisma) {
    searchPool = new Pool({
      connectionString,
      max: 2,
      connectionTimeoutMillis: 5_000,
      idleTimeoutMillis: 30_000,
      keepAlive: true,
    });
    searchPrisma = new SearchPrismaClient({
      adapter: new PrismaPg(searchPool),
    });
  }
  return searchPrisma;
}

function normalizeMutationRecords(result: unknown): Record<string, unknown>[] {
  if (!result) return [];
  if (Array.isArray(result)) {
    return result.flatMap((item) =>
      item && typeof item === 'object' && !Array.isArray(item)
        ? [item as Record<string, unknown>]
        : [],
    );
  }
  if (typeof result === 'object') {
    return [result as Record<string, unknown>];
  }
  return [];
}

async function resolveTenantSlug(
  record: Record<string, unknown>,
): Promise<string | undefined> {
  const nestedTenant = record.Tenant as { slug?: string } | undefined;
  if (nestedTenant?.slug) return nestedTenant.slug;

  const tenantId = record.tenantId;
  if (tenantId == null) return undefined;

  const crmUrl =
    process.env.CRM_DATABASE_URL ?? process.env.CRM_DATABASE_DIRECT_URL;
  if (!crmUrl) return undefined;

  const pool = new Pool({
    connectionString: crmUrl,
    max: 1,
    connectionTimeoutMillis: 5_000,
    idleTimeoutMillis: 30_000,
    keepAlive: true,
    allowExitOnIdle: true,
  });
  const crmPrisma = new ApiCrmPrismaClient({ adapter: new PrismaPg(pool) });
  try {
    const tenant = await crmPrisma.crmTenant.findUnique({
      where: { id: BigInt(String(tenantId)) },
      select: { slug: true },
    });
    return tenant?.slug;
  } finally {
    await crmPrisma.$disconnect();
    await pool.end();
  }
}

async function reloadSourceRecords(
  sourcePrisma: unknown,
  model: string,
  records: Record<string, unknown>[],
): Promise<Record<string, unknown>[]> {
  const ids = records
    .map((record) => record.id)
    .filter((id) => id != null);
  if (!ids.length || !sourcePrisma || typeof sourcePrisma !== 'object') {
    return records;
  }
  const client = (sourcePrisma as Record<string, unknown>)[model] as
    | { findMany?: (args: unknown) => Promise<Record<string, unknown>[]> }
    | undefined;
  if (!client?.findMany) return records;
  const loaded = await client.findMany({ where: { id: { in: ids } } });
  return loaded.length ? loaded : records;
}

export async function syncComfortSearchRecords(
  model: string,
  mutationResult: unknown,
  sourcePrisma?: unknown,
): Promise<void> {
  if (!isComfortSearchIndexableModel(model)) return;
  const prisma = getSearchPrisma();
  if (!prisma) {
    console.error('comfort search sync skipped: SEARCH_DATABASE_URL is not set');
    return;
  }

  const records = await reloadSourceRecords(
    sourcePrisma,
    model,
    normalizeMutationRecords(mutationResult),
  );
  if (!records.length) return;

  for (const record of records) {
    const tenantSlug =
      model === 'crmContact' ? await resolveTenantSlug(record) : undefined;
    const input = projectComfortSearchRecord(model, record, tenantSlug);
    if (!input) continue;
    await upsertSearchDocument(prisma, input, `comfort-sync:${model}`);
  }
}

export function scheduleComfortSearchSyncAfterMutation(
  model: string,
  mutationResult: unknown,
  sourcePrisma?: unknown,
): void {
  if (!isComfortSearchIndexableModel(model)) return;
  void syncComfortSearchRecords(model, mutationResult, sourcePrisma).catch(
    (error) => {
      console.error('comfort search sync failed', error);
    },
  );
}
