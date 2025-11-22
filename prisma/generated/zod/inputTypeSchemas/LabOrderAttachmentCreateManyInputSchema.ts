import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderAttachmentCreateManyInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  attachmentId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderAttachmentCreateManyInputSchema;
