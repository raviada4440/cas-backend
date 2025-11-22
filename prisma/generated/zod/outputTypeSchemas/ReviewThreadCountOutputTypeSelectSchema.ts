import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ReviewThreadCountOutputTypeSelectSchema: z.ZodType<Prisma.ReviewThreadCountOutputTypeSelect> = z.object({
  comments: z.boolean().optional(),
}).strict();

export default ReviewThreadCountOutputTypeSelectSchema;
