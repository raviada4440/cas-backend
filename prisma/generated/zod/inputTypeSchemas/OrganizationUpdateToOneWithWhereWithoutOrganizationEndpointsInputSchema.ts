import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutOrganizationEndpointsInputSchema } from './OrganizationUpdateWithoutOrganizationEndpointsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema } from './OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutOrganizationEndpointsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrganizationEndpointsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutOrganizationEndpointsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrganizationEndpointsInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutOrganizationEndpointsInputSchema;
