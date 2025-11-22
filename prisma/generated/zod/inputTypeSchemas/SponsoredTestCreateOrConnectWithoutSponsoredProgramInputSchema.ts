import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestCreateWithoutSponsoredProgramInputSchema';
import { SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema';

export const SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema: z.ZodType<Prisma.SponsoredTestCreateOrConnectWithoutSponsoredProgramInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema) ]),
});

export default SponsoredTestCreateOrConnectWithoutSponsoredProgramInputSchema;
