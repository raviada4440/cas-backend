import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema;
