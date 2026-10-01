import { Global, Module } from 'domain_unified/nest-for-hono';
import { JwtModule } from 'domain_unified/nest-for-hono';
import { PassportModule } from 'domain_unified/nest-for-hono';
import { ApiCrmPrismaService } from 'prisma_crm';
import { JwtStrategy } from './jwt.strategy';

const jwtSecret = process.env.JWT_SECRET?.trim();
if (!jwtSecret) throw new Error('JWT_SECRET is required');
const jwtExpiresInSeconds =
  Math.max(1, Number(process.env.JWT_EXPIRES_IN_HOURS ?? 720)) * 3600;

@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: jwtExpiresInSeconds,
      },
    }),
  ],
  providers: [JwtStrategy, ApiCrmPrismaService],
  exports: [JwtModule, PassportModule, ApiCrmPrismaService],
})
export class AuthModule {}
