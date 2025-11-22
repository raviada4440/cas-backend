import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionOrderLoincOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionOrderLoincOrderByRelationAggregateInputSchema;
