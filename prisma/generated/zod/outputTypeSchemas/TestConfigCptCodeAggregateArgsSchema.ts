import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigCptCodeWhereInputSchema } from '../inputTypeSchemas/TestConfigCptCodeWhereInputSchema'
import { TestConfigCptCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigCptCodeOrderByWithRelationInputSchema'
import { TestConfigCptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigCptCodeWhereUniqueInputSchema'

export const TestConfigCptCodeAggregateArgsSchema: z.ZodType<Prisma.TestConfigCptCodeAggregateArgs> = z.object({
  where: TestConfigCptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigCptCodeOrderByWithRelationInputSchema.array(), TestConfigCptCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigCptCodeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigCptCodeAggregateArgsSchema;
