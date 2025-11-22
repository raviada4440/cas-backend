import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeCreateWithoutProviderInputSchema } from './UserAttributeCreateWithoutProviderInputSchema';
import { UserAttributeUncheckedCreateWithoutProviderInputSchema } from './UserAttributeUncheckedCreateWithoutProviderInputSchema';
import { UserAttributeCreateOrConnectWithoutProviderInputSchema } from './UserAttributeCreateOrConnectWithoutProviderInputSchema';
import { UserAttributeUpsertWithoutProviderInputSchema } from './UserAttributeUpsertWithoutProviderInputSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';
import { UserAttributeUpdateToOneWithWhereWithoutProviderInputSchema } from './UserAttributeUpdateToOneWithWhereWithoutProviderInputSchema';
import { UserAttributeUpdateWithoutProviderInputSchema } from './UserAttributeUpdateWithoutProviderInputSchema';
import { UserAttributeUncheckedUpdateWithoutProviderInputSchema } from './UserAttributeUncheckedUpdateWithoutProviderInputSchema';

export const UserAttributeUpdateOneWithoutProviderNestedInputSchema: z.ZodType<Prisma.UserAttributeUpdateOneWithoutProviderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutProviderInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutProviderInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAttributeCreateOrConnectWithoutProviderInputSchema).optional(),
  upsert: z.lazy(() => UserAttributeUpsertWithoutProviderInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserAttributeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserAttributeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserAttributeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserAttributeUpdateToOneWithWhereWithoutProviderInputSchema), z.lazy(() => UserAttributeUpdateWithoutProviderInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutProviderInputSchema) ]).optional(),
});

export default UserAttributeUpdateOneWithoutProviderNestedInputSchema;
