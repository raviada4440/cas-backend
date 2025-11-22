import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincIncludeSchema } from '../inputTypeSchemas/TestConfigResultLoincIncludeSchema'
import { TestConfigResultLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereUniqueInputSchema'
import { TestConfigResultLoincCreateInputSchema } from '../inputTypeSchemas/TestConfigResultLoincCreateInputSchema'
import { TestConfigResultLoincUncheckedCreateInputSchema } from '../inputTypeSchemas/TestConfigResultLoincUncheckedCreateInputSchema'
import { TestConfigResultLoincUpdateInputSchema } from '../inputTypeSchemas/TestConfigResultLoincUpdateInputSchema'
import { TestConfigResultLoincUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestConfigResultLoincUncheckedUpdateInputSchema'
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { LoincArgsSchema } from "../outputTypeSchemas/LoincArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestConfigResultLoincSelectSchema: z.ZodType<Prisma.TestConfigResultLoincSelect> = z.object({
  id: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  resultCode: z.boolean().optional(),
  resultCodeName: z.boolean().optional(),
  uom: z.boolean().optional(),
  loincCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  loinc: z.union([z.boolean(),z.lazy(() => LoincArgsSchema)]).optional(),
}).strict()

export const TestConfigResultLoincUpsertArgsSchema: z.ZodType<Prisma.TestConfigResultLoincUpsertArgs> = z.object({
  select: TestConfigResultLoincSelectSchema.optional(),
  include: z.lazy(() => TestConfigResultLoincIncludeSchema).optional(),
  where: TestConfigResultLoincWhereUniqueInputSchema, 
  create: z.union([ TestConfigResultLoincCreateInputSchema, TestConfigResultLoincUncheckedCreateInputSchema ]),
  update: z.union([ TestConfigResultLoincUpdateInputSchema, TestConfigResultLoincUncheckedUpdateInputSchema ]),
}).strict();

export default TestConfigResultLoincUpsertArgsSchema;
