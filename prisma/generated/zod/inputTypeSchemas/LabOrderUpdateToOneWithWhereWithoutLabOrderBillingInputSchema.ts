import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutLabOrderBillingInputSchema } from './LabOrderUpdateWithoutLabOrderBillingInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutLabOrderBillingInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutLabOrderBillingInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutLabOrderBillingInputSchema;
