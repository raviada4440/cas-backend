import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema } from './OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';

export const OrganizationFavoriteTestUncheckedCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUncheckedCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestCreateWithoutOrganizationInputSchema).array(), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizationFavoriteTestCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
});

export default OrganizationFavoriteTestUncheckedCreateNestedManyWithoutOrganizationInputSchema;
