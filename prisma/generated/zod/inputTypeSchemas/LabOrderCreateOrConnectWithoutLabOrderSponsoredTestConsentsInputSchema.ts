import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';

export const LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
});

export default LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema;
