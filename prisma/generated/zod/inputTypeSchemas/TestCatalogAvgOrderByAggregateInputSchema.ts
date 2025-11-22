import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogAvgOrderByAggregateInput> = z.strictObject({
  currentVersion: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogAvgOrderByAggregateInputSchema;
