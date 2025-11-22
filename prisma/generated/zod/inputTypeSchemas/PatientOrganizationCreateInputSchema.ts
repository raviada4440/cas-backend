import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema } from './OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema';
import { PatientCreateNestedOneWithoutPatientOrganizationsInputSchema } from './PatientCreateNestedOneWithoutPatientOrganizationsInputSchema';

export const PatientOrganizationCreateInputSchema: z.ZodType<Prisma.PatientOrganizationCreateInput> = z.strictObject({
  id: z.string().optional(),
  mrn: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutPatientOrganizationsInputSchema),
  patient: z.lazy(() => PatientCreateNestedOneWithoutPatientOrganizationsInputSchema),
});

export default PatientOrganizationCreateInputSchema;
