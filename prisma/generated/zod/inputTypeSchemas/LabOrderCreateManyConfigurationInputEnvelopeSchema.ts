import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateManyConfigurationInputSchema } from './LabOrderCreateManyConfigurationInputSchema';

export const LabOrderCreateManyConfigurationInputEnvelopeSchema: z.ZodType<Prisma.LabOrderCreateManyConfigurationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderCreateManyConfigurationInputSchema), z.lazy(() => LabOrderCreateManyConfigurationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderCreateManyConfigurationInputEnvelopeSchema;
