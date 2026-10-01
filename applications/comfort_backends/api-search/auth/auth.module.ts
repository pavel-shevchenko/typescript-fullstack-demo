import { Global, Module } from 'domain_unified/nest-for-hono';
import { JwtModule } from 'domain_unified/nest-for-hono';
import { PassportModule } from 'domain_unified/nest-for-hono';
import { JwtStrategy } from './jwt.strategy';

@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: process.env.JWT_SECRET?.trim() || 'dev-secret' }),
  ],
  providers: [JwtStrategy],
  exports: [JwtModule, PassportModule],
})
export class AuthModule {}
