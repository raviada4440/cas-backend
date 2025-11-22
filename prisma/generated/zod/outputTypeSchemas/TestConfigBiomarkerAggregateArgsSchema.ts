import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereInputSchema'
import { TestConfigBiomarkerOrderByWithRelationInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerOrderByWithRelationInputSchema'
import { TestConfigBiomarkerWhereUniqueInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereUniqueInputSchema'

export const TestConfigBiomarkerAggregateArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerAggregateArgs> = z.object({
  where: TestConfigBiomarkerWhereInputSchema.optional(), 
  orderBy: z.union([ TestConfigBiomarkerOrderByWithRelationInputSchema.array(), TestConfigBiomarkerOrderByWithRelationInputSchema ]).optional(),
  cursor: TestConfigBiomarkerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TestConfigBiomarkerAggregateArgsSchema;
