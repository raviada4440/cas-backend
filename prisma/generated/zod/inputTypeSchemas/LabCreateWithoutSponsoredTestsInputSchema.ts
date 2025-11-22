import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateNestedManyWithoutLabInputSchema } from './TestCatalogCreateNestedManyWithoutLabInputSchema';
import { LabOrderCreateNestedManyWithoutLabInputSchema } from './LabOrderCreateNestedManyWithoutLabInputSchema';

export const LabCreateWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.LabCreateWithoutSponsoredTestsInput> = z.strictObject({
  id: z.string().optional(),
  labName: z.string().optional().nullable(),
  labCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testCatalogs: z.lazy(() => TestCatalogCreateNestedManyWithoutLabInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderCreateNestedManyWithoutLabInputSchema).optional(),
});

export default LabCreateWithoutSponsoredTestsInputSchema;
