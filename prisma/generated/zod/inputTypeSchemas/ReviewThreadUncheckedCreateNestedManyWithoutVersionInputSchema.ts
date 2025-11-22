import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadCreateWithoutVersionInputSchema } from './ReviewThreadCreateWithoutVersionInputSchema';
import { ReviewThreadUncheckedCreateWithoutVersionInputSchema } from './ReviewThreadUncheckedCreateWithoutVersionInputSchema';
import { ReviewThreadCreateOrConnectWithoutVersionInputSchema } from './ReviewThreadCreateOrConnectWithoutVersionInputSchema';
import { ReviewThreadCreateManyVersionInputEnvelopeSchema } from './ReviewThreadCreateManyVersionInputEnvelopeSchema';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';

export const ReviewThreadUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.ReviewThreadUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutVersionInputSchema), z.lazy(() => ReviewThreadCreateWithoutVersionInputSchema).array(), z.lazy(() => ReviewThreadUncheckedCreateWithoutVersionInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewThreadCreateOrConnectWithoutVersionInputSchema), z.lazy(() => ReviewThreadCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewThreadCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewThreadWhereUniqueInputSchema), z.lazy(() => ReviewThreadWhereUniqueInputSchema).array() ]).optional(),
});

export default ReviewThreadUncheckedCreateNestedManyWithoutVersionInputSchema;
