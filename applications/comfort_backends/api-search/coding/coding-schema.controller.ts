import {
  Controller,
  Get,
  Header,
  NotFoundException,
  Param,
} from 'domain_unified/nest-for-hono';
import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { apiSearchModels } from 'types_consts_utils';

@Controller('public/coding')
export class CodingSchemaController {
  @Get('schema')
  schema() {
    return {
      microservice: 'api-search',
      models: Object.values(apiSearchModels),
      dmmf: {
        searchDocument: {
          fields: [
            'externalKey',
            'sourceType',
            'title',
            'body',
            'url',
            'status',
            'tenantKey',
            'metadata',
          ],
          relations: ['Chunks', 'Jobs'],
        },
        searchChunk: {
          fields: ['documentId', 'ordinal', 'content', 'tokenCount', 'metadata'],
          relations: ['Document', 'Embedding'],
        },
      },
      explicitOperations: ['search/query', 'admin/index/upsert'],
    };
  }

  @Get('runtime/:name')
  @Header('Cache-Control', 'no-store, max-age=0')
  async runtimeArtifact(@Param('name') name: string) {
    if (!/^[a-zA-Z0-9_-]{1,100}$/.test(name)) {
      throw new NotFoundException();
    }
    const root =
      process.env.COMFORT_GENERATED_ROOT ?? '/workspace/generated/runtime';
    const file = join(root, `${name}.json`);
    try {
      const [raw, details] = await Promise.all([
        readFile(file, 'utf8'),
        stat(file),
      ]);
      return {
        name,
        mtimeMs: details.mtimeMs,
        hash: createHash('sha256').update(raw).digest('hex'),
        artifact: JSON.parse(raw) as unknown,
      };
    } catch {
      throw new NotFoundException('runtime artifact not found');
    }
  }
}
