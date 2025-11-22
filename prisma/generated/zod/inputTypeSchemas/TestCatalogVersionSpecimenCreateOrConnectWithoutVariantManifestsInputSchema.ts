import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';
import { TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema';

export const TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema) ]),
});

export default TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema;
