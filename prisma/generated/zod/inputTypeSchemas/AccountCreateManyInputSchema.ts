import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refreshToken: z.string().optional().nullable(),
  accessToken: z.string().optional().nullable(),
  expiresAt: z.number().optional().nullable(),
  tokenType: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  idToken: z.string().optional().nullable(),
  sessionState: z.string().optional().nullable(),
  refreshTokenExpiresIn: z.number().optional().nullable(),
  epicDstu2Patient: z.string().optional().nullable(),
  appointment: z.string().optional().nullable(),
  dob: z.string().optional().nullable(),
  encounter: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  loginDepartment: z.string().optional().nullable(),
  needPatientBanner: z.string().optional().nullable(),
  patient: z.string().optional().nullable(),
  smartStyleUrl: z.string().optional().nullable(),
  unconfirmedStatus: z.string().optional().nullable(),
  userEmail: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  tenant: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date(),
});

export default AccountCreateManyInputSchema;
