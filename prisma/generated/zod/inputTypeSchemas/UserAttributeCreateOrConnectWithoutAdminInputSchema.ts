import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';
import { UserAttributeCreateWithoutAdminInputSchema } from './UserAttributeCreateWithoutAdminInputSchema';
import { UserAttributeUncheckedCreateWithoutAdminInputSchema } from './UserAttributeUncheckedCreateWithoutAdminInputSchema';

export const UserAttributeCreateOrConnectWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeCreateOrConnectWithoutAdminInput> = z.strictObject({
  where: z.lazy(() => UserAttributeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutAdminInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutAdminInputSchema) ]),
});

export default UserAttributeCreateOrConnectWithoutAdminInputSchema;
