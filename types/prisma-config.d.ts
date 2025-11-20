declare module 'prisma/config' {
  import type { PrismaClientOptions } from '@prisma/client';

  interface DatasourceConfig {
    url?: string;
    [key: string]: unknown;
  }

  interface PrismaConfig {
    schema?: string;
    migrations?: {
      path?: string;
    };
    datasource?: DatasourceConfig | Record<string, DatasourceConfig>;
    client?: PrismaClientOptions;
  }

  export function defineConfig(config: PrismaConfig): PrismaConfig;
  export function env(variable: string, fallback?: string): string;
}

