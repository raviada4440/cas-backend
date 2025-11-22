import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminCreateWithoutUserAttributeInputSchema } from './AdminCreateWithoutUserAttributeInputSchema';
import { AdminUncheckedCreateWithoutUserAttributeInputSchema } from './AdminUncheckedCreateWithoutUserAttributeInputSchema';
import { AdminCreateOrConnectWithoutUserAttributeInputSchema } from './AdminCreateOrConnectWithoutUserAttributeInputSchema';
import { AdminUpsertWithoutUserAttributeInputSchema } from './AdminUpsertWithoutUserAttributeInputSchema';
import { AdminWhereInputSchema } from './AdminWhereInputSchema';
import { AdminWhereUniqueInputSchema } from './AdminWhereUniqueInputSchema';
import { AdminUpdateToOneWithWhereWithoutUserAttributeInputSchema } from './AdminUpdateToOneWithWhereWithoutUserAttributeInputSchema';
import { AdminUpdateWithoutUserAttributeInputSchema } from './AdminUpdateWithoutUserAttributeInputSchema';
import { AdminUncheckedUpdateWithoutUserAttributeInputSchema } from './AdminUncheckedUpdateWithoutUserAttributeInputSchema';

export const AdminUpdateOneWithoutUserAttributeNestedInputSchema: z.ZodType<Prisma.AdminUpdateOneWithoutUserAttributeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AdminCreateWithoutUserAttributeInputSchema), z.lazy(() => AdminUncheckedCreateWithoutUserAttributeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUserAttributeInputSchema).optional(),
  upsert: z.lazy(() => AdminUpsertWithoutUserAttributeInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AdminWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AdminWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AdminUpdateToOneWithWhereWithoutUserAttributeInputSchema), z.lazy(() => AdminUpdateWithoutUserAttributeInputSchema), z.lazy(() => AdminUncheckedUpdateWithoutUserAttributeInputSchema) ]).optional(),
});

export default AdminUpdateOneWithoutUserAttributeNestedInputSchema;
