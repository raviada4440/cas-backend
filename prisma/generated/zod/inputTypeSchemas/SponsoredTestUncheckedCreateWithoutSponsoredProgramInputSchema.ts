import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutSponsoredTestInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutSponsoredTestInputSchema';

export const SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema: z.ZodType<Prisma.SponsoredTestUncheckedCreateWithoutSponsoredProgramInput> = z.strictObject({
  id: z.string().optional(),
  testId: z.string(),
  labTestId: z.string().optional().nullable(),
  labId: z.string().optional().nullable(),
  casandraTestId: z.string(),
  category: z.string(),
  subCategory: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutSponsoredTestInputSchema).optional(),
});

export default SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema;
