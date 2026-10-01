import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schemas',
  migrations: {
    path: 'prisma/migrations',
    seed: 'bun run --bun seed',
  },
  datasource: {
    url:
      process.env.SEARCH_DATABASE_URL ??
      process.env.SEARCH_DATABASE_DIRECT_URL,
  },
});
