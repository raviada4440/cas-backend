import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientCreateNestedOneWithoutPatientOrganizationsInputSchema } from './PatientCreateNestedOneWithoutPatientOrganizationsInputSchema';

export const PatientOrganizationCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationCreateWithoutOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  mrn: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutPatientOrganizationsInputSchema),
});

export default PatientOrganizationCreateWithoutOrganizationInputSchema;
