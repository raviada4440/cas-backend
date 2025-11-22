import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { LoincArgsSchema } from "../outputTypeSchemas/LoincArgsSchema"

export const TestCatalogVersionOrderLoincSelectSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  loincCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  loinc: z.union([z.boolean(),z.lazy(() => LoincArgsSchema)]).optional(),
}).strict()

export default TestCatalogVersionOrderLoincSelectSchema;
