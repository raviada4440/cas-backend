import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincSelectSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincSelectSchema';
import { TestCatalogVersionOrderLoincIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincIncludeSchema';

export const TestCatalogVersionOrderLoincArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionOrderLoincSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionOrderLoincIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionOrderLoincArgsSchema;
