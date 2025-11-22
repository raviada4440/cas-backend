import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateNestedManyWithoutLabInputSchema } from './SponsoredTestCreateNestedManyWithoutLabInputSchema';
import { TestCatalogCreateNestedManyWithoutLabInputSchema } from './TestCatalogCreateNestedManyWithoutLabInputSchema';

export const LabCreateWithoutLabOrdersInputSchema: z.ZodType<Prisma.LabCreateWithoutLabOrdersInput> = z.strictObject({
  id: z.string().optional(),
  labName: z.string().optional().nullable(),
  labCode: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  sponsoredTests: z.lazy(() => SponsoredTestCreateNestedManyWithoutLabInputSchema).optional(),
  testCatalogs: z.lazy(() => TestCatalogCreateNestedManyWithoutLabInputSchema).optional(),
});

export default LabCreateWithoutLabOrdersInputSchema;
