import { Global, Module } from 'domain_unified/nest-for-hono';
import { JwtModule } from 'domain_unified/nest-for-hono';
import { PassportModule } from 'domain_unified/nest-for-hono';
import { ApiCmsPrismaService } from 'prisma_cms';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
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
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ApiCmsPrismaService],
  exports: [AuthService, JwtModule, PassportModule],
})
export class AuthModule {}
