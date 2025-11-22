import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';

export const PatientScalarRelationFilterSchema: z.ZodType<Prisma.PatientScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => PatientWhereInputSchema).optional(),
  isNot: z.lazy(() => PatientWhereInputSchema).optional(),
});

export default PatientScalarRelationFilterSchema;
