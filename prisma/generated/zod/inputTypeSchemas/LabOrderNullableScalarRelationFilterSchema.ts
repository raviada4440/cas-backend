import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderNullableScalarRelationFilterSchema: z.ZodType<Prisma.LabOrderNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => LabOrderWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LabOrderWhereInputSchema).optional().nullable(),
});

export default LabOrderNullableScalarRelationFilterSchema;
