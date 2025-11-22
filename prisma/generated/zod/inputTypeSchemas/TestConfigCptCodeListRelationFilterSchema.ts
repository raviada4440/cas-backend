import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeWhereInputSchema } from './TestConfigCptCodeWhereInputSchema';

export const TestConfigCptCodeListRelationFilterSchema: z.ZodType<Prisma.TestConfigCptCodeListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestConfigCptCodeWhereInputSchema).optional(),
  some: z.lazy(() => TestConfigCptCodeWhereInputSchema).optional(),
  none: z.lazy(() => TestConfigCptCodeWhereInputSchema).optional(),
});

export default TestConfigCptCodeListRelationFilterSchema;
