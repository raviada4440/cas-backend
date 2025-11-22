import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadCreateWithoutCommentsInputSchema } from './ReviewThreadCreateWithoutCommentsInputSchema';
import { ReviewThreadUncheckedCreateWithoutCommentsInputSchema } from './ReviewThreadUncheckedCreateWithoutCommentsInputSchema';
import { ReviewThreadCreateOrConnectWithoutCommentsInputSchema } from './ReviewThreadCreateOrConnectWithoutCommentsInputSchema';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';

export const ReviewThreadCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.ReviewThreadCreateNestedOneWithoutCommentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutCommentsInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewThreadCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => ReviewThreadWhereUniqueInputSchema).optional(),
});

export default ReviewThreadCreateNestedOneWithoutCommentsInputSchema;
