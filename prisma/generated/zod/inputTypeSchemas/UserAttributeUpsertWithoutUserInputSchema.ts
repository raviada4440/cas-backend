import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUpdateWithoutUserInputSchema } from './UserAttributeUpdateWithoutUserInputSchema';
import { UserAttributeUncheckedUpdateWithoutUserInputSchema } from './UserAttributeUncheckedUpdateWithoutUserInputSchema';
import { UserAttributeCreateWithoutUserInputSchema } from './UserAttributeCreateWithoutUserInputSchema';
import { UserAttributeUncheckedCreateWithoutUserInputSchema } from './UserAttributeUncheckedCreateWithoutUserInputSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';

export const UserAttributeUpsertWithoutUserInputSchema: z.ZodType<Prisma.UserAttributeUpsertWithoutUserInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserAttributeUpdateWithoutUserInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutUserInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => UserAttributeWhereInputSchema).optional(),
});

export default UserAttributeUpsertWithoutUserInputSchema;
