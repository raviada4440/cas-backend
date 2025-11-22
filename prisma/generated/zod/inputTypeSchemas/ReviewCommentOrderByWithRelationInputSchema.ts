import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReviewThreadOrderByWithRelationInputSchema } from './ReviewThreadOrderByWithRelationInputSchema';

export const ReviewCommentOrderByWithRelationInputSchema: z.ZodType<Prisma.ReviewCommentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  threadId: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  thread: z.lazy(() => ReviewThreadOrderByWithRelationInputSchema).optional(),
});

export default ReviewCommentOrderByWithRelationInputSchema;
