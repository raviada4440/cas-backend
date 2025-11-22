import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentUncheckedCreateWithoutAttachmentInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema;
