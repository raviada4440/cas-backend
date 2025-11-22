import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema';

export const LabOrderAttachmentCreateWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateWithoutAttachmentInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderAttachmentsInputSchema).optional(),
});

export default LabOrderAttachmentCreateWithoutAttachmentInputSchema;
