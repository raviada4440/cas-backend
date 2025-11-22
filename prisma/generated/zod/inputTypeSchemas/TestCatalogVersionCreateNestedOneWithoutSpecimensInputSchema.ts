import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutSpecimensInputSchema } from './TestCatalogVersionCreateWithoutSpecimensInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema } from './TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema } from './TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutSpecimensInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutSpecimensInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutSpecimensInputSchema;
