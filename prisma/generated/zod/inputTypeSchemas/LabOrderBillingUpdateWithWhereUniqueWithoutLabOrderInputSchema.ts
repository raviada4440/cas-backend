import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingWhereUniqueInputSchema } from './LabOrderBillingWhereUniqueInputSchema';
import { LabOrderBillingUpdateWithoutLabOrderInputSchema } from './LabOrderBillingUpdateWithoutLabOrderInputSchema';
import { LabOrderBillingUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderBillingUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderBillingUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderBillingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderBillingUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderBillingUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderBillingUpdateWithWhereUniqueWithoutLabOrderInputSchema;
