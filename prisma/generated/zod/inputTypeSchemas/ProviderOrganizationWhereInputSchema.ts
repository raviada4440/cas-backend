import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrganizationScalarRelationFilterSchema } from './OrganizationScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { ProviderScalarRelationFilterSchema } from './ProviderScalarRelationFilterSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderOrganizationWhereInputSchema: z.ZodType<Prisma.ProviderOrganizationWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProviderOrganizationWhereInputSchema), z.lazy(() => ProviderOrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderOrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderOrganizationWhereInputSchema), z.lazy(() => ProviderOrganizationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  providerId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  providerNpi: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  parentOrgName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgAddress: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgCity: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgState: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgZip: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationScalarRelationFilterSchema), z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  provider: z.union([ z.lazy(() => ProviderScalarRelationFilterSchema), z.lazy(() => ProviderWhereInputSchema) ]).optional(),
});

export default ProviderOrganizationWhereInputSchema;
