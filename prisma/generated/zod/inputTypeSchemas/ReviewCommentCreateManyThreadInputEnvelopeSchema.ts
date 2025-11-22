import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentCreateManyThreadInputSchema } from './ReviewCommentCreateManyThreadInputSchema';

export const ReviewCommentCreateManyThreadInputEnvelopeSchema: z.ZodType<Prisma.ReviewCommentCreateManyThreadInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ReviewCommentCreateManyThreadInputSchema), z.lazy(() => ReviewCommentCreateManyThreadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ReviewCommentCreateManyThreadInputEnvelopeSchema;
