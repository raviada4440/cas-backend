import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderTestUncheckedCreateInputSchema: z.ZodType<Prisma.LabOrderTestUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  testId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderTestUncheckedCreateInputSchema;
