import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincUpdateManyMutationInputSchema'
import { TestConfigOrderLoincUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincUncheckedUpdateManyInputSchema'
import { TestConfigOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereInputSchema'

export const TestConfigOrderLoincUpdateManyArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateManyArgs> = z.object({
  data: z.union([ TestConfigOrderLoincUpdateManyMutationInputSchema, TestConfigOrderLoincUncheckedUpdateManyInputSchema ]),
  where: TestConfigOrderLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigOrderLoincUpdateManyArgsSchema;
