import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincIncludeSchema'
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincWhereUniqueInputSchema'
import { TestCatalogVersionOrderLoincCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincCreateInputSchema'
import { TestCatalogVersionOrderLoincUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincUncheckedCreateInputSchema'
import { TestCatalogVersionOrderLoincUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincUpdateInputSchema'
import { TestCatalogVersionOrderLoincUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincUncheckedUpdateInputSchema'
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

export const TestCatalogVersionOrderLoincUpsertArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpsertArgs> = z.object({
  select: TestCatalogVersionOrderLoincSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionOrderLoincIncludeSchema).optional(),
  where: TestCatalogVersionOrderLoincWhereUniqueInputSchema, 
  create: z.union([ TestCatalogVersionOrderLoincCreateInputSchema, TestCatalogVersionOrderLoincUncheckedCreateInputSchema ]),
  update: z.union([ TestCatalogVersionOrderLoincUpdateInputSchema, TestCatalogVersionOrderLoincUncheckedUpdateInputSchema ]),
}).strict();

export default TestCatalogVersionOrderLoincUpsertArgsSchema;
