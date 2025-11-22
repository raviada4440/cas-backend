import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutSpecimensInputSchema } from './TestCatalogVersionUpdateWithoutSpecimensInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema';
import { TestCatalogVersionCreateWithoutSpecimensInputSchema } from './TestCatalogVersionCreateWithoutSpecimensInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema } from './TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutSpecimensInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutSpecimensInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutSpecimensInputSchema;
