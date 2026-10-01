import { Pool } from 'pg';

/** Named text-search config: unaccent → hunspell (if dict files exist) → snowball. */
export const COMFORT_FTS_CONFIG = 'comfort_fts';

function createSetupPool(connectionString: string) {
  const pool = new Pool({
    connectionString,
    max: 1,
    connectionTimeoutMillis: 5_000,
    idleTimeoutMillis: 30_000,
    keepAlive: true,
    allowExitOnIdle: true,
  });
  return pool;
}

async function tryCreateIspellDictionary(
  pool: Pool,
  name: string,
  dictFile: string,
  affFile: string,
  stopWords: string,
): Promise<boolean> {
  try {
    await pool.query(`
      CREATE TEXT SEARCH DICTIONARY ${name} (
        TEMPLATE = ispell,
        DictFile = ${dictFile},
        AffFile = ${affFile},
        StopWords = ${stopWords}
      )
    `);
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (/already exists/i.test(message)) return true;
    console.warn(
      `Comfort FTS: hunspell dictionary "${name}" unavailable (${message.trim()}); using snowball fallback`,
    );
    return false;
  }
}

async function dictionaryExists(pool: Pool, name: string): Promise<boolean> {
  const result = await pool.query<{ exists: boolean }>(
    `SELECT EXISTS(SELECT 1 FROM pg_ts_dict WHERE dictname = $1) AS exists`,
    [name],
  );
  return Boolean(result.rows[0]?.exists);
}

/** Call before `prisma db push` (tables may not exist yet). */
export async function ensureSearchDatabaseExtensions(
  connectionString: string,
): Promise<void> {
  const pool = createSetupPool(connectionString);
  try {
    await pool.query('CREATE EXTENSION IF NOT EXISTS vector');
    await pool.query('CREATE EXTENSION IF NOT EXISTS pg_trgm');
    await pool.query('CREATE EXTENSION IF NOT EXISTS unaccent');
    await pool.query(`
      CREATE OR REPLACE FUNCTION comfort_unaccent(txt text)
      RETURNS text
      LANGUAGE sql
      IMMUTABLE PARALLEL SAFE STRICT
      AS $$ SELECT public.unaccent('public.unaccent'::regdictionary, txt) $$
    `);
    await ensureComfortFtsConfiguration(pool);
  } finally {
    await pool.end();
  }
}

export async function ensureComfortFtsConfiguration(pool: Pool): Promise<void> {
  const enHunspell = await tryCreateIspellDictionary(
    pool,
    'comfort_en_hunspell',
    'en_us',
    'en_us',
    'english',
  );
  const ruHunspell = await tryCreateIspellDictionary(
    pool,
    'comfort_ru_hunspell',
    'ru_ru',
    'ru_ru',
    'russian',
  );
  const hasEn = enHunspell || (await dictionaryExists(pool, 'comfort_en_hunspell'));
  const hasRu = ruHunspell || (await dictionaryExists(pool, 'comfort_ru_hunspell'));

  await pool.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_ts_config WHERE cfgname = '${COMFORT_FTS_CONFIG}') THEN
        CREATE TEXT SEARCH CONFIGURATION ${COMFORT_FTS_CONFIG} (COPY = pg_catalog.simple);
      END IF;
    END $$
  `);

  const enChain = hasEn
    ? 'unaccent, comfort_en_hunspell, english_stem'
    : 'unaccent, english_stem';
  const ruChain = hasRu
    ? 'unaccent, comfort_ru_hunspell, russian_stem'
    : 'unaccent, russian_stem';

  await pool.query(`
    ALTER TEXT SEARCH CONFIGURATION ${COMFORT_FTS_CONFIG}
      ALTER MAPPING FOR asciiword, asciihword, hword_asciipart
      WITH ${enChain}
  `);
  await pool.query(`
    ALTER TEXT SEARCH CONFIGURATION ${COMFORT_FTS_CONFIG}
      ALTER MAPPING FOR word, hword, hword_part
      WITH ${ruChain}
  `);
}

/** Call after `prisma db push` (needs `search_chunk`). */
export async function ensureSearchDatabaseFtsColumns(
  connectionString: string,
): Promise<void> {
  const pool = createSetupPool(connectionString);
  try {
    await ensureComfortFtsConfiguration(pool);
    await pool.query(`
      DO $$
      DECLARE
        generated_kind "char";
        gen_expr text;
      BEGIN
        SELECT a.attgenerated, pg_get_expr(ad.adbin, ad.adrelid)
        INTO generated_kind, gen_expr
        FROM pg_attribute a
        JOIN pg_class c ON c.oid = a.attrelid
        JOIN pg_namespace n ON n.oid = c.relnamespace
        LEFT JOIN pg_attrdef ad ON ad.adrelid = a.attrelid AND ad.adnum = a.attnum
        WHERE n.nspname = 'public'
          AND c.relname = 'search_chunk'
          AND a.attname = 'searchVector'
          AND a.attnum > 0
          AND NOT a.attisdropped;

        IF generated_kind IS DISTINCT FROM 's'
           OR gen_expr IS NULL
           OR position('${COMFORT_FTS_CONFIG}' in coalesce(gen_expr, '')) = 0 THEN
          DROP INDEX IF EXISTS "search_chunk_search_vector_idx";
          ALTER TABLE "search_chunk" DROP COLUMN IF EXISTS "searchVector";
          ALTER TABLE "search_chunk"
            ADD COLUMN "searchVector" tsvector
            GENERATED ALWAYS AS (
              to_tsvector('${COMFORT_FTS_CONFIG}'::regconfig, coalesce(content, ''))
            ) STORED;
        END IF;
      END $$;
    `);
    await pool.query(`
      CREATE INDEX IF NOT EXISTS "search_chunk_search_vector_idx"
      ON "search_chunk" USING GIN ("searchVector")
    `);
    await pool.query(`
      CREATE INDEX IF NOT EXISTS "search_chunk_content_trgm_idx"
      ON "search_chunk" USING GIN (content gin_trgm_ops)
    `);
  } finally {
    await pool.end();
  }
}

/** Full setup when tables already exist (seed / reindex). */
export async function ensureSearchDatabaseFeatures(
  connectionString: string,
): Promise<void> {
  await ensureSearchDatabaseExtensions(connectionString);
  await ensureSearchDatabaseFtsColumns(connectionString);
}
