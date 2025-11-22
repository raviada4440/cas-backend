import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PatientOrganizationCreateManyOrganizationInputSchema: z.ZodType<Prisma.PatientOrganizationCreateManyOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  patientId: z.string(),
  mrn: z.string().optional().nullable(),
  mobile: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default PatientOrganizationCreateManyOrganizationInputSchema;
