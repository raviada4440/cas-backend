import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUpdateWithoutAdminInputSchema } from './UserAttributeUpdateWithoutAdminInputSchema';
import { UserAttributeUncheckedUpdateWithoutAdminInputSchema } from './UserAttributeUncheckedUpdateWithoutAdminInputSchema';
import { UserAttributeCreateWithoutAdminInputSchema } from './UserAttributeCreateWithoutAdminInputSchema';
import { UserAttributeUncheckedCreateWithoutAdminInputSchema } from './UserAttributeUncheckedCreateWithoutAdminInputSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';

export const UserAttributeUpsertWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeUpsertWithoutAdminInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserAttributeUpdateWithoutAdminInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutAdminInputSchema) ]),
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutAdminInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutAdminInputSchema) ]),
  where: z.lazy(() => UserAttributeWhereInputSchema).optional(),
});

export default UserAttributeUpsertWithoutAdminInputSchema;
