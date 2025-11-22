import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewThreadCreateManyInputSchema: z.ZodType<Prisma.ReviewThreadCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  resolvedAt: z.date().optional().nullable(),
  title: z.string().optional().nullable(),
});

export default ReviewThreadCreateManyInputSchema;
