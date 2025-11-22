import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema } from './LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema';
import { TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema } from './TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema';

export const LabOrderTestUpdateInputSchema: z.ZodType<Prisma.LabOrderTestUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrder: z.lazy(() => LabOrderUpdateOneWithoutLabOrderTestsNestedInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema).optional(),
});

export default LabOrderTestUpdateInputSchema;
