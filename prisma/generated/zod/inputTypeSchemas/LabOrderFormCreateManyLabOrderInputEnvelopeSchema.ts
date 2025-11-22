import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateManyLabOrderInputSchema } from './LabOrderFormCreateManyLabOrderInputSchema';

export const LabOrderFormCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderFormCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderFormCreateManyLabOrderInputSchema), z.lazy(() => LabOrderFormCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderFormCreateManyLabOrderInputEnvelopeSchema;
