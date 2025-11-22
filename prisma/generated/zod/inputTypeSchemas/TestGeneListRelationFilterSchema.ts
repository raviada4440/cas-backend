import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneWhereInputSchema } from './TestGeneWhereInputSchema';

export const TestGeneListRelationFilterSchema: z.ZodType<Prisma.TestGeneListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestGeneWhereInputSchema).optional(),
  some: z.lazy(() => TestGeneWhereInputSchema).optional(),
  none: z.lazy(() => TestGeneWhereInputSchema).optional(),
});

export default TestGeneListRelationFilterSchema;
