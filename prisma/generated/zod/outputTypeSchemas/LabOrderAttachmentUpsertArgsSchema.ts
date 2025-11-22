import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderAttachmentIncludeSchema } from '../inputTypeSchemas/LabOrderAttachmentIncludeSchema'
import { LabOrderAttachmentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderAttachmentWhereUniqueInputSchema'
import { LabOrderAttachmentCreateInputSchema } from '../inputTypeSchemas/LabOrderAttachmentCreateInputSchema'
import { LabOrderAttachmentUncheckedCreateInputSchema } from '../inputTypeSchemas/LabOrderAttachmentUncheckedCreateInputSchema'
import { LabOrderAttachmentUpdateInputSchema } from '../inputTypeSchemas/LabOrderAttachmentUpdateInputSchema'
import { LabOrderAttachmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/LabOrderAttachmentUncheckedUpdateInputSchema'
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

export const LabOrderAttachmentUpsertArgsSchema: z.ZodType<Prisma.LabOrderAttachmentUpsertArgs> = z.object({
  select: LabOrderAttachmentSelectSchema.optional(),
  include: z.lazy(() => LabOrderAttachmentIncludeSchema).optional(),
  where: LabOrderAttachmentWhereUniqueInputSchema, 
  create: z.union([ LabOrderAttachmentCreateInputSchema, LabOrderAttachmentUncheckedCreateInputSchema ]),
  update: z.union([ LabOrderAttachmentUpdateInputSchema, LabOrderAttachmentUncheckedUpdateInputSchema ]),
}).strict();

export default LabOrderAttachmentUpsertArgsSchema;
