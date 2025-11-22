import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigCptCodeIncludeSchema } from '../inputTypeSchemas/TestConfigCptCodeIncludeSchema'
import { TestConfigCptCodeWhereInputSchema } from '../inputTypeSchemas/TestConfigCptCodeWhereInputSchema'
import { TestConfigCptCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigCptCodeOrderByWithRelationInputSchema'
import { TestConfigCptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigCptCodeWhereUniqueInputSchema'
import { TestConfigCptCodeScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigCptCodeScalarFieldEnumSchema'
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestConfigCptCodeSelectSchema: z.ZodType<Prisma.TestConfigCptCodeSelect> = z.object({
  id: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  cptCode: z.boolean().optional(),
  modifier: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
}).strict()

export const TestConfigCptCodeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestConfigCptCodeFindFirstOrThrowArgs> = z.object({
  select: TestConfigCptCodeSelectSchema.optional(),
  include: z.lazy(() => TestConfigCptCodeIncludeSchema).optional(),
  where: TestConfigCptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigCptCodeOrderByWithRelationInputSchema.array(), TestConfigCptCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigCptCodeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestConfigCptCodeScalarFieldEnumSchema, TestConfigCptCodeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TestConfigCptCodeFindFirstOrThrowArgsSchema;
