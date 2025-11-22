import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUpdateOneRequiredWithoutOrderFormsNestedInputSchema } from './TestCatalogVersionUpdateOneRequiredWithoutOrderFormsNestedInputSchema';
import { TestCatalogConfigurationUpdateOneWithoutOrderFormsNestedInputSchema } from './TestCatalogConfigurationUpdateOneWithoutOrderFormsNestedInputSchema';
import { OrderFormTemplateUpdateOneRequiredWithoutAssignmentsNestedInputSchema } from './OrderFormTemplateUpdateOneRequiredWithoutAssignmentsNestedInputSchema';
import { LabOrderFormUpdateManyWithoutVersionOrderFormNestedInputSchema } from './LabOrderFormUpdateManyWithoutVersionOrderFormNestedInputSchema';

export const TestCatalogVersionOrderFormUpdateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayOrder: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTitle: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isRequired: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isVisible: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneRequiredWithoutOrderFormsNestedInputSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationUpdateOneWithoutOrderFormsNestedInputSchema).optional(),
  template: z.lazy(() => OrderFormTemplateUpdateOneRequiredWithoutAssignmentsNestedInputSchema).optional(),
  labOrderForms: z.lazy(() => LabOrderFormUpdateManyWithoutVersionOrderFormNestedInputSchema).optional(),
});

export default TestCatalogVersionOrderFormUpdateInputSchema;
