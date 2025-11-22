import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';

export const SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
});

export default SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema;
