import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithoutLabInputSchema } from './SponsoredTestUpdateWithoutLabInputSchema';
import { SponsoredTestUncheckedUpdateWithoutLabInputSchema } from './SponsoredTestUncheckedUpdateWithoutLabInputSchema';
import { SponsoredTestCreateWithoutLabInputSchema } from './SponsoredTestCreateWithoutLabInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabInputSchema } from './SponsoredTestUncheckedCreateWithoutLabInputSchema';

export const SponsoredTestUpsertWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.SponsoredTestUpsertWithWhereUniqueWithoutLabInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SponsoredTestUpdateWithoutLabInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutLabInputSchema) ]),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabInputSchema) ]),
});

export default SponsoredTestUpsertWithWhereUniqueWithoutLabInputSchema;
