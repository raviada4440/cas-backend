import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationCreateManyOrganizationInputSchema } from './PatientOrganizationCreateManyOrganizationInputSchema';

export const PatientOrganizationCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.PatientOrganizationCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => PatientOrganizationCreateManyOrganizationInputSchema), z.lazy(() => PatientOrganizationCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default PatientOrganizationCreateManyOrganizationInputEnvelopeSchema;
