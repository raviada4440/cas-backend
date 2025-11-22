import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeCreateWithoutUserInputSchema } from './UserAttributeCreateWithoutUserInputSchema';
import { UserAttributeUncheckedCreateWithoutUserInputSchema } from './UserAttributeUncheckedCreateWithoutUserInputSchema';
import { UserAttributeCreateOrConnectWithoutUserInputSchema } from './UserAttributeCreateOrConnectWithoutUserInputSchema';
import { UserAttributeUpsertWithoutUserInputSchema } from './UserAttributeUpsertWithoutUserInputSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { UserAttributeWhereUniqueInputSchema } from './UserAttributeWhereUniqueInputSchema';
import { UserAttributeUpdateToOneWithWhereWithoutUserInputSchema } from './UserAttributeUpdateToOneWithWhereWithoutUserInputSchema';
import { UserAttributeUpdateWithoutUserInputSchema } from './UserAttributeUpdateWithoutUserInputSchema';
import { UserAttributeUncheckedUpdateWithoutUserInputSchema } from './UserAttributeUncheckedUpdateWithoutUserInputSchema';

export const UserAttributeUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.UserAttributeUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutUserInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAttributeCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserAttributeUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserAttributeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserAttributeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserAttributeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserAttributeUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => UserAttributeUpdateWithoutUserInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export default UserAttributeUpdateOneWithoutUserNestedInputSchema;
