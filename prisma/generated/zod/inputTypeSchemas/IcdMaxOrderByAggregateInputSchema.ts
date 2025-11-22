import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const IcdMaxOrderByAggregateInputSchema: z.ZodType<Prisma.IcdMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.lazy(() => SortOrderSchema).optional(),
  alias1: z.lazy(() => SortOrderSchema).optional(),
  alias2: z.lazy(() => SortOrderSchema).optional(),
  alias3: z.lazy(() => SortOrderSchema).optional(),
  alias4: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default IcdMaxOrderByAggregateInputSchema;
