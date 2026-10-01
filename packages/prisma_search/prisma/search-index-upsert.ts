import { createHash } from 'node:crypto';
import type { PrismaClient } from './generated/client';
import type { SearchDocumentStatus } from './generated/client';

export type SearchIndexUpsertInput = {
  externalKey: string;
  sourceType: string;
  title: string;
  body: string;
  url?: string;
  status?: SearchDocumentStatus;
  tenantKey?: string;
  metadata?: Record<string, unknown>;
  semanticVector?: number[];
};

const splitIntoChunks = (body: string): string[] => {
  const normalized = body.trim();
  if (!normalized) return [''];
  return (
    normalized.match(/[\s\S]{1,1200}(?:\s|$)/g)?.map((part) => part.trim()) ?? [
      normalized,
    ]
  );
};

export async function upsertSearchDocument(
  prisma: PrismaClient,
  input: SearchIndexUpsertInput,
  correlationId?: string,
): Promise<{ documentId: string; chunks: number; unchanged: boolean }> {
  const status = input.status ?? 'published';
  const contentHash = createHash('sha256').update(input.body).digest('hex');
  const metadata = input.metadata as
    | import('./generated/client').Prisma.InputJsonValue
    | undefined;

  const existing = await prisma.searchDocument.findUnique({
    where: { externalKey: input.externalKey },
    select: { id: true, contentHash: true },
  });
  if (existing?.contentHash === contentHash) {
    return {
      documentId: existing.id.toString(),
      chunks: await prisma.searchChunk.count({
        where: { documentId: existing.id },
      }),
      unchanged: true,
    };
  }

  const job = await prisma.searchIndexJob.create({
    data: {
      externalKey: input.externalKey,
      operation: 'upsert',
      status: 'running',
      startedAt: new Date(),
      correlationId,
    },
  });

  try {
    const chunks = splitIntoChunks(input.body);
    const document = await prisma.$transaction(async (tx) => {
      const saved = await tx.searchDocument.upsert({
        where: { externalKey: input.externalKey },
        update: {
          sourceType: input.sourceType,
          title: input.title,
          body: input.body,
          url: input.url,
          status,
          tenantKey: input.tenantKey,
          metadata,
          contentHash,
          publishedAt: status === 'published' ? new Date() : null,
        },
        create: {
          externalKey: input.externalKey,
          sourceType: input.sourceType,
          title: input.title,
          body: input.body,
          url: input.url,
          status,
          tenantKey: input.tenantKey,
          metadata,
          contentHash,
          publishedAt: status === 'published' ? new Date() : null,
        },
      });
      await tx.searchChunk.deleteMany({ where: { documentId: saved.id } });
      await tx.searchChunk.createMany({
        data: chunks.map((content, ordinal) => ({
          documentId: saved.id,
          ordinal,
          content,
          tokenCount: content.split(/\s+/).filter(Boolean).length,
        })),
      });
      return saved;
    });

    if (input.semanticVector?.length) {
      const firstChunk = await prisma.searchChunk.findFirstOrThrow({
        where: { documentId: document.id },
        orderBy: { ordinal: 'asc' },
      });
      const vectorText = `[${input.semanticVector.join(',')}]`;
      await prisma.searchEmbedding.upsert({
        where: { chunkId: firstChunk.id },
        update: { model: 'external', dimensions: 1536 },
        create: {
          chunkId: firstChunk.id,
          model: 'external',
          dimensions: 1536,
        },
      });
      try {
        const { Prisma } = await import('./generated/client');
        await prisma.$executeRaw(Prisma.sql`
          UPDATE "search_embedding"
          SET "vector" = ${vectorText}::vector
          WHERE "chunkId" = ${firstChunk.id}
        `);
      } catch {
        await prisma.searchEmbedding.update({
          where: { chunkId: firstChunk.id },
          data: {
            metadata: {
              vectorStatus: 'unavailable',
              fallback: 'postgresql-full-text',
            },
          },
        });
      }
    }

    await prisma.searchIndexJob.update({
      where: { id: job.id },
      data: {
        documentId: document.id,
        status: 'completed',
        finishedAt: new Date(),
      },
    });
    return {
      documentId: document.id.toString(),
      chunks: chunks.length,
      unchanged: false,
    };
  } catch (error) {
    await prisma.searchIndexJob.update({
      where: { id: job.id },
      data: {
        status: 'failed',
        message:
          error instanceof Error ? error.message.slice(0, 1000) : 'unknown',
        finishedAt: new Date(),
      },
    });
    throw error;
  }
}
