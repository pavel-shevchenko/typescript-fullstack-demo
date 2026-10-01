import { Body, Controller, Get, Post, Request, UseGuards } from 'domain_unified/nest-for-hono';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from 'validation';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('public/auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto);
  }

  @Get('session')
  @UseGuards(JwtAuthGuard)
  session(
    @Request()
    req: { user: { data: { id: bigint; role: 'admin' | 'customer'; email: string } } },
  ) {
    const { id, role, email } = req.user.data;
    return { user: { id: id.toString(), role, email } };
  }
}
