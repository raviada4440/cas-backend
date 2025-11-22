import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema } from './LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema';

export const TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateWithoutVersionInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  loinc: z.lazy(() => LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema).optional(),
});

export default TestCatalogVersionOrderLoincUpdateWithoutVersionInputSchema;
