import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUpdateOneWithoutLabOrderIcdsNestedInputSchema } from './LabOrderUpdateOneWithoutLabOrderIcdsNestedInputSchema';
import { IcdUpdateOneWithoutLabOrderIcdsNestedInputSchema } from './IcdUpdateOneWithoutLabOrderIcdsNestedInputSchema';

export const LabOrderIcdUpdateInputSchema: z.ZodType<Prisma.LabOrderIcdUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrder: z.lazy(() => LabOrderUpdateOneWithoutLabOrderIcdsNestedInputSchema).optional(),
  icd: z.lazy(() => IcdUpdateOneWithoutLabOrderIcdsNestedInputSchema).optional(),
});

export default LabOrderIcdUpdateInputSchema;
