import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionConsentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentAvgOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionConsentAvgOrderByAggregateInputSchema;
