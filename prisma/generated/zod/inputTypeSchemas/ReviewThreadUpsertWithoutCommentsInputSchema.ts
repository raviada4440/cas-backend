import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadUpdateWithoutCommentsInputSchema } from './ReviewThreadUpdateWithoutCommentsInputSchema';
import { ReviewThreadUncheckedUpdateWithoutCommentsInputSchema } from './ReviewThreadUncheckedUpdateWithoutCommentsInputSchema';
import { ReviewThreadCreateWithoutCommentsInputSchema } from './ReviewThreadCreateWithoutCommentsInputSchema';
import { ReviewThreadUncheckedCreateWithoutCommentsInputSchema } from './ReviewThreadUncheckedCreateWithoutCommentsInputSchema';
import { ReviewThreadWhereInputSchema } from './ReviewThreadWhereInputSchema';

export const ReviewThreadUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.ReviewThreadUpsertWithoutCommentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ReviewThreadUpdateWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => ReviewThreadWhereInputSchema).optional(),
});

export default ReviewThreadUpsertWithoutCommentsInputSchema;
