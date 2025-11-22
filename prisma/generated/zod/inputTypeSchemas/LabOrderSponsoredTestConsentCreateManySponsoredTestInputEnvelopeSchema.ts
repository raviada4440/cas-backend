import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateManySponsoredTestInputSchema } from './LabOrderSponsoredTestConsentCreateManySponsoredTestInputSchema';

export const LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateManySponsoredTestInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateManySponsoredTestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderSponsoredTestConsentCreateManySponsoredTestInputEnvelopeSchema;
