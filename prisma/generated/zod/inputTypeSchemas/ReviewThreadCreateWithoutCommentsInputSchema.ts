import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema';

export const ReviewThreadCreateWithoutCommentsInputSchema: z.ZodType<Prisma.ReviewThreadCreateWithoutCommentsInput> = z.strictObject({
  id: z.string().optional(),
  createdBy: z.string(),
  createdAt: z.date().optional(),
  resolvedAt: z.date().optional().nullable(),
  title: z.string().optional().nullable(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutReviewThreadsInputSchema),
});

export default ReviewThreadCreateWithoutCommentsInputSchema;
