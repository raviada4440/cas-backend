import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestCreateManyLabOrderInputSchema } from './LabOrderTestCreateManyLabOrderInputSchema';

export const LabOrderTestCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderTestCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderTestCreateManyLabOrderInputSchema), z.lazy(() => LabOrderTestCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderTestCreateManyLabOrderInputEnvelopeSchema;
