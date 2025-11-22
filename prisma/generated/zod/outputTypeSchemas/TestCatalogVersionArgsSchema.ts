import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSelectSchema } from '../inputTypeSchemas/TestCatalogVersionSelectSchema';
import { TestCatalogVersionIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionIncludeSchema';

export const TestCatalogVersionArgsSchema: z.ZodType<Prisma.TestCatalogVersionDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionArgsSchema;
