import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema } from './TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';

export const TestCatalogVersionSpecimenCreateNestedOneWithoutVariantManifestsInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCreateNestedOneWithoutVariantManifestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVariantManifestsInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVariantManifestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionSpecimenCreateOrConnectWithoutVariantManifestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionSpecimenCreateNestedOneWithoutVariantManifestsInputSchema;
