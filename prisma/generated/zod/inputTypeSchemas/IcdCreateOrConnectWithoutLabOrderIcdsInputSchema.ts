import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IcdWhereUniqueInputSchema } from './IcdWhereUniqueInputSchema';
import { IcdCreateWithoutLabOrderIcdsInputSchema } from './IcdCreateWithoutLabOrderIcdsInputSchema';
import { IcdUncheckedCreateWithoutLabOrderIcdsInputSchema } from './IcdUncheckedCreateWithoutLabOrderIcdsInputSchema';

export const IcdCreateOrConnectWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.IcdCreateOrConnectWithoutLabOrderIcdsInput> = z.strictObject({
  where: z.lazy(() => IcdWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IcdCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUncheckedCreateWithoutLabOrderIcdsInputSchema) ]),
});

export default IcdCreateOrConnectWithoutLabOrderIcdsInputSchema;
