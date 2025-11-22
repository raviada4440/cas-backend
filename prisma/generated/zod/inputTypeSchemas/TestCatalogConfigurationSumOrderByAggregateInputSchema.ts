import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogConfigurationSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogConfigurationSumOrderByAggregateInput> = z.strictObject({
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  customPricing: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogConfigurationSumOrderByAggregateInputSchema;
