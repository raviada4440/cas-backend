import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincIncludeSchema } from '../inputTypeSchemas/TestConfigOrderLoincIncludeSchema'
import { TestConfigOrderLoincUpdateInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincUpdateInputSchema'
import { TestConfigOrderLoincUncheckedUpdateInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincUncheckedUpdateInputSchema'
import { TestConfigOrderLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereUniqueInputSchema'
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

export const TestConfigOrderLoincUpdateArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateArgs> = z.object({
  select: TestConfigOrderLoincSelectSchema.optional(),
  include: z.lazy(() => TestConfigOrderLoincIncludeSchema).optional(),
  data: z.union([ TestConfigOrderLoincUpdateInputSchema, TestConfigOrderLoincUncheckedUpdateInputSchema ]),
  where: TestConfigOrderLoincWhereUniqueInputSchema, 
}).strict();

export default TestConfigOrderLoincUpdateArgsSchema;
