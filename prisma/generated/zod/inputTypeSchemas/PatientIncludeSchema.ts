import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { PatientOrganizationFindManyArgsSchema } from "../outputTypeSchemas/PatientOrganizationFindManyArgsSchema"
import { PatientCountOutputTypeArgsSchema } from "../outputTypeSchemas/PatientCountOutputTypeArgsSchema"

export const PatientIncludeSchema: z.ZodType<Prisma.PatientInclude> = z.object({
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  patientOrganizations: z.union([z.boolean(),z.lazy(() => PatientOrganizationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default PatientIncludeSchema;
