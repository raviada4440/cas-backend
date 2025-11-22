import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SponsoredTestUncheckedUpdateManyWithoutLabNestedInputSchema } from './SponsoredTestUncheckedUpdateManyWithoutLabNestedInputSchema';
import { TestCatalogUncheckedUpdateManyWithoutLabNestedInputSchema } from './TestCatalogUncheckedUpdateManyWithoutLabNestedInputSchema';
import { LabOrderUncheckedUpdateManyWithoutLabNestedInputSchema } from './LabOrderUncheckedUpdateManyWithoutLabNestedInputSchema';

export const LabUncheckedUpdateInputSchema: z.ZodType<Prisma.LabUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  labName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  labCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestUncheckedUpdateManyWithoutLabNestedInputSchema).optional(),
  testCatalogs: z.lazy(() => TestCatalogUncheckedUpdateManyWithoutLabNestedInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderUncheckedUpdateManyWithoutLabNestedInputSchema).optional(),
});

export default LabUncheckedUpdateInputSchema;
