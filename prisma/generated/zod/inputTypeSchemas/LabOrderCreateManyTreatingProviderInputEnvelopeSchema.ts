import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateManyTreatingProviderInputSchema } from './LabOrderCreateManyTreatingProviderInputSchema';

export const LabOrderCreateManyTreatingProviderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderCreateManyTreatingProviderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderCreateManyTreatingProviderInputSchema), z.lazy(() => LabOrderCreateManyTreatingProviderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderCreateManyTreatingProviderInputEnvelopeSchema;
