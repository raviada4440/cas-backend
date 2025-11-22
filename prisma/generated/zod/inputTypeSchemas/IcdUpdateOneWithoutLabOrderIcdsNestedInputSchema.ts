import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IcdCreateWithoutLabOrderIcdsInputSchema } from './IcdCreateWithoutLabOrderIcdsInputSchema';
import { IcdUncheckedCreateWithoutLabOrderIcdsInputSchema } from './IcdUncheckedCreateWithoutLabOrderIcdsInputSchema';
import { IcdCreateOrConnectWithoutLabOrderIcdsInputSchema } from './IcdCreateOrConnectWithoutLabOrderIcdsInputSchema';
import { IcdUpsertWithoutLabOrderIcdsInputSchema } from './IcdUpsertWithoutLabOrderIcdsInputSchema';
import { IcdWhereInputSchema } from './IcdWhereInputSchema';
import { IcdWhereUniqueInputSchema } from './IcdWhereUniqueInputSchema';
import { IcdUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema } from './IcdUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema';
import { IcdUpdateWithoutLabOrderIcdsInputSchema } from './IcdUpdateWithoutLabOrderIcdsInputSchema';
import { IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema } from './IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema';

export const IcdUpdateOneWithoutLabOrderIcdsNestedInputSchema: z.ZodType<Prisma.IcdUpdateOneWithoutLabOrderIcdsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IcdCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUncheckedCreateWithoutLabOrderIcdsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IcdCreateOrConnectWithoutLabOrderIcdsInputSchema).optional(),
  upsert: z.lazy(() => IcdUpsertWithoutLabOrderIcdsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => IcdWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => IcdWhereInputSchema) ]).optional(),
  connect: z.lazy(() => IcdWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IcdUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUpdateWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema) ]).optional(),
});

export default IcdUpdateOneWithoutLabOrderIcdsNestedInputSchema;
