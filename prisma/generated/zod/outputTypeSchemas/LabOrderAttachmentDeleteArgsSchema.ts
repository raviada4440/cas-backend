import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentIncludeSchema } from '../inputTypeSchemas/LabOrderAttachmentIncludeSchema'
import { LabOrderAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderAttachmentWhereUniqueInputSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
import { AttachmentArgsSchema } from "../outputTypeSchemas/AttachmentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderAttachmentSelectSchema: z.ZodType<Prisma.LabOrderAttachmentSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  attachmentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
  attachment: z.union([z.boolean(),z.lazy(() => AttachmentArgsSchema)]).optional(),
}).strict()

export const LabOrderAttachmentDeleteArgsSchema: z.ZodType<Prisma.LabOrderAttachmentDeleteArgs> = z.object({
  select: LabOrderAttachmentSelectSchema.optional(),
  include: z.lazy(() => LabOrderAttachmentIncludeSchema).optional(),
  where: LabOrderAttachmentWhereUniqueInputSchema, 
}).strict();

export default LabOrderAttachmentDeleteArgsSchema;
