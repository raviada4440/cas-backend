import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereInputSchema'
import { TestConfigResultLoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigResultLoincOrderByWithRelationInputSchema'
import { TestConfigResultLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereUniqueInputSchema'

export const TestConfigResultLoincAggregateArgsSchema: z.ZodType<Prisma.TestConfigResultLoincAggregateArgs> = z.object({
  where: TestConfigResultLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigResultLoincOrderByWithRelationInputSchema.array(), TestConfigResultLoincOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigResultLoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigResultLoincAggregateArgsSchema;
