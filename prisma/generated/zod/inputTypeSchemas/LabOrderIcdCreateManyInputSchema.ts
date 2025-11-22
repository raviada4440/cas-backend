import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderIcdCreateManyInputSchema: z.ZodType<Prisma.LabOrderIcdCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  icdId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderIcdCreateManyInputSchema;
