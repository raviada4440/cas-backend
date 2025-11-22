import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderFormCountOrderByAggregateInputSchema } from './LabOrderFormCountOrderByAggregateInputSchema';
import { LabOrderFormAvgOrderByAggregateInputSchema } from './LabOrderFormAvgOrderByAggregateInputSchema';
import { LabOrderFormMaxOrderByAggregateInputSchema } from './LabOrderFormMaxOrderByAggregateInputSchema';
import { LabOrderFormMinOrderByAggregateInputSchema } from './LabOrderFormMinOrderByAggregateInputSchema';
import { LabOrderFormSumOrderByAggregateInputSchema } from './LabOrderFormSumOrderByAggregateInputSchema';

export const LabOrderFormOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderFormOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  versionOrderFormId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderFormTemplateId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  sectionName: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  formSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  layoutSchema: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  responses: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isCompleted: z.lazy(() => SortOrderSchema).optional(),
  completedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderFormCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LabOrderFormAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderFormMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderFormMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LabOrderFormSumOrderByAggregateInputSchema).optional(),
});

export default LabOrderFormOrderByWithAggregationInputSchema;
