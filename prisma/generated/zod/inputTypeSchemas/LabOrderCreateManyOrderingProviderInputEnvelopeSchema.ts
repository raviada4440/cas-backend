import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateManyOrderingProviderInputSchema } from './LabOrderCreateManyOrderingProviderInputSchema';

export const LabOrderCreateManyOrderingProviderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderCreateManyOrderingProviderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderCreateManyOrderingProviderInputSchema), z.lazy(() => LabOrderCreateManyOrderingProviderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderCreateManyOrderingProviderInputEnvelopeSchema;
