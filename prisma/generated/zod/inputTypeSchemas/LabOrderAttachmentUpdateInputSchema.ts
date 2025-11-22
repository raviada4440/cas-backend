import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema } from './LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema';
import { AttachmentUpdateOneWithoutLabOrderAttachmentsNestedInputSchema } from './AttachmentUpdateOneWithoutLabOrderAttachmentsNestedInputSchema';

export const LabOrderAttachmentUpdateInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrder: z.lazy(() => LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema).optional(),
  attachment: z.lazy(() => AttachmentUpdateOneWithoutLabOrderAttachmentsNestedInputSchema).optional(),
});

export default LabOrderAttachmentUpdateInputSchema;
