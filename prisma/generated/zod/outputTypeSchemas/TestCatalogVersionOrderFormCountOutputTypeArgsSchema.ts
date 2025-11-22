import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormCountOutputTypeSelectSchema } from './TestCatalogVersionOrderFormCountOutputTypeSelectSchema';

export const TestCatalogVersionOrderFormCountOutputTypeArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionOrderFormCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TestCatalogVersionOrderFormCountOutputTypeSelectSchema;
