import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUserRolesInputSchema } from './RoleCreateWithoutUserRolesInputSchema';
import { RoleUncheckedCreateWithoutUserRolesInputSchema } from './RoleUncheckedCreateWithoutUserRolesInputSchema';
import { RoleCreateOrConnectWithoutUserRolesInputSchema } from './RoleCreateOrConnectWithoutUserRolesInputSchema';
import { RoleUpsertWithoutUserRolesInputSchema } from './RoleUpsertWithoutUserRolesInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleUpdateToOneWithWhereWithoutUserRolesInputSchema } from './RoleUpdateToOneWithWhereWithoutUserRolesInputSchema';
import { RoleUpdateWithoutUserRolesInputSchema } from './RoleUpdateWithoutUserRolesInputSchema';
import { RoleUncheckedUpdateWithoutUserRolesInputSchema } from './RoleUncheckedUpdateWithoutUserRolesInputSchema';

export const RoleUpdateOneRequiredWithoutUserRolesNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutUserRolesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUserRolesInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutUserRolesInputSchema), z.lazy(() => RoleUpdateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutUserRolesInputSchema) ]).optional(),
});

export default RoleUpdateOneRequiredWithoutUserRolesNestedInputSchema;
