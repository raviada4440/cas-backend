import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereInputSchema } from './LabWhereInputSchema';

export const LabNullableScalarRelationFilterSchema: z.ZodType<Prisma.LabNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => LabWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LabWhereInputSchema).optional().nullable(),
});

export default LabNullableScalarRelationFilterSchema;
