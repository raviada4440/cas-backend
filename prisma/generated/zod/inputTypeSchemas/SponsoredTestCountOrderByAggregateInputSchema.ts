import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SponsoredTestCountOrderByAggregateInputSchema: z.ZodType<Prisma.SponsoredTestCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.lazy(() => SortOrderSchema).optional(),
  sponsoredProgramId: z.lazy(() => SortOrderSchema).optional(),
  labId: z.lazy(() => SortOrderSchema).optional(),
  casandraTestId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default SponsoredTestCountOrderByAggregateInputSchema;
