import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincWhereInputSchema } from './TestConfigOrderLoincWhereInputSchema';

export const TestConfigOrderLoincListRelationFilterSchema: z.ZodType<Prisma.TestConfigOrderLoincListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestConfigOrderLoincWhereInputSchema).optional(),
  some: z.lazy(() => TestConfigOrderLoincWhereInputSchema).optional(),
  none: z.lazy(() => TestConfigOrderLoincWhereInputSchema).optional(),
});

export default TestConfigOrderLoincListRelationFilterSchema;
