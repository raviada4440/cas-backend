import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutOrganizationEndpointsInputSchema } from './OrganizationUpdateWithoutOrganizationEndpointsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema } from './OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema';
import { OrganizationCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationCreateWithoutOrganizationEndpointsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutOrganizationEndpointsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutOrganizationEndpointsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationEndpointsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutOrganizationEndpointsInputSchema;
