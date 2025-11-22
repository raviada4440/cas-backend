import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestGeneUpdateManyMutationInputSchema'
import { TestGeneUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestGeneUncheckedUpdateManyInputSchema'
import { TestGeneWhereInputSchema } from '../inputTypeSchemas/TestGeneWhereInputSchema'

export const TestGeneUpdateManyArgsSchema: z.ZodType<Prisma.TestGeneUpdateManyArgs> = z.object({
  data: z.union([ TestGeneUpdateManyMutationInputSchema, TestGeneUncheckedUpdateManyInputSchema ]),
  where: TestGeneWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestGeneUpdateManyArgsSchema;
