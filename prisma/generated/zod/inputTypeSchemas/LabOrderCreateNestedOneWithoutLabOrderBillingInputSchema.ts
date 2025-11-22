import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderBillingInputSchema } from './LabOrderCreateWithoutLabOrderBillingInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutLabOrderBillingInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutLabOrderBillingInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderBillingInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderBillingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderBillingInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutLabOrderBillingInputSchema;
