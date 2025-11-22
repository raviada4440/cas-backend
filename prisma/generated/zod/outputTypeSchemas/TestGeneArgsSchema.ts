import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestGeneSelectSchema } from '../inputTypeSchemas/TestGeneSelectSchema';
import { TestGeneIncludeSchema } from '../inputTypeSchemas/TestGeneIncludeSchema';

export const TestGeneArgsSchema: z.ZodType<Prisma.TestGeneDefaultArgs> = z.object({
  select: z.lazy(() => TestGeneSelectSchema).optional(),
  include: z.lazy(() => TestGeneIncludeSchema).optional(),
}).strict();

export default TestGeneArgsSchema;
