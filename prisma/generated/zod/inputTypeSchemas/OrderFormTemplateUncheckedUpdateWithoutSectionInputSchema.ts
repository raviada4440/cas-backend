import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';
import { EnumOrderFormTemplateStatusFieldUpdateOperationsInputSchema } from './EnumOrderFormTemplateStatusFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema } from './TestCatalogVersionOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema';
import { LabOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema } from './LabOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema';

export const OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema: z.ZodType<Prisma.OrderFormTemplateUncheckedUpdateWithoutSectionInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => OrderFormTemplateStatusSchema), z.lazy(() => EnumOrderFormTemplateStatusFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  effectiveDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  retiredDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  formSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  layoutSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  organizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isGlobal: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignments: z.lazy(() => TestCatalogVersionOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema).optional(),
  labOrderForms: z.lazy(() => LabOrderFormUncheckedUpdateManyWithoutTemplateNestedInputSchema).optional(),
});

export default OrderFormTemplateUncheckedUpdateWithoutSectionInputSchema;
