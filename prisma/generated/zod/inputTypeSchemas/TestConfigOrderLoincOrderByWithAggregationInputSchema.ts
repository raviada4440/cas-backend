import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TestConfigOrderLoincCountOrderByAggregateInputSchema } from './TestConfigOrderLoincCountOrderByAggregateInputSchema';
import { TestConfigOrderLoincMaxOrderByAggregateInputSchema } from './TestConfigOrderLoincMaxOrderByAggregateInputSchema';
import { TestConfigOrderLoincMinOrderByAggregateInputSchema } from './TestConfigOrderLoincMinOrderByAggregateInputSchema';

export const TestConfigOrderLoincOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestConfigOrderLoincCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestConfigOrderLoincMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestConfigOrderLoincMinOrderByAggregateInputSchema).optional(),
});

export default TestConfigOrderLoincOrderByWithAggregationInputSchema;
