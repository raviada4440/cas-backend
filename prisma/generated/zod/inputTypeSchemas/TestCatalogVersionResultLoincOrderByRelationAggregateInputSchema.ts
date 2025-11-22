import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionResultLoincOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionResultLoincOrderByRelationAggregateInputSchema;
