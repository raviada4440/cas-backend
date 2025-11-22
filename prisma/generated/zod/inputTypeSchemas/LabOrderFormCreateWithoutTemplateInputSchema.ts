import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LabOrderCreateNestedOneWithoutOrderFormsInputSchema } from './LabOrderCreateNestedOneWithoutOrderFormsInputSchema';
import { TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema } from './TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema';

export const LabOrderFormCreateWithoutTemplateInputSchema: z.ZodType<Prisma.LabOrderFormCreateWithoutTemplateInput> = z.strictObject({
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
  labOrder: z.lazy(() => LabOrderCreateNestedOneWithoutOrderFormsInputSchema),
  versionOrderForm: z.lazy(() => TestCatalogVersionOrderFormCreateNestedOneWithoutLabOrderFormsInputSchema).optional(),
});

export default LabOrderFormCreateWithoutTemplateInputSchema;
