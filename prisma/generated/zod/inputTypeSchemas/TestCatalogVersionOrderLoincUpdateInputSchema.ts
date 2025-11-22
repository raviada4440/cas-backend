import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema } from './TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema';
import { LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema } from './LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema';

export const TestCatalogVersionOrderLoincUpdateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema).optional(),
  loinc: z.lazy(() => LoincUpdateOneRequiredWithoutTestOrderLoincsNestedInputSchema).optional(),
});

export default TestCatalogVersionOrderLoincUpdateInputSchema;
