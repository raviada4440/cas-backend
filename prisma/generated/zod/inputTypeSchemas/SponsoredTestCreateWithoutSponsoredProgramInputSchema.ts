import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema';
import { LabCreateNestedOneWithoutSponsoredTestsInputSchema } from './LabCreateNestedOneWithoutSponsoredTestsInputSchema';
import { TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema } from './TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema';

export const SponsoredTestCreateWithoutSponsoredProgramInputSchema: z.ZodType<Prisma.SponsoredTestCreateWithoutSponsoredProgramInput> = z.strictObject({
  id: z.string().optional(),
  labTestId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  category: z.string(),
  subCategory: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentCreateNestedManyWithoutSponsoredTestInputSchema).optional(),
  lab: z.lazy(() => LabCreateNestedOneWithoutSponsoredTestsInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema),
});

export default SponsoredTestCreateWithoutSponsoredProgramInputSchema;
