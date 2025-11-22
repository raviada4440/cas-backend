import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderListRelationFilterSchema } from './LabOrderListRelationFilterSchema';
import { UserAttributeNullableScalarRelationFilterSchema } from './UserAttributeNullableScalarRelationFilterSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { ProviderEducationListRelationFilterSchema } from './ProviderEducationListRelationFilterSchema';
import { ProviderFavoriteTestListRelationFilterSchema } from './ProviderFavoriteTestListRelationFilterSchema';
import { ProviderOrganizationListRelationFilterSchema } from './ProviderOrganizationListRelationFilterSchema';

export const ProviderWhereInputSchema: z.ZodType<Prisma.ProviderWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProviderWhereInputSchema), z.lazy(() => ProviderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderWhereInputSchema), z.lazy(() => ProviderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
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
  userAttributeId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  orderingProviderLabOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
  treatingProviderLabOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
  userAttribute: z.union([ z.lazy(() => UserAttributeNullableScalarRelationFilterSchema), z.lazy(() => UserAttributeWhereInputSchema) ]).optional().nullable(),
  providerEducation: z.lazy(() => ProviderEducationListRelationFilterSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestListRelationFilterSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationListRelationFilterSchema).optional(),
});

export default ProviderWhereInputSchema;
