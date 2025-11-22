import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionOrderLoincIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincIncludeSchema'
import { TestCatalogVersionOrderLoincCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincCreateInputSchema'
import { TestCatalogVersionOrderLoincUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionOrderLoincUncheckedCreateInputSchema'
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

export const TestCatalogVersionOrderLoincCreateArgsSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincCreateArgs> = z.object({
  select: TestCatalogVersionOrderLoincSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionOrderLoincIncludeSchema).optional(),
  data: z.union([ TestCatalogVersionOrderLoincCreateInputSchema, TestCatalogVersionOrderLoincUncheckedCreateInputSchema ]),
}).strict();

export default TestCatalogVersionOrderLoincCreateArgsSchema;
