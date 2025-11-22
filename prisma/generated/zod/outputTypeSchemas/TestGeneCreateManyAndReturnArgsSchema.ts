import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneCreateManyInputSchema } from '../inputTypeSchemas/TestGeneCreateManyInputSchema'

export const TestGeneCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestGeneCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestGeneCreateManyInputSchema, TestGeneCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestGeneCreateManyAndReturnArgsSchema;
