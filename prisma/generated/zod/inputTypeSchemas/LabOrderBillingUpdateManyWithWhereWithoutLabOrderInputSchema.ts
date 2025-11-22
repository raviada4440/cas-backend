import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderBillingScalarWhereInputSchema } from './LabOrderBillingScalarWhereInputSchema';
import { LabOrderBillingUpdateManyMutationInputSchema } from './LabOrderBillingUpdateManyMutationInputSchema';
import { LabOrderBillingUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderBillingUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderBillingUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderBillingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderBillingUpdateManyMutationInputSchema), z.lazy(() => LabOrderBillingUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderBillingUpdateManyWithWhereWithoutLabOrderInputSchema;
