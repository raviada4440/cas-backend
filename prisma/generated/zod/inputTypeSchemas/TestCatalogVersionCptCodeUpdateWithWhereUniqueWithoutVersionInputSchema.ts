import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from './TestCatalogVersionCptCodeWhereUniqueInputSchema';
import { TestCatalogVersionCptCodeUpdateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUpdateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUncheckedUpdateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUncheckedUpdateWithoutVersionInputSchema';

export const TestCatalogVersionCptCodeUpdateWithWhereUniqueWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeUpdateWithWhereUniqueWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionCptCodeUpdateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUncheckedUpdateWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionCptCodeUpdateWithWhereUniqueWithoutVersionInputSchema;
