CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;

CREATE TYPE "SearchDocumentStatus" AS ENUM ('draft', 'published', 'archived');
CREATE TYPE "SearchIndexJobStatus" AS ENUM ('pending', 'running', 'completed', 'failed');

CREATE TABLE "search_document" (
  "id" BIGSERIAL PRIMARY KEY,
  "externalKey" TEXT NOT NULL UNIQUE,
  "sourceType" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "url" TEXT,
  "status" "SearchDocumentStatus" NOT NULL DEFAULT 'draft',
  "tenantKey" TEXT,
  "metadata" JSONB,
  "contentHash" TEXT NOT NULL,
  "publishedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "search_chunk" (
  "id" BIGSERIAL PRIMARY KEY,
  "documentId" BIGINT NOT NULL REFERENCES "search_document"("id") ON DELETE CASCADE,
  "ordinal" INTEGER NOT NULL,
  "content" TEXT NOT NULL,
  "tokenCount" INTEGER NOT NULL DEFAULT 0,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "search_chunk_documentId_ordinal_key" UNIQUE ("documentId", "ordinal")
);

CREATE TABLE "search_embedding" (
  "id" BIGSERIAL PRIMARY KEY,
  "chunkId" BIGINT NOT NULL UNIQUE REFERENCES "search_chunk"("id") ON DELETE CASCADE,
  "model" TEXT NOT NULL,
  "dimensions" INTEGER NOT NULL DEFAULT 1536,
  "vector" vector(1536),
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "search_index_job" (
  "id" BIGSERIAL PRIMARY KEY,
  "documentId" BIGINT REFERENCES "search_document"("id") ON DELETE SET NULL,
  "externalKey" TEXT,
  "status" "SearchIndexJobStatus" NOT NULL DEFAULT 'pending',
  "operation" TEXT NOT NULL,
  "message" TEXT,
  "correlationId" TEXT,
  "startedAt" TIMESTAMP(3),
  "finishedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

-- FTS config/hunspell and generated searchVector are applied by search-db-setup.ts
-- (comfort_fts: unaccent → hunspell RU/EN → snowball). Keep a simple generated
-- column here only as a placeholder if this file is applied in isolation.
ALTER TABLE "search_chunk"
  ADD COLUMN IF NOT EXISTS "searchVector" tsvector
  GENERATED ALWAYS AS (to_tsvector('simple', coalesce("content", ''))) STORED;

CREATE INDEX IF NOT EXISTS "search_chunk_search_vector_idx"
  ON "search_chunk" USING GIN ("searchVector");

CREATE INDEX IF NOT EXISTS "search_chunk_content_trgm_idx"
  ON "search_chunk" USING GIN ("content" gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "search_embedding_vector_hnsw_idx"
  ON "search_embedding" USING hnsw ("vector" vector_cosine_ops);

CREATE INDEX "search_document_status_updatedAt_idx"
  ON "search_document" ("status", "updatedAt");
CREATE INDEX "search_document_tenantKey_idx"
  ON "search_document" ("tenantKey");
CREATE INDEX "search_chunk_documentId_idx"
  ON "search_chunk" ("documentId");
CREATE INDEX "search_index_job_status_createdAt_idx"
  ON "search_index_job" ("status", "createdAt");
