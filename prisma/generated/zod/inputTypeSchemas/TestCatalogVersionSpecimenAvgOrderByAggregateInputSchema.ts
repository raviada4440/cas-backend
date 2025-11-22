import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionSpecimenAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenAvgOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionSpecimenAvgOrderByAggregateInputSchema;
