import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUpsertWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUpsertWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';
import { OrganizationUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema';

export const OrganizationUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema: z.ZodType<Prisma.OrganizationUpdateOneWithoutOrganizationFavoriteTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema).optional(),
  upsert: z.lazy(() => OrganizationUpsertWithoutOrganizationFavoriteTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => OrganizationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrganizationUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema) ]).optional(),
});

export default OrganizationUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema;
