import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingWhereUniqueInputSchema } from './LabOrderBillingWhereUniqueInputSchema';
import { LabOrderBillingUpdateWithoutLabOrderInputSchema } from './LabOrderBillingUpdateWithoutLabOrderInputSchema';
import { LabOrderBillingUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderBillingCreateWithoutLabOrderInputSchema } from './LabOrderBillingCreateWithoutLabOrderInputSchema';
import { LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderBillingUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderBillingUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderBillingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderBillingUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderBillingCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderBillingUpsertWithWhereUniqueWithoutLabOrderInputSchema;
