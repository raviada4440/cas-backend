import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CptCodeCountOrderByAggregateInputSchema } from './CptCodeCountOrderByAggregateInputSchema';
import { CptCodeMaxOrderByAggregateInputSchema } from './CptCodeMaxOrderByAggregateInputSchema';
import { CptCodeMinOrderByAggregateInputSchema } from './CptCodeMinOrderByAggregateInputSchema';

export const CptCodeOrderByWithAggregationInputSchema: z.ZodType<Prisma.CptCodeOrderByWithAggregationInput> = z.strictObject({
  code: z.lazy(() => SortOrderSchema).optional(),
  shortDescription: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  longDescription: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CptCodeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CptCodeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CptCodeMinOrderByAggregateInputSchema).optional(),
});

export default CptCodeOrderByWithAggregationInputSchema;
