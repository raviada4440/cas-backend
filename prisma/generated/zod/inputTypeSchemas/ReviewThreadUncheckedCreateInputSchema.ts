import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema } from './ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema';

export const ReviewThreadUncheckedCreateInputSchema: z.ZodType<Prisma.ReviewThreadUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  resolvedAt: z.date().optional().nullable(),
  title: z.string().optional().nullable(),
  comments: z.lazy(() => ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema).optional(),
});

export default ReviewThreadUncheckedCreateInputSchema;
