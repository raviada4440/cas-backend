import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const OrganizationEndpointScalarWhereInputSchema: z.ZodType<Prisma.OrganizationEndpointScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OrganizationEndpointScalarWhereInputSchema), z.lazy(() => OrganizationEndpointScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationEndpointScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationEndpointScalarWhereInputSchema), z.lazy(() => OrganizationEndpointScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  orgName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  ehrVendor: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  fhirVersion: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  endpoint: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  issuer: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clientId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clientSecret: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  authorizationEndpoint: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  tokenEndpoint: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolNullableFilterSchema), z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default OrganizationEndpointScalarWhereInputSchema;
