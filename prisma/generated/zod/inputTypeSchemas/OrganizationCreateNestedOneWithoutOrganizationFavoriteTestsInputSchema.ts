import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema;
