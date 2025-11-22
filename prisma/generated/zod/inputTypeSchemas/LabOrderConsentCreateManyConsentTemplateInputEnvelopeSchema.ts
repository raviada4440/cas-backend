import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateManyConsentTemplateInputSchema } from './LabOrderConsentCreateManyConsentTemplateInputSchema';

export const LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema: z.ZodType<Prisma.LabOrderConsentCreateManyConsentTemplateInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderConsentCreateManyConsentTemplateInputSchema), z.lazy(() => LabOrderConsentCreateManyConsentTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderConsentCreateManyConsentTemplateInputEnvelopeSchema;
