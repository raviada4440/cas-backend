import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PatientOrganizationUncheckedCreateInputSchema: z.ZodType<Prisma.PatientOrganizationUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  patientId: z.string(),
  organizationId: z.string(),
  mrn: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default PatientOrganizationUncheckedCreateInputSchema;
