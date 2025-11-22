import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdCreateManyLabOrderInputSchema } from './LabOrderIcdCreateManyLabOrderInputSchema';

export const LabOrderIcdCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderIcdCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderIcdCreateManyLabOrderInputSchema), z.lazy(() => LabOrderIcdCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderIcdCreateManyLabOrderInputEnvelopeSchema;
