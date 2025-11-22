import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PatientOrganizationSelectSchema } from '../inputTypeSchemas/PatientOrganizationSelectSchema';
import { PatientOrganizationIncludeSchema } from '../inputTypeSchemas/PatientOrganizationIncludeSchema';

export const PatientOrganizationArgsSchema: z.ZodType<Prisma.PatientOrganizationDefaultArgs> = z.object({
  select: z.lazy(() => PatientOrganizationSelectSchema).optional(),
  include: z.lazy(() => PatientOrganizationIncludeSchema).optional(),
}).strict();

export default PatientOrganizationArgsSchema;
