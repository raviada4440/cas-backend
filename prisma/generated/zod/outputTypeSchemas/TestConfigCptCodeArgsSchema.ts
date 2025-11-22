import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestConfigCptCodeSelectSchema } from '../inputTypeSchemas/TestConfigCptCodeSelectSchema';
import { TestConfigCptCodeIncludeSchema } from '../inputTypeSchemas/TestConfigCptCodeIncludeSchema';

export const TestConfigCptCodeArgsSchema: z.ZodType<Prisma.TestConfigCptCodeDefaultArgs> = z.object({
  select: z.lazy(() => TestConfigCptCodeSelectSchema).optional(),
  include: z.lazy(() => TestConfigCptCodeIncludeSchema).optional(),
}).strict();

export default TestConfigCptCodeArgsSchema;
