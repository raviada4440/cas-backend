import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionSumOrderByAggregateInput> = z.strictObject({
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionSumOrderByAggregateInputSchema;
