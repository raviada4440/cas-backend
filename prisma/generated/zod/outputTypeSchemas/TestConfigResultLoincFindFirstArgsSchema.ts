import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincIncludeSchema } from '../inputTypeSchemas/TestConfigResultLoincIncludeSchema'
import { TestConfigResultLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereInputSchema'
import { TestConfigResultLoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigResultLoincOrderByWithRelationInputSchema'
import { TestConfigResultLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereUniqueInputSchema'
import { TestConfigResultLoincScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigResultLoincScalarFieldEnumSchema'
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

export const TestConfigResultLoincFindFirstArgsSchema: z.ZodType<Prisma.TestConfigResultLoincFindFirstArgs> = z.object({
  select: TestConfigResultLoincSelectSchema.optional(),
  include: z.lazy(() => TestConfigResultLoincIncludeSchema).optional(),
  where: TestConfigResultLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigResultLoincOrderByWithRelationInputSchema.array(), TestConfigResultLoincOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigResultLoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestConfigResultLoincScalarFieldEnumSchema, TestConfigResultLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestConfigResultLoincFindFirstArgsSchema;
