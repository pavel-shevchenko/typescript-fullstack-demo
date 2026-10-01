import { Global, Module } from '../nest-for-hono/decorators';
import { PassportUserThrottlerGuard } from './passport-user-throttler.guard';

@Global()
@Module({
  providers: [PassportUserThrottlerGuard],
  exports: [PassportUserThrottlerGuard],
})
export class DomainPrismaThrottlerModule {}
