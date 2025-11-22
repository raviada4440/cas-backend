import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema } from './ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema';

export const ReviewThreadUncheckedCreateWithoutVersionInputSchema: z.ZodType<Prisma.ReviewThreadUncheckedCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  resolvedAt: z.date().optional().nullable(),
  title: z.string().optional().nullable(),
  comments: z.lazy(() => ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema).optional(),
});

export default ReviewThreadUncheckedCreateWithoutVersionInputSchema;
