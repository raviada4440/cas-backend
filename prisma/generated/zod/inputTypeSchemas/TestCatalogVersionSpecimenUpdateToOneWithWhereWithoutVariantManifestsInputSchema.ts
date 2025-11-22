import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenWhereInputSchema } from './TestCatalogVersionSpecimenWhereInputSchema';
import { TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema';

export const TestCatalogVersionSpecimenUpdateToOneWithWhereWithoutVariantManifestsInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpdateToOneWithWhereWithoutVariantManifestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedUpdateWithoutVariantManifestsInputSchema) ]),
});

export default TestCatalogVersionSpecimenUpdateToOneWithWhereWithoutVariantManifestsInputSchema;
