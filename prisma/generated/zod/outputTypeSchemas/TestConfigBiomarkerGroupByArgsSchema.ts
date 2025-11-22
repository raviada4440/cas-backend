import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereInputSchema'
import { TestConfigBiomarkerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerOrderByWithAggregationInputSchema'
import { TestConfigBiomarkerScalarFieldEnumSchema } from '../inputTypeSchemas/TestConfigBiomarkerScalarFieldEnumSchema'
import { TestConfigBiomarkerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerScalarWhereWithAggregatesInputSchema'

export const TestConfigBiomarkerGroupByArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerGroupByArgs> = z.object({
  where: TestConfigBiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigBiomarkerOrderByWithAggregationInputSchema.array(), TestConfigBiomarkerOrderByWithAggregationInputSchema ]).optional(),
  by: TestConfigBiomarkerScalarFieldEnumSchema.array(), 
  having: TestConfigBiomarkerScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigBiomarkerGroupByArgsSchema;
