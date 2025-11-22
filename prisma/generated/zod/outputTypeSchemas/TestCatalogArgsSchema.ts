import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogSelectSchema } from '../inputTypeSchemas/TestCatalogSelectSchema';
import { TestCatalogIncludeSchema } from '../inputTypeSchemas/TestCatalogIncludeSchema';

export const TestCatalogArgsSchema: z.ZodType<Prisma.TestCatalogDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogSelectSchema).optional(),
  include: z.lazy(() => TestCatalogIncludeSchema).optional(),
}).strict();

export default TestCatalogArgsSchema;
