import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestUncheckedCreateNestedManyWithoutLabInputSchema } from './SponsoredTestUncheckedCreateNestedManyWithoutLabInputSchema';
import { TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema } from './TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema';

export const LabUncheckedCreateWithoutLabOrdersInputSchema: z.ZodType<Prisma.LabUncheckedCreateWithoutLabOrdersInput> = z.strictObject({
  id: z.string().optional(),
  labName: z.string().optional().nullable(),
  labCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  sponsoredTests: z.lazy(() => SponsoredTestUncheckedCreateNestedManyWithoutLabInputSchema).optional(),
  testCatalogs: z.lazy(() => TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema).optional(),
});

export default LabUncheckedCreateWithoutLabOrdersInputSchema;
