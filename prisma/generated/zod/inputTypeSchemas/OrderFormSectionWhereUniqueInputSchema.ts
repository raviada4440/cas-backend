import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormSectionNameOrganizationIdCompoundUniqueInputSchema } from './OrderFormSectionNameOrganizationIdCompoundUniqueInputSchema';
import { OrderFormSectionWhereInputSchema } from './OrderFormSectionWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrganizationNullableScalarRelationFilterSchema } from './OrganizationNullableScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrderFormTemplateListRelationFilterSchema } from './OrderFormTemplateListRelationFilterSchema';

export const OrderFormSectionWhereUniqueInputSchema: z.ZodType<Prisma.OrderFormSectionWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name_organizationId: z.lazy(() => OrderFormSectionNameOrganizationIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name_organizationId: z.lazy(() => OrderFormSectionNameOrganizationIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  name_organizationId: z.lazy(() => OrderFormSectionNameOrganizationIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OrderFormSectionWhereInputSchema), z.lazy(() => OrderFormSectionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderFormSectionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderFormSectionWhereInputSchema), z.lazy(() => OrderFormSectionWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sortOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationNullableScalarRelationFilterSchema), z.lazy(() => OrganizationWhereInputSchema) ]).optional().nullable(),
  templates: z.lazy(() => OrderFormTemplateListRelationFilterSchema).optional(),
}));

export default OrderFormSectionWhereUniqueInputSchema;
