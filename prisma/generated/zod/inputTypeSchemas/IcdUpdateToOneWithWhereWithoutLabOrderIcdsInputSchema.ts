import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IcdWhereInputSchema } from './IcdWhereInputSchema';
import { IcdUpdateWithoutLabOrderIcdsInputSchema } from './IcdUpdateWithoutLabOrderIcdsInputSchema';
import { IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema } from './IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema';

export const IcdUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.IcdUpdateToOneWithWhereWithoutLabOrderIcdsInput> = z.strictObject({
  where: z.lazy(() => IcdWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IcdUpdateWithoutLabOrderIcdsInputSchema), z.lazy(() => IcdUncheckedUpdateWithoutLabOrderIcdsInputSchema) ]),
});

export default IcdUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema;
