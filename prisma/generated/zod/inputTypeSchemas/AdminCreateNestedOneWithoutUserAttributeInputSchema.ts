import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminCreateWithoutUserAttributeInputSchema } from './AdminCreateWithoutUserAttributeInputSchema';
import { AdminUncheckedCreateWithoutUserAttributeInputSchema } from './AdminUncheckedCreateWithoutUserAttributeInputSchema';
import { AdminCreateOrConnectWithoutUserAttributeInputSchema } from './AdminCreateOrConnectWithoutUserAttributeInputSchema';
import { AdminWhereUniqueInputSchema } from './AdminWhereUniqueInputSchema';

export const AdminCreateNestedOneWithoutUserAttributeInputSchema: z.ZodType<Prisma.AdminCreateNestedOneWithoutUserAttributeInput> = z.strictObject({
  create: z.union([ z.lazy(() => AdminCreateWithoutUserAttributeInputSchema), z.lazy(() => AdminUncheckedCreateWithoutUserAttributeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUserAttributeInputSchema).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputSchema).optional(),
});

export default AdminCreateNestedOneWithoutUserAttributeInputSchema;
