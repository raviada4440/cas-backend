import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  tokenType: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  idToken: z.lazy(() => SortOrderSchema).optional(),
  sessionState: z.lazy(() => SortOrderSchema).optional(),
  refreshTokenExpiresIn: z.lazy(() => SortOrderSchema).optional(),
  epicDstu2Patient: z.lazy(() => SortOrderSchema).optional(),
  appointment: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  encounter: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  loginDepartment: z.lazy(() => SortOrderSchema).optional(),
  needPatientBanner: z.lazy(() => SortOrderSchema).optional(),
  patient: z.lazy(() => SortOrderSchema).optional(),
  smartStyleUrl: z.lazy(() => SortOrderSchema).optional(),
  unconfirmedStatus: z.lazy(() => SortOrderSchema).optional(),
  userEmail: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  tenant: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default AccountCountOrderByAggregateInputSchema;
