import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentSelectSchema } from '../inputTypeSchemas/ReviewCommentSelectSchema';
import { ReviewCommentIncludeSchema } from '../inputTypeSchemas/ReviewCommentIncludeSchema';

export const ReviewCommentArgsSchema: z.ZodType<Prisma.ReviewCommentDefaultArgs> = z.object({
  select: z.lazy(() => ReviewCommentSelectSchema).optional(),
  include: z.lazy(() => ReviewCommentIncludeSchema).optional(),
}).strict();

export default ReviewCommentArgsSchema;
