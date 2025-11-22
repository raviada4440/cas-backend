import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionSpecimenOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionSpecimenOrderByRelationAggregateInputSchema;
