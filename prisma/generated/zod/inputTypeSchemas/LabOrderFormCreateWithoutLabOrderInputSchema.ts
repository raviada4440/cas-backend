import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema';
import { OrderFormTemplateCreateNestedOneWithoutLabOrderFormsInputSchema } from './OrderFormTemplateCreateNestedOneWithoutLabOrderFormsInputSchema';

export const LabOrderFormCreateWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderFormCreateWithoutLabOrderInput> = z.strictObject({
  id: z.string().optional(),
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
  versionOrderForm: z.lazy(() => TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema).optional(),
  template: z.lazy(() => OrderFormTemplateCreateNestedOneWithoutLabOrderFormsInputSchema).optional(),
});

export default LabOrderFormCreateWithoutLabOrderInputSchema;
