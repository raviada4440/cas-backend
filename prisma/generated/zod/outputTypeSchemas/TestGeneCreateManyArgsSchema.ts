import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneCreateManyInputSchema } from '../inputTypeSchemas/TestGeneCreateManyInputSchema'

export const TestGeneCreateManyArgsSchema: z.ZodType<Prisma.TestGeneCreateManyArgs> = z.object({
  data: z.union([ TestGeneCreateManyInputSchema, TestGeneCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestGeneCreateManyArgsSchema;
