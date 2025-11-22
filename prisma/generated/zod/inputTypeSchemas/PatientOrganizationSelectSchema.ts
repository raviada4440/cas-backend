import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { PatientArgsSchema } from "../outputTypeSchemas/PatientArgsSchema"

export const PatientOrganizationSelectSchema: z.ZodType<Prisma.PatientOrganizationSelect> = z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  mrn: z.boolean().optional(),
  mobile: z.boolean().optional(),
  email: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  patient: z.union([z.boolean(),z.lazy(() => PatientArgsSchema)]).optional(),
}).strict()

export default PatientOrganizationSelectSchema;
