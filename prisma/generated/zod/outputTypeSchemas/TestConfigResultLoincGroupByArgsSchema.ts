import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereInputSchema'
import { TestConfigResultLoincOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestConfigResultLoincOrderByWithAggregationInputSchema'
import { TestConfigResultLoincScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigResultLoincScalarFieldEnumSchema'
import { TestConfigResultLoincScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestConfigResultLoincScalarWhereWithAggregatesInputSchema'

export const TestConfigResultLoincGroupByArgsSchema: z.ZodType<Prisma.TestConfigResultLoincGroupByArgs> = z.object({
  where: TestConfigResultLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigResultLoincOrderByWithAggregationInputSchema.array(), TestConfigResultLoincOrderByWithAggregationInputSchema ]).optional(),
  by: TestConfigResultLoincScalarFieldEnumSchema.array(), 
  having: TestConfigResultLoincScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigResultLoincGroupByArgsSchema;
