import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithoutSponsoredProgramInputSchema } from './SponsoredTestUpdateWithoutSponsoredProgramInputSchema';
import { SponsoredTestUncheckedUpdateWithoutSponsoredProgramInputSchema } from './SponsoredTestUncheckedUpdateWithoutSponsoredProgramInputSchema';
import { SponsoredTestCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestCreateWithoutSponsoredProgramInputSchema';
import { SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema } from './SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema';

export const SponsoredTestUpsertWithWhereUniqueWithoutSponsoredProgramInputSchema: z.ZodType<Prisma.SponsoredTestUpsertWithWhereUniqueWithoutSponsoredProgramInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SponsoredTestUpdateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutSponsoredProgramInputSchema) ]),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutSponsoredProgramInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutSponsoredProgramInputSchema) ]),
});

export default SponsoredTestUpsertWithWhereUniqueWithoutSponsoredProgramInputSchema;
