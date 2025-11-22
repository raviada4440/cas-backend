import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointWhereUniqueInputSchema } from './OrganizationEndpointWhereUniqueInputSchema';
import { OrganizationEndpointCreateWithoutOrganizationInputSchema } from './OrganizationEndpointCreateWithoutOrganizationInputSchema';
import { OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema';

export const OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationEndpointCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationEndpointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationEndpointCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema;
