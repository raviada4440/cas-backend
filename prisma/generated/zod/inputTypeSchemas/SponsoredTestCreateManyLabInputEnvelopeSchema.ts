import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateManyLabInputSchema } from './SponsoredTestCreateManyLabInputSchema';

export const SponsoredTestCreateManyLabInputEnvelopeSchema: z.ZodType<Prisma.SponsoredTestCreateManyLabInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SponsoredTestCreateManyLabInputSchema), z.lazy(() => SponsoredTestCreateManyLabInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SponsoredTestCreateManyLabInputEnvelopeSchema;
