import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogVersionUpdateWithoutLabOrdersInputSchema } from './TestCatalogVersionUpdateWithoutLabOrdersInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema';

export const TestCatalogVersionUpdateToOneWithWhereWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogVersionUpdateToOneWithWhereWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema) ]),
});

export default TestCatalogVersionUpdateToOneWithWhereWithoutLabOrdersInputSchema;
