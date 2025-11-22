import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttachmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.AttachmentSumOrderByAggregateInput> = z.strictObject({
  fileSize: z.lazy(() => SortOrderSchema).optional(),
});

export default AttachmentSumOrderByAggregateInputSchema;
