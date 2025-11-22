import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigCptCodeWhereInputSchema } from '../inputTypeSchemas/TestConfigCptCodeWhereInputSchema'

export const TestConfigCptCodeDeleteManyArgsSchema: z.ZodType<Prisma.TestConfigCptCodeDeleteManyArgs> = z.object({
  where: TestConfigCptCodeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigCptCodeDeleteManyArgsSchema;
