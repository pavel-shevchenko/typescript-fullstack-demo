-- CreateExtension
CREATE EXTENSION IF NOT EXISTS vector;

-- CreateEnum
CREATE TYPE "SearchDocumentStatus" AS ENUM ('draft', 'published', 'archived');

-- CreateEnum
CREATE TYPE "SearchIndexJobStatus" AS ENUM ('pending', 'running', 'completed', 'failed');

-- CreateTable
CREATE TABLE "search_document" (
    "id" BIGSERIAL NOT NULL,
    "externalKey" TEXT NOT NULL,
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
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_chunk" (
    "id" BIGSERIAL NOT NULL,
    "documentId" BIGINT NOT NULL,
    "ordinal" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "tokenCount" INTEGER NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_chunk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_embedding" (
    "id" BIGSERIAL NOT NULL,
    "chunkId" BIGINT NOT NULL,
    "model" TEXT NOT NULL,
    "dimensions" INTEGER NOT NULL DEFAULT 1536,
    "vector" vector(1536),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_embedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_index_job" (
    "id" BIGSERIAL NOT NULL,
    "documentId" BIGINT,
    "externalKey" TEXT,
    "status" "SearchIndexJobStatus" NOT NULL DEFAULT 'pending',
    "operation" TEXT NOT NULL,
    "message" TEXT,
    "correlationId" TEXT,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_index_job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "search_document_externalKey_key" ON "search_document"("externalKey");

-- CreateIndex
CREATE INDEX "search_document_status_updatedAt_idx" ON "search_document"("status", "updatedAt");

-- CreateIndex
CREATE INDEX "search_document_tenantKey_idx" ON "search_document"("tenantKey");

-- CreateIndex
CREATE INDEX "search_chunk_documentId_idx" ON "search_chunk"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "search_chunk_documentId_ordinal_key" ON "search_chunk"("documentId", "ordinal");

-- CreateIndex
CREATE UNIQUE INDEX "search_embedding_chunkId_key" ON "search_embedding"("chunkId");

-- CreateIndex
CREATE INDEX "search_index_job_status_createdAt_idx" ON "search_index_job"("status", "createdAt");

-- AddForeignKey
ALTER TABLE "search_chunk" ADD CONSTRAINT "search_chunk_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "search_document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "search_embedding" ADD CONSTRAINT "search_embedding_chunkId_fkey" FOREIGN KEY ("chunkId") REFERENCES "search_chunk"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "search_index_job" ADD CONSTRAINT "search_index_job_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "search_document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
