import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateManyPatientInputSchema } from './LabOrderCreateManyPatientInputSchema';

export const LabOrderCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.LabOrderCreateManyPatientInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderCreateManyPatientInputSchema), z.lazy(() => LabOrderCreateManyPatientInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderCreateManyPatientInputEnvelopeSchema;
