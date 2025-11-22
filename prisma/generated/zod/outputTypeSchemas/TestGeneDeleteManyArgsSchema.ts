import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneWhereInputSchema } from '../inputTypeSchemas/TestGeneWhereInputSchema'

export const TestGeneDeleteManyArgsSchema: z.ZodType<Prisma.TestGeneDeleteManyArgs> = z.object({
  where: TestGeneWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestGeneDeleteManyArgsSchema;
