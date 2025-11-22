import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionResultLoincIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincIncludeSchema'
import { TestCatalogVersionResultLoincCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincCreateInputSchema'
import { TestCatalogVersionResultLoincUncheckedCreateInputSchema } from '../inputTypeSchemas/TestCatalogVersionResultLoincUncheckedCreateInputSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { LoincArgsSchema } from "../outputTypeSchemas/LoincArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogVersionResultLoincSelectSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  resultCode: z.boolean().optional(),
  resultCodeName: z.boolean().optional(),
  uom: z.boolean().optional(),
  loincCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  loinc: z.union([z.boolean(),z.lazy(() => LoincArgsSchema)]).optional(),
}).strict()

export const TestCatalogVersionResultLoincCreateArgsSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincCreateArgs> = z.object({
  select: TestCatalogVersionResultLoincSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionResultLoincIncludeSchema).optional(),
  data: z.union([ TestCatalogVersionResultLoincCreateInputSchema, TestCatalogVersionResultLoincUncheckedCreateInputSchema ]),
}).strict();

export default TestCatalogVersionResultLoincCreateArgsSchema;
