import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramUpdateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUpdateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramWhereInputSchema } from './SponsoredProgramWhereInputSchema';

export const SponsoredProgramUpsertWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.SponsoredProgramUpsertWithoutSponsoredTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => SponsoredProgramUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUncheckedUpdateWithoutSponsoredTestsInputSchema) ]),
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema) ]),
  where: z.lazy(() => SponsoredProgramWhereInputSchema).optional(),
});

export default SponsoredProgramUpsertWithoutSponsoredTestsInputSchema;
