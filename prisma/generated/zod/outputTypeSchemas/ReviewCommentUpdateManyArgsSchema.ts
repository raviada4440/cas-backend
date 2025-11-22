import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReviewCommentUpdateManyMutationInputSchema'
import { ReviewCommentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReviewCommentUncheckedUpdateManyInputSchema'
import { ReviewCommentWhereInputSchema } from '../inputTypeSchemas/ReviewCommentWhereInputSchema'

export const ReviewCommentUpdateManyArgsSchema: z.ZodType<Prisma.ReviewCommentUpdateManyArgs> = z.object({
  data: z.union([ ReviewCommentUpdateManyMutationInputSchema, ReviewCommentUncheckedUpdateManyInputSchema ]),
  where: ReviewCommentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ReviewCommentUpdateManyArgsSchema;
