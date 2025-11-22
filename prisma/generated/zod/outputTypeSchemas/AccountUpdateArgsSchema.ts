import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountIncludeSchema } from '../inputTypeSchemas/AccountIncludeSchema'
import { AccountUpdateInputSchema } from '../inputTypeSchemas/AccountUpdateInputSchema'
import { AccountUncheckedUpdateInputSchema } from '../inputTypeSchemas/AccountUncheckedUpdateInputSchema'
import { AccountWhereUniqueInputSchema } from '../inputTypeSchemas/AccountWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  tokenType: z.boolean().optional(),
  scope: z.boolean().optional(),
  state: z.boolean().optional(),
  idToken: z.boolean().optional(),
  sessionState: z.boolean().optional(),
  refreshTokenExpiresIn: z.boolean().optional(),
  epicDstu2Patient: z.boolean().optional(),
  appointment: z.boolean().optional(),
  dob: z.boolean().optional(),
  encounter: z.boolean().optional(),
  location: z.boolean().optional(),
  loginDepartment: z.boolean().optional(),
  needPatientBanner: z.boolean().optional(),
  patient: z.boolean().optional(),
  smartStyleUrl: z.boolean().optional(),
  unconfirmedStatus: z.boolean().optional(),
  userEmail: z.boolean().optional(),
  username: z.boolean().optional(),
  tenant: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
  data: z.union([ AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema, 
}).strict();

export default AccountUpdateArgsSchema;
