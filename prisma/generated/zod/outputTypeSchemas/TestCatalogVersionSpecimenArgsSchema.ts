import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenSelectSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenSelectSchema';
import { TestCatalogVersionSpecimenIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenIncludeSchema';

export const TestCatalogVersionSpecimenArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionSpecimenSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionSpecimenIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionSpecimenArgsSchema;
