import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerIncludeSchema'
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereUniqueInputSchema'
import { TestCatalogVersionBiomarkerCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerCreateInputSchema'
import { TestCatalogVersionBiomarkerUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerUncheckedCreateInputSchema'
import { TestCatalogVersionBiomarkerUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerUpdateInputSchema'
import { TestCatalogVersionBiomarkerUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerUncheckedUpdateInputSchema'
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

export const TestCatalogVersionBiomarkerUpsertArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpsertArgs> = z.object({
  select: TestCatalogVersionBiomarkerSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionBiomarkerIncludeSchema).optional(),
  where: TestCatalogVersionBiomarkerWhereUniqueInputSchema, 
  create: z.union([ TestCatalogVersionBiomarkerCreateInputSchema, TestCatalogVersionBiomarkerUncheckedCreateInputSchema ]),
  update: z.union([ TestCatalogVersionBiomarkerUpdateInputSchema, TestCatalogVersionBiomarkerUncheckedUpdateInputSchema ]),
}).strict();

export default TestCatalogVersionBiomarkerUpsertArgsSchema;
