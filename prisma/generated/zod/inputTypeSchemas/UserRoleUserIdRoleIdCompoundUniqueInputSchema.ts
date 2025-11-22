import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUserIdRoleIdCompoundUniqueInputSchema: z.ZodType<Prisma.UserRoleUserIdRoleIdCompoundUniqueInput> = z.strictObject({
  userId: z.string(),
  roleId: z.string(),
});

export default UserRoleUserIdRoleIdCompoundUniqueInputSchema;
