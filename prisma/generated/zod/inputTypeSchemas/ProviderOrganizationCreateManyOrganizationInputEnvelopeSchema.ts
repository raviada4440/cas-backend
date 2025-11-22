import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationCreateManyOrganizationInputSchema } from './ProviderOrganizationCreateManyOrganizationInputSchema';

export const ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.ProviderOrganizationCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProviderOrganizationCreateManyOrganizationInputSchema), z.lazy(() => ProviderOrganizationCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProviderOrganizationCreateManyOrganizationInputEnvelopeSchema;
