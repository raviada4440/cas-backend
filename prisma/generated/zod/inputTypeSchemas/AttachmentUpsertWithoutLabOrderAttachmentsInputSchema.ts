import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttachmentUpdateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUpdateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentWhereInputSchema } from './AttachmentWhereInputSchema';

export const AttachmentUpsertWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.AttachmentUpsertWithoutLabOrderAttachmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => AttachmentUpdateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema) ]),
  create: z.union([ z.lazy(() => AttachmentCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]),
  where: z.lazy(() => AttachmentWhereInputSchema).optional(),
});

export default AttachmentUpsertWithoutLabOrderAttachmentsInputSchema;
