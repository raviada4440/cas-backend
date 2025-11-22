import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutSponsoredTestInputSchema';

export const SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.SponsoredTestUncheckedCreateWithoutTestCatalogInput> = z.strictObject({
  id: z.string().optional(),
  labTestId: z.string().optional().nullable(),
  sponsoredProgramId: z.string().optional().nullable(),
  labId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  category: z.string(),
  subCategory: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutSponsoredTestInputSchema).optional(),
});

export default SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema;
