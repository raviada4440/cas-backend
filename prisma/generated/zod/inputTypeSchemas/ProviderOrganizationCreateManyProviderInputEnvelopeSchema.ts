import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationCreateManyProviderInputSchema } from './ProviderOrganizationCreateManyProviderInputSchema';

export const ProviderOrganizationCreateManyProviderInputEnvelopeSchema: z.ZodType<Prisma.ProviderOrganizationCreateManyProviderInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProviderOrganizationCreateManyProviderInputSchema), z.lazy(() => ProviderOrganizationCreateManyProviderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProviderOrganizationCreateManyProviderInputEnvelopeSchema;
