import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';
import { UserAttributeCreateWithoutProviderInputSchema } from './UserAttributeCreateWithoutProviderInputSchema';
import { UserAttributeUncheckedCreateWithoutProviderInputSchema } from './UserAttributeUncheckedCreateWithoutProviderInputSchema';

export const UserAttributeCreateOrConnectWithoutProviderInputSchema: z.ZodType<Prisma.UserAttributeCreateOrConnectWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => UserAttributeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutProviderInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutProviderInputSchema) ]),
});

export default UserAttributeCreateOrConnectWithoutProviderInputSchema;
