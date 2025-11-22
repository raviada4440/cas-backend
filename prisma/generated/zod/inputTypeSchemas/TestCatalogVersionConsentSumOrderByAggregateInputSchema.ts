import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionConsentSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentSumOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionConsentSumOrderByAggregateInputSchema;
