import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionOrderFormOrderByRelationAggregateInputSchema;
