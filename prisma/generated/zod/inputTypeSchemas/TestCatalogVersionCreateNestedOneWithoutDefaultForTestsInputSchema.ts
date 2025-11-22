import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionCreateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema } from './TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';

export const TestCatalogVersionCreateNestedOneWithoutDefaultForTestsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateNestedOneWithoutDefaultForTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).optional(),
});

export default TestCatalogVersionCreateNestedOneWithoutDefaultForTestsInputSchema;
