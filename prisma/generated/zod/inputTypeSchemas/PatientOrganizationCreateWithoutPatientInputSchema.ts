import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema } from './OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema';

export const PatientOrganizationCreateWithoutPatientInputSchema: z.ZodType<Prisma.PatientOrganizationCreateWithoutPatientInput> = z.strictObject({
  id: z.string().optional(),
  mrn: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema),
});

export default PatientOrganizationCreateWithoutPatientInputSchema;
