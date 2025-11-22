import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutResultLoincsInputSchema } from './TestCatalogVersionUpdateWithoutResultLoincsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutResultLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutResultLoincsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutResultLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutResultLoincsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutResultLoincsInputSchema;
