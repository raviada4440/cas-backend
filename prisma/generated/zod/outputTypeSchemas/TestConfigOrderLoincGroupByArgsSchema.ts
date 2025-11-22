import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereInputSchema'
import { TestConfigOrderLoincOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincOrderByWithAggregationInputSchema'
import { TestConfigOrderLoincScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigOrderLoincScalarFieldEnumSchema'
import { TestConfigOrderLoincScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincScalarWhereWithAggregatesInputSchema'

export const TestConfigOrderLoincGroupByArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincGroupByArgs> = z.object({
  where: TestConfigOrderLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigOrderLoincOrderByWithAggregationInputSchema.array(), TestConfigOrderLoincOrderByWithAggregationInputSchema ]).optional(),
  by: TestConfigOrderLoincScalarFieldEnumSchema.array(), 
  having: TestConfigOrderLoincScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigOrderLoincGroupByArgsSchema;
