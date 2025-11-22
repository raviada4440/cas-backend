import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateManySponsoredProgramInputSchema } from './SponsoredTestCreateManySponsoredProgramInputSchema';

export const SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema: z.ZodType<Prisma.SponsoredTestCreateManySponsoredProgramInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SponsoredTestCreateManySponsoredProgramInputSchema), z.lazy(() => SponsoredTestCreateManySponsoredProgramInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SponsoredTestCreateManySponsoredProgramInputEnvelopeSchema;
