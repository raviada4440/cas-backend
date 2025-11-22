import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneWhereInputSchema } from '../inputTypeSchemas/TestGeneWhereInputSchema'
import { TestGeneOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestGeneOrderByWithAggregationInputSchema'
import { TestGeneScalarFieldEnumSchema } from '../inputTypeSchemas/TestGeneScalarFieldEnumSchema'
import { TestGeneScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestGeneScalarWhereWithAggregatesInputSchema'

export const TestGeneGroupByArgsSchema: z.ZodType<Prisma.TestGeneGroupByArgs> = z.object({
  where: TestGeneWhereInputSchema.optional(), 
  orderBy: z.union([ TestGeneOrderByWithAggregationInputSchema.array(), TestGeneOrderByWithAggregationInputSchema ]).optional(),
  by: TestGeneScalarFieldEnumSchema.array(), 
  having: TestGeneScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestGeneGroupByArgsSchema;
