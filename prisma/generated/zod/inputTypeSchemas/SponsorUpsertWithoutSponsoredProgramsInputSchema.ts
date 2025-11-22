import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsorUpdateWithoutSponsoredProgramsInputSchema } from './SponsorUpdateWithoutSponsoredProgramsInputSchema';
import { SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema } from './SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema';
import { SponsorCreateWithoutSponsoredProgramsInputSchema } from './SponsorCreateWithoutSponsoredProgramsInputSchema';
import { SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema } from './SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema';
import { SponsorWhereInputSchema } from './SponsorWhereInputSchema';

export const SponsorUpsertWithoutSponsoredProgramsInputSchema: z.ZodType<Prisma.SponsorUpsertWithoutSponsoredProgramsInput> = z.strictObject({
  update: z.union([ z.lazy(() => SponsorUpdateWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema) ]),
  create: z.union([ z.lazy(() => SponsorCreateWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUncheckedCreateWithoutSponsoredProgramsInputSchema) ]),
  where: z.lazy(() => SponsorWhereInputSchema).optional(),
});

export default SponsorUpsertWithoutSponsoredProgramsInputSchema;
