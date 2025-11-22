import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithoutSponsoredProgramInputSchema } from './SponsoredTestUpdateWithoutSponsoredProgramInputSchema';
import { SponsoredTestUncheckedUpdateWithoutSponsoredProgramInputSchema } from './SponsoredTestUncheckedUpdateWithoutSponsoredProgramInputSchema';

export const SponsoredTestUpdateWithWhereUniqueWithoutSponsoredProgramInputSchema: z.ZodType<Prisma.SponsoredTestUpdateWithWhereUniqueWithoutSponsoredProgramInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SponsoredTestUpdateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutSponsoredProgramInputSchema) ]),
});

export default SponsoredTestUpdateWithWhereUniqueWithoutSponsoredProgramInputSchema;
