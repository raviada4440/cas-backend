import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUserIdentitiesInputSchema } from './UserCreateNestedOneWithoutUserIdentitiesInputSchema';
import { OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema } from './OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema';

export const UserIdentityCreateInputSchema: z.ZodType<Prisma.UserIdentityCreateInput> = z.strictObject({
  id: z.string().optional(),
  provider: z.string(),
  issuer: z.string(),
  subject: z.string(),
  fhirUser: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserIdentitiesInputSchema),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema).optional(),
});

export default UserIdentityCreateInputSchema;
