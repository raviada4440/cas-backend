import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeCreateWithoutUserInputSchema } from './UserAttributeCreateWithoutUserInputSchema';
import { UserAttributeUncheckedCreateWithoutUserInputSchema } from './UserAttributeUncheckedCreateWithoutUserInputSchema';
import { UserAttributeCreateOrConnectWithoutUserInputSchema } from './UserAttributeCreateOrConnectWithoutUserInputSchema';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';

export const UserAttributeUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserAttributeUncheckedCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutUserInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAttributeCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserAttributeWhereUniqueInputSchema).optional(),
});

export default UserAttributeUncheckedCreateNestedOneWithoutUserInputSchema;
