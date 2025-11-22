import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema';

export const LabOrderAttachmentCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  attachment: z.lazy(() => AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema).optional(),
});

export default LabOrderAttachmentCreateWithoutLabOrderInputSchema;
