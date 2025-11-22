import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenIncludeSchema } from '../inputTypeSchemas/LabOrderSpecimenIncludeSchema'
import { LabOrderSpecimenCreateInputSchema } from '../inputTypeSchemas/LabOrderSpecimenCreateInputSchema'
import { LabOrderSpecimenUncheckedCreateInputSchema } from '../inputTypeSchemas/LabOrderSpecimenUncheckedCreateInputSchema'
import { LabOrderArgsSchema } from "../outputTypeSchemas/LabOrderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderSpecimenSelectSchema: z.ZodType<Prisma.LabOrderSpecimenSelect> = z.object({
  id: z.boolean().optional(),
  labOrderId: z.boolean().optional(),
  specimenType: z.boolean().optional(),
  specimenCount: z.boolean().optional(),
  collectedDate: z.boolean().optional(),
  collectedTime: z.boolean().optional(),
  specimenId: z.boolean().optional(),
  bodySite: z.boolean().optional(),
  tumorType: z.boolean().optional(),
  fixative: z.boolean().optional(),
  fixativeDuration: z.boolean().optional(),
  coldIschemicTime: z.boolean().optional(),
  patientAddress1: z.boolean().optional(),
  patientAddress2: z.boolean().optional(),
  patientCity: z.boolean().optional(),
  patientState: z.boolean().optional(),
  patientZip: z.boolean().optional(),
  pscLab: z.boolean().optional(),
  pscLocation: z.boolean().optional(),
  pscAppointmentAt: z.boolean().optional(),
  pscAppointmentTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrder: z.union([z.boolean(),z.lazy(() => LabOrderArgsSchema)]).optional(),
}).strict()

export const LabOrderSpecimenCreateArgsSchema: z.ZodType<Prisma.LabOrderSpecimenCreateArgs> = z.object({
  select: LabOrderSpecimenSelectSchema.optional(),
  include: z.lazy(() => LabOrderSpecimenIncludeSchema).optional(),
  data: z.union([ LabOrderSpecimenCreateInputSchema, LabOrderSpecimenUncheckedCreateInputSchema ]),
}).strict();

export default LabOrderSpecimenCreateArgsSchema;
