import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredProgramCreateManySponsorInputSchema } from './SponsoredProgramCreateManySponsorInputSchema';

export const SponsoredProgramCreateManySponsorInputEnvelopeSchema: z.ZodType<Prisma.SponsoredProgramCreateManySponsorInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SponsoredProgramCreateManySponsorInputSchema), z.lazy(() => SponsoredProgramCreateManySponsorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SponsoredProgramCreateManySponsorInputEnvelopeSchema;
