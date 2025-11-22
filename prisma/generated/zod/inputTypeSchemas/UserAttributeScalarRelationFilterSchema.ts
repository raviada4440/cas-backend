import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';

export const UserAttributeScalarRelationFilterSchema: z.ZodType<Prisma.UserAttributeScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => UserAttributeWhereInputSchema).optional(),
  isNot: z.lazy(() => UserAttributeWhereInputSchema).optional(),
});

export default UserAttributeScalarRelationFilterSchema;
