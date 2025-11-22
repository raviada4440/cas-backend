import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttachmentWhereInputSchema } from './AttachmentWhereInputSchema';
import { AttachmentUpdateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUpdateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema';

export const AttachmentUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.AttachmentUpdateToOneWithWhereWithoutLabOrderAttachmentsInput> = z.strictObject({
  where: z.lazy(() => AttachmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AttachmentUpdateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema) ]),
});

export default AttachmentUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema;
