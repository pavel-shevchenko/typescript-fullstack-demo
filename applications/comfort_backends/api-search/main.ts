import 'reflect-metadata';
import { defineBigIntToJson, apiMicroservices } from 'types_consts_utils';
import { bootstrapComfortApp } from 'domain_unified/nest-for-hono';
import { ApiSearchModule } from './api-search.module';

async function bootstrap() {
  defineBigIntToJson();
  await bootstrapComfortApp({
    module: ApiSearchModule,
    globalPrefix: apiMicroservices.apiSearch,
    port: Number(process.env.API_SEARCH_PORT ?? 3000),
    host: '0.0.0.0',
  });
}

void bootstrap();
