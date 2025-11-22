import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutSpecimensInputSchema } from './TestCatalogVersionCreateWithoutSpecimensInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema } from './TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutSpecimensInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutSpecimensInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutSpecimensInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutSpecimensInputSchema;
