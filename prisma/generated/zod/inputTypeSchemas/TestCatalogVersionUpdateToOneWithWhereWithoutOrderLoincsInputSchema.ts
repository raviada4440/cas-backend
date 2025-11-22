import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUpdateWithoutOrderLoincsInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutOrderLoincsInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutOrderLoincsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutOrderLoincsInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutOrderLoincsInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutOrderLoincsInputSchema;
