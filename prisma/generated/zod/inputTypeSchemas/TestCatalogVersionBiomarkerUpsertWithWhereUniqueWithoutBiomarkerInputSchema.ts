import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerUpdateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUpdateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';

export const TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema) ]),
});

export default TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema;
