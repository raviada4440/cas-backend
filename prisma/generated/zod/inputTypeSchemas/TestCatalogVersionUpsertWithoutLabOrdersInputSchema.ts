import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionUpdateWithoutLabOrdersInputSchema } from './TestCatalogVersionUpdateWithoutLabOrdersInputSchema';
import { TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema } from './TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema';
import { TestCatalogVersionCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionCreateWithoutLabOrdersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionUpsertWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogVersionUpsertWithoutLabOrdersInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUncheckedUpdateWithoutLabOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema) ]),
  where: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionUpsertWithoutLabOrdersInputSchema;
