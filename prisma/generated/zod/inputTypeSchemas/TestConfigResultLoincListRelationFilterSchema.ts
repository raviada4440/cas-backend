import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincWhereInputSchema } from './TestConfigResultLoincWhereInputSchema';

export const TestConfigResultLoincListRelationFilterSchema: z.ZodType<Prisma.TestConfigResultLoincListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestConfigResultLoincWhereInputSchema).optional(),
  some: z.lazy(() => TestConfigResultLoincWhereInputSchema).optional(),
  none: z.lazy(() => TestConfigResultLoincWhereInputSchema).optional(),
});

export default TestConfigResultLoincListRelationFilterSchema;
