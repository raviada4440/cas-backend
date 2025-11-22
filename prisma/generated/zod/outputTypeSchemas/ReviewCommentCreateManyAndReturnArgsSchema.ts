import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentCreateManyInputSchema } from '../inputTypeSchemas/ReviewCommentCreateManyInputSchema'

export const ReviewCommentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReviewCommentCreateManyAndReturnArgs> = z.object({
  data: z.union([ ReviewCommentCreateManyInputSchema, ReviewCommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ReviewCommentCreateManyAndReturnArgsSchema;
