import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithoutTestCatalogInputSchema } from './SponsoredTestUpdateWithoutTestCatalogInputSchema';
import { SponsoredTestUncheckedUpdateWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedUpdateWithoutTestCatalogInputSchema';
import { SponsoredTestCreateWithoutTestCatalogInputSchema } from './SponsoredTestCreateWithoutTestCatalogInputSchema';
import { SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema';

export const SponsoredTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.SponsoredTestUpsertWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => SponsoredTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SponsoredTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default SponsoredTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema;
