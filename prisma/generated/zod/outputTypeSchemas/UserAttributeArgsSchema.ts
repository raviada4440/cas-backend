import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeSelectSchema } from '../inputTypeSchemas/UserAttributeSelectSchema';
import { UserAttributeIncludeSchema } from '../inputTypeSchemas/UserAttributeIncludeSchema';

export const UserAttributeArgsSchema: z.ZodType<Prisma.UserAttributeDefaultArgs> = z.object({
  select: z.lazy(() => UserAttributeSelectSchema).optional(),
  include: z.lazy(() => UserAttributeIncludeSchema).optional(),
}).strict();

export default UserAttributeArgsSchema;
