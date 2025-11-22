import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityWhereInputSchema } from './UserIdentityWhereInputSchema';

export const UserIdentityListRelationFilterSchema: z.ZodType<Prisma.UserIdentityListRelationFilter> = z.strictObject({
  every: z.lazy(() => UserIdentityWhereInputSchema).optional(),
  some: z.lazy(() => UserIdentityWhereInputSchema).optional(),
  none: z.lazy(() => UserIdentityWhereInputSchema).optional(),
});

export default UserIdentityListRelationFilterSchema;
