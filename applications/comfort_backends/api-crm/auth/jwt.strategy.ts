import { Injectable } from 'domain_unified/nest-for-hono';

export type ComfortJwtPayload = {
  sub: string;
  role: 'admin' | 'customer';
  email: string;
};

@Injectable()
export class JwtStrategy {
  validate(payload: ComfortJwtPayload) {
    return {
      data: {
        id: BigInt(payload.sub),
        role: payload.role,
        email: payload.email,
      },
    };
  }
}