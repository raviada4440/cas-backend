import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';
import { ReviewThreadUpdateWithoutVersionInputSchema } from './ReviewThreadUpdateWithoutVersionInputSchema';
import { ReviewThreadUncheckedUpdateWithoutVersionInputSchema } from './ReviewThreadUncheckedUpdateWithoutVersionInputSchema';
import { ReviewThreadCreateWithoutVersionInputSchema } from './ReviewThreadCreateWithoutVersionInputSchema';
import { ReviewThreadUncheckedCreateWithoutVersionInputSchema } from './ReviewThreadUncheckedCreateWithoutVersionInputSchema';

export const ReviewThreadUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.ReviewThreadUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ReviewThreadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewThreadUpdateWithoutVersionInputSchema), z.lazy(() => ReviewThreadUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutVersionInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutVersionInputSchema) ]),
});

export default ReviewThreadUpsertWithWhereUniqueWithoutVersionInputSchema;
