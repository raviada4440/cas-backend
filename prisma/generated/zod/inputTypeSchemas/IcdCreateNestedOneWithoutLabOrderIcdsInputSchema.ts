import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IcdCreateWithoutLabOrderIcdsInputSchema } from './IcdCreateWithoutLabOrderIcdsInputSchema';
import { IcdUncheckedCreateWithoutLabOrderIcdsInputSchema } from './IcdUncheckedCreateWithoutLabOrderIcdsInputSchema';
import { IcdCreateOrConnectWithoutLabOrderIcdsInputSchema } from './IcdCreateOrConnectWithoutLabOrderIcdsInputSchema';
import { IcdWhereUniqueInputSchema } from './IcdWhereUniqueInputSchema';

export const IcdCreateNestedOneWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.IcdCreateNestedOneWithoutLabOrderIcdsInput> = z.strictObject({
  create: z.union([ z.lazy(() => IcdCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUncheckedCreateWithoutLabOrderIcdsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IcdCreateOrConnectWithoutLabOrderIcdsInputSchema).optional(),
  connect: z.lazy(() => IcdWhereUniqueInputSchema).optional(),
});

export default IcdCreateNestedOneWithoutLabOrderIcdsInputSchema;
