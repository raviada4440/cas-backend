import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutConsentsInputSchema } from './TestCatalogVersionUpdateWithoutConsentsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutConsentsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutConsentsInputSchema;
