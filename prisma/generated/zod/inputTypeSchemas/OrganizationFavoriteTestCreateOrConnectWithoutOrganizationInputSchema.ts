import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema';

export const OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema;
