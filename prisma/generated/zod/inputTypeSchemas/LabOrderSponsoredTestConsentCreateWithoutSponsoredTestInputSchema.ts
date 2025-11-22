import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema';

export const LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInput> = z.strictObject({
  id: z.string().optional(),
  providerName: z.string().optional().nullable(),
  providerNpi: z.string().optional().nullable(),
  consentAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
});

export default LabOrderSponsoredTestConsentCreateWithoutSponsoredTestInputSchema;
