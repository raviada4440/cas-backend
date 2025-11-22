import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationCreateManyPatientInputSchema } from './PatientOrganizationCreateManyPatientInputSchema';

export const PatientOrganizationCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.PatientOrganizationCreateManyPatientInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => PatientOrganizationCreateManyPatientInputSchema), z.lazy(() => PatientOrganizationCreateManyPatientInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default PatientOrganizationCreateManyPatientInputEnvelopeSchema;
