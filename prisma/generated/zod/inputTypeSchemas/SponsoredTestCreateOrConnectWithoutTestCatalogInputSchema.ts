import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestCreateWithoutTestCatalogInputSchema } from './SponsoredTestCreateWithoutTestCatalogInputSchema';
import { SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema';

export const SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.SponsoredTestCreateOrConnectWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema;
