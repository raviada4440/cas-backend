import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { PatientArgsSchema } from "../outputTypeSchemas/PatientArgsSchema"

export const PatientOrganizationIncludeSchema: z.ZodType<Prisma.PatientOrganizationInclude> = z.object({
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  patient: z.union([z.boolean(),z.lazy(() => PatientArgsSchema)]).optional(),
}).strict();

export default PatientOrganizationIncludeSchema;
