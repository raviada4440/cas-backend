import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentWhereInputSchema } from '../inputTypeSchemas/ReviewCommentWhereInputSchema'

export const ReviewCommentDeleteManyArgsSchema: z.ZodType<Prisma.ReviewCommentDeleteManyArgs> = z.object({
  where: ReviewCommentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ReviewCommentDeleteManyArgsSchema;
