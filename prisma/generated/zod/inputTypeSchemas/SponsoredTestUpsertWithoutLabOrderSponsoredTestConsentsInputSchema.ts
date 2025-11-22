import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestWhereInputSchema } from './SponsoredTestWhereInputSchema';

export const SponsoredTestUpsertWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.SponsoredTestUpsertWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]),
  where: z.lazy(() => SponsoredTestWhereInputSchema).optional(),
});

export default SponsoredTestUpsertWithoutLabOrderSponsoredTestConsentsInputSchema;
