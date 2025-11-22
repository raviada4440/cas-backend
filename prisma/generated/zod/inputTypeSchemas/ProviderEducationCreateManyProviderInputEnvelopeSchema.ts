import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderEducationCreateManyProviderInputSchema } from './ProviderEducationCreateManyProviderInputSchema';

export const ProviderEducationCreateManyProviderInputEnvelopeSchema: z.ZodType<Prisma.ProviderEducationCreateManyProviderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProviderEducationCreateManyProviderInputSchema), z.lazy(() => ProviderEducationCreateManyProviderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProviderEducationCreateManyProviderInputEnvelopeSchema;
