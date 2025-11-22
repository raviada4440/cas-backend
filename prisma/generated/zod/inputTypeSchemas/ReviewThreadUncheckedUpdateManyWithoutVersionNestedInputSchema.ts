import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadCreateWithoutVersionInputSchema } from './ReviewThreadCreateWithoutVersionInputSchema';
import { ReviewThreadUncheckedCreateWithoutVersionInputSchema } from './ReviewThreadUncheckedCreateWithoutVersionInputSchema';
import { ReviewThreadCreateOrConnectWithoutVersionInputSchema } from './ReviewThreadCreateOrConnectWithoutVersionInputSchema';
import { ReviewThreadUpsertWithWhereUniqueWithoutVersionInputSchema } from './ReviewThreadUpsertWithWhereUniqueWithoutVersionInputSchema';
import { ReviewThreadCreateManyVersionInputEnvelopeSchema } from './ReviewThreadCreateManyVersionInputEnvelopeSchema';
import { ReviewThreadWhereUniqueInputSchema } from './ReviewThreadWhereUniqueInputSchema';
import { ReviewThreadUpdateWithWhereUniqueWithoutVersionInputSchema } from './ReviewThreadUpdateWithWhereUniqueWithoutVersionInputSchema';
import { ReviewThreadUpdateManyWithWhereWithoutVersionInputSchema } from './ReviewThreadUpdateManyWithWhereWithoutVersionInputSchema';
import { ReviewThreadScalarWhereInputSchema } from './ReviewThreadScalarWhereInputSchema';

export const ReviewThreadUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.ReviewThreadUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ReviewThreadCreateWithoutVersionInputSchema), z.lazy(() => ReviewThreadCreateWithoutVersionInputSchema).array(), z.lazy(() => ReviewThreadUncheckedCreateWithoutVersionInputSchema), z.lazy(() => ReviewThreadUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewThreadCreateOrConnectWithoutVersionInputSchema), z.lazy(() => ReviewThreadCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewThreadUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => ReviewThreadUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewThreadCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewThreadWhereUniqueInputSchema), z.lazy(() => ReviewThreadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewThreadWhereUniqueInputSchema), z.lazy(() => ReviewThreadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewThreadWhereUniqueInputSchema), z.lazy(() => ReviewThreadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewThreadWhereUniqueInputSchema), z.lazy(() => ReviewThreadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewThreadUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => ReviewThreadUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewThreadUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => ReviewThreadUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewThreadScalarWhereInputSchema), z.lazy(() => ReviewThreadScalarWhereInputSchema).array() ]).optional(),
});

export default ReviewThreadUncheckedUpdateManyWithoutVersionNestedInputSchema;
