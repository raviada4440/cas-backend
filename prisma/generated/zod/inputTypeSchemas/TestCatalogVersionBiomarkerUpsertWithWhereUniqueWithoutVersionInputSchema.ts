import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutVersionInputSchema;
