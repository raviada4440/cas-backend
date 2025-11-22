import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutOrderFormsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutOrderFormsInputSchema';
import { TestCatalogConfigurationCreateNestedOneWithoutOrderFormsInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutOrderFormsInputSchema';
import { OrderFormTemplateCreateNestedOneWithoutAssignmentsInputSchema } from './OrderFormTemplateCreateNestedOneWithoutAssignmentsInputSchema';
import { LabOrderFormCreateNestedManyWithoutVersionOrderFormInputSchema } from './LabOrderFormCreateNestedManyWithoutVersionOrderFormInputSchema';

export const TestCatalogVersionOrderFormCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormCreateInput> = z.strictObject({
  id: z.string().optional(),
  displayOrder: z.number().optional(),
  customTitle: z.string().optional().nullable(),
  isRequired: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutOrderFormsInputSchema),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutOrderFormsInputSchema).optional(),
  template: z.lazy(() => OrderFormTemplateCreateNestedOneWithoutAssignmentsInputSchema),
  labOrderForms: z.lazy(() => LabOrderFormCreateNestedManyWithoutVersionOrderFormInputSchema).optional(),
});

export default TestCatalogVersionOrderFormCreateInputSchema;
