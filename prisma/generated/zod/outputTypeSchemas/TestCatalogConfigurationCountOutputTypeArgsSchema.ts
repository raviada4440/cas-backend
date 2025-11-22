import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationCountOutputTypeSelectSchema } from './TestCatalogConfigurationCountOutputTypeSelectSchema';

export const TestCatalogConfigurationCountOutputTypeArgsSchema: z.ZodType<Prisma.TestCatalogConfigurationCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogConfigurationCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TestCatalogConfigurationCountOutputTypeSelectSchema;
