import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerCreateManyInputSchema } from '../inputTypeSchemas/TestConfigBiomarkerCreateManyInputSchema'

export const TestConfigBiomarkerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateManyAndReturnArgs> = z.object({
  data: z.union([ TestConfigBiomarkerCreateManyInputSchema, TestConfigBiomarkerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TestConfigBiomarkerCreateManyAndReturnArgsSchema;
