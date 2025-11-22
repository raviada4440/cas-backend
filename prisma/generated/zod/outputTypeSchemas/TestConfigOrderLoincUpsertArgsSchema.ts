import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincIncludeSchema } from '../inputTypeSchemas/TestConfigOrderLoincIncludeSchema'
import { TestConfigOrderLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereUniqueInputSchema'
import { TestConfigOrderLoincCreateInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincCreateInputSchema'
import { TestConfigOrderLoincUncheckedCreateInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincUncheckedCreateInputSchema'
import { TestConfigOrderLoincUpdateInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincUpdateInputSchema'
import { TestConfigOrderLoincUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincUncheckedUpdateInputSchema'
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { LoincArgsSchema } from "../outputTypeSchemas/LoincArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestConfigOrderLoincSelectSchema: z.ZodType<Prisma.TestConfigOrderLoincSelect> = z.object({
  id: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  loincCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  loinc: z.union([z.boolean(),z.lazy(() => LoincArgsSchema)]).optional(),
}).strict()

export const TestConfigOrderLoincUpsertArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincUpsertArgs> = z.object({
  select: TestConfigOrderLoincSelectSchema.optional(),
  include: z.lazy(() => TestConfigOrderLoincIncludeSchema).optional(),
  where: TestConfigOrderLoincWhereUniqueInputSchema, 
  create: z.union([ TestConfigOrderLoincCreateInputSchema, TestConfigOrderLoincUncheckedCreateInputSchema ]),
  update: z.union([ TestConfigOrderLoincUpdateInputSchema, TestConfigOrderLoincUncheckedUpdateInputSchema ]),
}).strict();

export default TestConfigOrderLoincUpsertArgsSchema;
