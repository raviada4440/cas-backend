import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  userIdentities: z.boolean().optional(),
  userRoles: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
