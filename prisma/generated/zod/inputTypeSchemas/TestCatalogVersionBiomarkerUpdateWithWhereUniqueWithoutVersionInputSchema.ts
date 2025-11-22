import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutVersionInputSchema;
