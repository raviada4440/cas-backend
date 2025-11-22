import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerIncludeSchema'
import { TestCatalogVersionBiomarkerCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerCreateInputSchema'
import { TestCatalogVersionBiomarkerUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerUncheckedCreateInputSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { BiomarkerArgsSchema } from "../outputTypeSchemas/BiomarkerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const TestCatalogVersionBiomarkerCreateArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCreateArgs> = z.object({
  select: TestCatalogVersionBiomarkerSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionBiomarkerIncludeSchema).optional(),
  data: z.union([ TestCatalogVersionBiomarkerCreateInputSchema, TestCatalogVersionBiomarkerUncheckedCreateInputSchema ]),
}).strict();

export default TestCatalogVersionBiomarkerCreateArgsSchema;
