import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema } from './LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.LabOrderCreateNestedOneWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabOrderCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
  connect: z.lazy(() => LabOrderWhereUniqueInputSchema).optional(),
});

export default LabOrderCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema;
