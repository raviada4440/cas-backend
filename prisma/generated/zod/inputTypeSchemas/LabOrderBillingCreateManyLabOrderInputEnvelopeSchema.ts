import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingCreateManyLabOrderInputSchema } from './LabOrderBillingCreateManyLabOrderInputSchema';

export const LabOrderBillingCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderBillingCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderBillingCreateManyLabOrderInputSchema), z.lazy(() => LabOrderBillingCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderBillingCreateManyLabOrderInputEnvelopeSchema;
