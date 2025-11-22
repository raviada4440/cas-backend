import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadArgsSchema } from "../outputTypeSchemas/ReviewThreadArgsSchema"

export const ReviewCommentSelectSchema: z.ZodType<Prisma.ReviewCommentSelect> = z.object({
  id: z.boolean().optional(),
  threadId: z.boolean().optional(),
  body: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  thread: z.union([z.boolean(),z.lazy(() => ReviewThreadArgsSchema)]).optional(),
}).strict()

export default ReviewCommentSelectSchema;
