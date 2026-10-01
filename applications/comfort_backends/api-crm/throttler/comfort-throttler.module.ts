import { Module } from 'domain_unified/nest-for-hono';
import { DomainPrismaThrottlerModule } from 'domain_unified';

@Module({
  imports: [DomainPrismaThrottlerModule],
  exports: [DomainPrismaThrottlerModule],
})
export class ComfortThrottlerModule {}
