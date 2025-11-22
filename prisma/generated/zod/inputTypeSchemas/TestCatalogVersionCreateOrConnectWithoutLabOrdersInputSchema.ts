import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionCreateWithoutLabOrdersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutLabOrdersInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema;
