import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProviderOrganizationScalarWhereInputSchema: z.ZodType<Prisma.ProviderOrganizationScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProviderOrganizationScalarWhereInputSchema), z.lazy(() => ProviderOrganizationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderOrganizationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderOrganizationScalarWhereInputSchema), z.lazy(() => ProviderOrganizationScalarWhereInputSchema).array() ]).optional(),
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
});

export default ProviderOrganizationScalarWhereInputSchema;
