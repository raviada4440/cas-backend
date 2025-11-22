import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SponsoredTestCreateWithoutTestCatalogInputSchema } from './SponsoredTestCreateWithoutTestCatalogInputSchema';
import { SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema } from './SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema';
import { SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema } from './SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema';
import { SponsoredTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema } from './SponsoredTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema';
import { SponsoredTestCreateManyTestCatalogInputEnvelopeSchema } from './SponsoredTestCreateManyTestCatalogInputEnvelopeSchema';
import { SponsoredTestWhereUniqueInputSchema } from './SponsoredTestWhereUniqueInputSchema';
import { SponsoredTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema } from './SponsoredTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema';
import { SponsoredTestUpdateManyWithWhereWithoutTestCatalogInputSchema } from './SponsoredTestUpdateManyWithWhereWithoutTestCatalogInputSchema';
import { SponsoredTestScalarWhereInputSchema } from './SponsoredTestScalarWhereInputSchema';

export const SponsoredTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.SponsoredTestUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SponsoredTestCreateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SponsoredTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SponsoredTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SponsoredTestWhereUniqueInputSchema), z.lazy(() => SponsoredTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SponsoredTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SponsoredTestUpdateManyWithWhereWithoutTestCatalogInputSchema), z.lazy(() => SponsoredTestUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SponsoredTestScalarWhereInputSchema), z.lazy(() => SponsoredTestScalarWhereInputSchema).array() ]).optional(),
});

export default SponsoredTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema;
