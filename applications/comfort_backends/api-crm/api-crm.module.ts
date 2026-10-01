import { Module } from 'domain_unified/nest-for-hono';
import { ApiCrmPrismaService } from 'prisma_crm';
import { AuthModule } from './auth/auth.module';
import { CodingSchemaController } from './coding/coding-schema.controller';
import { CrmDomainUnifiedModule } from './domain-unified/domain-unified.module';
import { PrivacyController } from './privacy/privacy.controller';
import { SystemController } from './system/system.controller';
import { ComfortThrottlerModule } from './throttler/comfort-throttler.module';

@Module({
  imports: [AuthModule, ComfortThrottlerModule, CrmDomainUnifiedModule],
  controllers: [
    CodingSchemaController,
    PrivacyController,
    SystemController,
  ],
  providers: [ApiCrmPrismaService],
})
export class ApiCrmModule {}
