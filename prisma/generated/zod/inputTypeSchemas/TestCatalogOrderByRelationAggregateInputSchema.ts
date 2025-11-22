import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogOrderByRelationAggregateInputSchema;
