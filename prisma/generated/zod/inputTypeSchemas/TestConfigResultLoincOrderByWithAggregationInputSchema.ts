import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestConfigResultLoincCountOrderByAggregateInputSchema } from './TestConfigResultLoincCountOrderByAggregateInputSchema';
import { TestConfigResultLoincMaxOrderByAggregateInputSchema } from './TestConfigResultLoincMaxOrderByAggregateInputSchema';
import { TestConfigResultLoincMinOrderByAggregateInputSchema } from './TestConfigResultLoincMinOrderByAggregateInputSchema';

export const TestConfigResultLoincOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestConfigResultLoincOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  resultCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resultCodeName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  uom: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestConfigResultLoincCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestConfigResultLoincMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestConfigResultLoincMinOrderByAggregateInputSchema).optional(),
});

export default TestConfigResultLoincOrderByWithAggregationInputSchema;
