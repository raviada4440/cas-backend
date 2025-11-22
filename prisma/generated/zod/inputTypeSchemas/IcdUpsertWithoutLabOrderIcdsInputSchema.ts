import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IcdUpdateWithoutLabOrderIcdsInputSchema } from './IcdUpdateWithoutLabOrderIcdsInputSchema';
import { IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema } from './IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema';
import { IcdCreateWithoutLabOrderIcdsInputSchema } from './IcdCreateWithoutLabOrderIcdsInputSchema';
import { IcdUncheckedCreateWithoutLabOrderIcdsInputSchema } from './IcdUncheckedCreateWithoutLabOrderIcdsInputSchema';
import { IcdWhereInputSchema } from './IcdWhereInputSchema';

export const IcdUpsertWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.IcdUpsertWithoutLabOrderIcdsInput> = z.strictObject({
  update: z.union([ z.lazy(() => IcdUpdateWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema) ]),
  create: z.union([ z.lazy(() => IcdCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUncheckedCreateWithoutLabOrderIcdsInputSchema) ]),
  where: z.lazy(() => IcdWhereInputSchema).optional(),
});

export default IcdUpsertWithoutLabOrderIcdsInputSchema;
