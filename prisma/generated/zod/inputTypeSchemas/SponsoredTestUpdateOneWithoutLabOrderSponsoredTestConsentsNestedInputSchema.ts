import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUpsertWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUpsertWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestWhereInputSchema } from './SponsoredTestWhereInputSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';
import { SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema } from './SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema';

export const SponsoredTestUpdateOneWithoutLabOrderSponsoredTestConsentsNestedInputSchema: z.ZodType<Prisma.SponsoredTestUpdateOneWithoutLabOrderSponsoredTestConsentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabOrderSponsoredTestConsentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SponsoredTestCreateOrConnectWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
  upsert: z.lazy(() => SponsoredTestUpsertWithoutLabOrderSponsoredTestConsentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SponsoredTestWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SponsoredTestWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SponsoredTestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SponsoredTestUpdateToOneWithWhereWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUpdateWithoutLabOrderSponsoredTestConsentsInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutLabOrderSponsoredTestConsentsInputSchema) ]).optional(),
});

export default SponsoredTestUpdateOneWithoutLabOrderSponsoredTestConsentsNestedInputSchema;
