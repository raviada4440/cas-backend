import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"

export const TestCatalogVersionCptCodeIncludeSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeInclude> = z.object({
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
}).strict();

export default TestCatalogVersionCptCodeIncludeSchema;
