import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const UserIdentityScalarWhereInputSchema: z.ZodType<Prisma.UserIdentityScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserIdentityScalarWhereInputSchema), z.lazy(() => UserIdentityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserIdentityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserIdentityScalarWhereInputSchema), z.lazy(() => UserIdentityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  issuer: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  subject: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  fhirUser: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default UserIdentityScalarWhereInputSchema;
