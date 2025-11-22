import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutSpecimensInputSchema } from './TestCatalogVersionUpdateWithoutSpecimensInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutSpecimensInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutSpecimensInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutSpecimensInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutSpecimensInputSchema;
