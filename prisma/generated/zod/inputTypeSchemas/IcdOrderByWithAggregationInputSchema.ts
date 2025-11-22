import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IcdCountOrderByAggregateInputSchema } from './IcdCountOrderByAggregateInputSchema';
import { IcdMaxOrderByAggregateInputSchema } from './IcdMaxOrderByAggregateInputSchema';
import { IcdMinOrderByAggregateInputSchema } from './IcdMinOrderByAggregateInputSchema';

export const IcdOrderByWithAggregationInputSchema: z.ZodType<Prisma.IcdOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  shortDescription: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alias1: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alias2: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alias3: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alias4: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IcdCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IcdMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IcdMinOrderByAggregateInputSchema).optional(),
});

export default IcdOrderByWithAggregationInputSchema;
