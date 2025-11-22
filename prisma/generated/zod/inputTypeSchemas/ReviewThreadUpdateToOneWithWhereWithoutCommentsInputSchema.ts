import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadWhereInputSchema } from './ReviewThreadWhereInputSchema';
import { ReviewThreadUpdateWithoutCommentsInputSchema } from './ReviewThreadUpdateWithoutCommentsInputSchema';
import { ReviewThreadUncheckedUpdateWithoutCommentsInputSchema } from './ReviewThreadUncheckedUpdateWithoutCommentsInputSchema';

export const ReviewThreadUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.ReviewThreadUpdateToOneWithWhereWithoutCommentsInput> = z.strictObject({
  where: z.lazy(() => ReviewThreadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ReviewThreadUpdateWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUncheckedUpdateWithoutCommentsInputSchema) ]),
});

export default ReviewThreadUpdateToOneWithWhereWithoutCommentsInputSchema;
