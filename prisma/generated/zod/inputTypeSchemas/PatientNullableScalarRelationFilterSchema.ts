import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';

export const PatientNullableScalarRelationFilterSchema: z.ZodType<Prisma.PatientNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => PatientWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PatientWhereInputSchema).optional().nullable(),
});

export default PatientNullableScalarRelationFilterSchema;
