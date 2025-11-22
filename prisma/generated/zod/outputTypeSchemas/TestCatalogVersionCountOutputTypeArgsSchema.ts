import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCountOutputTypeSelectSchema } from './TestCatalogVersionCountOutputTypeSelectSchema';

export const TestCatalogVersionCountOutputTypeArgsSchema: z.ZodType<Prisma.TestCatalogVersionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TestCatalogVersionCountOutputTypeSelectSchema;
