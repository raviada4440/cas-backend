import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabOrderBillingInputSchema } from './LabOrderCreateWithoutLabOrderBillingInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema';

export const LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabOrderBillingInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema;
