import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema';

export const LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  providerName: z.string().optional().nullable(),
  providerNpi: z.string().optional().nullable(),
  consentAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  sponsoredTest: z.lazy(() => SponsoredTestCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
});

export default LabOrderSponsoredTestConsentCreateWithoutLabOrderInputSchema;
