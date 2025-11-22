import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentitySelectSchema } from '../inputTypeSchemas/UserIdentitySelectSchema';
import { UserIdentityIncludeSchema } from '../inputTypeSchemas/UserIdentityIncludeSchema';

export const UserIdentityArgsSchema: z.ZodType<Prisma.UserIdentityDefaultArgs> = z.object({
  select: z.lazy(() => UserIdentitySelectSchema).optional(),
  include: z.lazy(() => UserIdentityIncludeSchema).optional(),
}).strict();

export default UserIdentityArgsSchema;
