import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema } from './TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema';
import { LabOrderUncheckedCreateNestedManyWithoutLabInputSchema } from './LabOrderUncheckedCreateNestedManyWithoutLabInputSchema';

export const LabUncheckedCreateWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.LabUncheckedCreateWithoutSponsoredTestsInput> = z.strictObject({
  id: z.string().optional(),
  labName: z.string().optional().nullable(),
  labCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testCatalogs: z.lazy(() => TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderUncheckedCreateNestedManyWithoutLabInputSchema).optional(),
});

export default LabUncheckedCreateWithoutSponsoredTestsInputSchema;
