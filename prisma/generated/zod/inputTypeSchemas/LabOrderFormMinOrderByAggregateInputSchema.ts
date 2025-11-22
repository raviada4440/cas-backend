import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderFormMinOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderFormMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  versionOrderFormId: z.lazy(() => SortOrderSchema).optional(),
  orderFormTemplateId: z.lazy(() => SortOrderSchema).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  sectionName: z.lazy(() => SortOrderSchema).optional(),
  templateName: z.lazy(() => SortOrderSchema).optional(),
  isCompleted: z.lazy(() => SortOrderSchema).optional(),
  completedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderFormMinOrderByAggregateInputSchema;
