import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationUncheckedCreateNestedManyWithoutPatientInputSchema } from './PatientOrganizationUncheckedCreateNestedManyWithoutPatientInputSchema';

export const PatientUncheckedCreateWithoutLabOrdersInputSchema: z.ZodType<Prisma.PatientUncheckedCreateWithoutLabOrdersInput> = z.strictObject({
  id: z.string().optional(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  dateOfBirth: z.date().optional().nullable(),
  gender: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  addressLine1: z.string().optional().nullable(),
  addressLine2: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationUncheckedCreateNestedManyWithoutPatientInputSchema).optional(),
});

export default PatientUncheckedCreateWithoutLabOrdersInputSchema;
