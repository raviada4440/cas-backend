import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderStatusCreateManyInputSchema: z.ZodType<Prisma.LabOrderStatusCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  statusDate: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderStatusCreateManyInputSchema;
