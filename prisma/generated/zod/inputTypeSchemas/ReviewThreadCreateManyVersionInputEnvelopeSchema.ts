import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadCreateManyVersionInputSchema } from './ReviewThreadCreateManyVersionInputSchema';

export const ReviewThreadCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.ReviewThreadCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ReviewThreadCreateManyVersionInputSchema), z.lazy(() => ReviewThreadCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ReviewThreadCreateManyVersionInputEnvelopeSchema;
