import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { UserAttributeUpdateWithoutProviderInputSchema } from './UserAttributeUpdateWithoutProviderInputSchema';
import { UserAttributeUncheckedUpdateWithoutProviderInputSchema } from './UserAttributeUncheckedUpdateWithoutProviderInputSchema';

export const UserAttributeUpdateToOneWithWhereWithoutProviderInputSchema: z.ZodType<Prisma.UserAttributeUpdateToOneWithWhereWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => UserAttributeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserAttributeUpdateWithoutProviderInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutProviderInputSchema) ]),
});

export default UserAttributeUpdateToOneWithWhereWithoutProviderInputSchema;
