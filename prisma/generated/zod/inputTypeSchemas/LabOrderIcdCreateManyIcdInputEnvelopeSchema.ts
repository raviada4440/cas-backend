import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderIcdCreateManyIcdInputSchema } from './LabOrderIcdCreateManyIcdInputSchema';

export const LabOrderIcdCreateManyIcdInputEnvelopeSchema: z.ZodType<Prisma.LabOrderIcdCreateManyIcdInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderIcdCreateManyIcdInputSchema), z.lazy(() => LabOrderIcdCreateManyIcdInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderIcdCreateManyIcdInputEnvelopeSchema;
