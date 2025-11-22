import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInputSchema } from './OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInputSchema';
import { OrderFormTemplateWhereInputSchema } from './OrderFormTemplateWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumOrderFormTemplateStatusFilterSchema } from './EnumOrderFormTemplateStatusFilterSchema';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrderFormSectionScalarRelationFilterSchema } from './OrderFormSectionScalarRelationFilterSchema';
import { OrderFormSectionWhereInputSchema } from './OrderFormSectionWhereInputSchema';
import { OrganizationNullableScalarRelationFilterSchema } from './OrganizationNullableScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { TestCatalogVersionOrderFormListRelationFilterSchema } from './TestCatalogVersionOrderFormListRelationFilterSchema';
import { LabOrderFormListRelationFilterSchema } from './LabOrderFormListRelationFilterSchema';

export const OrderFormTemplateWhereUniqueInputSchema: z.ZodType<Prisma.OrderFormTemplateWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    orderFormSectionId_name_organizationId: z.lazy(() => OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    orderFormSectionId_name_organizationId: z.lazy(() => OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  orderFormSectionId_name_organizationId: z.lazy(() => OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OrderFormTemplateWhereInputSchema), z.lazy(() => OrderFormTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderFormTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderFormTemplateWhereInputSchema), z.lazy(() => OrderFormTemplateWhereInputSchema).array() ]).optional(),
  orderFormSectionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumOrderFormTemplateStatusFilterSchema), z.lazy(() => OrderFormTemplateStatusSchema) ]).optional(),
  version: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  effectiveDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  retiredDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  formSchema: z.lazy(() => JsonNullableFilterSchema).optional(),
  layoutSchema: z.lazy(() => JsonNullableFilterSchema).optional(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  isGlobal: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  section: z.union([ z.lazy(() => OrderFormSectionScalarRelationFilterSchema), z.lazy(() => OrderFormSectionWhereInputSchema) ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationNullableScalarRelationFilterSchema), z.lazy(() => OrganizationWhereInputSchema) ]).optional().nullable(),
  assignments: z.lazy(() => TestCatalogVersionOrderFormListRelationFilterSchema).optional(),
  labOrderForms: z.lazy(() => LabOrderFormListRelationFilterSchema).optional(),
}));

export default OrderFormTemplateWhereUniqueInputSchema;
