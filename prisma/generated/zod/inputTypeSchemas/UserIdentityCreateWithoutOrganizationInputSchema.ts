import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUserIdentitiesInputSchema } from './UserCreateNestedOneWithoutUserIdentitiesInputSchema';

export const UserIdentityCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.UserIdentityCreateWithoutOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  provider: z.string(),
  issuer: z.string(),
  subject: z.string(),
  fhirUser: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserIdentitiesInputSchema),
});

export default UserIdentityCreateWithoutOrganizationInputSchema;
