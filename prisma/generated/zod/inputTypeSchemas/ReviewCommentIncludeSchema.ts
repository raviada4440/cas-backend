import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadArgsSchema } from "../outputTypeSchemas/ReviewThreadArgsSchema"

export const ReviewCommentIncludeSchema: z.ZodType<Prisma.ReviewCommentInclude> = z.object({
  thread: z.union([z.boolean(),z.lazy(() => ReviewThreadArgsSchema)]).optional(),
}).strict();

export default ReviewCommentIncludeSchema;
