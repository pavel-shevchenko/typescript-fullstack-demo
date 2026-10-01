import { Injectable, UnauthorizedException } from 'domain_unified/nest-for-hono';
import { JwtService } from 'domain_unified/nest-for-hono';
import { ApiCmsPrismaService } from 'prisma_cms';
import bcrypt from 'bcryptjs';
import { RegisterDto, LoginDto } from 'validation';

export type ComfortJwtPayload = {
  sub: string;
  role: 'admin' | 'customer';
  email: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: ApiCmsPrismaService,
    private readonly jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: { email: dto.email.toLowerCase(), passwordHash, role: 'customer' },
    });
    return this.signUser(user);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });
    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.signUser(user);
  }

  async getPassportUserById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id: BigInt(id) } });
    if (!user) throw new UnauthorizedException();
    return { data: { id: user.id, role: user.role, email: user.email } };
  }

  private async signUser(user: { id: bigint; role: 'admin' | 'customer'; email: string }) {
    const payload: ComfortJwtPayload = {
      sub: user.id.toString(),
      role: user.role,
      email: user.email,
    };
    return {
      token: await this.jwt.sign(payload),
      user: { id: user.id.toString(), role: user.role, email: user.email },
    };
  }
}
