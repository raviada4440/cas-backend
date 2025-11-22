import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadCreateManyInputSchema } from '../inputTypeSchemas/ReviewThreadCreateManyInputSchema'

export const ReviewThreadCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReviewThreadCreateManyAndReturnArgs> = z.object({
  data: z.union([ ReviewThreadCreateManyInputSchema, ReviewThreadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ReviewThreadCreateManyAndReturnArgsSchema;
