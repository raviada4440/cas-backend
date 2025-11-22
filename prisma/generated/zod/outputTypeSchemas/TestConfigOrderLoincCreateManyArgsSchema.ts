import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincCreateManyInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincCreateManyInputSchema'

export const TestConfigOrderLoincCreateManyArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateManyArgs> = z.object({
  data: z.union([ TestConfigOrderLoincCreateManyInputSchema, TestConfigOrderLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigOrderLoincCreateManyArgsSchema;
