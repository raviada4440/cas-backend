import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigCptCodeUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestConfigCptCodeUpdateManyMutationInputSchema'
import { TestConfigCptCodeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestConfigCptCodeUncheckedUpdateManyInputSchema'
import { TestConfigCptCodeWhereInputSchema } from '../inputTypeSchemas/TestConfigCptCodeWhereInputSchema'

export const TestConfigCptCodeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TestConfigCptCodeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TestConfigCptCodeUpdateManyMutationInputSchema, TestConfigCptCodeUncheckedUpdateManyInputSchema ]),
  where: TestConfigCptCodeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigCptCodeUpdateManyAndReturnArgsSchema;
