import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { UserAttributeUpdateWithoutUserInputSchema } from './UserAttributeUpdateWithoutUserInputSchema';
import { UserAttributeUncheckedUpdateWithoutUserInputSchema } from './UserAttributeUncheckedUpdateWithoutUserInputSchema';

export const UserAttributeUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserAttributeUpdateToOneWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserAttributeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserAttributeUpdateWithoutUserInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutUserInputSchema) ]),
});

export default UserAttributeUpdateToOneWithWhereWithoutUserInputSchema;
