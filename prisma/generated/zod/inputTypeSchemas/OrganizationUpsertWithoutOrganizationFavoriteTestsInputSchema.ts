import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutOrganizationFavoriteTestsInputSchema;
