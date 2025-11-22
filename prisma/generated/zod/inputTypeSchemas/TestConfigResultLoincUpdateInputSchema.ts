import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogConfigurationUpdateOneRequiredWithoutResultLoincOverridesNestedInputSchema } from './TestCatalogConfigurationUpdateOneRequiredWithoutResultLoincOverridesNestedInputSchema';
import { LoincUpdateOneRequiredWithoutConfigResultLoincsNestedInputSchema } from './LoincUpdateOneRequiredWithoutConfigResultLoincsNestedInputSchema';

export const TestConfigResultLoincUpdateInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  resultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  uom: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationUpdateOneRequiredWithoutResultLoincOverridesNestedInputSchema).optional(),
  loinc: z.lazy(() => LoincUpdateOneRequiredWithoutConfigResultLoincsNestedInputSchema).optional(),
});

export default TestConfigResultLoincUpdateInputSchema;
