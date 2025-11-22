import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutLabOrderBillingInputSchema } from './LabOrderUpdateWithoutLabOrderBillingInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema';
import { LabOrderCreateWithoutLabOrderBillingInputSchema } from './LabOrderCreateWithoutLabOrderBillingInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutLabOrderBillingInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutLabOrderBillingInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderBillingInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutLabOrderBillingInputSchema;
