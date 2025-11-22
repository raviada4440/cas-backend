import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigBiomarkerSelectSchema } from '../inputTypeSchemas/TestConfigBiomarkerSelectSchema';
import { TestConfigBiomarkerIncludeSchema } from '../inputTypeSchemas/TestConfigBiomarkerIncludeSchema';

export const TestConfigBiomarkerArgsSchema: z.ZodType<Prisma.TestConfigBiomarkerDefaultArgs> = z.object({
  select: z.lazy(() => TestConfigBiomarkerSelectSchema).optional(),
  include: z.lazy(() => TestConfigBiomarkerIncludeSchema).optional(),
}).strict();

export default TestConfigBiomarkerArgsSchema;
