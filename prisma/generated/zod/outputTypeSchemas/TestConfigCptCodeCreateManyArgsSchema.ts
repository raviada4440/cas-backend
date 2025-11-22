import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigCptCodeCreateManyInputSchema } from '../inputTypeSchemas/TestConfigCptCodeCreateManyInputSchema'

export const TestConfigCptCodeCreateManyArgsSchema: z.ZodType<Prisma.TestConfigCptCodeCreateManyArgs> = z.object({
  data: z.union([ TestConfigCptCodeCreateManyInputSchema, TestConfigCptCodeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigCptCodeCreateManyArgsSchema;
