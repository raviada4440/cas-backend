import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestCreateManyProviderInputSchema } from './ProviderFavoriteTestCreateManyProviderInputSchema';

export const ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateManyProviderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProviderFavoriteTestCreateManyProviderInputSchema), z.lazy(() => ProviderFavoriteTestCreateManyProviderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProviderFavoriteTestCreateManyProviderInputEnvelopeSchema;
