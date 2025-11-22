import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IcdWhereInputSchema } from './IcdWhereInputSchema';

export const IcdNullableScalarRelationFilterSchema: z.ZodType<Prisma.IcdNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => IcdWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => IcdWhereInputSchema).optional().nullable(),
});

export default IcdNullableScalarRelationFilterSchema;
