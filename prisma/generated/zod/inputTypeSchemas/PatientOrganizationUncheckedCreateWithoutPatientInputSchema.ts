import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PatientOrganizationUncheckedCreateWithoutPatientInputSchema: z.ZodType<Prisma.PatientOrganizationUncheckedCreateWithoutPatientInput> = z.strictObject({
  id: z.string().optional(),
  organizationId: z.string(),
  mrn: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default PatientOrganizationUncheckedCreateWithoutPatientInputSchema;
