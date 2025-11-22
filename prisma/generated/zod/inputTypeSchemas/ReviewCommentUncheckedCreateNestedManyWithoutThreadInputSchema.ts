import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentCreateWithoutThreadInputSchema } from './ReviewCommentCreateWithoutThreadInputSchema';
import { ReviewCommentUncheckedCreateWithoutThreadInputSchema } from './ReviewCommentUncheckedCreateWithoutThreadInputSchema';
import { ReviewCommentCreateOrConnectWithoutThreadInputSchema } from './ReviewCommentCreateOrConnectWithoutThreadInputSchema';
import { ReviewCommentCreateManyThreadInputEnvelopeSchema } from './ReviewCommentCreateManyThreadInputEnvelopeSchema';
import { ReviewCommentWhereUniqueInputSchema } from './ReviewCommentWhereUniqueInputSchema';

export const ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema: z.ZodType<Prisma.ReviewCommentUncheckedCreateNestedManyWithoutThreadInput> = z.strictObject({
  create: z.union([ z.lazy(() => ReviewCommentCreateWithoutThreadInputSchema), z.lazy(() => ReviewCommentCreateWithoutThreadInputSchema).array(), z.lazy(() => ReviewCommentUncheckedCreateWithoutThreadInputSchema), z.lazy(() => ReviewCommentUncheckedCreateWithoutThreadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCommentCreateOrConnectWithoutThreadInputSchema), z.lazy(() => ReviewCommentCreateOrConnectWithoutThreadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCommentCreateManyThreadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewCommentWhereUniqueInputSchema), z.lazy(() => ReviewCommentWhereUniqueInputSchema).array() ]).optional(),
});

export default ReviewCommentUncheckedCreateNestedManyWithoutThreadInputSchema;
