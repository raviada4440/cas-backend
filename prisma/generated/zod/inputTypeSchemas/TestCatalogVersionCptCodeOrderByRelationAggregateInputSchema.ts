import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionCptCodeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionCptCodeOrderByRelationAggregateInputSchema;
