import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCommentCreateManyInputSchema } from '../inputTypeSchemas/ReviewCommentCreateManyInputSchema'

export const ReviewCommentCreateManyArgsSchema: z.ZodType<Prisma.ReviewCommentCreateManyArgs> = z.object({
  data: z.union([ ReviewCommentCreateManyInputSchema, ReviewCommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ReviewCommentCreateManyArgsSchema;
