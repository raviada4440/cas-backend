import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionOrderFormAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormAvgOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionOrderFormAvgOrderByAggregateInputSchema;
