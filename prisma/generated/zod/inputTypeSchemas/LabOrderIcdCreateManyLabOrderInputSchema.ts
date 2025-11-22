import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderIcdCreateManyLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdCreateManyLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  icdId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderIcdCreateManyLabOrderInputSchema;
