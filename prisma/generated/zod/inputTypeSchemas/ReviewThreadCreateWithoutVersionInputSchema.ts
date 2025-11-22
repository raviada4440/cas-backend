import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentCreateNestedManyWithoutThreadInputSchema } from './ReviewCommentCreateNestedManyWithoutThreadInputSchema';

export const ReviewThreadCreateWithoutVersionInputSchema: z.ZodType<Prisma.ReviewThreadCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  resolvedAt: z.date().optional().nullable(),
  title: z.string().optional().nullable(),
  comments: z.lazy(() => ReviewCommentCreateNestedManyWithoutThreadInputSchema).optional(),
});

export default ReviewThreadCreateWithoutVersionInputSchema;
