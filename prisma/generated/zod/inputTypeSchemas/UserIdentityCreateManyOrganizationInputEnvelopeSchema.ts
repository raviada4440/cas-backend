import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityCreateManyOrganizationInputSchema } from './UserIdentityCreateManyOrganizationInputSchema';

export const UserIdentityCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.UserIdentityCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => UserIdentityCreateManyOrganizationInputSchema), z.lazy(() => UserIdentityCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default UserIdentityCreateManyOrganizationInputEnvelopeSchema;
