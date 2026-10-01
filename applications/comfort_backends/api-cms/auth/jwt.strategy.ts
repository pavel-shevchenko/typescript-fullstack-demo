import { Injectable } from 'domain_unified/nest-for-hono';
import { AuthService, type ComfortJwtPayload } from './auth.service';

@Injectable()
export class JwtStrategy {
  constructor(private readonly authService: AuthService) {}

  validate(payload: ComfortJwtPayload) {
    return this.authService.getPassportUserById(Number(payload.sub));
  }
}