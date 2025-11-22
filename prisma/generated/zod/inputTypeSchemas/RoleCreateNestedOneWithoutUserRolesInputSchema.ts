import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateWithoutUserRolesInputSchema } from './RoleCreateWithoutUserRolesInputSchema';
import { RoleUncheckedCreateWithoutUserRolesInputSchema } from './RoleUncheckedCreateWithoutUserRolesInputSchema';
import { RoleCreateOrConnectWithoutUserRolesInputSchema } from './RoleCreateOrConnectWithoutUserRolesInputSchema';
import { RoleWhereUniqueInputSchema } from './RoleWhereUniqueInputSchema';

export const RoleCreateNestedOneWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutUserRolesInput> = z.strictObject({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
});

export default RoleCreateNestedOneWithoutUserRolesInputSchema;
