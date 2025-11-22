import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogSumOrderByAggregateInput> = z.strictObject({
  currentVersion: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogSumOrderByAggregateInputSchema;
