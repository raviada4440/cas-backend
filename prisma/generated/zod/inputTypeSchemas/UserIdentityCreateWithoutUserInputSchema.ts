import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema } from './OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema';

export const UserIdentityCreateWithoutUserInputSchema: z.ZodType<Prisma.UserIdentityCreateWithoutUserInput> = z.strictObject({
  id: z.string().optional(),
  provider: z.string(),
  issuer: z.string(),
  subject: z.string(),
  fhirUser: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutUserIdentitiesInputSchema).optional(),
});

export default UserIdentityCreateWithoutUserInputSchema;
