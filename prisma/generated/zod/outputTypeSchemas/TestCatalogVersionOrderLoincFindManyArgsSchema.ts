import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincIncludeSchema'
import { TestCatalogVersionOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereInputSchema'
import { TestCatalogVersionOrderLoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincOrderByWithRelationInputSchema'
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereUniqueInputSchema'
import { TestCatalogVersionOrderLoincScalarFieldEnumSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincScalarFieldEnumSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { LoincArgsSchema } from "../outputTypeSchemas/LoincArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogVersionOrderLoincSelectSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  loincCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  loinc: z.union([z.boolean(),z.lazy(() => LoincArgsSchema)]).optional(),
}).strict()

export const TestCatalogVersionOrderLoincFindManyArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincFindManyArgs> = z.object({
  select: TestCatalogVersionOrderLoincSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionOrderLoincIncludeSchema).optional(),
  where: TestCatalogVersionOrderLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestCatalogVersionOrderLoincOrderByWithRelationInputSchema.array(), TestCatalogVersionOrderLoincOrderByWithRelationInputSchema ]).optional(),
  cursor: TestCatalogVersionOrderLoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogVersionOrderLoincScalarFieldEnumSchema, TestCatalogVersionOrderLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestCatalogVersionOrderLoincFindManyArgsSchema;
