import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointScalarWhereInputSchema } from './OrganizationEndpointScalarWhereInputSchema';
import { OrganizationEndpointUpdateManyMutationInputSchema } from './OrganizationEndpointUpdateManyMutationInputSchema';
import { OrganizationEndpointUncheckedUpdateManyWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedUpdateManyWithoutOrganizationInputSchema';

export const OrganizationEndpointUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationEndpointUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationEndpointScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrganizationEndpointUpdateManyMutationInputSchema), z.lazy(() => OrganizationEndpointUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default OrganizationEndpointUpdateManyWithWhereWithoutOrganizationInputSchema;
