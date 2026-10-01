import 'reflect-metadata';
import { defineBigIntToJson, apiMicroservices } from 'types_consts_utils';
import { bootstrapComfortApp } from 'domain_unified/nest-for-hono';
import { ApiCrmModule } from './api-crm.module';

async function bootstrap() {
  defineBigIntToJson();
  await bootstrapComfortApp({
    module: ApiCrmModule,
    globalPrefix: apiMicroservices.apiCrm,
    port: Number(process.env.API_CRM_PORT ?? 3000),
    host: '0.0.0.0',
  });
}

void bootstrap();
