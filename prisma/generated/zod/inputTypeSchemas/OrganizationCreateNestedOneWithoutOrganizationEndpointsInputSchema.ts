import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationCreateWithoutOrganizationEndpointsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema';
import { OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema } from './OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutOrganizationEndpointsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrganizationEndpointsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrganizationEndpointsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutOrganizationEndpointsInputSchema;
