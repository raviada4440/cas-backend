import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigResultLoincSelectSchema } from '../inputTypeSchemas/TestConfigResultLoincSelectSchema';
import { TestConfigResultLoincIncludeSchema } from '../inputTypeSchemas/TestConfigResultLoincIncludeSchema';

export const TestConfigResultLoincArgsSchema: z.ZodType<Prisma.TestConfigResultLoincDefaultArgs> = z.object({
  select: z.lazy(() => TestConfigResultLoincSelectSchema).optional(),
  include: z.lazy(() => TestConfigResultLoincIncludeSchema).optional(),
}).strict();

export default TestConfigResultLoincArgsSchema;
