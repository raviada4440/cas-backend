import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AdminCreateWithoutUserAttributeInputSchema: z.ZodType<Prisma.AdminCreateWithoutUserAttributeInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default AdminCreateWithoutUserAttributeInputSchema;
