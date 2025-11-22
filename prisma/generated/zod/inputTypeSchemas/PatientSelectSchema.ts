import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { PatientOrganizationFindManyArgsSchema } from "../outputTypeSchemas/PatientOrganizationFindManyArgsSchema"
import { PatientCountOutputTypeArgsSchema } from "../outputTypeSchemas/PatientCountOutputTypeArgsSchema"

export const PatientSelectSchema: z.ZodType<Prisma.PatientSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  dateOfBirth: z.boolean().optional(),
  gender: z.boolean().optional(),
  email: z.boolean().optional(),
  mobile: z.boolean().optional(),
  addressLine1: z.boolean().optional(),
  addressLine2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  patientOrganizations: z.union([z.boolean(),z.lazy(() => PatientOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PatientSelectSchema;
