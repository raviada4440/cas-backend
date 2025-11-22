import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadCreateNestedOneWithoutCommentsInputSchema } from './ReviewThreadCreateNestedOneWithoutCommentsInputSchema';

export const ReviewCommentCreateInputSchema: z.ZodType<Prisma.ReviewCommentCreateInput> = z.strictObject({
  id: z.string().optional(),
  body: z.string(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  thread: z.lazy(() => ReviewThreadCreateNestedOneWithoutCommentsInputSchema),
});

export default ReviewCommentCreateInputSchema;
