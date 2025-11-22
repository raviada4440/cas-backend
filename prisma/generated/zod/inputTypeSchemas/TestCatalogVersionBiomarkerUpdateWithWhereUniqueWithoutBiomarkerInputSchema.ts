import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerUpdateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUpdateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema';

export const TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema) ]),
});

export default TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema;
