import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';
import { TestCatalogVersionSpecimenUpdateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUpdateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogVersionSpecimenUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionSpecimenUpdateWithWhereUniqueWithoutVersionInputSchema;
