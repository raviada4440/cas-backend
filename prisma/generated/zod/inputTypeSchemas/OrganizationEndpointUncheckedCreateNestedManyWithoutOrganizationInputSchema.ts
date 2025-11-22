import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointCreateWithoutOrganizationInputSchema } from './OrganizationEndpointCreateWithoutOrganizationInputSchema';
import { OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema';
import { OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema } from './OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema';
import { OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema } from './OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema';
import { OrganizationEndpointWhereUniqueInputSchema } from './OrganizationEndpointWhereUniqueInputSchema';

export const OrganizationEndpointUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationEndpointUncheckedCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationEndpointCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizationEndpointCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganizationEndpointWhereUniqueInputSchema), z.lazy(() => OrganizationEndpointWhereUniqueInputSchema).array() ]).optional(),
});

export default OrganizationEndpointUncheckedCreateNestedManyWithoutOrganizationInputSchema;
