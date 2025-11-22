import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderStatusUncheckedCreateInputSchema: z.ZodType<Prisma.LabOrderStatusUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  statusDate: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderStatusUncheckedCreateInputSchema;
