import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CptCodeMinOrderByAggregateInputSchema: z.ZodType<Prisma.CptCodeMinOrderByAggregateInput> = z.strictObject({
  code: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.lazy(() => SortOrderSchema).optional(),
  longDescription: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default CptCodeMinOrderByAggregateInputSchema;
