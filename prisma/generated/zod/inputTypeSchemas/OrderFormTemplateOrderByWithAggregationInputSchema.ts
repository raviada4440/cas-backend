import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OrderFormTemplateCountOrderByAggregateInputSchema } from './OrderFormTemplateCountOrderByAggregateInputSchema';
import { OrderFormTemplateAvgOrderByAggregateInputSchema } from './OrderFormTemplateAvgOrderByAggregateInputSchema';
import { OrderFormTemplateMaxOrderByAggregateInputSchema } from './OrderFormTemplateMaxOrderByAggregateInputSchema';
import { OrderFormTemplateMinOrderByAggregateInputSchema } from './OrderFormTemplateMinOrderByAggregateInputSchema';
import { OrderFormTemplateSumOrderByAggregateInputSchema } from './OrderFormTemplateSumOrderByAggregateInputSchema';

export const OrderFormTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderFormTemplateOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  orderFormSectionId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  effectiveDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  retiredDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  formSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  layoutSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isGlobal: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderFormTemplateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderFormTemplateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderFormTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderFormTemplateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderFormTemplateSumOrderByAggregateInputSchema).optional(),
});

export default OrderFormTemplateOrderByWithAggregationInputSchema;
