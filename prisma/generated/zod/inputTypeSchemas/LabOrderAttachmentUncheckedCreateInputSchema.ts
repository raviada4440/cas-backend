import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderAttachmentUncheckedCreateInputSchema: z.ZodType<Prisma.LabOrderAttachmentUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  attachmentId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderAttachmentUncheckedCreateInputSchema;
