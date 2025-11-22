import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionBiomarkerIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerIncludeSchema'
import { TestCatalogVersionBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereInputSchema'
import { TestCatalogVersionBiomarkerOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerOrderByWithRelationInputSchema'
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerWhereUniqueInputSchema'
import { TestCatalogVersionBiomarkerScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionBiomarkerScalarFieldEnumSchema'
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

export const TestCatalogVersionBiomarkerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerFindFirstOrThrowArgs> = z.object({
  select: TestCatalogVersionBiomarkerSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionBiomarkerIncludeSchema).optional(),
  where: TestCatalogVersionBiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionBiomarkerOrderByWithRelationInputSchema.array(), TestCatalogVersionBiomarkerOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionBiomarkerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogVersionBiomarkerScalarFieldEnumSchema, TestCatalogVersionBiomarkerScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestCatalogVersionBiomarkerFindFirstOrThrowArgsSchema;
