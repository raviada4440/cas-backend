import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigCptCodeWhereInputSchema } from '../inputTypeSchemas/TestConfigCptCodeWhereInputSchema'
import { TestConfigCptCodeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestConfigCptCodeOrderByWithAggregationInputSchema'
import { TestConfigCptCodeScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigCptCodeScalarFieldEnumSchema'
import { TestConfigCptCodeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestConfigCptCodeScalarWhereWithAggregatesInputSchema'

export const TestConfigCptCodeGroupByArgsSchema: z.ZodType<Prisma.TestConfigCptCodeGroupByArgs> = z.object({
  where: TestConfigCptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigCptCodeOrderByWithAggregationInputSchema.array(), TestConfigCptCodeOrderByWithAggregationInputSchema ]).optional(),
  by: TestConfigCptCodeScalarFieldEnumSchema.array(), 
  having: TestConfigCptCodeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigCptCodeGroupByArgsSchema;
