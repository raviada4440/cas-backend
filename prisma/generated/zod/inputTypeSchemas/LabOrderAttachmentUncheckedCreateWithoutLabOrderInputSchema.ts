import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentUncheckedCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  attachmentId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema;
