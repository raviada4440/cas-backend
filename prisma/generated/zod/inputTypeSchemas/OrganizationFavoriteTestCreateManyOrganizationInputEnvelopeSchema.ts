import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestCreateManyOrganizationInputSchema } from './OrganizationFavoriteTestCreateManyOrganizationInputSchema';

export const OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OrganizationFavoriteTestCreateManyOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema;
