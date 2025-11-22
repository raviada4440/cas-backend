import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttachmentWhereUniqueInputSchema } from './AttachmentWhereUniqueInputSchema';
import { AttachmentCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema';

export const AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.AttachmentCreateOrConnectWithoutLabOrderAttachmentsInput> = z.strictObject({
  where: z.lazy(() => AttachmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttachmentCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]),
});

export default AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema;
