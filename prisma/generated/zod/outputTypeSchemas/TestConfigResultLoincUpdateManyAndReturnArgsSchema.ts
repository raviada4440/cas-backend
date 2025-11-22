import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestConfigResultLoincUpdateManyMutationInputSchema'
import { TestConfigResultLoincUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestConfigResultLoincUncheckedUpdateManyInputSchema'
import { TestConfigResultLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereInputSchema'

export const TestConfigResultLoincUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestConfigResultLoincUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestConfigResultLoincUpdateManyMutationInputSchema, TestConfigResultLoincUncheckedUpdateManyInputSchema ]),
  where: TestConfigResultLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigResultLoincUpdateManyAndReturnArgsSchema;
