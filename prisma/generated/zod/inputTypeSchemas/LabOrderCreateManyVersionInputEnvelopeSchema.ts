import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateManyVersionInputSchema } from './LabOrderCreateManyVersionInputSchema';

export const LabOrderCreateManyVersionInputEnvelopeSchema: z.ZodType<Prisma.LabOrderCreateManyVersionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderCreateManyVersionInputSchema), z.lazy(() => LabOrderCreateManyVersionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderCreateManyVersionInputEnvelopeSchema;
