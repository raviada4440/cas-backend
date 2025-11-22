import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LabOrderFormUncheckedCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderFormUncheckedCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
  versionOrderFormId: z.string().optional().nullable(),
  orderFormTemplateId: z.string().optional().nullable(),
  displayOrder: z.number().optional(),
  sectionName: z.string(),
  templateName: z.string().optional().nullable(),
  formSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  layoutSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  responses: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  isCompleted: z.boolean().optional(),
  completedAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderFormUncheckedCreateWithoutLabOrderInputSchema;
