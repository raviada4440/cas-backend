import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IcdCreateNestedOneWithoutLabOrderIcdsInputSchema } from './IcdCreateNestedOneWithoutLabOrderIcdsInputSchema';

export const LabOrderIcdCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderIcdCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  icd: z.lazy(() => IcdCreateNestedOneWithoutLabOrderIcdsInputSchema).optional(),
});

export default LabOrderIcdCreateWithoutLabOrderInputSchema;
