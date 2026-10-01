import 'reflect-metadata';
import { defineBigIntToJson, apiMicroservices } from 'types_consts_utils';
import { bootstrapComfortApp } from 'domain_unified/nest-for-hono';
import { ApiCmsModule } from './api-cms.module';

async function bootstrap() {
  defineBigIntToJson();
  await bootstrapComfortApp({
    module: ApiCmsModule,
    globalPrefix: apiMicroservices.apiCms,
    port: Number(process.env.API_CMS_PORT ?? 3000),
    host: '0.0.0.0',
  });
}

void bootstrap();
