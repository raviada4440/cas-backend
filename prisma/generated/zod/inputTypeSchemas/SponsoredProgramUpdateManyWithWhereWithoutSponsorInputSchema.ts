import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramScalarWhereInputSchema } from './SponsoredProgramScalarWhereInputSchema';
import { SponsoredProgramUpdateManyMutationInputSchema } from './SponsoredProgramUpdateManyMutationInputSchema';
import { SponsoredProgramUncheckedUpdateManyWithoutSponsorInputSchema } from './SponsoredProgramUncheckedUpdateManyWithoutSponsorInputSchema';

export const SponsoredProgramUpdateManyWithWhereWithoutSponsorInputSchema: z.ZodType<Prisma.SponsoredProgramUpdateManyWithWhereWithoutSponsorInput> = z.strictObject({
  where: z.lazy(() => SponsoredProgramScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SponsoredProgramUpdateManyMutationInputSchema), z.lazy(() => SponsoredProgramUncheckedUpdateManyWithoutSponsorInputSchema) ]),
});

export default SponsoredProgramUpdateManyWithWhereWithoutSponsorInputSchema;
