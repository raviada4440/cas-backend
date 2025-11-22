import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';
import { SponsoredProgramUpdateWithoutSponsorInputSchema } from './SponsoredProgramUpdateWithoutSponsorInputSchema';
import { SponsoredProgramUncheckedUpdateWithoutSponsorInputSchema } from './SponsoredProgramUncheckedUpdateWithoutSponsorInputSchema';
import { SponsoredProgramCreateWithoutSponsorInputSchema } from './SponsoredProgramCreateWithoutSponsorInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsorInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsorInputSchema';

export const SponsoredProgramUpsertWithWhereUniqueWithoutSponsorInputSchema: z.ZodType<Prisma.SponsoredProgramUpsertWithWhereUniqueWithoutSponsorInput> = z.strictObject({
  where: z.lazy(() => SponsoredProgramWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SponsoredProgramUpdateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUncheckedUpdateWithoutSponsorInputSchema) ]),
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsorInputSchema) ]),
});

export default SponsoredProgramUpsertWithWhereUniqueWithoutSponsorInputSchema;
