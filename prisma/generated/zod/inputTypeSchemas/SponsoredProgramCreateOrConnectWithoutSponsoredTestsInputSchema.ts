import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramWhereUniqueInputSchema } from './SponsoredProgramWhereUniqueInputSchema';
import { SponsoredProgramCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramCreateWithoutSponsoredTestsInputSchema';
import { SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema } from './SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema';

export const SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.SponsoredProgramCreateOrConnectWithoutSponsoredTestsInput> = z.strictObject({
  where: z.lazy(() => SponsoredProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SponsoredProgramCreateWithoutSponsoredTestsInputSchema), z.lazy(() => SponsoredProgramUncheckedCreateWithoutSponsoredTestsInputSchema) ]),
});

export default SponsoredProgramCreateOrConnectWithoutSponsoredTestsInputSchema;
