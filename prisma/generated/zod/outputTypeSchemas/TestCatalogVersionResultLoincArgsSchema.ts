import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionResultLoincSelectSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincSelectSchema';
import { TestCatalogVersionResultLoincIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincIncludeSchema';

export const TestCatalogVersionResultLoincArgsSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionResultLoincSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionResultLoincIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionResultLoincArgsSchema;
