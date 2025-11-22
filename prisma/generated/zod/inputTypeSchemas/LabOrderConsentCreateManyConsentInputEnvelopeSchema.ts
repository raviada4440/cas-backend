import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateManyConsentInputSchema } from './LabOrderConsentCreateManyConsentInputSchema';

export const LabOrderConsentCreateManyConsentInputEnvelopeSchema: z.ZodType<Prisma.LabOrderConsentCreateManyConsentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderConsentCreateManyConsentInputSchema), z.lazy(() => LabOrderConsentCreateManyConsentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderConsentCreateManyConsentInputEnvelopeSchema;
