import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateManyOrganizationInputSchema } from './LabOrderCreateManyOrganizationInputSchema';

export const LabOrderCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.LabOrderCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderCreateManyOrganizationInputSchema), z.lazy(() => LabOrderCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderCreateManyOrganizationInputEnvelopeSchema;
