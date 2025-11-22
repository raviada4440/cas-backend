import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincCreateManyInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincCreateManyInputSchema'

export const TestConfigOrderLoincCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestConfigOrderLoincCreateManyInputSchema, TestConfigOrderLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigOrderLoincCreateManyAndReturnArgsSchema;
