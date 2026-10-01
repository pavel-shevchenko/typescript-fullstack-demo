import { Controller, Get, Header, ServiceUnavailableException } from 'domain_unified/nest-for-hono';
import { renderPrometheusMetrics } from 'domain_unified';
import { ApiCrmPrismaService } from 'prisma_crm';

@Controller()
export class SystemController {
  constructor(private readonly prisma: ApiCrmPrismaService) {}

  @Get('health/live')
  live() {
    return { status: 'ok' };
  }

  @Get('health/ready')
  async ready() {
    try {
      await this.prisma.$queryRawUnsafe('SELECT 1');
      return { status: 'ready' };
    } catch {
      throw new ServiceUnavailableException({ status: 'not-ready' });
    }
  }

  @Get('metrics')
  @Header('content-type', 'text/plain; version=0.0.4; charset=utf-8')
  metrics() {
    return renderPrometheusMetrics('api-crm');
  }
}
