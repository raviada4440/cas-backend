import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserIdentityCreateManyOrganizationInputSchema: z.ZodType<Prisma.UserIdentityCreateManyOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  userId: z.string(),
  provider: z.string(),
  issuer: z.string(),
  subject: z.string(),
  fhirUser: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default UserIdentityCreateManyOrganizationInputSchema;
