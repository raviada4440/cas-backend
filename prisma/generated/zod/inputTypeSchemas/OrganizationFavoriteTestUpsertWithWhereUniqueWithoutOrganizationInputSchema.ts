import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestUpdateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUpdateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedUpdateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema';

export const OrganizationFavoriteTestUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default OrganizationFavoriteTestUpsertWithWhereUniqueWithoutOrganizationInputSchema;
