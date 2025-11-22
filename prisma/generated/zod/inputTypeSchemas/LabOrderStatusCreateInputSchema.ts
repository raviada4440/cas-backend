import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderStatusesInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderStatusesInputSchema';

export const LabOrderStatusCreateInputSchema: z.ZodType<Prisma.LabOrderStatusCreateInput> = z.strictObject({
  id: z.string().optional(),
  status: z.string().optional().nullable(),
  statusDate: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderStatusesInputSchema).optional(),
});

export default LabOrderStatusCreateInputSchema;
