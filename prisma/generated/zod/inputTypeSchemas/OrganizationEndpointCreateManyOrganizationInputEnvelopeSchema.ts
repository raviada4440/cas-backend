import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointCreateManyOrganizationInputSchema } from './OrganizationEndpointCreateManyOrganizationInputSchema';

export const OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema: z.ZodType<Prisma.OrganizationEndpointCreateManyOrganizationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => OrganizationEndpointCreateManyOrganizationInputSchema), z.lazy(() => OrganizationEndpointCreateManyOrganizationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema;
