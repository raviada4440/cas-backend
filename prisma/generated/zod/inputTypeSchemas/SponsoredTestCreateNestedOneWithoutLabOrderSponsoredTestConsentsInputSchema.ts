import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';

export const SponsoredTestCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.SponsoredTestCreateNestedOneWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
  connect: z.lazy(() => SponsoredTestWhereUniqueInputSchema).optional(),
});

export default SponsoredTestCreateNestedOneWithoutLabOrderSponsoredTestConsentsInputSchema;
