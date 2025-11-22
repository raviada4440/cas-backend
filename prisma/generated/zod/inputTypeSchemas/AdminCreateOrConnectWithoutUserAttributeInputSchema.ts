import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminWhereUniqueInputSchema } from './AdminWhereUniqueInputSchema';
import { AdminCreateWithoutUserAttributeInputSchema } from './AdminCreateWithoutUserAttributeInputSchema';
import { AdminUncheckedCreateWithoutUserAttributeInputSchema } from './AdminUncheckedCreateWithoutUserAttributeInputSchema';

export const AdminCreateOrConnectWithoutUserAttributeInputSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutUserAttributeInput> = z.strictObject({
  where: z.lazy(() => AdminWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AdminCreateWithoutUserAttributeInputSchema), z.lazy(() => AdminUncheckedCreateWithoutUserAttributeInputSchema) ]),
});

export default AdminCreateOrConnectWithoutUserAttributeInputSchema;
