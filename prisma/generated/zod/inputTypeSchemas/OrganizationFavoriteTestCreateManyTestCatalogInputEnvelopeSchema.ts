import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestCreateManyTestCatalogInputSchema } from './OrganizationFavoriteTestCreateManyTestCatalogInputSchema';

export const OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateManyTestCatalogInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OrganizationFavoriteTestCreateManyTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema;
