import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincCreateManyInputSchema } from '../inputTypeSchemas/TestConfigResultLoincCreateManyInputSchema'

export const TestConfigResultLoincCreateManyArgsSchema: z.ZodType<Prisma.TestConfigResultLoincCreateManyArgs> = z.object({
  data: z.union([ TestConfigResultLoincCreateManyInputSchema, TestConfigResultLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigResultLoincCreateManyArgsSchema;
