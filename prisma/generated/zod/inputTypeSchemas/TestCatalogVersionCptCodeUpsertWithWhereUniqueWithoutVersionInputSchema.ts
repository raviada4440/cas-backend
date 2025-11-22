import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from './TestCatalogVersionCptCodeWhereUniqueInputSchema';
import { TestCatalogVersionCptCodeUpdateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUpdateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUncheckedUpdateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeCreateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema';

export const TestCatalogVersionCptCodeUpsertWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeUpsertWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionCptCodeUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUncheckedUpdateWithoutVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCptCodeCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionCptCodeUpsertWithWhereUniqueWithoutVersionInputSchema;
