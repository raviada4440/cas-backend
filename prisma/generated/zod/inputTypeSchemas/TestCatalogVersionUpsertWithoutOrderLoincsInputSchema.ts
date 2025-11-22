import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUpdateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionCreateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutOrderLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutOrderLoincsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutOrderLoincsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutOrderLoincsInputSchema;
