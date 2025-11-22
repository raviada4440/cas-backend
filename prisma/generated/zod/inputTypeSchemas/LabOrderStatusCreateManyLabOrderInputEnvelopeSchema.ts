import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderStatusCreateManyLabOrderInputSchema } from './LabOrderStatusCreateManyLabOrderInputSchema';

export const LabOrderStatusCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderStatusCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderStatusCreateManyLabOrderInputSchema), z.lazy(() => LabOrderStatusCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderStatusCreateManyLabOrderInputEnvelopeSchema;
