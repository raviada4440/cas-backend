import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PatientCountOutputTypeSelectSchema: z.ZodType<Prisma.PatientCountOutputTypeSelect> = z.object({
  labOrders: z.boolean().optional(),
  patientOrganizations: z.boolean().optional(),
}).strict();

export default PatientCountOutputTypeSelectSchema;
