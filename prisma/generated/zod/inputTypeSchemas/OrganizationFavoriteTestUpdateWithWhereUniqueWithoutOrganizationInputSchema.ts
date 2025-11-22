import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestUpdateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUpdateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedUpdateWithoutOrganizationInputSchema';

export const OrganizationFavoriteTestUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default OrganizationFavoriteTestUpdateWithWhereUniqueWithoutOrganizationInputSchema;
