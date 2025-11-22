import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogCountOutputTypeSelectSchema } from './TestCatalogCountOutputTypeSelectSchema';

export const TestCatalogCountOutputTypeArgsSchema: z.ZodType<Prisma.TestCatalogCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TestCatalogCountOutputTypeSelectSchema;
