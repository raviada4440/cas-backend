import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderListRelationFilterSchema } from './LabOrderListRelationFilterSchema';
import { UserAttributeNullableScalarRelationFilterSchema } from './UserAttributeNullableScalarRelationFilterSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { ProviderEducationListRelationFilterSchema } from './ProviderEducationListRelationFilterSchema';
import { ProviderFavoriteTestListRelationFilterSchema } from './ProviderFavoriteTestListRelationFilterSchema';
import { ProviderOrganizationListRelationFilterSchema } from './ProviderOrganizationListRelationFilterSchema';

export const ProviderWhereUniqueInputSchema: z.ZodType<Prisma.ProviderWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userAttributeId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userAttributeId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  userAttributeId: z.string().optional(),
  AND: z.union([ z.lazy(() => ProviderWhereInputSchema), z.lazy(() => ProviderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderWhereInputSchema), z.lazy(() => ProviderWhereInputSchema).array() ]).optional(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  npi: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  credentials: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specialty: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  aboutme: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  providerType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  affiliation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  proceduresAndResearch: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specialInterests: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  orderingProviderLabOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
  treatingProviderLabOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
  userAttribute: z.union([ z.lazy(() => UserAttributeNullableScalarRelationFilterSchema), z.lazy(() => UserAttributeWhereInputSchema) ]).optional().nullable(),
  providerEducation: z.lazy(() => ProviderEducationListRelationFilterSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestListRelationFilterSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationListRelationFilterSchema).optional(),
}));

export default ProviderWhereUniqueInputSchema;
