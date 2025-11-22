import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentCreateWithoutThreadInputSchema } from './ReviewCommentCreateWithoutThreadInputSchema';
import { ReviewCommentUncheckedCreateWithoutThreadInputSchema } from './ReviewCommentUncheckedCreateWithoutThreadInputSchema';
import { ReviewCommentCreateOrConnectWithoutThreadInputSchema } from './ReviewCommentCreateOrConnectWithoutThreadInputSchema';
import { ReviewCommentUpsertWithWhereUniqueWithoutThreadInputSchema } from './ReviewCommentUpsertWithWhereUniqueWithoutThreadInputSchema';
import { ReviewCommentCreateManyThreadInputEnvelopeSchema } from './ReviewCommentCreateManyThreadInputEnvelopeSchema';
import { ReviewCommentWhereUniqueInputSchema } from './ReviewCommentWhereUniqueInputSchema';
import { ReviewCommentUpdateWithWhereUniqueWithoutThreadInputSchema } from './ReviewCommentUpdateWithWhereUniqueWithoutThreadInputSchema';
import { ReviewCommentUpdateManyWithWhereWithoutThreadInputSchema } from './ReviewCommentUpdateManyWithWhereWithoutThreadInputSchema';
import { ReviewCommentScalarWhereInputSchema } from './ReviewCommentScalarWhereInputSchema';

export const ReviewCommentUncheckedUpdateManyWithoutThreadNestedInputSchema: z.ZodType<Prisma.ReviewCommentUncheckedUpdateManyWithoutThreadNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ReviewCommentCreateWithoutThreadInputSchema), z.lazy(() => ReviewCommentCreateWithoutThreadInputSchema).array(), z.lazy(() => ReviewCommentUncheckedCreateWithoutThreadInputSchema), z.lazy(() => ReviewCommentUncheckedCreateWithoutThreadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCommentCreateOrConnectWithoutThreadInputSchema), z.lazy(() => ReviewCommentCreateOrConnectWithoutThreadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewCommentUpsertWithWhereUniqueWithoutThreadInputSchema), z.lazy(() => ReviewCommentUpsertWithWhereUniqueWithoutThreadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCommentCreateManyThreadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewCommentWhereUniqueInputSchema), z.lazy(() => ReviewCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewCommentWhereUniqueInputSchema), z.lazy(() => ReviewCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewCommentWhereUniqueInputSchema), z.lazy(() => ReviewCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewCommentWhereUniqueInputSchema), z.lazy(() => ReviewCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewCommentUpdateWithWhereUniqueWithoutThreadInputSchema), z.lazy(() => ReviewCommentUpdateWithWhereUniqueWithoutThreadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewCommentUpdateManyWithWhereWithoutThreadInputSchema), z.lazy(() => ReviewCommentUpdateManyWithWhereWithoutThreadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewCommentScalarWhereInputSchema), z.lazy(() => ReviewCommentScalarWhereInputSchema).array() ]).optional(),
});

export default ReviewCommentUncheckedUpdateManyWithoutThreadNestedInputSchema;
