import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderAttachmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderAttachmentMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  attachmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderAttachmentMaxOrderByAggregateInputSchema;
