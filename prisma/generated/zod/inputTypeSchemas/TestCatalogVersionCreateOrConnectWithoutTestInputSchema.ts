import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionCreateWithoutTestInputSchema } from './TestCatalogVersionCreateWithoutTestInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutTestInputSchema } from './TestCatalogVersionUncheckedCreateWithoutTestInputSchema';

export const TestCatalogVersionCreateOrConnectWithoutTestInputSchema: z.ZodType<Prisma.TestCatalogVersionCreateOrConnectWithoutTestInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutTestInputSchema) ]),
});

export default TestCatalogVersionCreateOrConnectWithoutTestInputSchema;
