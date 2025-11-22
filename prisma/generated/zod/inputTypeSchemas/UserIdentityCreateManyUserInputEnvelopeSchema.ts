import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityCreateManyUserInputSchema } from './UserIdentityCreateManyUserInputSchema';

export const UserIdentityCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserIdentityCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => UserIdentityCreateManyUserInputSchema), z.lazy(() => UserIdentityCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default UserIdentityCreateManyUserInputEnvelopeSchema;
