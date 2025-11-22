import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentWhereInputSchema } from '../inputTypeSchemas/ReviewCommentWhereInputSchema'
import { ReviewCommentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReviewCommentOrderByWithAggregationInputSchema'
import { ReviewCommentScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewCommentScalarFieldEnumSchema'
import { ReviewCommentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReviewCommentScalarWhereWithAggregatesInputSchema'

export const ReviewCommentGroupByArgsSchema: z.ZodType<Prisma.ReviewCommentGroupByArgs> = z.object({
  where: ReviewCommentWhereInputSchema.optional(), 
  orderBy: z.union([ ReviewCommentOrderByWithAggregationInputSchema.array(), ReviewCommentOrderByWithAggregationInputSchema ]).optional(),
  by: ReviewCommentScalarFieldEnumSchema.array(), 
  having: ReviewCommentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ReviewCommentGroupByArgsSchema;
