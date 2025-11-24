import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

dotenvExpand.expand(dotenv.config())
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'schema.prisma',
  migrations: {
    path: 'migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
    extensions: [{ name: 'vector' }],
  },
});

