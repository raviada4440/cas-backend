import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingWhereUniqueInputSchema } from './LabOrderBillingWhereUniqueInputSchema';
import { LabOrderBillingCreateWithoutLabOrderInputSchema } from './LabOrderBillingCreateWithoutLabOrderInputSchema';
import { LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderBillingCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderBillingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderBillingCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderBillingCreateOrConnectWithoutLabOrderInputSchema;
