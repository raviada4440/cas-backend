import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleUpdateWithoutUserRolesInputSchema } from './RoleUpdateWithoutUserRolesInputSchema';
import { RoleUncheckedUpdateWithoutUserRolesInputSchema } from './RoleUncheckedUpdateWithoutUserRolesInputSchema';
import { RoleCreateWithoutUserRolesInputSchema } from './RoleCreateWithoutUserRolesInputSchema';
import { RoleUncheckedCreateWithoutUserRolesInputSchema } from './RoleUncheckedCreateWithoutUserRolesInputSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const RoleUpsertWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUpsertWithoutUserRolesInput> = z.strictObject({
  update: z.union([ z.lazy(() => RoleUpdateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutUserRolesInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional(),
});

export default RoleUpsertWithoutUserRolesInputSchema;
