import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminUpdateWithoutUserAttributeInputSchema } from './AdminUpdateWithoutUserAttributeInputSchema';
import { AdminUncheckedUpdateWithoutUserAttributeInputSchema } from './AdminUncheckedUpdateWithoutUserAttributeInputSchema';
import { AdminCreateWithoutUserAttributeInputSchema } from './AdminCreateWithoutUserAttributeInputSchema';
import { AdminUncheckedCreateWithoutUserAttributeInputSchema } from './AdminUncheckedCreateWithoutUserAttributeInputSchema';
import { AdminWhereInputSchema } from './AdminWhereInputSchema';

export const AdminUpsertWithoutUserAttributeInputSchema: z.ZodType<Prisma.AdminUpsertWithoutUserAttributeInput> = z.strictObject({
  update: z.union([ z.lazy(() => AdminUpdateWithoutUserAttributeInputSchema), z.lazy(() => AdminUncheckedUpdateWithoutUserAttributeInputSchema) ]),
  create: z.union([ z.lazy(() => AdminCreateWithoutUserAttributeInputSchema), z.lazy(() => AdminUncheckedCreateWithoutUserAttributeInputSchema) ]),
  where: z.lazy(() => AdminWhereInputSchema).optional(),
});

export default AdminUpsertWithoutUserAttributeInputSchema;
