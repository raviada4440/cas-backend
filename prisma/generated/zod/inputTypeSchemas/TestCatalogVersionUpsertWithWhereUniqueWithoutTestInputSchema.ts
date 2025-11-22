import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateWithoutTestInputSchema } from './TestCatalogVersionUpdateWithoutTestInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutTestInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutTestInputSchema';
import { TestCatalogVersionCreateWithoutTestInputSchema } from './TestCatalogVersionCreateWithoutTestInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutTestInputSchema } from './TestCatalogVersionUncheckedCreateWithoutTestInputSchema';

export const TestCatalogVersionUpsertWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutTestInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutTestInputSchema) ]),
});

export default TestCatalogVersionUpsertWithWhereUniqueWithoutTestInputSchema;
