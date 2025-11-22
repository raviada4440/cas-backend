import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RoleCreatepermissionsInputSchema: z.ZodType<Prisma.RoleCreatepermissionsInput> = z.strictObject({
  set: z.string().array(),
});

export default RoleCreatepermissionsInputSchema;
