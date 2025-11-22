import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema';

export const LabOrderIcdCreateWithoutIcdInputSchema: z.ZodType<Prisma.LabOrderIcdCreateWithoutIcdInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema).optional(),
});

export default LabOrderIcdCreateWithoutIcdInputSchema;
