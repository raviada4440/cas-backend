import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutResultLoincsInputSchema } from './TestCatalogVersionUpdateWithoutResultLoincsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema';
import { TestCatalogVersionCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionCreateWithoutResultLoincsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutResultLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutResultLoincsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutResultLoincsInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutResultLoincsInputSchema;
