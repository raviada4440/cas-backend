import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CptCodeCountOrderByAggregateInputSchema: z.ZodType<Prisma.CptCodeCountOrderByAggregateInput> = z.strictObject({
  code: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.lazy(() => SortOrderSchema).optional(),
  longDescription: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default CptCodeCountOrderByAggregateInputSchema;
