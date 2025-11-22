import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema } from './TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema';

export const TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateWithoutLoincInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneRequiredWithoutOrderLoincsNestedInputSchema).optional(),
});

export default TestCatalogVersionOrderLoincUpdateWithoutLoincInputSchema;
