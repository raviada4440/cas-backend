import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSponsoredTestConsentCreateManyLabOrderInputSchema } from './LabOrderSponsoredTestConsentCreateManyLabOrderInputSchema';

export const LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderSponsoredTestConsentCreateManyLabOrderInputSchema), z.lazy(() => LabOrderSponsoredTestConsentCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderSponsoredTestConsentCreateManyLabOrderInputEnvelopeSchema;
