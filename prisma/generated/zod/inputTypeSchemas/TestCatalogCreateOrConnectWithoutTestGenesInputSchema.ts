import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutTestGenesInputSchema } from './TestCatalogCreateWithoutTestGenesInputSchema';
import { TestCatalogUncheckedCreateWithoutTestGenesInputSchema } from './TestCatalogUncheckedCreateWithoutTestGenesInputSchema';

export const TestCatalogCreateOrConnectWithoutTestGenesInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutTestGenesInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestGenesInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutTestGenesInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutTestGenesInputSchema;
