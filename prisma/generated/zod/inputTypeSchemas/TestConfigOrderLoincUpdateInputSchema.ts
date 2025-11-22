import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogConfigurationUpdateOneRequiredWithoutOrderLoincOverridesNestedInputSchema } from './TestCatalogConfigurationUpdateOneRequiredWithoutOrderLoincOverridesNestedInputSchema';
import { LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema } from './LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema';

export const TestConfigOrderLoincUpdateInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationUpdateOneRequiredWithoutOrderLoincOverridesNestedInputSchema).optional(),
  loinc: z.lazy(() => LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema).optional(),
});

export default TestConfigOrderLoincUpdateInputSchema;
