import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema } from './OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';

export const OrganizationFavoriteTestCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateNestedManyWithoutTestCatalogInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
});

export default OrganizationFavoriteTestCreateNestedManyWithoutTestCatalogInputSchema;
