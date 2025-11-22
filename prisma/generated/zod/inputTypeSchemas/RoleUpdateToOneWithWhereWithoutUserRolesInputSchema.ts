import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { RoleUpdateWithoutUserRolesInputSchema } from './RoleUpdateWithoutUserRolesInputSchema';
import { RoleUncheckedUpdateWithoutUserRolesInputSchema } from './RoleUncheckedUpdateWithoutUserRolesInputSchema';

export const RoleUpdateToOneWithWhereWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutUserRolesInputSchema) ]),
});

export default RoleUpdateToOneWithWhereWithoutUserRolesInputSchema;
