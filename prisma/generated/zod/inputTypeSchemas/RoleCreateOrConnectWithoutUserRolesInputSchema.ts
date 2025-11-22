import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';
import { RoleCreateWithoutUserRolesInputSchema } from './RoleCreateWithoutUserRolesInputSchema';
import { RoleUncheckedCreateWithoutUserRolesInputSchema } from './RoleUncheckedCreateWithoutUserRolesInputSchema';

export const RoleCreateOrConnectWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]),
});

export default RoleCreateOrConnectWithoutUserRolesInputSchema;
