import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenCreateManyLabOrderInputSchema } from './LabOrderSpecimenCreateManyLabOrderInputSchema';

export const LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderSpecimenCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderSpecimenCreateManyLabOrderInputSchema), z.lazy(() => LabOrderSpecimenCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema;
