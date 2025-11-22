import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateManyVersionOrderFormInputSchema } from './LabOrderFormCreateManyVersionOrderFormInputSchema';

export const LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema: z.ZodType<Prisma.LabOrderFormCreateManyVersionOrderFormInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => LabOrderFormCreateManyVersionOrderFormInputSchema), z.lazy(() => LabOrderFormCreateManyVersionOrderFormInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema;
