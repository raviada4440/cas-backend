import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';
import { ReviewThreadCreateWithoutVersionInputSchema } from './ReviewThreadCreateWithoutVersionInputSchema';
import { ReviewThreadUncheckedCreateWithoutVersionInputSchema } from './ReviewThreadUncheckedCreateWithoutVersionInputSchema';

export const ReviewThreadCreateOrConnectWithoutVersionInputSchema: z.ZodType<Prisma.ReviewThreadCreateOrConnectWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ReviewThreadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutVersionInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutVersionInputSchema) ]),
});

export default ReviewThreadCreateOrConnectWithoutVersionInputSchema;
