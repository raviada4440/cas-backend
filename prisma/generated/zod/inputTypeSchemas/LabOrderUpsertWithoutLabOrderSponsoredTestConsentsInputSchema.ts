import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderUpsertWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.LabOrderUpsertWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
});

export default LabOrderUpsertWithoutLabOrderSponsoredTestConsentsInputSchema;
