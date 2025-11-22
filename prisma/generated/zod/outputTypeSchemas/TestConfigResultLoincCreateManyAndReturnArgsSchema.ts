import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincCreateManyInputSchema } from '../inputTypeSchemas/TestConfigResultLoincCreateManyInputSchema'

export const TestConfigResultLoincCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestConfigResultLoincCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestConfigResultLoincCreateManyInputSchema, TestConfigResultLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigResultLoincCreateManyAndReturnArgsSchema;
