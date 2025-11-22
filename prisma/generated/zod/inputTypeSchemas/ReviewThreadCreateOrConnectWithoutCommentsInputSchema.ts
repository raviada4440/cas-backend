import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';
import { ReviewThreadCreateWithoutCommentsInputSchema } from './ReviewThreadCreateWithoutCommentsInputSchema';
import { ReviewThreadUncheckedCreateWithoutCommentsInputSchema } from './ReviewThreadUncheckedCreateWithoutCommentsInputSchema';

export const ReviewThreadCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.ReviewThreadCreateOrConnectWithoutCommentsInput> = z.strictObject({
  where: z.lazy(() => ReviewThreadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutCommentsInputSchema) ]),
});

export default ReviewThreadCreateOrConnectWithoutCommentsInputSchema;
