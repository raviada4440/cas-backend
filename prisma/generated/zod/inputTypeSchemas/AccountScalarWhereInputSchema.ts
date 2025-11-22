import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  expiresAt: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  tokenType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  idToken: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sessionState: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  refreshTokenExpiresIn: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  epicDstu2Patient: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  appointment: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  dob: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  encounter: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  loginDepartment: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  needPatientBanner: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patient: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  smartStyleUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  unconfirmedStatus: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userEmail: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  tenant: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default AccountScalarWhereInputSchema;
