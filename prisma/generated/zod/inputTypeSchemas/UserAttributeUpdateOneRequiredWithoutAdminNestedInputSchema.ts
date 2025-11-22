import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeCreateWithoutAdminInputSchema } from './UserAttributeCreateWithoutAdminInputSchema';
import { UserAttributeUncheckedCreateWithoutAdminInputSchema } from './UserAttributeUncheckedCreateWithoutAdminInputSchema';
import { UserAttributeCreateOrConnectWithoutAdminInputSchema } from './UserAttributeCreateOrConnectWithoutAdminInputSchema';
import { UserAttributeUpsertWithoutAdminInputSchema } from './UserAttributeUpsertWithoutAdminInputSchema';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';
import { UserAttributeUpdateToOneWithWhereWithoutAdminInputSchema } from './UserAttributeUpdateToOneWithWhereWithoutAdminInputSchema';
import { UserAttributeUpdateWithoutAdminInputSchema } from './UserAttributeUpdateWithoutAdminInputSchema';
import { UserAttributeUncheckedUpdateWithoutAdminInputSchema } from './UserAttributeUncheckedUpdateWithoutAdminInputSchema';

export const UserAttributeUpdateOneRequiredWithoutAdminNestedInputSchema: z.ZodType<Prisma.UserAttributeUpdateOneRequiredWithoutAdminNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutAdminInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutAdminInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAttributeCreateOrConnectWithoutAdminInputSchema).optional(),
  upsert: z.lazy(() => UserAttributeUpsertWithoutAdminInputSchema).optional(),
  connect: z.lazy(() => UserAttributeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserAttributeUpdateToOneWithWhereWithoutAdminInputSchema), z.lazy(() => UserAttributeUpdateWithoutAdminInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutAdminInputSchema) ]).optional(),
});

export default UserAttributeUpdateOneRequiredWithoutAdminNestedInputSchema;
