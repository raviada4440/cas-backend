import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointWhereUniqueInputSchema } from './OrganizationEndpointWhereUniqueInputSchema';
import { OrganizationEndpointUpdateWithoutOrganizationInputSchema } from './OrganizationEndpointUpdateWithoutOrganizationInputSchema';
import { OrganizationEndpointUncheckedUpdateWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedUpdateWithoutOrganizationInputSchema';

export const OrganizationEndpointUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationEndpointUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationEndpointWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrganizationEndpointUpdateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default OrganizationEndpointUpdateWithWhereUniqueWithoutOrganizationInputSchema;
