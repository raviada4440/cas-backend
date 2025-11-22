import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const UserIdentityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserIdentityScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserIdentityScalarWhereWithAggregatesInputSchema), z.lazy(() => UserIdentityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserIdentityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserIdentityScalarWhereWithAggregatesInputSchema), z.lazy(() => UserIdentityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  issuer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  subject: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  fhirUser: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  orgId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default UserIdentityScalarWhereWithAggregatesInputSchema;
