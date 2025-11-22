import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';

export const OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]),
});

export default OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema;
