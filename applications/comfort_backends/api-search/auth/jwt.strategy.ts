import { Injectable, UnauthorizedException } from 'domain_unified/nest-for-hono';

type ComfortJwtPayload = {
  sub: string;
  role: 'admin' | 'customer';
  email: string;
};

@Injectable()
export class JwtStrategy {
  validate(payload: ComfortJwtPayload) {
    if (!payload?.sub || !payload.email || !['admin', 'customer'].includes(payload.role)) {
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