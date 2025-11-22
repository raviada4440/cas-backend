import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincIncludeSchema } from '../inputTypeSchemas/TestConfigOrderLoincIncludeSchema'
import { TestConfigOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereInputSchema'
import { TestConfigOrderLoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincOrderByWithRelationInputSchema'
import { TestConfigOrderLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereUniqueInputSchema'
import { TestConfigOrderLoincScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigOrderLoincScalarFieldEnumSchema'
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

export const TestConfigOrderLoincFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincFindFirstOrThrowArgs> = z.object({
  select: TestConfigOrderLoincSelectSchema.optional(),
  include: z.lazy(() => TestConfigOrderLoincIncludeSchema).optional(),
  where: TestConfigOrderLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigOrderLoincOrderByWithRelationInputSchema.array(), TestConfigOrderLoincOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigOrderLoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestConfigOrderLoincScalarFieldEnumSchema, TestConfigOrderLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestConfigOrderLoincFindFirstOrThrowArgsSchema;
