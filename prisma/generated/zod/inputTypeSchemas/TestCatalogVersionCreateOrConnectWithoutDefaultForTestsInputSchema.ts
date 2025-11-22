import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionCreateWithoutDefaultForTestsInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema } from './TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutDefaultForTestsInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutDefaultForTestsInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutDefaultForTestsInputSchema;
