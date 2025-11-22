import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerUpdateManyMutationInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerUpdateManyMutationInputSchema'
import { TestConfigBiomarkerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerUncheckedUpdateManyInputSchema'
import { TestConfigBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereInputSchema'

export const TestConfigBiomarkerUpdateManyArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerUpdateManyArgs> = z.object({
  data: z.union([ TestConfigBiomarkerUpdateManyMutationInputSchema, TestConfigBiomarkerUncheckedUpdateManyInputSchema ]),
  where: TestConfigBiomarkerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigBiomarkerUpdateManyArgsSchema;
