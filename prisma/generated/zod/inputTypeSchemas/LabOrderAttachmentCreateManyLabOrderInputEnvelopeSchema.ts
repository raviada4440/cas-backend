import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentCreateManyLabOrderInputSchema } from './LabOrderAttachmentCreateManyLabOrderInputSchema';

export const LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema: z.ZodType<Prisma.LabOrderAttachmentCreateManyLabOrderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderAttachmentCreateManyLabOrderInputSchema), z.lazy(() => LabOrderAttachmentCreateManyLabOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema;
