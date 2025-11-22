import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUpdateWithoutProviderInputSchema } from './UserAttributeUpdateWithoutProviderInputSchema';
import { UserAttributeUncheckedUpdateWithoutProviderInputSchema } from './UserAttributeUncheckedUpdateWithoutProviderInputSchema';
import { UserAttributeCreateWithoutProviderInputSchema } from './UserAttributeCreateWithoutProviderInputSchema';
import { UserAttributeUncheckedCreateWithoutProviderInputSchema } from './UserAttributeUncheckedCreateWithoutProviderInputSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';

export const UserAttributeUpsertWithoutProviderInputSchema: z.ZodType<Prisma.UserAttributeUpsertWithoutProviderInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserAttributeUpdateWithoutProviderInputSchema), z.lazy(() => UserAttributeUncheckedUpdateWithoutProviderInputSchema) ]),
  create: z.union([ z.lazy(() => UserAttributeCreateWithoutProviderInputSchema), z.lazy(() => UserAttributeUncheckedCreateWithoutProviderInputSchema) ]),
  where: z.lazy(() => UserAttributeWhereInputSchema).optional(),
});

export default UserAttributeUpsertWithoutProviderInputSchema;
