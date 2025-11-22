import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateManyTestCatalogInputSchema } from './SponsoredTestCreateManyTestCatalogInputSchema';

export const SponsoredTestCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.SponsoredTestCreateManyTestCatalogInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SponsoredTestCreateManyTestCatalogInputSchema), z.lazy(() => SponsoredTestCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SponsoredTestCreateManyTestCatalogInputEnvelopeSchema;
