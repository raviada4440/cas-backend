import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewCommentUncheckedCreateInputSchema: z.ZodType<Prisma.ReviewCommentUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  threadId: z.string(),
  body: z.string(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
});

export default ReviewCommentUncheckedCreateInputSchema;
