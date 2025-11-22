import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogConfigurationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogConfigurationAvgOrderByAggregateInput> = z.strictObject({
  versionNumber: z.lazy(() => SortOrderSchema).optional(),
  customPricing: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogConfigurationAvgOrderByAggregateInputSchema;
