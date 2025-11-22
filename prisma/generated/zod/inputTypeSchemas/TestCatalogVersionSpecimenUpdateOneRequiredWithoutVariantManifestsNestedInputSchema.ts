import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUpsertWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUpsertWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';
import { TestCatalogVersionSpecimenUpdateToOneWithWhereWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUpdateToOneWithWhereWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema';

export const TestCatalogVersionSpecimenUpdateOneRequiredWithoutVariantManifestsNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpdateOneRequiredWithoutVariantManifestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogVersionSpecimenUpsertWithoutVariantManifestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateToOneWithWhereWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema) ]).optional(),
});

export default TestCatalogVersionSpecimenUpdateOneRequiredWithoutVariantManifestsNestedInputSchema;
