import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateManyTemplateInputSchema } from './LabOrderFormCreateManyTemplateInputSchema';

export const LabOrderFormCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.LabOrderFormCreateManyTemplateInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderFormCreateManyTemplateInputSchema), z.lazy(() => LabOrderFormCreateManyTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderFormCreateManyTemplateInputEnvelopeSchema;
