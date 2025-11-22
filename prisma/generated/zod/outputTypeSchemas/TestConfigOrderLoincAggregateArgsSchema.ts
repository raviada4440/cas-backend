import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereInputSchema'
import { TestConfigOrderLoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincOrderByWithRelationInputSchema'
import { TestConfigOrderLoincWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereUniqueInputSchema'

export const TestConfigOrderLoincAggregateArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincAggregateArgs> = z.object({
  where: TestConfigOrderLoincWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigOrderLoincOrderByWithRelationInputSchema.array(), TestConfigOrderLoincOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigOrderLoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigOrderLoincAggregateArgsSchema;
