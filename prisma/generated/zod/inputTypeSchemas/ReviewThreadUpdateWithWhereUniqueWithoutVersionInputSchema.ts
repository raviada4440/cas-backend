import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';
import { ReviewThreadUpdateWithoutVersionInputSchema } from './ReviewThreadUpdateWithoutVersionInputSchema';
import { ReviewThreadUncheckedUpdateWithoutVersionInputSchema } from './ReviewThreadUncheckedUpdateWithoutVersionInputSchema';

export const ReviewThreadUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.ReviewThreadUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ReviewThreadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewThreadUpdateWithoutVersionInputSchema), z.lazy(() => ReviewThreadUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default ReviewThreadUpdateWithWhereUniqueWithoutVersionInputSchema;
