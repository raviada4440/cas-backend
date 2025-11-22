import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AdminCreateManyInputSchema: z.ZodType<Prisma.AdminCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  userAttributeId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default AdminCreateManyInputSchema;
