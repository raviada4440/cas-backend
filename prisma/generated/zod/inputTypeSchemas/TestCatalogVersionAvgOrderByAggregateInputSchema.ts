import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionAvgOrderByAggregateInput> = z.strictObject({
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionAvgOrderByAggregateInputSchema;
