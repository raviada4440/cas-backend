import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentIncludeSchema } from '../inputTypeSchemas/ReviewCommentIncludeSchema'
import { ReviewCommentUpdateInputSchema } from '../inputTypeSchemas/ReviewCommentUpdateInputSchema'
import { ReviewCommentUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReviewCommentUncheckedUpdateInputSchema'
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

export const ReviewCommentUpdateArgsSchema: z.ZodType<Prisma.ReviewCommentUpdateArgs> = z.object({
  select: ReviewCommentSelectSchema.optional(),
  include: z.lazy(() => ReviewCommentIncludeSchema).optional(),
  data: z.union([ ReviewCommentUpdateInputSchema, ReviewCommentUncheckedUpdateInputSchema ]),
  where: ReviewCommentWhereUniqueInputSchema, 
}).strict();

export default ReviewCommentUpdateArgsSchema;
