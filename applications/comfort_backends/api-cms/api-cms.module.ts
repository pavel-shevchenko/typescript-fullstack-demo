import { Module } from 'domain_unified/nest-for-hono';
import { ApiCmsPrismaService } from 'prisma_cms';
import { AuthModule } from './auth/auth.module';
import { CodingSchemaController } from './coding/coding-schema.controller';
import { CmsDomainUnifiedModule } from './domain-unified/domain-unified.module';
import { PrivacyController } from './privacy/privacy.controller';
import { PublicCmsReadController } from './public/public-cms-read.controller';
import { SeaweedfsModule } from './storage/seaweedfs.module';
import { SystemController } from './system/system.controller';
import { ComfortThrottlerModule } from './throttler/comfort-throttler.module';

@Module({
  imports: [
    AuthModule,
    ComfortThrottlerModule,
    SeaweedfsModule,
    CmsDomainUnifiedModule,
  ],
  controllers: [
    PublicCmsReadController,
    CodingSchemaController,
    PrivacyController,
    SystemController,
  ],
  providers: [ApiCmsPrismaService],
})
export class ApiCmsModule {}
