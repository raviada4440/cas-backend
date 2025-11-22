import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderAttachmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderAttachmentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderAttachmentOrderByRelationAggregateInputSchema;
