import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema } from './LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema';

export const LabOrderTestUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabOrderTestUpdateWithoutTestCatalogInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrder: z.lazy(() => LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema).optional(),
});

export default LabOrderTestUpdateWithoutTestCatalogInputSchema;
