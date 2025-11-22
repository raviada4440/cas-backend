import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema';
import { AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema';

export const LabOrderAttachmentCreateInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema).optional(),
  attachment: z.lazy(() => AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema).optional(),
});

export default LabOrderAttachmentCreateInputSchema;
