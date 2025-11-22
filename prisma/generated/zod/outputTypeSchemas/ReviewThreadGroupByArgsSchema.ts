import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadWhereInputSchema } from '../inputTypeSchemas/ReviewThreadWhereInputSchema'
import { ReviewThreadOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReviewThreadOrderByWithAggregationInputSchema'
import { ReviewThreadScalarFieldEnumSchema } from '../inputTypeSchemas/ReviewThreadScalarFieldEnumSchema'
import { ReviewThreadScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReviewThreadScalarWhereWithAggregatesInputSchema'

export const ReviewThreadGroupByArgsSchema: z.ZodType<Prisma.ReviewThreadGroupByArgs> = z.object({
  where: ReviewThreadWhereInputSchema.optional(), 
  orderBy: z.union([ ReviewThreadOrderByWithAggregationInputSchema.array(), ReviewThreadOrderByWithAggregationInputSchema ]).optional(),
  by: ReviewThreadScalarFieldEnumSchema.array(), 
  having: ReviewThreadScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ReviewThreadGroupByArgsSchema;
