import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionOrderFormSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormSumOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionOrderFormSumOrderByAggregateInputSchema;
