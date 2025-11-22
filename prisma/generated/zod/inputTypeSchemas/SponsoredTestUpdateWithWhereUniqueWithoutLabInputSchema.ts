import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithoutLabInputSchema } from './SponsoredTestUpdateWithoutLabInputSchema';
import { SponsoredTestUncheckedUpdateWithoutLabInputSchema } from './SponsoredTestUncheckedUpdateWithoutLabInputSchema';

export const SponsoredTestUpdateWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.SponsoredTestUpdateWithWhereUniqueWithoutLabInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SponsoredTestUpdateWithoutLabInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutLabInputSchema) ]),
});

export default SponsoredTestUpdateWithWhereUniqueWithoutLabInputSchema;
