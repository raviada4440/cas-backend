import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentIncludeSchema } from '../inputTypeSchemas/ReviewCommentIncludeSchema'
import { ReviewCommentWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewCommentWhereUniqueInputSchema'
import { ReviewThreadArgsSchema } from "../outputTypeSchemas/ReviewThreadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewCommentSelectSchema: z.ZodType<Prisma.ReviewCommentSelect> = z.object({
  id: z.boolean().optional(),
  threadId: z.boolean().optional(),
  body: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  thread: z.union([z.boolean(),z.lazy(() => ReviewThreadArgsSchema)]).optional(),
}).strict()

export const ReviewCommentDeleteArgsSchema: z.ZodType<Prisma.ReviewCommentDeleteArgs> = z.object({
  select: ReviewCommentSelectSchema.optional(),
  include: z.lazy(() => ReviewCommentIncludeSchema).optional(),
  where: ReviewCommentWhereUniqueInputSchema, 
}).strict();

export default ReviewCommentDeleteArgsSchema;
