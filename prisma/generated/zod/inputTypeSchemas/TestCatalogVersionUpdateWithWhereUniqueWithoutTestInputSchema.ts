import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateWithoutTestInputSchema } from './TestCatalogVersionUpdateWithoutTestInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutTestInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutTestInputSchema';

export const TestCatalogVersionUpdateWithWhereUniqueWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateWithWhereUniqueWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutTestInputSchema) ]),
});

export default TestCatalogVersionUpdateWithWhereUniqueWithoutTestInputSchema;
