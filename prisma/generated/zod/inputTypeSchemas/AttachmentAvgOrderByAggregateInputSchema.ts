import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttachmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AttachmentAvgOrderByAggregateInput> = z.strictObject({
  fileSize: z.lazy(() => SortOrderSchema).optional(),
});

export default AttachmentAvgOrderByAggregateInputSchema;
