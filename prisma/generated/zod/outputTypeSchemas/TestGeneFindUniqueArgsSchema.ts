import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneIncludeSchema } from '../inputTypeSchemas/TestGeneIncludeSchema'
import { TestGeneWhereUniqueInputSchema } from '../inputTypeSchemas/TestGeneWhereUniqueInputSchema'
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestGeneSelectSchema: z.ZodType<Prisma.TestGeneSelect> = z.object({
  id: z.boolean().optional(),
  testId: z.boolean().optional(),
  labTestId: z.boolean().optional(),
  gene: z.boolean().optional(),
  transcriptReference: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const TestGeneFindUniqueArgsSchema: z.ZodType<Prisma.TestGeneFindUniqueArgs> = z.object({
  select: TestGeneSelectSchema.optional(),
  include: z.lazy(() => TestGeneIncludeSchema).optional(),
  where: TestGeneWhereUniqueInputSchema, 
}).strict();

export default TestGeneFindUniqueArgsSchema;
