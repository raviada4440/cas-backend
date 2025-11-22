import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewThreadCreateManyVersionInputSchema: z.ZodType<Prisma.ReviewThreadCreateManyVersionInput> = z.strictObject({
  id: z.string().optional(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  resolvedAt: z.date().optional().nullable(),
  title: z.string().optional().nullable(),
});

export default ReviewThreadCreateManyVersionInputSchema;
