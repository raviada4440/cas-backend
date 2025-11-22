import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerSelectSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerSelectSchema';
import { TestCatalogVersionBiomarkerIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerIncludeSchema';

export const TestCatalogVersionBiomarkerArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionBiomarkerSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionBiomarkerIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionBiomarkerArgsSchema;
