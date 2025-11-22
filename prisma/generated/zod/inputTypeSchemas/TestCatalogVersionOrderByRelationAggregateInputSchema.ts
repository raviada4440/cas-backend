import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionOrderByRelationAggregateInputSchema;
