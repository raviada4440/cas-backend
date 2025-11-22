import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationEndpointWhereUniqueInputSchema } from './OrganizationEndpointWhereUniqueInputSchema';
import { OrganizationEndpointUpdateWithoutOrganizationInputSchema } from './OrganizationEndpointUpdateWithoutOrganizationInputSchema';
import { OrganizationEndpointUncheckedUpdateWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedUpdateWithoutOrganizationInputSchema';
import { OrganizationEndpointCreateWithoutOrganizationInputSchema } from './OrganizationEndpointCreateWithoutOrganizationInputSchema';
import { OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema';

export const OrganizationEndpointUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationEndpointUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationEndpointWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrganizationEndpointUpdateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationEndpointCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationEndpointUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrganizationEndpointUpsertWithWhereUniqueWithoutOrganizationInputSchema;
