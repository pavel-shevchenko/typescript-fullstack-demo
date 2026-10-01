import {
  MiddlewareConsumer,
  Module,
  type ConfigurableModule,
} from 'domain_unified/nest-for-hono';
import { ApiSearchPrismaService, SearchRepository } from 'prisma_search';
import { AuthModule } from './auth/auth.module';
import { CodingSchemaController } from './coding/coding-schema.controller';
import { CorrelationMiddleware } from './correlation.middleware';
import { SearchDomainUnifiedModule } from './domain-unified/domain-unified.module';
import { HealthController } from './health.controller';
import { CrmMembershipResolver } from './search/crm-membership-resolver.service';
import { SearchIndexService } from './search/search-index.service';
import { SearchController } from './search/search.controller';
import { ComfortThrottlerModule } from './throttler/comfort-throttler.module';

@Module({
  imports: [AuthModule, ComfortThrottlerModule, SearchDomainUnifiedModule],
  controllers: [HealthController, CodingSchemaController, SearchController],
  providers: [
    ApiSearchPrismaService,
    SearchRepository,
    CrmMembershipResolver,
    SearchIndexService,
  ],
})
export class ApiSearchModule implements ConfigurableModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationMiddleware).forRoutes('*');
  }
}
