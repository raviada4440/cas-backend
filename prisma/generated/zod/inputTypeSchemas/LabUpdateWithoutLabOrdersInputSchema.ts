import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SponsoredTestUpdateManyWithoutLabNestedInputSchema } from './SponsoredTestUpdateManyWithoutLabNestedInputSchema';
import { TestCatalogUpdateManyWithoutLabNestedInputSchema } from './TestCatalogUpdateManyWithoutLabNestedInputSchema';

export const LabUpdateWithoutLabOrdersInputSchema: z.ZodType<Prisma.LabUpdateWithoutLabOrdersInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  labName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  labCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestUpdateManyWithoutLabNestedInputSchema).optional(),
  testCatalogs: z.lazy(() => TestCatalogUpdateManyWithoutLabNestedInputSchema).optional(),
});

export default LabUpdateWithoutLabOrdersInputSchema;
