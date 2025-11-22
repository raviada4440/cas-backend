import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { UserAttributeUpdateWithoutAdminInputSchema } from './UserAttributeUpdateWithoutAdminInputSchema';
import { UserAttributeUncheckedUpdateWithoutAdminInputSchema } from './UserAttributeUncheckedUpdateWithoutAdminInputSchema';

export const UserAttributeUpdateToOneWithWhereWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeUpdateToOneWithWhereWithoutAdminInput> = z.strictObject({
  where: z.lazy(() => UserAttributeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserAttributeUpdateWithoutAdminInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutAdminInputSchema) ]),
});

export default UserAttributeUpdateToOneWithWhereWithoutAdminInputSchema;
