import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincUpdateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUpdateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutVersionInputSchema;
