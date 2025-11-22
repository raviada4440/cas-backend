import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { OrderFormSectionCreateNestedOneWithoutTemplatesInputSchema } from './OrderFormSectionCreateNestedOneWithoutTemplatesInputSchema';
import { OrganizationCreateNestedOneWithoutOrderFormTemplatesInputSchema } from './OrganizationCreateNestedOneWithoutOrderFormTemplatesInputSchema';
import { TestCatalogVersionOrderFormCreateNestedManyWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormCreateNestedManyWithoutTemplateInputSchema';
import { LabOrderFormCreateNestedManyWithoutTemplateInputSchema } from './LabOrderFormCreateNestedManyWithoutTemplateInputSchema';

export const OrderFormTemplateCreateInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => OrderFormTemplateStatusSchema).optional(),
  version: z.number().optional(),
  effectiveDate: z.date().optional().nullable(),
  retiredDate: z.date().optional().nullable(),
  formSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  layoutSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  isGlobal: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  section: z.lazy(() => OrderFormSectionCreateNestedOneWithoutTemplatesInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutOrderFormTemplatesInputSchema).optional(),
  assignments: z.lazy(() => TestCatalogVersionOrderFormCreateNestedManyWithoutTemplateInputSchema).optional(),
  labOrderForms: z.lazy(() => LabOrderFormCreateNestedManyWithoutTemplateInputSchema).optional(),
});

export default OrderFormTemplateCreateInputSchema;
