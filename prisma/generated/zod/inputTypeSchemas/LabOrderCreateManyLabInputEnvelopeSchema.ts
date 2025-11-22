import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateManyLabInputSchema } from './LabOrderCreateManyLabInputSchema';

export const LabOrderCreateManyLabInputEnvelopeSchema: z.ZodType<Prisma.LabOrderCreateManyLabInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderCreateManyLabInputSchema), z.lazy(() => LabOrderCreateManyLabInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderCreateManyLabInputEnvelopeSchema;
