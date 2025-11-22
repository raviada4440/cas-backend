import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { AttachmentArgsSchema } from "../outputTypeSchemas/AttachmentArgsSchema"

export const LabOrderAttachmentSelectSchema: z.ZodType<Prisma.LabOrderAttachmentSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  attachmentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  attachment: z.union([z.boolean(),z.lazy(() => AttachmentArgsSchema)]).optional(),
}).strict()

export default LabOrderAttachmentSelectSchema;
