import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationCreateWithoutOrganizationEndpointsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema';

export const OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrganizationEndpointsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema;
