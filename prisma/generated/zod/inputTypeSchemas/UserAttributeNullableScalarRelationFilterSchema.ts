import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';

export const UserAttributeNullableScalarRelationFilterSchema: z.ZodType<Prisma.UserAttributeNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => UserAttributeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserAttributeWhereInputSchema).optional().nullable(),
});

export default UserAttributeNullableScalarRelationFilterSchema;
