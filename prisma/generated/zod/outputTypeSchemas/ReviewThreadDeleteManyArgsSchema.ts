import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadWhereInputSchema } from '../inputTypeSchemas/ReviewThreadWhereInputSchema'

export const ReviewThreadDeleteManyArgsSchema: z.ZodType<Prisma.ReviewThreadDeleteManyArgs> = z.object({
  where: ReviewThreadWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ReviewThreadDeleteManyArgsSchema;
