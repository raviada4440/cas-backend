import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestCreateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema } from './ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema } from './ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestScalarWhereInputSchema } from './ProviderFavoriteTestScalarWhereInputSchema';

export const ProviderFavoriteTestUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUpdateManyWithoutTestCatalogNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProviderFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProviderFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProviderFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema), z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema).array() ]).optional(),
});

export default ProviderFavoriteTestUpdateManyWithoutTestCatalogNestedInputSchema;
