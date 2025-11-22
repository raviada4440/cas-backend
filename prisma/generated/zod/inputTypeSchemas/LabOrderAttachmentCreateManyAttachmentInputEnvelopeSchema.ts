import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentCreateManyAttachmentInputSchema } from './LabOrderAttachmentCreateManyAttachmentInputSchema';

export const LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema: z.ZodType<Prisma.LabOrderAttachmentCreateManyAttachmentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderAttachmentCreateManyAttachmentInputSchema), z.lazy(() => LabOrderAttachmentCreateManyAttachmentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema;
