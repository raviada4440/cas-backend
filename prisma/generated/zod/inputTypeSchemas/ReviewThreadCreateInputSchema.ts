import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema';
import { ReviewCommentCreateNestedManyWithoutThreadInputSchema } from './ReviewCommentCreateNestedManyWithoutThreadInputSchema';

export const ReviewThreadCreateInputSchema: z.ZodType<Prisma.ReviewThreadCreateInput> = z.strictObject({
  id: z.string().optional(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  resolvedAt: z.date().optional().nullable(),
  title: z.string().optional().nullable(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema),
  comments: z.lazy(() => ReviewCommentCreateNestedManyWithoutThreadInputSchema).optional(),
});

export default ReviewThreadCreateInputSchema;
