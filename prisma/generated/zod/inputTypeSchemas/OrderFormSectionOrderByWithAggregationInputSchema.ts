import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OrderFormSectionCountOrderByAggregateInputSchema } from './OrderFormSectionCountOrderByAggregateInputSchema';
import { OrderFormSectionAvgOrderByAggregateInputSchema } from './OrderFormSectionAvgOrderByAggregateInputSchema';
import { OrderFormSectionMaxOrderByAggregateInputSchema } from './OrderFormSectionMaxOrderByAggregateInputSchema';
import { OrderFormSectionMinOrderByAggregateInputSchema } from './OrderFormSectionMinOrderByAggregateInputSchema';
import { OrderFormSectionSumOrderByAggregateInputSchema } from './OrderFormSectionSumOrderByAggregateInputSchema';

export const OrderFormSectionOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderFormSectionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderFormSectionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderFormSectionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderFormSectionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderFormSectionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderFormSectionSumOrderByAggregateInputSchema).optional(),
});

export default OrderFormSectionOrderByWithAggregationInputSchema;
