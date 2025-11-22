import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema } from './LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema';

export const TestConfigOrderLoincUpdateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateWithoutConfigurationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loinc: z.lazy(() => LoincUpdateOneRequiredWithoutConfigOrderLoincsNestedInputSchema).optional(),
});

export default TestConfigOrderLoincUpdateWithoutConfigurationInputSchema;
