import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewCommentUncheckedCreateWithoutThreadInputSchema: z.ZodType<Prisma.ReviewCommentUncheckedCreateWithoutThreadInput> = z.strictObject({
  id: z.string().optional(),
  body: z.string(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
});

export default ReviewCommentUncheckedCreateWithoutThreadInputSchema;
