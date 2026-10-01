import { Module } from 'domain_unified/nest-for-hono';
import { ApiSearchPrismaService } from 'prisma_search';
import {
  SearchChunkController,
  SearchDocumentController,
  SearchEmbeddingController,
  SearchIndexJobController,
} from './search/search.controllers';

@Module({
  controllers: [
    SearchDocumentController,
    SearchChunkController,
    SearchEmbeddingController,
    SearchIndexJobController,
  ],
  providers: [ApiSearchPrismaService],
})
export class SearchDomainUnifiedModule {}
