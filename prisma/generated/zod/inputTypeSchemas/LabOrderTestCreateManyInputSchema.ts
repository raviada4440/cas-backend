import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderTestCreateManyInputSchema: z.ZodType<Prisma.LabOrderTestCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  testId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderTestCreateManyInputSchema;
