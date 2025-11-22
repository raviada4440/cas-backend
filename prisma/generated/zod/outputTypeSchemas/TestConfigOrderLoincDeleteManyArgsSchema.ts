import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincWhereInputSchema } from '../inputTypeSchemas/TestConfigOrderLoincWhereInputSchema'

export const TestConfigOrderLoincDeleteManyArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincDeleteManyArgs> = z.object({
  where: TestConfigOrderLoincWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigOrderLoincDeleteManyArgsSchema;
