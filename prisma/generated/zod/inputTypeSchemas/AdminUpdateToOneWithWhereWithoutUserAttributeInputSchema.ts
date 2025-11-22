import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminWhereInputSchema } from './AdminWhereInputSchema';
import { AdminUpdateWithoutUserAttributeInputSchema } from './AdminUpdateWithoutUserAttributeInputSchema';
import { AdminUncheckedUpdateWithoutUserAttributeInputSchema } from './AdminUncheckedUpdateWithoutUserAttributeInputSchema';

export const AdminUpdateToOneWithWhereWithoutUserAttributeInputSchema: z.ZodType<Prisma.AdminUpdateToOneWithWhereWithoutUserAttributeInput> = z.strictObject({
  where: z.lazy(() => AdminWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AdminUpdateWithoutUserAttributeInputSchema), z.lazy(() => AdminUncheckedUpdateWithoutUserAttributeInputSchema) ]),
});

export default AdminUpdateToOneWithWhereWithoutUserAttributeInputSchema;
