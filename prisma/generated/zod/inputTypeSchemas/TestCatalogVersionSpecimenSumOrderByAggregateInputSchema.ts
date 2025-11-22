import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionSpecimenSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenSumOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionSpecimenSumOrderByAggregateInputSchema;
