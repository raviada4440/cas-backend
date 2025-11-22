import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerIncludeSchema'
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereUniqueInputSchema'
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

export const TestCatalogVersionBiomarkerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerFindUniqueOrThrowArgs> = z.object({
  select: TestCatalogVersionBiomarkerSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionBiomarkerIncludeSchema).optional(),
  where: TestCatalogVersionBiomarkerWhereUniqueInputSchema, 
}).strict();

export default TestCatalogVersionBiomarkerFindUniqueOrThrowArgsSchema;
