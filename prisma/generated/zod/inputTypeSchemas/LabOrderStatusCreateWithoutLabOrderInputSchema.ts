import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderStatusCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderStatusCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  status: z.string().optional().nullable(),
  statusDate: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderStatusCreateWithoutLabOrderInputSchema;
