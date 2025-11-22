import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AdminUncheckedCreateWithoutUserAttributeInputSchema: z.ZodType<Prisma.AdminUncheckedCreateWithoutUserAttributeInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default AdminUncheckedCreateWithoutUserAttributeInputSchema;
