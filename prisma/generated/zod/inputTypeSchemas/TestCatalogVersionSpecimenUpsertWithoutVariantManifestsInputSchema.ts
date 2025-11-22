import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenWhereInputSchema } from './TestCatalogVersionSpecimenWhereInputSchema';

export const TestCatalogVersionSpecimenUpsertWithoutVariantManifestsInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpsertWithoutVariantManifestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema).optional(),
});

export default TestCatalogVersionSpecimenUpsertWithoutVariantManifestsInputSchema;
