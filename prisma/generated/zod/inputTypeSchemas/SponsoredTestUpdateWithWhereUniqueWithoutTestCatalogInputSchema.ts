import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithoutTestCatalogInputSchema } from './SponsoredTestUpdateWithoutTestCatalogInputSchema';
import { SponsoredTestUncheckedUpdateWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedUpdateWithoutTestCatalogInputSchema';

export const SponsoredTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.SponsoredTestUpdateWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SponsoredTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
});

export default SponsoredTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema;
