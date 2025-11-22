import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderSponsoredTestConsentUncheckedCreateInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  sponsoredCasandraTestId: z.string().optional().nullable(),
  providerName: z.string().optional().nullable(),
  providerNpi: z.string().optional().nullable(),
  consentAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderSponsoredTestConsentUncheckedCreateInputSchema;
