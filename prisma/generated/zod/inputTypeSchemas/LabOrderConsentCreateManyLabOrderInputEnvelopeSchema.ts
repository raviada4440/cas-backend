import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateManyLabOrderInputSchema } from './LabOrderConsentCreateManyLabOrderInputSchema';

export const LabOrderConsentCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderConsentCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderConsentCreateManyLabOrderInputSchema), z.lazy(() => LabOrderConsentCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderConsentCreateManyLabOrderInputEnvelopeSchema;
