import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityProvider_issuer_subjectCompoundUniqueInputSchema } from './UserIdentityProvider_issuer_subjectCompoundUniqueInputSchema';
import { UserIdentityWhereInputSchema } from './UserIdentityWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { OrganizationNullableScalarRelationFilterSchema } from './OrganizationNullableScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const UserIdentityWhereUniqueInputSchema: z.ZodType<Prisma.UserIdentityWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    provider_issuer_subject: z.lazy(() => UserIdentityProvider_issuer_subjectCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    provider_issuer_subject: z.lazy(() => UserIdentityProvider_issuer_subjectCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  provider_issuer_subject: z.lazy(() => UserIdentityProvider_issuer_subjectCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserIdentityWhereInputSchema), z.lazy(() => UserIdentityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserIdentityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserIdentityWhereInputSchema), z.lazy(() => UserIdentityWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  issuer: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  subject: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  fhirUser: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationNullableScalarRelationFilterSchema), z.lazy(() => OrganizationWhereInputSchema) ]).optional().nullable(),
}));

export default UserIdentityWhereUniqueInputSchema;
