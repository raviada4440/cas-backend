import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReviewThreadUpdateManyMutationInputSchema'
import { ReviewThreadUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReviewThreadUncheckedUpdateManyInputSchema'
import { ReviewThreadWhereInputSchema } from '../inputTypeSchemas/ReviewThreadWhereInputSchema'

export const ReviewThreadUpdateManyArgsSchema: z.ZodType<Prisma.ReviewThreadUpdateManyArgs> = z.object({
  data: z.union([ ReviewThreadUpdateManyMutationInputSchema, ReviewThreadUncheckedUpdateManyInputSchema ]),
  where: ReviewThreadWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ReviewThreadUpdateManyArgsSchema;
