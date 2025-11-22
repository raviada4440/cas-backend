import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationUncheckedCreateWithoutOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  patientId: z.string(),
  mrn: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default PatientOrganizationUncheckedCreateWithoutOrganizationInputSchema;
