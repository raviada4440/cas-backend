import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogConfigurationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogConfigurationOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogConfigurationOrderByRelationAggregateInputSchema;
