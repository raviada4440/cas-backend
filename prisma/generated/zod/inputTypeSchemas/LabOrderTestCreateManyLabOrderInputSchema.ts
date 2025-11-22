import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LabOrderTestCreateManyLabOrderInputSchema: z.ZodType<Prisma.LabOrderTestCreateManyLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  testId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderTestCreateManyLabOrderInputSchema;
