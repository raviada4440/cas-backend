import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderAttachmentCreateManyLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateManyLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  attachmentId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderAttachmentCreateManyLabOrderInputSchema;
