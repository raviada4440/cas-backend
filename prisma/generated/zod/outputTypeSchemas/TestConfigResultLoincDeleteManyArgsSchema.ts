import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigResultLoincWhereInputSchema'

export const TestConfigResultLoincDeleteManyArgsSchema: z.ZodType<Prisma.TestConfigResultLoincDeleteManyArgs> = z.object({
  where: TestConfigResultLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigResultLoincDeleteManyArgsSchema;
