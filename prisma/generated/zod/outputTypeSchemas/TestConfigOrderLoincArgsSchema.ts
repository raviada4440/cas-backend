import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigOrderLoincSelectSchema } from '../inputTypeSchemas/TestConfigOrderLoincSelectSchema';
import { TestConfigOrderLoincIncludeSchema } from '../inputTypeSchemas/TestConfigOrderLoincIncludeSchema';

export const TestConfigOrderLoincArgsSchema: z.ZodType<Prisma.TestConfigOrderLoincDefaultArgs> = z.object({
  select: z.lazy(() => TestConfigOrderLoincSelectSchema).optional(),
  include: z.lazy(() => TestConfigOrderLoincIncludeSchema).optional(),
}).strict();

export default TestConfigOrderLoincArgsSchema;
