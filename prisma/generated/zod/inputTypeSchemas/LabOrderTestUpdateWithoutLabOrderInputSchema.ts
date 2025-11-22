import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema } from './TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema';

export const LabOrderTestUpdateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestUpdateWithoutLabOrderInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  testCatalog: z.lazy(() => TestCatalogUpdateOneWithoutLabOrderTestsNestedInputSchema).optional(),
});

export default LabOrderTestUpdateWithoutLabOrderInputSchema;
