import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientOrganizationWhereInputSchema } from './PatientOrganizationWhereInputSchema';

export const PatientOrganizationListRelationFilterSchema: z.ZodType<Prisma.PatientOrganizationListRelationFilter> = z.strictObject({
  every: z.lazy(() => PatientOrganizationWhereInputSchema).optional(),
  some: z.lazy(() => PatientOrganizationWhereInputSchema).optional(),
  none: z.lazy(() => PatientOrganizationWhereInputSchema).optional(),
});

export default PatientOrganizationListRelationFilterSchema;
