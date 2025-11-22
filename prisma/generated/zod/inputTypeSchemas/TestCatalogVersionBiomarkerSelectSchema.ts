import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { BiomarkerArgsSchema } from "../outputTypeSchemas/BiomarkerArgsSchema"

export const TestCatalogVersionBiomarkerSelectSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  hgncId: z.boolean().optional(),
  transcriptReference: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  biomarker: z.union([z.boolean(),z.lazy(() => BiomarkerArgsSchema)]).optional(),
}).strict()

export default TestCatalogVersionBiomarkerSelectSchema;
