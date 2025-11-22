import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerWhereInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerWhereInputSchema'

export const TestConfigBiomarkerDeleteManyArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerDeleteManyArgs> = z.object({
  where: TestConfigBiomarkerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TestConfigBiomarkerDeleteManyArgsSchema;
