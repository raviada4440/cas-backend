import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';
import { SponsoredProgramCreateWithoutSponsorInputSchema } from './SponsoredProgramCreateWithoutSponsorInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsorInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsorInputSchema';

export const SponsoredProgramCreateOrConnectWithoutSponsorInputSchema: z.ZodType<Prisma.SponsoredProgramCreateOrConnectWithoutSponsorInput> = z.strictObject({
  where: z.lazy(() => SponsoredProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsorInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsorInputSchema) ]),
});

export default SponsoredProgramCreateOrConnectWithoutSponsorInputSchema;
