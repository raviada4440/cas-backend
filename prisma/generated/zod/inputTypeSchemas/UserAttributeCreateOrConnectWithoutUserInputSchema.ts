import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';
import { UserAttributeCreateWithoutUserInputSchema } from './UserAttributeCreateWithoutUserInputSchema';
import { UserAttributeUncheckedCreateWithoutUserInputSchema } from './UserAttributeUncheckedCreateWithoutUserInputSchema';

export const UserAttributeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserAttributeCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserAttributeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutUserInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutUserInputSchema) ]),
});

export default UserAttributeCreateOrConnectWithoutUserInputSchema;
