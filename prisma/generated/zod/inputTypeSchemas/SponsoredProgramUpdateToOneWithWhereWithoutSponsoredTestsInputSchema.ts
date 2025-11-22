import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramWhereInputSchema } from './SponsoredProgramWhereInputSchema';
import { SponsoredProgramUpdateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUpdateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema';

export const SponsoredProgramUpdateToOneWithWhereWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.SponsoredProgramUpdateToOneWithWhereWithoutSponsoredTestsInput> = z.strictObject({
  where: z.lazy(() => SponsoredProgramWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SponsoredProgramUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema) ]),
});

export default SponsoredProgramUpdateToOneWithWhereWithoutSponsoredTestsInputSchema;
