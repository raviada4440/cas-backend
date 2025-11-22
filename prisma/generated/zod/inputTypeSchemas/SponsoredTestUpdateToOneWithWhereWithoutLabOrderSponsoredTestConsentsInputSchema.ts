import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereInputSchema } from './SponsoredTestWhereInputSchema';
import { SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';

export const SponsoredTestUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.SponsoredTestUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
});

export default SponsoredTestUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema;
