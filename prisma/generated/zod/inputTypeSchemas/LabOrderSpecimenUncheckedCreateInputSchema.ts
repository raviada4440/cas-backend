import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderSpecimenUncheckedCreateInputSchema: z.ZodType<Prisma.LabOrderSpecimenUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  specimenType: z.string().optional().nullable(),
  specimenCount: z.string().optional().nullable(),
  collectedDate: z.date().optional().nullable(),
  collectedTime: z.string().optional().nullable(),
  specimenId: z.string().optional().nullable(),
  bodySite: z.string().optional().nullable(),
  tumorType: z.string().optional().nullable(),
  fixative: z.string().optional().nullable(),
  fixativeDuration: z.string().optional().nullable(),
  coldIschemicTime: z.string().optional().nullable(),
  patientAddress1: z.string().optional().nullable(),
  patientAddress2: z.string().optional().nullable(),
  patientCity: z.string().optional().nullable(),
  patientState: z.string().optional().nullable(),
  patientZip: z.string().optional().nullable(),
  pscLab: z.string().optional().nullable(),
  pscLocation: z.string().optional().nullable(),
  pscAppointmentAt: z.date().optional().nullable(),
  pscAppointmentTime: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderSpecimenUncheckedCreateInputSchema;
