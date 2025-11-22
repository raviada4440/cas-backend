import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormUncheckedCreateNestedManyWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedCreateNestedManyWithoutVersionOrderFormInputSchema';

export const TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string().optional().nullable(),
  orderFormTemplateId: z.string(),
  displayOrder: z.number().optional(),
  customTitle: z.string().optional().nullable(),
  isRequired: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrderForms: z.lazy(() => LabOrderFormUncheckedCreateNestedManyWithoutVersionOrderFormInputSchema).optional(),
});

export default TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema;
