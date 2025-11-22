import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadCreateWithoutCommentsInputSchema } from './ReviewThreadCreateWithoutCommentsInputSchema';
import { ReviewThreadUncheckedCreateWithoutCommentsInputSchema } from './ReviewThreadUncheckedCreateWithoutCommentsInputSchema';
import { ReviewThreadCreateOrConnectWithoutCommentsInputSchema } from './ReviewThreadCreateOrConnectWithoutCommentsInputSchema';
import { ReviewThreadUpsertWithoutCommentsInputSchema } from './ReviewThreadUpsertWithoutCommentsInputSchema';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';
import { ReviewThreadUpdateToOneWithWhereWithoutCommentsInputSchema } from './ReviewThreadUpdateToOneWithWhereWithoutCommentsInputSchema';
import { ReviewThreadUpdateWithoutCommentsInputSchema } from './ReviewThreadUpdateWithoutCommentsInputSchema';
import { ReviewThreadUncheckedUpdateWithoutCommentsInputSchema } from './ReviewThreadUncheckedUpdateWithoutCommentsInputSchema';

export const ReviewThreadUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.ReviewThreadUpdateOneRequiredWithoutCommentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewThreadCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => ReviewThreadUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => ReviewThreadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReviewThreadUpdateToOneWithWhereWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUpdateWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
});

export default ReviewThreadUpdateOneRequiredWithoutCommentsNestedInputSchema;
