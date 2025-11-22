import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema } from './LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema';

export const LabOrderAttachmentUpdateWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateWithoutAttachmentInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrder: z.lazy(() => LabOrderUpdateOneWithoutLabOrderAttachmentsNestedInputSchema).optional(),
});

export default LabOrderAttachmentUpdateWithoutAttachmentInputSchema;
