import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema } from './OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestScalarWhereInputSchema } from './OrganizationFavoriteTestScalarWhereInputSchema';

export const OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrganizationFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrganizationFavoriteTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema), z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema), z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema).array() ]).optional(),
});

export default OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema;
