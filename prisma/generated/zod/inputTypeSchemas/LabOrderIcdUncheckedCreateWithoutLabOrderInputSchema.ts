import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdUncheckedCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  icdId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderIcdUncheckedCreateWithoutLabOrderInputSchema;
