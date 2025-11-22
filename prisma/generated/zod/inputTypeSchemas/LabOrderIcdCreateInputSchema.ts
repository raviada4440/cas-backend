import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema } from './LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema';
import { IcdCreateNestedOneWithoutLabOrderIcdsInputSchema } from './IcdCreateNestedOneWithoutLabOrderIcdsInputSchema';

export const LabOrderIcdCreateInputSchema: z.ZodType<Prisma.LabOrderIcdCreateInput> = z.strictObject({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutLabOrderIcdsInputSchema).optional(),
  icd: z.lazy(() => IcdCreateNestedOneWithoutLabOrderIcdsInputSchema).optional(),
});

export default LabOrderIcdCreateInputSchema;
