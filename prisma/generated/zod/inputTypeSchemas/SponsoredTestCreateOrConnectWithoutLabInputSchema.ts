import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestCreateWithoutLabInputSchema } from './SponsoredTestCreateWithoutLabInputSchema';
import { SponsoredTestUncheckedCreateWithoutLabInputSchema } from './SponsoredTestUncheckedCreateWithoutLabInputSchema';

export const SponsoredTestCreateOrConnectWithoutLabInputSchema: z.ZodType<Prisma.SponsoredTestCreateOrConnectWithoutLabInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutLabInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutLabInputSchema) ]),
});

export default SponsoredTestCreateOrConnectWithoutLabInputSchema;
