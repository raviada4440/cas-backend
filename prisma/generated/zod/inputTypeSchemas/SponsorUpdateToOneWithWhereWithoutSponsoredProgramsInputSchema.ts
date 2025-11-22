import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsorWhereInputSchema } from './SponsorWhereInputSchema';
import { SponsorUpdateWithoutSponsoredProgramsInputSchema } from './SponsorUpdateWithoutSponsoredProgramsInputSchema';
import { SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema } from './SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema';

export const SponsorUpdateToOneWithWhereWithoutSponsoredProgramsInputSchema: z.ZodType<Prisma.SponsorUpdateToOneWithWhereWithoutSponsoredProgramsInput> = z.strictObject({
  where: z.lazy(() => SponsorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SponsorUpdateWithoutSponsoredProgramsInputSchema), z.lazy(() => SponsorUncheckedUpdateWithoutSponsoredProgramsInputSchema) ]),
});

export default SponsorUpdateToOneWithWhereWithoutSponsoredProgramsInputSchema;
