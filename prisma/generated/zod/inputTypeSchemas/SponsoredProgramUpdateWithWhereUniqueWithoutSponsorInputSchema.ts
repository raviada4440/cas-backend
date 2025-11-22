import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';
import { SponsoredProgramUpdateWithoutSponsorInputSchema } from './SponsoredProgramUpdateWithoutSponsorInputSchema';
import { SponsoredProgramUncheckedUpdateWithoutSponsorInputSchema } from './SponsoredProgramUncheckedUpdateWithoutSponsorInputSchema';

export const SponsoredProgramUpdateWithWhereUniqueWithoutSponsorInputSchema: z.ZodType<Prisma.SponsoredProgramUpdateWithWhereUniqueWithoutSponsorInput> = z.strictObject({
  where: z.lazy(() => SponsoredProgramWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SponsoredProgramUpdateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUncheckedUpdateWithoutSponsorInputSchema) ]),
});

export default SponsoredProgramUpdateWithWhereUniqueWithoutSponsorInputSchema;
