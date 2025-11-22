import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderAttachmentCountOrderByAggregateInputSchema } from './LabOrderAttachmentCountOrderByAggregateInputSchema';
import { LabOrderAttachmentMaxOrderByAggregateInputSchema } from './LabOrderAttachmentMaxOrderByAggregateInputSchema';
import { LabOrderAttachmentMinOrderByAggregateInputSchema } from './LabOrderAttachmentMinOrderByAggregateInputSchema';

export const LabOrderAttachmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderAttachmentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  attachmentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderAttachmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderAttachmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderAttachmentMinOrderByAggregateInputSchema).optional(),
});

export default LabOrderAttachmentOrderByWithAggregationInputSchema;
