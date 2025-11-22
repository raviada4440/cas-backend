import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerCreateManyInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerCreateManyInputSchema'

export const TestConfigBiomarkerCreateManyArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateManyArgs> = z.object({
  data: z.union([ TestConfigBiomarkerCreateManyInputSchema, TestConfigBiomarkerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigBiomarkerCreateManyArgsSchema;
