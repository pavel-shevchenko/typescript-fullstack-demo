import {
  Controller,
  Get,
  ServiceUnavailableException,
} from 'domain_unified/nest-for-hono';
import { SearchRepository } from 'prisma_search';

@Controller()
export class HealthController {
  constructor(private readonly search: SearchRepository) {}

  @Get('health')
  health() {
    return { status: 'ok', service: 'api-search' };
  }

  @Get('ready')
  async ready() {
    try {
      await this.search.isReady();
      return { status: 'ready' };
    } catch {
      throw new ServiceUnavailableException('search database unavailable');
    }
  }
}
