import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';
import { TestCatalogVersionSpecimenUpdateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUpdateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionSpecimenUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionSpecimenUpsertWithWhereUniqueWithoutVersionInputSchema;
