import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadSelectSchema } from '../inputTypeSchemas/ReviewThreadSelectSchema';
import { ReviewThreadIncludeSchema } from '../inputTypeSchemas/ReviewThreadIncludeSchema';

export const ReviewThreadArgsSchema: z.ZodType<Prisma.ReviewThreadDefaultArgs> = z.object({
  select: z.lazy(() => ReviewThreadSelectSchema).optional(),
  include: z.lazy(() => ReviewThreadIncludeSchema).optional(),
}).strict();

export default ReviewThreadArgsSchema;
