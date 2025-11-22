import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderTestUncheckedCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestUncheckedCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  testId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderTestUncheckedCreateWithoutLabOrderInputSchema;
