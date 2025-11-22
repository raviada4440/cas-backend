import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutLabOrderIcdsInputSchema } from './LabOrderUpdateWithoutLabOrderIcdsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutLabOrderIcdsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderIcdsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderIcdsInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutLabOrderIcdsInputSchema;
