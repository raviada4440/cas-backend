import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeCreateNestedOneWithoutAdminInputSchema } from './UserAttributeCreateNestedOneWithoutAdminInputSchema';

export const AdminCreateInputSchema: z.ZodType<Prisma.AdminCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  userAttribute: z.lazy(() => UserAttributeCreateNestedOneWithoutAdminInputSchema),
});

export default AdminCreateInputSchema;
