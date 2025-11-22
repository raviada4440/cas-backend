import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"

export const TestGeneIncludeSchema: z.ZodType<Prisma.TestGeneInclude> = z.object({
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict();

export default TestGeneIncludeSchema;
