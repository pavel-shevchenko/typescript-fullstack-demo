import { SignJWT, jwtVerify } from 'jose';
import { UnauthorizedException } from './http-errors';
import { Injectable, PassportModule, type DynamicModule } from './decorators';

export type ComfortJwtPayload = {
  sub: string;
  role: 'admin' | 'customer';
  email: string;
};

export type JwtModuleOptions = {
  secret: string;
  signOptions?: { expiresIn?: number };
};

export class JwtService {
  private readonly secret: Uint8Array;
  private readonly expiresInSeconds: number;

  constructor(options: JwtModuleOptions) {
    this.secret = new TextEncoder().encode(options.secret);
    this.expiresInSeconds = options.signOptions?.expiresIn ?? 720 * 3600;
  }

  async sign(payload: ComfortJwtPayload): Promise<string> {
    return new SignJWT({ ...payload })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(`${this.expiresInSeconds}s`)
      .sign(this.secret);
  }

  async signAsync(payload: ComfortJwtPayload): Promise<string> {
    return this.sign(payload);
  }

  async verifyAsync(token: string): Promise<ComfortJwtPayload> {
    const { payload } = await jwtVerify(token, this.secret);
    return payload as unknown as ComfortJwtPayload;
  }
}

export class JwtModule {
  static register(options: JwtModuleOptions): DynamicModule {
    const jwtService = new JwtService(options);
    return {
      module: JwtModule,
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      providers: [{ provide: JwtService, useValue: jwtService }],
      exports: [JwtService, PassportModule],
    };
  }
}

export function requiredJwtSecret(): string {
  const secret = process.env.JWT_SECRET?.trim();
  if (!secret) throw new Error('JWT_SECRET is required');
  return secret;
}

export function extractBearerToken(authorization?: string | null): string | null {
  if (!authorization) return null;
  const [scheme, token] = authorization.split(' ');
  if (scheme?.toLowerCase() !== 'bearer' || !token) return null;
  return token.trim();
}

export async function verifyComfortJwt(token: string): Promise<{
  data: { id: bigint; role: 'admin' | 'customer'; email: string };
}> {
  const jwt = new JwtService({ secret: requiredJwtSecret() });
  const payload = await jwt.verifyAsync(token);
  if (
    !payload?.sub ||
    !payload.email ||
    !['admin', 'customer'].includes(payload.role)
  ) {
    throw new UnauthorizedException();
  }
  return {
    data: {
      id: BigInt(payload.sub),
      role: payload.role,
      email: payload.email,
    },
  };
}

@Injectable()
export class JwtStrategy {
  async validate(payload: ComfortJwtPayload) {
    if (
      !payload?.sub ||
      !payload.email ||
      !['admin', 'customer'].includes(payload.role)
    ) {
      throw new UnauthorizedException();
    }
    return {
      data: {
        id: BigInt(payload.sub),
        role: payload.role,
        email: payload.email,
      },
    };
  }
}

@Injectable()
export class JwtAuthGuard {
  async canActivate(ctx: {
    req: { header: (name: string) => string | undefined };
    set: (key: string, value: unknown) => void;
  }): Promise<boolean> {
    const token = extractBearerToken(ctx.req.header('authorization'));
    if (!token) throw new UnauthorizedException();
    const user = await verifyComfortJwt(token);
    ctx.set('user', user);
    return true;
  }
}
