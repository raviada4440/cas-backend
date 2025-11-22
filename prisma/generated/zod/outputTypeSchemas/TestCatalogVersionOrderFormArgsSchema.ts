import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderFormSelectSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormSelectSchema';
import { TestCatalogVersionOrderFormIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionOrderFormIncludeSchema';

export const TestCatalogVersionOrderFormArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionOrderFormSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionOrderFormIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionOrderFormArgsSchema;
