import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminWhereInputSchema } from './AdminWhereInputSchema';

export const AdminNullableScalarRelationFilterSchema: z.ZodType<Prisma.AdminNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => AdminWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AdminWhereInputSchema).optional().nullable(),
});

export default AdminNullableScalarRelationFilterSchema;
