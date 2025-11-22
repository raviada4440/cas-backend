import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneWhereInputSchema } from '../inputTypeSchemas/TestGeneWhereInputSchema'
import { TestGeneOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestGeneOrderByWithRelationInputSchema'
import { TestGeneWhereUniqueInputSchema } from '../inputTypeSchemas/TestGeneWhereUniqueInputSchema'

export const TestGeneAggregateArgsSchema: z.ZodType<Prisma.TestGeneAggregateArgs> = z.object({
  where: TestGeneWhereInputSchema.optional(), 
  orderBy: z.union([ TestGeneOrderByWithRelationInputSchema.array(), TestGeneOrderByWithRelationInputSchema ]).optional(),
  cursor: TestGeneWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestGeneAggregateArgsSchema;
