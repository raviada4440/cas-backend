import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsorWhereUniqueInputSchema } from './SponsorWhereUniqueInputSchema';
import { SponsorCreateWithoutSponsoredProgramsInputSchema } from './SponsorCreateWithoutSponsoredProgramsInputSchema';
import { SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema } from './SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema';

export const SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema: z.ZodType<Prisma.SponsorCreateOrConnectWithoutSponsoredProgramsInput> = z.strictObject({
  where: z.lazy(() => SponsorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SponsorCreateWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema) ]),
});

export default SponsorCreateOrConnectWithoutSponsoredProgramsInputSchema;
