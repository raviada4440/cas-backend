import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentWhereInputSchema } from '../inputTypeSchemas/ReviewCommentWhereInputSchema'
import { ReviewCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReviewCommentOrderByWithRelationInputSchema'
import { ReviewCommentWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewCommentWhereUniqueInputSchema'

export const ReviewCommentAggregateArgsSchema: z.ZodType<Prisma.ReviewCommentAggregateArgs> = z.object({
  where: ReviewCommentWhereInputSchema.optional(), 
  orderBy: z.union([ ReviewCommentOrderByWithRelationInputSchema.array(), ReviewCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewCommentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ReviewCommentAggregateArgsSchema;
