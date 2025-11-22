import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutLabOrderIcdsInputSchema } from './LabOrderUpdateWithoutLabOrderIcdsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema';
import { LabOrderCreateWithoutLabOrderIcdsInputSchema } from './LabOrderCreateWithoutLabOrderIcdsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutLabOrderIcdsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderIcdsInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutLabOrderIcdsInputSchema;
