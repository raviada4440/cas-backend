import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutConsentsInputSchema } from './TestCatalogVersionUpdateWithoutConsentsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema';
import { TestCatalogVersionCreateWithoutConsentsInputSchema } from './TestCatalogVersionCreateWithoutConsentsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutConsentsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutConsentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutConsentsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutConsentsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutConsentsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutConsentsInputSchema;
