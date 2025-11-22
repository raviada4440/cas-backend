import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeCreateWithoutProviderInputSchema } from './UserAttributeCreateWithoutProviderInputSchema';
import { UserAttributeUncheckedCreateWithoutProviderInputSchema } from './UserAttributeUncheckedCreateWithoutProviderInputSchema';
import { UserAttributeCreateOrConnectWithoutProviderInputSchema } from './UserAttributeCreateOrConnectWithoutProviderInputSchema';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';

export const UserAttributeCreateNestedOneWithoutProviderInputSchema: z.ZodType<Prisma.UserAttributeCreateNestedOneWithoutProviderInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutProviderInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutProviderInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAttributeCreateOrConnectWithoutProviderInputSchema).optional(),
  connect: z.lazy(() => UserAttributeWhereUniqueInputSchema).optional(),
});

export default UserAttributeCreateNestedOneWithoutProviderInputSchema;
