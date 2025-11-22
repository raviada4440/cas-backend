import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadWhereInputSchema } from '../inputTypeSchemas/ReviewThreadWhereInputSchema'
import { ReviewThreadOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReviewThreadOrderByWithRelationInputSchema'
import { ReviewThreadWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewThreadWhereUniqueInputSchema'

export const ReviewThreadAggregateArgsSchema: z.ZodType<Prisma.ReviewThreadAggregateArgs> = z.object({
  where: ReviewThreadWhereInputSchema.optional(), 
  orderBy: z.union([ ReviewThreadOrderByWithRelationInputSchema.array(), ReviewThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewThreadWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ReviewThreadAggregateArgsSchema;
