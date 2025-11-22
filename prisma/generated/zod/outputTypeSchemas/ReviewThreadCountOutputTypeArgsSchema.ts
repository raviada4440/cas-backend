import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewThreadCountOutputTypeSelectSchema } from './ReviewThreadCountOutputTypeSelectSchema';

export const ReviewThreadCountOutputTypeArgsSchema: z.ZodType<Prisma.ReviewThreadCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ReviewThreadCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ReviewThreadCountOutputTypeSelectSchema;
