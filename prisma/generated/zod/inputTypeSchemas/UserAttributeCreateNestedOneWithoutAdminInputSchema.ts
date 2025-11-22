import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeCreateWithoutAdminInputSchema } from './UserAttributeCreateWithoutAdminInputSchema';
import { UserAttributeUncheckedCreateWithoutAdminInputSchema } from './UserAttributeUncheckedCreateWithoutAdminInputSchema';
import { UserAttributeCreateOrConnectWithoutAdminInputSchema } from './UserAttributeCreateOrConnectWithoutAdminInputSchema';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';

export const UserAttributeCreateNestedOneWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeCreateNestedOneWithoutAdminInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutAdminInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutAdminInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAttributeCreateOrConnectWithoutAdminInputSchema).optional(),
  connect: z.lazy(() => UserAttributeWhereUniqueInputSchema).optional(),
});

export default UserAttributeCreateNestedOneWithoutAdminInputSchema;
