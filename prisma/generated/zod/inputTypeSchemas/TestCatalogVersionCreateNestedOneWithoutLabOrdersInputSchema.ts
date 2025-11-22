import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionCreateWithoutLabOrdersInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema } from './TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema } from './TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutLabOrdersInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutLabOrdersInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutLabOrdersInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutLabOrdersInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutLabOrdersInputSchema;
