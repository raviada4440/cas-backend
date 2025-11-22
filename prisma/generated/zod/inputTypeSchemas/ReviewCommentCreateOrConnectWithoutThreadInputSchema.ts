import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCommentWhereUniqueInputSchema } from './ReviewCommentWhereUniqueInputSchema';
import { ReviewCommentCreateWithoutThreadInputSchema } from './ReviewCommentCreateWithoutThreadInputSchema';
import { ReviewCommentUncheckedCreateWithoutThreadInputSchema } from './ReviewCommentUncheckedCreateWithoutThreadInputSchema';

export const ReviewCommentCreateOrConnectWithoutThreadInputSchema: z.ZodType<Prisma.ReviewCommentCreateOrConnectWithoutThreadInput> = z.strictObject({
  where: z.lazy(() => ReviewCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCommentCreateWithoutThreadInputSchema), z.lazy(() => ReviewCommentUncheckedCreateWithoutThreadInputSchema) ]),
});

export default ReviewCommentCreateOrConnectWithoutThreadInputSchema;
