import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionCptCodeSelectSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeSelectSchema';
import { TestCatalogVersionCptCodeIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionCptCodeIncludeSchema';

export const TestCatalogVersionCptCodeArgsSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogVersionCptCodeSelectSchema).optional(),
  include: z.lazy(() => TestCatalogVersionCptCodeIncludeSchema).optional(),
}).strict();

export default TestCatalogVersionCptCodeArgsSchema;
